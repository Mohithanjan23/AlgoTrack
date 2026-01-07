import subprocess
import json
from fastapi import APIRouter, Depends, HTTPException
from app.auth.dependencies import get_current_user
from app.models.problem import Problem
from app.database.session import get_db
from sqlalchemy.orm import Session
from pydantic import BaseModel

router = APIRouter(prefix="/sandbox", tags=["Sandbox"])

class SandboxRequest(BaseModel):
    problem_id: int
    code: str
    language: str = "python"

def run_in_sandbox(code: str, test_cases: list):
    try:
        process = subprocess.run(
            [
                "docker", "run", "--rm",
                "--network", "none",
                "--memory", "128m",
                "--cpus", "0.5",
                "-i", "algotrack-sandbox"
            ],
            input=json.dumps({
                "code": code,
                "test_cases": test_cases
            }),
            text=True,
            capture_output=True,
            timeout=3
        )

        if process.stderr:
            return {"verdict": False, "error": process.stderr}

        return json.loads(process.stdout)

    except subprocess.TimeoutExpired:
        return {"verdict": False, "error": "Time Limit Exceeded"}

@router.post("/run")
def execute_code(
    payload: SandboxRequest,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    problem = db.query(Problem).get(payload.problem_id)
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")

    result = run_in_sandbox(
        code=payload.code,
        test_cases=problem.test_cases
    )

    return result
