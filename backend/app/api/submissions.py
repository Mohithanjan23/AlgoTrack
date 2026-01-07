from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.submission import Submission
from app.auth.dependencies import get_current_user
from pydantic import BaseModel

router = APIRouter(prefix="/submissions", tags=["Submissions"])

class SubmissionSchema(BaseModel):
    problem_id: int
    verdict: bool
    execution_time: float

@router.post("/")
def save_submission(
    payload: SubmissionSchema,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    submission = Submission(
        user_id=user.id,
        problem_id=payload.problem_id,
        verdict=payload.verdict,
        execution_time=payload.execution_time
    )
    db.add(submission)
    db.commit()
    return {"message": "Submission saved"}
