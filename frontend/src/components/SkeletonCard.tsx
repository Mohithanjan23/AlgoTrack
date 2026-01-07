export default function SkeletonCard() {
  return (
    <div className="bg-zinc-900 p-4 rounded animate-pulse">
      <div className="h-4 bg-zinc-700 rounded w-2/3 mb-2" />
      <div className="h-3 bg-zinc-800 rounded w-1/3" />
    </div>
  );
}
