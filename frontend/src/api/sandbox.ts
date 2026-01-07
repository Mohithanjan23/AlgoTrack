import api from "./axios";

export const runCode = async (problemId: number, code: string) => {
  const res = await api.post("/sandbox/run", {
    problem_id: problemId,
    code,
    language: "python",
  });
  return res.data;
};
