import { Link } from "react-router-dom";

interface Problem {
  id: number;
  title: string;
  difficulty: string;
  pattern: string;
}

export default function ProblemCard({ problem }: { problem: Problem }) {
  const color =
    problem.difficulty === "Easy"
      ? "text-green-400"
      : problem.difficulty === "Medium"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <Link
      to={`/problem/${problem.id}`}
      className="block bg-zinc-900 p-4 rounded hover:bg-zinc-800 transition"
    >
      <h3 className="text-lg font-semibold">{problem.title}</h3>

      <div className="flex justify-between mt-2 text-sm">
        <span className={color}>{problem.difficulty}</span>
        <span className="text-zinc-400">{problem.pattern}</span>
      </div>
    </Link>
  );
}
