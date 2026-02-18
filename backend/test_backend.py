import requests

# The URL where your FastAPI is running locally
URL = "http://127.0.0.1:8000/upload"

# Create a dummy file to upload
with open("test_audio.wav", "wb") as f:
    f.write(b"fake audio data")

# Data must match your Form(...) requirements
payload = {
    "speaker_id": "SPK001",
    "role": "doctor",
    "language": "english",
    "sentence_id": 1,
    "sentence_text": "When did the fever start?"
}

# The file part
files = {
    "file": ("test_audio.wav", open("test_audio.wav", "rb"), "audio/wav")
}

try:
    response = requests.post(URL, data=payload, files=files)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.json()}")
except Exception as e:
    print(f"An error occurred: {e}")