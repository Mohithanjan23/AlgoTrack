import subprocess
import json

SANDBOX_IMAGE = "algotrack-sandbox"

def execute_in_docker(code: str, test_cases: list):
    try:
        process = subprocess.run(
            [
                "docker", "run", "--rm",
                "--network", "none",
                "--memory", "128m",
                "--cpus", "0.5",
                "-i", SANDBOX_IMAGE
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
            return {
                "verdict": False,
                "error": process.stderr.strip()
            }

        return json.loads(process.stdout)

    except subprocess.TimeoutExpired:
        return {
            "verdict": False,
            "error": "Time Limit Exceeded"
        }
