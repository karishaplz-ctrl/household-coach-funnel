'use client';

export function SuccessStep() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
        ✓
      </div>
      <h2 className="text-lg font-semibold text-gray-900">
        You are all set!
      </h2>
      <p className="text-sm text-gray-500">
        Placeholder copy: your personalized household plan is on its way to
        your inbox.
      </p>
    </div>
  );
}
