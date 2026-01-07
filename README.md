# AlgoTrack

AlgoTrack is a full-stack algorithm learning platform with
secure sandboxed code execution, analytics-driven insights,
and pattern-based learning.

## Tech Stack
- Frontend: React + Vite + Tailwind
- Backend: FastAPI + SQLAlchemy
- Sandbox: Docker-isolated Python execution
- DB: SQLite (dev), PostgreSQL (prod)

## Run Locally

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

### Frontend
cd frontend
npm install
npm run dev

### Sandbox
cd backend/app/sandbox
docker build -t algotrack-sandbox .