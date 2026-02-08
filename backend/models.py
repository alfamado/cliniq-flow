from sqlalchemy import Column, Integer, String, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from database import Base
from datetime import datetime

class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(Integer, primary_key=True, index=True)
    speaker_id = Column(String, unique=True, index=True)
    language = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Recording(Base):
    __tablename__ = "recordings"

    id = Column(Integer, primary_key=True)
    speaker_id = Column(String, nullable=False)
    sentence_id = Column(Integer, nullable=False)
    sentence_text = Column(String, nullable=False)
    file_path = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
    __table_args__ = (
        UniqueConstraint("speaker_id", "sentence_id", name="uix_speaker_sentence"),
    )
