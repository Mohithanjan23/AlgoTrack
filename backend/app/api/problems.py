from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.problem import Problem

router = APIRouter(prefix="/problems", tags=["Problems"])

@router.get("/")
def list_problems(db: Session = Depends(get_db)):
    return db.query(Problem).all()

@router.get("/{problem_id}")
def get_problem(problem_id: int, db: Session = Depends(get_db)):
    problem = db.query(Problem).get(problem_id)
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    return problem
