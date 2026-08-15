'use client';

import { useFunnel } from '../FunnelContext';
import { HookIllustration } from '../illustrations/HookIllustration';

export function HookStep() {
  const { goNext } = useFunnel();

  return (
    <div className="flex flex-col items-center gap-6 py-6 text-center">
      <HookIllustration />

      <h2 className="text-xl font-semibold text-ink-900">
        Your Home Doesn&apos;t Need a Weekend. It Needs 15 Minutes.
      </h2>

      <button
        type="button"
        onClick={goNext}
        className="w-full rounded-lg bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600"
      >
        Let&apos;s find your plan
      </button>
    </div>
  );
}
