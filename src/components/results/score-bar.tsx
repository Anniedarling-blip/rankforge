export function ScoreBar({
  label,
  score,
  reason,
}: {
  label: string;
  score: number;
  reason: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm text-slate-300">{score}/100</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-white"
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-slate-400">{reason}</p>
    </div>
  );
}