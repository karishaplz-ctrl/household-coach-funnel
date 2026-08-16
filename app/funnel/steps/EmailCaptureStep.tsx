'use client';

import { useState } from 'react';
import { useFunnel } from '../FunnelContext';

export function EmailCaptureStep() {
  const { answers, setAnswer, goNext, goBack } = useFunnel();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);

    try {
      const { email, ...questionAnswers } = answers;

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: questionAnswers, email }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || 'Something went wrong. Please try again.',
        );
      }

      goNext();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-serif text-lg font-bold text-ink-900">
        Where should we send your Nook Plan?
      </h2>

      <input
        type="email"
        value={answers.email}
        onChange={(e) => setAnswer('email', e.target.value)}
        placeholder="you@example.com"
        disabled={isSubmitting}
        className="w-full rounded-lg border border-cream-300 px-4 py-3 text-base focus:border-terracotta-500 focus:outline-none focus:ring-1 focus:ring-terracotta-500 disabled:opacity-60"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={isSubmitting}
          className="flex-1 rounded-full border border-cream-300 px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-cream-50 disabled:opacity-60"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || !answers.email.trim()}
          className="flex-1 rounded-full bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Get My Plan'}
        </button>
      </div>
    </div>
  );
}
