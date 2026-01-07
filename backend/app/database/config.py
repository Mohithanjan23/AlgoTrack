import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    f"sqlite:///{os.path.join(BASE_DIR, 'algotrack.db')}"
)

