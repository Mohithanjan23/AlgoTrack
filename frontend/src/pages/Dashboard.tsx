import { useEffect, useState } from "react";
import api from "../api/axios";
import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper>
      {/* existing content */}
    </PageWrapper>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.get("/analytics/patterns").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        {stats?.map((s: any) => (
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
