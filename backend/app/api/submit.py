@router.post("/submit")
def submit_code(payload: SubmissionRequest, user=Depends(get_user)):
    result = run_in_sandbox(
        code=payload.code,
        test_cases=payload.test_cases
    )

    save_submission(user.id, payload.problem_id, result)

    return result
