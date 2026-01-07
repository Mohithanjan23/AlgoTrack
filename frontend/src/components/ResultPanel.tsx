import { motion } from "framer-motion";

export default function ResultPanel({ result }: Props) {
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 bg-zinc-900 p-4 rounded"
    >
      <h3 className="text-lg font-semibold">
        {result.verdict ? "✅ Accepted" : "❌ Wrong Answer"}
      </h3>
      {/* rest unchanged */}
    </motion.div>
  );
}
