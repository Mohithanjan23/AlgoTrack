PROBLEMS = [
    {
        "title": "Two Sum",
        "description": (
            "Given an array of integers nums and an integer target, "
            "return indices of the two numbers such that they add up to target."
        ),
        "difficulty": "Easy",
        "pattern": "Hashing",
        "test_cases": [
            {"input": [[2,7,11,15], 9], "output": [0,1]},
            {"input": [[3,2,4], 6], "output": [1,2]}
        ]
    },
    {
        "title": "Maximum Subarray Sum",
        "description": (
            "Find the contiguous subarray with the largest sum."
        ),
        "difficulty": "Medium",
        "pattern": "Kadane",
        "test_cases": [
            {"input": [[-2,1,-3,4,-1,2,1,-5,4]], "output": 6}
        ]
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "description": (
            "Given a string s, find the length of the longest substring "
            "without repeating characters."
        ),
        "difficulty": "Medium",
        "pattern": "Sliding Window",
        "test_cases": [
            {"input": ["abcabcbb"], "output": 3},
            {"input": ["bbbbb"], "output": 1}
        ]
    },
    {
        "title": "Move Zeroes",
        "description": (
            "Move all zeroes to the end of the array while maintaining "
            "the relative order of non-zero elements."
        ),
        "difficulty": "Easy",
        "pattern": "Two Pointers",
        "test_cases": [
            {"input": [[0,1,0,3,12]], "output": [1,3,12,0,0]}
        ]
    },
    {
        "title": "Valid Parentheses",
        "description": (
            "Given a string containing brackets, determine if the input is valid."
        ),
        "difficulty": "Easy",
        "pattern": "Stack",
        "test_cases": [
            {"input": ["()[]{}"], "output": True},
            {"input": ["(]"], "output": False}
        ]
    }
]
