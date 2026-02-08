from fastapi import APIRouter, UploadFile, File, Form
import os
import csv
from datetime import datetime

router = APIRouter()

DATASET_DIR = "dataset/english"
METADATA_FILE = "dataset/metadata.csv"

@router.post("/upload-audio/")
async def upload_audio(
    speaker_id: str = Form(...),
    sentence_id: int = Form(...),
    sentence_text: str = Form(...),
    file: UploadFile = File(...)
):
    
    speaker_folder = os.path.join(DATASET_DIR, speaker_id)
    os.makedirs(speaker_folder, exist_ok=True)

    filename = f"ENG_{speaker_id}_{sentence_id:03}.wav"
    file_path = os.path.join(speaker_folder, filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Append metadata
    file_exists = os.path.isfile(METADATA_FILE)

    with open(METADATA_FILE, "a", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        if not file_exists:
            writer.writerow(["audio_path", "transcription", "language", "speaker_id"])
        writer.writerow([file_path, sentence_text, "english", speaker_id])

    return {"message": "Upload successful", "file": filename}
