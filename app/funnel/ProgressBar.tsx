interface ProgressBarProps {
  step: number;
  total: number;
}

type MilestoneIconName = 'sprout' | 'spark' | 'check';

const MILESTONES: {
  threshold: number;
  icon: MilestoneIconName;
  celebrate?: boolean;
}[] = [
  { threshold: 25, icon: 'sprout' },
  { threshold: 50, icon: 'spark' },
  { threshold: 75, icon: 'spark' },
  { threshold: 100, icon: 'check', celebrate: true },
];

function MilestoneIcon({ icon }: { icon: MilestoneIconName }) {
  if (icon === 'sprout') {
    return (
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
        <path
          d="M6,10 L6,6"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M6,7 C4,7 3,5.5 3,4 C5,4 6,5.5 6,7" fill="white" />
        <path d="M6,6 C8,6 9,4.5 9,3 C7,3 6,4.5 6,6" fill="white" />
      </svg>
    );
  }
  if (icon === 'spark') {
    return (
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
        <path d="M6,1 L7,5 L11,6 L7,7 L6,11 L5,7 L1,6 L5,5 Z" fill="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
      <path
        d="M2.5,6.5 L5,9 L9.5,3.5"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({
  top,
  left,
  right,
  bottom,
  delay,
}: {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  delay: string;
}) {
  return (
    <svg
      viewBox="0 0 12 12"
      className="absolute h-2 w-2 fill-terracotta-400"
      style={{
        top,
        left,
        right,
        bottom,
        animation: `pop-in 400ms ease-out ${delay} backwards`,
      }}
    >
      <path d="M6,1 L7,5 L11,6 L7,7 L6,11 L5,7 L1,6 L5,5 Z" />
    </svg>
  );
}

export function ProgressBar({ step, total }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (step / total) * 100));

  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-500">
        Step {step} of {total}
      </p>
      <div className="relative mx-2.5 h-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-cream-200">
          <div
            className="h-full rounded-full bg-terracotta-500 transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>

        {MILESTONES.map((milestone) => {
          const reached = percent >= milestone.threshold;
          return (
            <div
              key={milestone.threshold}
              className="absolute top-1/2"
              style={{
                left: `${milestone.threshold}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className={`relative flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-300 ${
                  reached
                    ? 'border-terracotta-500 bg-terracotta-500'
                    : 'border-cream-300 bg-cream-50'
                }`}
              >
                {reached && (
                  <span className="animate-[pop-in_350ms_ease-out]">
                    <MilestoneIcon icon={milestone.icon} />
                  </span>
                )}
                {reached && milestone.celebrate && (
                  <>
                    <Sparkle top={-8} left={-10} delay="80ms" />
                    <Sparkle top={-9} left={5} delay="160ms" />
                    <Sparkle bottom={-7} left={-2} delay="220ms" />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
