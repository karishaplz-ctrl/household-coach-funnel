'use client';

import { useFunnel } from '../FunnelContext';
import { OverwhelmedIllustration } from '../illustrations/OverwhelmedIllustration';

export function InterstitialStep() {
  const { goNext } = useFunnel();

  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <OverwhelmedIllustration />

      <h2 className="text-lg font-semibold text-ink-900">
        You&apos;re not messy. You&apos;re overwhelmed.
      </h2>
      <p className="text-sm text-ink-500">
        Every pile is dozens of tiny decisions — and most people run out of
        decisions before they run out of stuff. That&apos;s not a you
        problem.
      </p>

      <button
        type="button"
        onClick={goNext}
        className="w-full rounded-lg bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600"
      >
        Continue
      </button>
    </div>
  );
}
