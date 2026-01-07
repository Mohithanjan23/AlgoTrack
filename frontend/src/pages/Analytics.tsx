import { useEffect, useState } from "react";
import api from "../api/axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/analytics/patterns").then((res) => {
      const formatted = res.data.map((d: any) => ({
        pattern: d.pattern,
        Attempts: d.attempts,
        Accepted: d.accepted,
        Accuracy: d.attempts
          ? Math.round((d.accepted / d.attempts) * 100)
          : 0,
      }));
      setData(formatted);
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Pattern Performance */}
      <div className="bg-zinc-900 p-4 rounded mb-8">
        <h2 className="font-semibold mb-4">Pattern Performance</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="pattern" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="Attempts" fill="#6366f1" />
            <Bar dataKey="Accepted" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Accuracy Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((d) => (
          <div key={d.pattern} className="bg-zinc-900 p-4 rounded">
            <h3 className="font-semibold">{d.pattern}</h3>
            <p className="text-sm text-zinc-400">
              Accuracy: {d.Accuracy}%
            </p>

            <div className="w-full bg-zinc-800 h-2 rounded mt-2">
              <div
                className="bg-indigo-500 h-2 rounded"
                style={{ width: `${d.Accuracy}%` }}
              />
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-zinc-400">
            No submissions yet. Solve problems to see analytics.
            </p>
)}
      </div>
    </div>
  );
}
