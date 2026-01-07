from sqlalchemy import Column, Integer, String, Text, JSON, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.base import Base

class Problem(Base):
    __tablename__ = "problems"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)

    difficulty = Column(String(50), nullable=False)
    pattern = Column(String(100), nullable=False)

    # Expected format:
    # [
    #   {"input": [[1,2,3]], "output": 6},
    #   {"input": [[4,5]], "output": 9}
    # ]
    test_cases = Column(JSON, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow)

    submissions = relationship(
        "Submission",
        back_populates="problem",
        cascade="all, delete-orphan"
    )
