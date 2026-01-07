def normalize_result(result: dict):
    if "error" in result:
        return {
            "verdict": False,
            "message": result["error"]
        }

    return {
        "verdict": result["verdict"],
        "execution_time": result.get("execution_time"),
        "passed_cases": sum(1 for r in result["results"] if r.get("passed")),
        "total_cases": len(result["results"]),
        "results": result["results"]
    }
