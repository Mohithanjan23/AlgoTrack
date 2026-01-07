FROM python:3.11-slim

# Create non-root user
RUN useradd -m sandboxuser

WORKDIR /sandbox

# Copy runner
COPY run.py .

# Switch to non-root
USER sandboxuser

# Disable network by default (handled at runtime too)
CMD ["python", "run.py"]
