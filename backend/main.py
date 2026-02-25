from fastapi import FastAPI, UploadFile, File, Form, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.dialects.postgresql import insert
import os
import re

from database import SessionLocal, engine, Base
from models import Recording, Speaker, Conversation
from supabase_client import supabase
from sqlalchemy.dialects.postgresql import insert as pg_insert

app = FastAPI()

# Create tables
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://cliniq-flow.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

UPLOAD_FOLDER = "local_backup"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload/")
async def upload_audio(
    speaker_id: str = Form(...),
    role: str = Form(...),
    language: str = Form(...),
    sentence_id: int = Form(...),
    sentence_text: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    # 1. Validation
    language = language.lower()
    role = role.lower()

    if not re.fullmatch(r"SPK\d{3}", speaker_id):
        raise HTTPException(
            status_code=400,
            detail="Speaker ID must be in format SPK001, SPK002, etc."
        )

    allowed_languages = ["english", "yoruba", "pidgin"]
    allowed_roles = ["doctor", "patient"]

    if language not in allowed_languages or role not in allowed_roles:
        raise HTTPException(status_code=400, detail="Invalid language or role selected")

    # 2. Process File
    contents = await file.read()
    
    # Path format for Supabase
    supabase_filename = f"{role}/{language}/{speaker_id}/{speaker_id}_{sentence_id}.wav"

    # Make sure "upsert" is a STRING "true", not a boolean True
    file_options = {"content-type": "audio/wav", "upsert": "true"}

    res = supabase.storage.from_("audio-recordings").upload(
        path=supabase_filename,
        file=contents,
        file_options=file_options
    )
    # Then get the URL
    public_url = supabase.storage.from_("audio-recordings").get_public_url(supabase_filename)


    # 4. Save local backup
    local_path = os.path.join(UPLOAD_FOLDER, f"{speaker_id}_{sentence_id}.wav")
    with open(local_path, "wb") as f:
        f.write(contents)


    # 5. Ensure Speaker exists in DB
    existing_speaker = db.query(Speaker).filter(Speaker.speaker_id == speaker_id).first()

    if not existing_speaker:
        # Now we are providing all 3 required fields: id, role, and language
        new_speaker = Speaker(
            speaker_id=speaker_id, 
            role=role, 
            language=language
        )
        db.add(new_speaker)
        db.commit()
        db.refresh(new_speaker) # Optional: gets the ID back from the DB

    # 6. UPSERT Recording (Handles updates if same speaker records same sentence again)
    stmt = insert(Recording).values(
        speaker_id=speaker_id,
        sentence_id=sentence_id,
        sentence_text=sentence_text,
        file_path=public_url, # Using the Supabase URL
        role=role,
        language=language
    )

    stmt = stmt.on_conflict_do_update(
        index_elements=["speaker_id", "sentence_id", "language", "role"],
        set_={
            "sentence_text": sentence_text,
            "file_path": public_url,
        },
    )

    db.execute(stmt)
    db.commit()

    return {"message": "Uploaded and saved successfully", "url": public_url}


@app.get("/progress/{speaker_id}")
def get_progress(
    speaker_id: str,
    language: str,
    role: str,
    db: Session = Depends(get_db)
):
    language = language.lower()
    role = role.lower()

    # Find the highest sentence_id for this specific speaker, language, and role
    last_record = (
        db.query(Recording)
        .filter(
            Recording.speaker_id == speaker_id,
            Recording.language == language,
            Recording.role == role
        )
        .order_by(Recording.sentence_id.desc())
        .first()
    )

    if last_record:
        return {"next_sentence": last_record.sentence_id + 1}

    return {"next_sentence": 1}

@app.post("/upload-conversation/")
async def upload_conversation(
    session_id: str = Form(...),
    speaker_id: str = Form(...),
    role: str = Form(...),
    language: str = Form(...),
    duration_seconds: int = Form(None),
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    try:
        file_content = await file.read()
        storage_path = f"conversations/{language.lower()}/{session_id}/{role.lower()}_{speaker_id}.wav"
        
        supabase.storage.from_("audio-recordings").upload(
            path=storage_path,
            file=file_content,
            file_options={"content-type": "audio/wav", "upsert": "true"}
        )
        
        public_url = f"{os.getenv('SUPABASE_URL')}/storage/v1/object/public/audio-recordings/{storage_path}"

        speaker_stmt = pg_insert(Speaker).values(
            speaker_id=speaker_id,
            role=role.lower(),
            language=language.lower()
        ).on_conflict_do_nothing(
            index_elements=["speaker_id"]
        )

        db.execute(speaker_stmt)

        # 2. Now run your existing conversation logic
        stmt = pg_insert(Conversation).values(
            session_id=session_id,
            speaker_id=speaker_id,
            role=role.lower(),
            language=language.lower(),
            duration_seconds=duration_seconds,
            file_path=public_url
        ).on_conflict_do_update(
            index_elements=["session_id", "speaker_id"],
            set_={
                "file_path": public_url,
                "duration_seconds": duration_seconds
            }
        )

        db.execute(stmt)
        db.commit()

        # stmt = insert(Conversation).values(
        #     session_id=session_id,
        #     speaker_id=speaker_id,
        #     role=role.lower(),
        #     language=language.lower(),
        #     duration_seconds=duration_seconds,
        #     file_path=public_url
        # ).on_conflict_do_update(
        #     index_elements=["session_id", "speaker_id"],
        #     set_={
        #         "file_path": public_url,
        #         "duration_seconds": duration_seconds
        #     }
        # )

        # db.execute(stmt)
        # db.commit()
        return {"status": "success", "url": public_url}

    except Exception as e:
        db.rollback()
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    

# @app.get("/download-dataset")
# def download_dataset():
#     if not os.path.exists("dataset"):
#         return {"error": "Dataset folder not found in disk"}

#     shutil.make_archive("dataset_backup", "zip", "dataset")
#     return FileResponse("dataset_backup.zip", media_type="application/zip", filename="dataset_backup.zip")