'use client';

import { useFunnel } from '../FunnelContext';
import { HookIllustration } from '../illustrations/HookIllustration';

export function HookStep() {
  const { goNext } = useFunnel();

  return (
    <div className="flex flex-col items-center gap-6 py-6 text-center">
      <HookIllustration />

      <div>
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Are You Ready to Fix It?
        </h2>
        <p className="mt-2 text-sm text-ink-500">
          Your home doesn&apos;t need a weekend. It needs 15 minutes.
        </p>
      </div>

      <button
        type="button"
        onClick={goNext}
        className="w-full rounded-full bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600"
      >
        Yes, I&apos;m ready
      </button>
    </div>
  );
}
