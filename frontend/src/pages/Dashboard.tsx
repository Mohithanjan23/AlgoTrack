import { useEffect, useState } from "react";
import api from "../api/axios";

interface PatternStat {
  pattern: string;
  attempts: number;
  accepted: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<PatternStat[]>([]);

  useEffect(() => {
    api.get("/analytics/patterns").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.pattern} className="bg-zinc-900 p-4 rounded">
            <h3 className="font-semibold">{s.pattern}</h3>
            <p>Attempts: {s.attempts}</p>
            <p>Accepted: {s.accepted}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
