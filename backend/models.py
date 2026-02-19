from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.sql import func
from database import Base
from datetime import datetime

class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(Integer, primary_key=True, index=True)
    speaker_id = Column(String, unique=True, index=True, nullable=False)
    role = Column(String, nullable=False)  # doctor or patient
    language = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Recording(Base):
    __tablename__ = "recordings"

    id = Column(Integer, primary_key=True)
    speaker_id = Column(String, ForeignKey("speakers.speaker_id"), nullable=False)
    role = Column(String, nullable=False)
    language = Column(String, nullable=False)
    sentence_id = Column(Integer, nullable=False)
    sentence_text = Column(String, nullable=False)
    file_path = Column(String, nullable=False)  # Supabase Storage URL
    uploaded_at = Column(DateTime, default=func.now())

    __table_args__ = (
        UniqueConstraint("speaker_id", "sentence_id", "language", "role", name="uix_speaker_sentence_lang_role"),
    )

class Conversation(Base):
    __tablename__ = "conversations"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=False) 
    speaker_id = Column(String, ForeignKey("speakers.speaker_id"), nullable=False)
    role = Column(String, nullable=False)
    language = Column(String, nullable=False)
    file_path = Column(String, nullable=False)
    duration_seconds = Column(Integer, nullable=True) # New: track length
    uploaded_at = Column(DateTime, default=func.now())

    __table_args__ = (
        UniqueConstraint("session_id", "speaker_id", name="uix_session_speaker"),
    )


# from sqlalchemy import Column, Integer, String, DateTime, UniqueConstraint
# from sqlalchemy.sql import func
# from database import Base
# from datetime import datetime

# class Speaker(Base):
#     __tablename__ = "speakers"

#     id = Column(Integer, primary_key=True, index=True)
#     speaker_id = Column(String, unique=True, index=True)
#     language = Column(String)
#     created_at = Column(DateTime(timezone=True), server_default=func.now())


# class Recording(Base):
#     __tablename__ = "recordings"

#     id = Column(Integer, primary_key=True)
#     speaker_id = Column(String, nullable=False)
#     sentence_id = Column(Integer, nullable=False)
#     sentence_text = Column(String, nullable=False)

#     language = Column(String, nullable=False)
#     role = Column(String, nullable=False)

#     file_path = Column(String, nullable=False)
#     uploaded_at = Column(DateTime, default=datetime.utcnow)

#     __table_args__ = (
#         UniqueConstraint(
#             "speaker_id",
#             "sentence_id",
#             "language",
#             "role",
#             name="uix_speaker_sentence_lang_role"
#         ),
#     )


# class Recording(Base):
#     __tablename__ = "recordings"

#     id = Column(Integer, primary_key=True)
#     speaker_id = Column(String, nullable=False)
#     sentence_id = Column(Integer, nullable=False)
#     sentence_text = Column(String, nullable=False)
#     file_path = Column(String, nullable=False)
#     uploaded_at = Column(DateTime, default=datetime.utcnow)
#     __table_args__ = (
#         UniqueConstraint("speaker_id", "sentence_id", name="uix_speaker_sentence"),
#     )
