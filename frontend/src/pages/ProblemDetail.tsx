import { useState } from "react";
import CodeEditor from "../components/Editor";
import ResultPanel from "../components/ResultPanel";
import { runCode } from "../api/sandbox";
import { useParams } from "react-router-dom";
const [loading, setLoading] = useState(false);


const { id } = useParams();
const problemId = Number(id);

export default function ProblemDetail() {
  const [code, setCode] = useState(
`def solution():
    pass`
  );
  const [result, setResult] = useState(null);
  const problemId = 1; // from route later

  const handleRun = async () => {
  setLoading(true);
  setResult(null);
  const res = await runCode(problemId, code);
  setResult(res);
  setLoading(false);
};


  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Problem Title</h1>

      <CodeEditor code={code} setCode={setCode} />

      <button
  onClick={handleRun}
  className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 active:scale-95 transition-transform">Run Code</button>

      <ResultPanel result={result} />
    </div>
  );
}
