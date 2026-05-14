from db.session import Base
from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy import Enum as SqlEnum
from enum import Enum
from datetime import datetime

class Role(str, Enum):
    user = "user"
    ai = "ai"

class message(Base):
    __tablename__ = "message"
    id = Column(Integer, primary_key=True, index=True)
    role = Column(SqlEnum(Role), nullable=False)
    message = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)