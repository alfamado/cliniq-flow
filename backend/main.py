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

from fastapi import FastAPI, UploadFile, File, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.dialects.postgresql import insert
import os

from database import SessionLocal, engine, Base
from models import Recording  # your Recording model
from models import Recording, Speaker


app = FastAPI()

# Create tables (safe if already created)
Base.metadata.create_all(bind=engine)

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://cliniq-flow.vercel.app", ],
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


# ==============================
# Upload Audio (UPSERT Version)
# ==============================
@app.post("/upload")
async def upload_audio(
    speaker_id: str = Form(...),
    sentence_id: int = Form(...),
    sentence_text: str = Form(...),
    language: str = Form("English"),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    # Ensure dataset folder exists
    folder_path = f"dataset/{language}/{speaker_id}"
    os.makedirs(folder_path, exist_ok=True)

    file_path = f"{folder_path}/{speaker_id}_{sentence_id}.wav"

    # Save file
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Check if speaker exists
    speaker = db.query(Speaker).filter(Speaker.speaker_id == speaker_id).first()

    if not speaker:
        speaker = Speaker(
            speaker_id=speaker_id,
            language=language
        )
        db.add(speaker)
        db.commit()


    # UPSERT (Insert or Update if already exists)
    stmt = insert(Recording).values(
        speaker_id=speaker_id,
        sentence_id=sentence_id,
        sentence_text=sentence_text,
        file_path=file_path,
    )

    stmt = stmt.on_conflict_do_update(
        index_elements=["speaker_id", "sentence_id"],
        set_={
            "sentence_text": sentence_text,
            "file_path": file_path,
        },
    )

    db.execute(stmt)
    db.commit()

    return {"message": "Saved successfully"}


# ==============================
# Resume Progress Endpoint
# ==============================
@app.get("/progress/{speaker_id}")
def get_progress(speaker_id: str, db: Session = Depends(get_db)):

    last_record = (
        db.query(Recording)
        .filter(Recording.speaker_id == speaker_id)
        .order_by(Recording.sentence_id.desc())
        .first()
    )

    if last_record:
        return {"next_sentence": last_record.sentence_id + 1}

    return {"next_sentence": 1}