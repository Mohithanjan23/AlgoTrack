from sqlalchemy.orm import Session
from app.database.session import SessionLocal
from app.models.problem import Problem
from app.seed.problems_data import PROBLEMS

def seed():
    db: Session = SessionLocal()

    existing = db.query(Problem).count()
    if existing > 0:
        print("Problems already seeded.")
        return

    for p in PROBLEMS:
        problem = Problem(
            title=p["title"],
            description=p["description"],
            difficulty=p["difficulty"],
            pattern=p["pattern"],
            test_cases=p["test_cases"]
        )
        db.add(problem)

    db.commit()
    db.close()
    print(f"Seeded {len(PROBLEMS)} problems successfully.")

if __name__ == "__main__":
    seed()
