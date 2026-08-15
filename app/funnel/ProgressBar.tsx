interface ProgressBarProps {
  step: number;
  total: number;
}

export function ProgressBar({ step, total }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (step / total) * 100));

  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-500">
        Step {step} of {total}
      </p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-cream-200">
        <div
          className="h-full rounded-full bg-terracotta-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
