'use client';

import { useFunnel } from '../FunnelContext';

export function PersonalizingStep() {
  const { goNext, goBack } = useFunnel();

  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-emerald-600" />
      <h2 className="text-lg font-semibold text-gray-900">
        Personalizing your household plan...
      </h2>
      <p className="text-sm text-gray-500">
        Placeholder copy: we are crunching your answers into a custom
        decluttering plan.
      </p>

      <div className="mt-2 flex w-full gap-3">
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
          Continue
        </button>
      </div>
    </div>
  );
}
