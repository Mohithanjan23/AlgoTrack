from app.database.session import engine
from app.database.base import Base

# Import all models here so Base knows them
from app.models.user import User
from app.models.problem import Problem
from app.models.submission import Submission

def init_db():
    Base.metadata.create_all(bind=engine)
