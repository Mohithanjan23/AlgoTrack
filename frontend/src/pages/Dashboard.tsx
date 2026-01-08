import { useEffect, useState } from "react";
import api from "../api/axios";
import PageWrapper from "../components/PageWrapper";

interface PatternStat {
  pattern: string;
  attempts: number;
  accepted: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<PatternStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/analytics/patterns")
      .then((res) => setStats(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {loading && <p className="text-zinc-400">Loading analytics...</p>}

        {!loading && stats.length === 0 && (
          <p className="text-zinc-400">
            No submissions yet. Solve problems to see insights.
          </p>
        )}

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
    </PageWrapper>
  );
}
