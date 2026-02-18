# from fastapi import FastAPI
# from routes.upload import router as upload_router

# app = FastAPI()

# app.include_router(upload_router)

# from fastapi import FastAPI, UploadFile, File, Form
# import os
# import csv
# from fastapi.middleware.cors import CORSMiddleware
# from database import engine
# from models import Base

# Base.metadata.create_all(bind=engine)


# app = FastAPI()

# DATASET_DIR = "dataset/english"
# METADATA_FILE = "dataset/metadata.csv"

# @app.post("/upload-audio/")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     file: UploadFile = File(...)
# ):
#     speaker_folder = os.path.join(DATASET_DIR, speaker_id)
#     os.makedirs(speaker_folder, exist_ok=True)

#     filename = f"ENG_{speaker_id}_{sentence_id:03}.wav"
#     file_path = os.path.join(speaker_folder, filename)

#     with open(file_path, "wb") as buffer:
#         buffer.write(await file.read())

#     file_exists = os.path.isfile(METADATA_FILE)

#     with open(METADATA_FILE, "a", newline="", encoding="utf-8") as csvfile:
#         writer = csv.writer(csvfile)
#         if not file_exists:
#             writer.writerow(["audio_path", "transcription", "language", "speaker_id"])
#         writer.writerow([file_path, sentence_text, "english", speaker_id])

#     return {"message": "Upload successful", "file": filename}



# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# from fastapi import FastAPI, UploadFile, File, Form
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy import create_engine, Column, Integer, String, Text
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
# import os
# import shutil

# # ============================
# # DATABASE CONFIG
# # ============================

# DATABASE_URL = "postgresql://postgres:password@localhost:5432/cliniqflow"

# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()


# # ============================
# # DATABASE MODEL
# # ============================

# class Recording(Base):
#     __tablename__ = "recordings"

#     id = Column(Integer, primary_key=True, index=True)
#     speaker_id = Column(String, index=True)
#     sentence_id = Column(Integer)
#     sentence_text = Column(Text)
#     language = Column(String, default="English")
#     file_path = Column(String)


# # Create tables
# Base.metadata.create_all(bind=engine)


# # ============================
# # FASTAPI APP
# # ============================

# app = FastAPI()

# # Allow frontend (Vercel / localhost)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # change to your domain in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # ============================
# # HELPERS
# # ============================

# DATASET_FOLDER = "dataset"


# def create_speaker_folder(language: str, speaker_id: str):
#     path = os.path.join(DATASET_FOLDER, language, speaker_id.lower())
#     os.makedirs(path, exist_ok=True)
#     return path


# # ============================
# # ROUTES
# # ============================

# @app.post("/upload-audio/")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     language: str = Form("English"),
#     file: UploadFile = File(...)
# ):
#     db = SessionLocal()

#     # Create folder structure
#     speaker_folder = create_speaker_folder(language, speaker_id)

#     file_name = f"{speaker_id.lower()}_{str(sentence_id).zfill(3)}.webm"
#     file_path = os.path.join(speaker_folder, file_name)

#     # Save audio file
#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     # Save to database
#     new_record = Recording(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         language=language,
#         file_path=file_path
#     )

#     db.add(new_record)
#     db.commit()
#     db.refresh(new_record)
#     db.close()

#     return {
#         "message": "Upload successful",
#         "sentence_id": sentence_id,
#         "file_path": file_path
#     }


# @app.get("/progress/{speaker_id}")
# def get_progress(speaker_id: str):
#     db = SessionLocal()

#     count = db.query(Recording).filter(
#         Recording.speaker_id == speaker_id
#     ).count()

#     db.close()

#     return {
#         "speaker_id": speaker_id,
#         "completed_sentences": count
#     }




# from fastapi import FastAPI, UploadFile, File, Form
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy import create_engine, Column, Integer, String, Text
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
# import os
# import shutil

# # ============================
# # DATABASE CONFIG
# # ============================

# DATABASE_URL = "postgresql://postgres:password@localhost:5432/cliniqflow"

# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()


# # ============================
# # DATABASE MODEL
# # ============================

# class Recording(Base):
#     __tablename__ = "recordings"

#     id = Column(Integer, primary_key=True, index=True)
#     speaker_id = Column(String, index=True)
#     sentence_id = Column(Integer)
#     sentence_text = Column(Text)
#     language = Column(String, default="English")
#     file_path = Column(String)


# # Create tables
# Base.metadata.create_all(bind=engine)


# # ============================
# # FASTAPI APP
# # ============================

# app = FastAPI()

# # Allow frontend (Vercel / localhost)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # change to your domain in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # ============================
# # HELPERS
# # ============================

# DATASET_FOLDER = "dataset"


# def create_speaker_folder(language: str, speaker_id: str):
#     path = os.path.join(DATASET_FOLDER, language, speaker_id.lower())
#     os.makedirs(path, exist_ok=True)
#     return path


# # ============================
# # ROUTES
# # ============================

# @app.post("/upload-audio/")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     language: str = Form("English"),
#     file: UploadFile = File(...)
# ):
#     db = SessionLocal()

#     # Create folder structure
#     speaker_folder = create_speaker_folder(language, speaker_id)

#     file_name = f"{speaker_id.lower()}_{str(sentence_id).zfill(3)}.webm"
#     file_path = os.path.join(speaker_folder, file_name)

#     # Save audio file
#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     # Save to database
#     new_record = Recording(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         language=language,
#         file_path=file_path
#     )

#     db.add(new_record)
#     db.commit()
#     db.refresh(new_record)
#     db.close()

#     return {
#         "message": "Upload successful",
#         "sentence_id": sentence_id,
#         "file_path": file_path
#     }


# @app.get("/progress/{speaker_id}")
# def get_progress(speaker_id: str):
#     db = SessionLocal()

#     count = db.query(Recording).filter(
#         Recording.speaker_id == speaker_id
#     ).count()

#     db.close()

#     return {
#         "speaker_id": speaker_id,
#         "completed_sentences": count
#     }




# from fastapi import FastAPI, UploadFile, File, Form
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy import Column, Integer, String
# from sqlalchemy.orm import Session
# import shutil
# import os

# from database import Base, engine, SessionLocal
# from fastapi.responses import FileResponse

# app = FastAPI()

# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Database Model
# class Recording(Base):
#     __tablename__ = "recordings"

#     id = Column(Integer, primary_key=True, index=True)
#     speaker_id = Column(String)
#     sentence_id = Column(Integer)
#     sentence_text = Column(String)
#     file_path = Column(String)

# # Create tables
# Base.metadata.create_all(bind=engine)


# @app.post("/upload-audio/")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     file: UploadFile = File(...)
# ):
#     db: Session = SessionLocal()

#     # Create folder if not exists
#     folder_path = f"dataset/English/{speaker_id}"
#     os.makedirs(folder_path, exist_ok=True)

#     file_path = os.path.join(
#         folder_path,
#         f"{speaker_id}_{str(sentence_id).zfill(3)}.webm"
#     )

#     # Save file locally
#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     # Save record to database
#     recording = Recording(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         file_path=file_path
#     )

#     db.add(recording)
#     db.commit()
#     db.close()

#     return {"message": "Upload successful"}

# from fastapi import FastAPI, UploadFile, File, Form, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy.orm import Session
# from sqlalchemy.dialects.postgresql import insert
# import os

# from database import SessionLocal, engine, Base
# from models import Recording  # your Recording model
# from models import Recording, Speaker
# from routes.upload import router


# app = FastAPI()

# app.include_router(router)

# # Create tables (safe if already created)
# Base.metadata.create_all(bind=engine)

# # Allow frontend access
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173","https://cliniq-flow.vercel.app", ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Dependency
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# # ==============================
# # Upload Audio (UPSERT Version)
# # ==============================
# @app.post("/upload")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     language: str = Form("English"),
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     # Ensure dataset folder exists
#     folder_path = f"dataset/{language}/{speaker_id}"
#     os.makedirs(folder_path, exist_ok=True)

#     file_path = f"{folder_path}/{speaker_id}_{sentence_id}.wav"

#     # Save file
#     with open(file_path, "wb") as buffer:
#         buffer.write(await file.read())

#     # Check if speaker exists
#     speaker = db.query(Speaker).filter(Speaker.speaker_id == speaker_id).first()

#     if not speaker:
#         speaker = Speaker(
#             speaker_id=speaker_id,
#             language=language
#         )
#         db.add(speaker)
#         db.commit()


#     # UPSERT (Insert or Update if already exists)
#     stmt = insert(Recording).values(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         file_path=file_path,
#     )

#     stmt = stmt.on_conflict_do_update(
#         index_elements=["speaker_id", "sentence_id"],
#         set_={
#             "sentence_text": sentence_text,
#             "file_path": file_path,
#         },
#     )

#     db.execute(stmt)
#     db.commit()

#     return {"message": "Saved successfully"}


# ==============================
# Resume Progress Endpoint
# ==============================
# @app.get("/progress/{speaker_id}")
# def get_progress(speaker_id: str, db: Session = Depends(get_db)):

#     last_record = (
#         db.query(Recording)
#         .filter(Recording.speaker_id == speaker_id)
#         .order_by(Recording.sentence_id.desc())
#         .first()
#     )

#     if last_record:
#         return {"next_sentence": last_record.sentence_id + 1}

#     return {"next_sentence": 1}


# from fastapi import FastAPI, UploadFile, File, Form, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy.orm import Session
# from sqlalchemy.dialects.postgresql import insert
# import os
# import re

# from database import SessionLocal, engine, Base
# from models import Recording, Speaker
# from supabase_client import supabase
# from fastapi import HTTPException


# app = FastAPI()


# # ==============================
# # Create tables (safe if exist)
# # ==============================
# Base.metadata.create_all(bind=engine)


# # ==============================
# # CORS
# # ==============================
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:5173",
#         "https://cliniq-flow.vercel.app",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # ==============================
# # Dependency
# # ==============================
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# # ==============================
# # Upload Audio (DB + Structured Dataset)
# # ==============================
# UPLOAD_FOLDER = "local_backup"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)



# # @app.post("/upload")
# # async def upload_audio(
# #     speaker_id: str = Form(...),
# #     sentence_id: int = Form(...),
# #     sentence_text: str = Form(...),
# #     language: str = Form(...),
# #     role: str = Form(...),
# #     file: UploadFile = File(...),
# #     db: Session = Depends(get_db),
# # ):

# UPLOAD_FOLDER = "local_backup"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# @app.post("/upload")
# async def upload_audio(
#     speaker_id: str,
#     role: str,
#     language: str,
#     sentence_id: int,
#     sentence_text: str,
#     file: UploadFile = File(...)
# ):
#     contents = await file.read()

#     filename = f"{role}/{language}/{speaker_id}/{speaker_id}_{sentence_id}.wav"

#     # 1️⃣ Upload to Supabase Storage
#     supabase.storage.from_("audio-recordings").upload(
#         filename,
#         contents,
#         {"content-type": "audio/wav"}
#     )

#     public_url = supabase.storage.from_("audio-recordings").get_public_url(filename)

#     # 2️⃣ Save local backup
#     local_path = os.path.join(UPLOAD_FOLDER, f"{speaker_id}_{sentence_id}.wav")
#     with open(local_path, "wb") as f:
#         f.write(contents)

#     # 3️⃣ Save metadata in DB
#     recording = Recording(
#         speaker_id=speaker_id,
#         role=role,
#         language=language,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         file_path=public_url
#     )

#     db.add(recording)
#     db.commit()

#     return {"message": "Uploaded successfully", "url": public_url}


#     language = language.lower()
#     role = role.lower()

#     if not re.fullmatch(r"SPK\d{3}", speaker_id):
#         raise HTTPException(
#             status_code=400,
#             detail="Speaker ID must be in format SPK001, SPK002, etc."
#         )

#     # if not re.fullmatch(r"SPK\d{3}", speaker_id):
#     #     return {"error": "Speaker ID must be in format SPK001, SPK002, etc."}

#     allowed_languages = ["english", "yoruba", "pidgin"]
#     allowed_roles = ["doctor", "patient"]

#     if language not in allowed_languages:
#         return {"error": "Invalid language selected"}

#     if role not in allowed_roles:
#         return {"error": "Invalid role selected"}

#     # ==============================
#     # Save audio file
#     # ==============================
#     folder_path = f"dataset/{language}/{role}/{speaker_id}"
#     os.makedirs(folder_path, exist_ok=True)

#     file_path = f"{folder_path}/{speaker_id}_{sentence_id}.wav"

#     with open(file_path, "wb") as buffer:
#         buffer.write(await file.read())

#     # ==============================
#     # Ensure Speaker exists
#     # ==============================
#     # speaker = db.query(Speaker).filter(
#     #     Speaker.speaker_id == speaker_id
#     # ).first()

#     # if not speaker:
#     #     speaker = Speaker(
#     #         speaker_id=speaker_id,
#     #         language=language
#     #     )
#     #     db.add(speaker)
#     #     db.commit()

#     existing_speaker = db.query(Speaker).filter(
#         Speaker.speaker_id == speaker_id
#     ).first()

#     if not existing_speaker:
#         speaker = Speaker(
#             speaker_id=speaker_id,
#             language=language  # first language they used
#         )
#         db.add(speaker)
#         db.commit()


#     # ==============================
#     # UPSERT Recording
#     # ==============================
#     stmt = insert(Recording).values(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         file_path=file_path,
#     )

#     stmt = stmt.on_conflict_do_update(
#         index_elements=["speaker_id", "sentence_id"],
#         set_={
#             "sentence_text": sentence_text,
#             "file_path": file_path,
#         },
#     )

#     db.execute(stmt)
#     db.commit()

#     return {"message": "Saved successfully"}


# # ==============================
# # Resume Progress (Language + Role aware)
# # ==============================
# @app.get("/progress/{speaker_id}")
# def get_progress(
#     speaker_id: str,
#     language: str,
#     role: str,
#     db: Session = Depends(get_db)
# ):

#     language = language.lower()
#     role = role.lower()

#     last_record = (
#         db.query(Recording)
#         .filter(Recording.speaker_id == speaker_id)
#         .filter(Recording.file_path.contains(f"/{language}/{role}/"))
#         .order_by(Recording.sentence_id.desc())
#         .first()
#     )

#     if last_record:
#         return {"next_sentence": last_record.sentence_id + 1}

#     return {"next_sentence": 1}

# @app.get("/download-dataset")
# def download_dataset():
#     zip_path = "dataset_backup.zip"
#     shutil.make_archive("dataset_backup", "zip", "dataset")
#     return FileResponse(zip_path, media_type="application/zip", filename="dataset_backup.zip")




# from fastapi import FastAPI, UploadFile, File, Form, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy.orm import Session
# from sqlalchemy.dialects.postgresql import insert
# import os

# from database import SessionLocal, engine, Base
# from models import Recording  # your Recording model
# from models import Recording, Speaker
# from fastapi.responses import FileResponse
# import shutil


# app = FastAPI()

# # Create tables (safe if already created)
# Base.metadata.create_all(bind=engine)

# # Allow frontend access
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173","https://cliniq-flow.vercel.app", ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Dependency
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# # ==============================
# # Upload Audio (UPSERT Version)
# # ==============================
# @app.post("/upload")
# async def upload_audio(
#     speaker_id: str = Form(...),
#     sentence_id: int = Form(...),
#     sentence_text: str = Form(...),
#     language: str = Form("English"),
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     # Ensure dataset folder exists
#     folder_path = f"dataset/{language}/{speaker_id}"
#     os.makedirs(folder_path, exist_ok=True)

#     file_path = f"{folder_path}/{speaker_id}_{sentence_id}.wav"

#     # Save file
#     with open(file_path, "wb") as buffer:
#         buffer.write(await file.read())

#     # Check if speaker exists
#     speaker = db.query(Speaker).filter(Speaker.speaker_id == speaker_id).first()

#     if not speaker:
#         speaker = Speaker(
#             speaker_id=speaker_id,
#             language=language
#         )
#         db.add(speaker)
#         db.commit()


#     # UPSERT (Insert or Update if already exists)
#     stmt = insert(Recording).values(
#         speaker_id=speaker_id,
#         sentence_id=sentence_id,
#         sentence_text=sentence_text,
#         file_path=file_path,
#     )

#     stmt = stmt.on_conflict_do_update(
#         index_elements=["speaker_id", "sentence_id"],
#         set_={
#             "sentence_text": sentence_text,
#             "file_path": file_path,
#         },
#     )

#     db.execute(stmt)
#     db.commit()

#     return {"message": "Saved successfully"}


# # ==============================
# # Resume Progress Endpoint
# # ==============================
# @app.get("/progress/{speaker_id}")
# def get_progress(speaker_id: str, db: Session = Depends(get_db)):

#     last_record = (
#         db.query(Recording)
#         .filter(Recording.speaker_id == speaker_id)
#         .order_by(Recording.sentence_id.desc())
#         .first()
#     )

#     if last_record:
#         return {"next_sentence": last_record.sentence_id + 1}

#     return {"next_sentence": 1}

# @app.get("/download-dataset")
# def download_dataset():
#     if not os.path.exists("dataset"):
#         return {"error": "Dataset folder not found in disk"}

#     shutil.make_archive("dataset_backup", "zip", "dataset")
#     return FileResponse("dataset_backup.zip", media_type="application/zip", filename="dataset_backup.zip")

from fastapi import FastAPI, UploadFile, File, Form, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.dialects.postgresql import insert
import os
import re

from database import SessionLocal, engine, Base
from models import Recording, Speaker
from supabase_client import supabase

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

    # try:
    #     # 3. Upload to Supabase Storage
    #     supabase.storage.from_("audio-recordings").upload(
    #         supabase_filename,
    #         contents,
    #         {"content-type": "audio/wav"}
    #     )
    #     public_url = supabase.storage.from_("audio-recordings").get_public_url(supabase_filename)
    # except Exception as e:
    #     # If upload fails (e.g., file already exists), get the URL anyway or handle error
    #     public_url = supabase.storage.from_("audio-recordings").get_public_url(supabase_filename)

    # 4. Save local backup
    local_path = os.path.join(UPLOAD_FOLDER, f"{speaker_id}_{sentence_id}.wav")
    with open(local_path, "wb") as f:
        f.write(contents)

    # # 5. Ensure Speaker exists in DB
    # existing_speaker = db.query(Speaker).filter(Speaker.speaker_id == speaker_id).first()
    # if not existing_speaker:
    #     new_speaker = Speaker(speaker_id=speaker_id, language=language)
    #     db.add(new_speaker)
    #     db.commit()

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
        index_elements=["speaker_id", "sentence_id"],
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