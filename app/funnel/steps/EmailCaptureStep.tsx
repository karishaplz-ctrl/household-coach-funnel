'use client';

import { useFunnel } from '../FunnelContext';

export function EmailCaptureStep() {
  const { answers, setAnswer, goNext, goBack } = useFunnel();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Where should we send your personalized plan?
      </h2>
      <p className="text-sm text-gray-500">
        Placeholder copy: enter your email to get your household coach
        results.
      </p>

      <input
        type="email"
        value={answers.email}
        onChange={(e) => setAnswer('email', e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      />

      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={goBack}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex-1 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Get My Plan
        </button>
      </div>
    </div>
  );
}
