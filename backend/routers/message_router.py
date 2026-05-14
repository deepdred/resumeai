from schemas.message_schema import message as MessageSchema
from models.message_model import message as MessageModel
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, APIRouter
from datetime import datetime
from services.message_service import generate, get_messages
from db.session import get_db


response_router = APIRouter(prefix="/generate", tags=["llama3"])

@response_router.post("/")
def register_response(message: MessageSchema, db: Session = Depends(get_db)):
    return generate(message, db)

@response_router.get("/messages")
def get_all_messages(db: Session = Depends(get_db)):
    return get_messages(db)