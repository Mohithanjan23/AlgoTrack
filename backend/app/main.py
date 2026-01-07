from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import init_db
from app.api import (
    auth_router,
    problems_router,
    submissions_router,
    analytics_router,
    sandbox_router
)

app = FastAPI(
    title="AlgoTrack API",
    version="1.0.0",
    docs_url="/docs"
)

# CORS (Frontend Integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth_router)
app.include_router(problems_router)
app.include_router(submissions_router)
app.include_router(analytics_router)
app.include_router(sandbox_router)

@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/")
def root():
    return {
        "status": "running",
        "message": "AlgoTrack backend is live 🚀"
    }
