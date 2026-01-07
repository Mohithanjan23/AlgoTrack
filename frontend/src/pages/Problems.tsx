import { useEffect, useState } from "react";
import api from "../api/axios";
import ProblemCard from "../components/ProblemCard";

export default function Problems() {
  const [problems, setProblems] = useState<any[]>([]);
  const [difficulty, setDifficulty] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    api.get("/problems").then((res) => setProblems(res.data));
  }, []);

  const filtered = problems.filter((p) => {
    return (
      (!difficulty || p.difficulty === difficulty) &&
      (!pattern || p.pattern === pattern)
    );
  });

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Problems</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          className="bg-zinc-900 p-2 rounded"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          className="bg-zinc-900 p-2 rounded"
          onChange={(e) => setPattern(e.target.value)}
        >
          <option value="">All Patterns</option>
          <option value="Array">Array</option>
          <option value="Sliding Window">Sliding Window</option>
          <option value="Two Pointers">Two Pointers</option>
          <option value="Hashing">Hashing</option>
        </select>
      </div>

      {/* Problem List */}
      <div className="grid gap-4">
        {filtered.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}
