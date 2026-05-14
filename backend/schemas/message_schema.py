from pydantic import BaseModel
from enum import Enum

class Role(str, Enum):
    user = "user"
    ai = "ai"


class message(BaseModel):
    role: Role
    message: str
    # timestamp: str