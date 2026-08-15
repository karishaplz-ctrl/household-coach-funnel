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

export function SuccessStep() {
  const { answers } = useFunnel();
  const tip = FIRST_STEP_TIPS[answers.q5] ?? DEFAULT_TIP;

  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <SuccessIllustration />
      <h2 className="text-lg font-semibold text-ink-900">
        Welcome to Nook, {answers.name}. Here&apos;s your first step:
      </h2>
      <p className="text-sm text-ink-500">{tip}</p>
    </div>
  );
}
