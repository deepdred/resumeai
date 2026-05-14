from fastapi import FastAPI, APIRouter
from datetime import datetime
from models.message_model import message as messageModel
from db.session import engine, get_db, Base
from routers.message_router import response_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def greet():
    return {
        "success": True,
        "meta": {
            "message": "Server is live",
            "timestamp": datetime.now().isoformat()
        }
    }

app.include_router(response_router)