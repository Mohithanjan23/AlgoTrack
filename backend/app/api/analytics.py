from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.submission import Submission
from app.models.problem import Problem
from app.auth.dependencies import get_current_user
from sqlalchemy import func

router = APIRouter(prefix="/analytics", tags=["Analytics"])

@router.get("/patterns")
def pattern_analytics(user=Depends(get_current_user), db: Session = Depends(get_db)):
    data = (
        db.query(
            Problem.pattern,
            func.count(Submission.id).label("attempts"),
            func.sum(func.cast(Submission.verdict, func.INTEGER)).label("accepted")
        )
        .join(Submission, Submission.problem_id == Problem.id)
        .filter(Submission.user_id == user.id)
        .group_by(Problem.pattern)
        .all()
    )

    return [
        {
            "pattern": d[0],
            "attempts": d[1],
            "accepted": d[2] or 0
        }
        for d in data
    ]
