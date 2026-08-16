'use client';

import { useFunnel } from '../FunnelContext';
import { SuccessIllustration } from '../illustrations/SuccessIllustration';

const FIRST_STEP_TIPS: Record<string, string> = {
  'Not enough time':
    "Set a timer for 5 minutes and clear just one surface — your kitchen counter or nightstand. That's it. Small and done beats big and someday.",
  'Too many decisions, no idea where to start':
    'Skip the decisions for now. Grab one drawer — any drawer — and sort it into keep, toss, and unsure. One drawer, no debate.',
  "I'm the only one who tidies":
    'Tonight, ask one person to handle one five-minute task — clearing the table, sorting shoes by the door. Small asks are easier to say yes to.',
  'I get overwhelmed and give up halfway':
    "Pick one spot the size of a placemat. Reset just that spot today. Stopping there isn't quitting — it's the plan.",
};

const DEFAULT_TIP =
  "Pick one small spot — a counter, a drawer, a shelf — and reset just that. That's step one.";

const PLANS = [
  {
    id: 'personal',
    name: 'Personal Plan',
    description: 'Just for you — one focused plan, your pace.',
  },
  {
    id: 'family',
    name: 'Family Plan',
    description: 'Built for your whole household — pets, kids, and all.',
  },
] as const;

export function SuccessStep() {
  const { answers } = useFunnel();
  const tip = FIRST_STEP_TIPS[answers.q5] ?? DEFAULT_TIP;
  const name = answers.name.trim();

  const recommended =
    answers.q3.length === 1 && answers.q3[0] === 'Just me'
      ? 'personal'
      : 'family';

  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <SuccessIllustration />

      <div>
        <h2 className="font-serif text-xl font-bold text-ink-900">
          {name ? `Welcome to Nook, ${name}` : 'Welcome to Nook'}
        </h2>
        <p className="mt-1 text-sm font-medium text-ink-700">
          Here&apos;s your first step:
        </p>
      </div>

      <p className="text-sm text-ink-500">{tip}</p>

      <div className="mt-2 flex w-full flex-col gap-3 text-left">
        {PLANS.map((plan) => {
          const isRecommended = plan.id === recommended;
          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-4 ${
                isRecommended
                  ? 'border-terracotta-500 bg-terracotta-50'
                  : 'border-cream-200 bg-cream-50'
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-terracotta-500 px-2 py-0.5 text-xs font-medium text-white">
                  Recommended
                </span>
              )}
              <p className="text-sm font-semibold text-ink-900">
                {plan.name}
              </p>
              <p className="mt-1 text-sm text-ink-500">{plan.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
