import sys
import json
import time
import traceback

def main():
    try:
        payload = json.load(sys.stdin)
        code = payload["code"]
        test_cases = payload["test_cases"]

        start = time.time()
        exec_globals = {}

        # Execute user code
        exec(code, exec_globals)

        if "solution" not in exec_globals:
            raise Exception("Function 'solution' not found")

        solution = exec_globals["solution"]
        results = []

        for idx, tc in enumerate(test_cases):
            try:
                output = solution(*tc["input"])
                passed = output == tc["output"]
                results.append({
                    "case": idx + 1,
                    "passed": passed,
                    "expected": tc["output"],
                    "actual": output
                })
            except Exception as e:
                results.append({
                    "case": idx + 1,
                    "passed": False,
                    "error": str(e)
                })

        verdict = all(r.get("passed") for r in results)

        end = time.time()

        print(json.dumps({
            "verdict": verdict,
            "execution_time": round(end - start, 4),
            "results": results
        }))

    except Exception as e:
        print(json.dumps({
            "verdict": False,
            "error": str(e),
            "trace": traceback.format_exc()
        }))

if __name__ == "__main__":
    main()
