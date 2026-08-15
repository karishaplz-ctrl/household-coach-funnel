'use client';

import { useFunnel } from '../FunnelContext';
import { GENDER_OPTIONS, AGE_OPTIONS } from '../questions';
import { WelcomeIllustration } from '../illustrations/WelcomeIllustration';

export function PersonalInfoStep() {
  const { answers, setAnswer, goNext } = useFunnel();

  const canContinue =
    answers.name.trim().length > 0 && !!answers.gender && !!answers.age;

  return (
    <div className="flex flex-col gap-6">
      <WelcomeIllustration />

      <div>
        <h2 className="text-lg font-semibold text-ink-900">
          Let&apos;s get to know you a bit before we dive in
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          This helps us personalize your Nook plan.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-ink-700">
          What should we call you?
        </label>
        <input
          type="text"
          value={answers.name}
          onChange={(e) => setAnswer('name', e.target.value)}
          placeholder="First name"
          className="w-full rounded-lg border border-cream-300 px-4 py-3 text-sm focus:border-terracotta-500 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-ink-700">
          How do you identify?
        </label>
        <div className="flex flex-col gap-2">
          {GENDER_OPTIONS.map((option) => {
            const isSelected = answers.gender === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setAnswer('gender', option)}
                className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-700'
                    : 'border-cream-300 text-ink-700 hover:bg-cream-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-ink-700">
          What&apos;s your age range?
        </label>
        <div className="flex flex-col gap-2">
          {AGE_OPTIONS.map((option) => {
            const isSelected = answers.age === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setAnswer('age', option)}
                className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-700'
                    : 'border-cream-300 text-ink-700 hover:bg-cream-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={!canContinue}
        className="rounded-lg bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Continue
      </button>
    </div>
  );
}
