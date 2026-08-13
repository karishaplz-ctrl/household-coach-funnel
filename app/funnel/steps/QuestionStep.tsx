'use client';

import { useFunnel, type QuestionKey } from '../FunnelContext';
import { QUESTIONS } from '../questions';

interface QuestionStepProps {
  questionNumber: number;
}

export function QuestionStep({ questionNumber }: QuestionStepProps) {
  const { answers, setAnswer, goNext, goBack, canGoBack } = useFunnel();
  const key = `q${questionNumber}` as QuestionKey;
  const questionText = QUESTIONS[questionNumber - 1];

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-gray-900">{questionText}</h2>

      <input
        type="text"
        value={answers[key]}
        onChange={(e) => setAnswer(key, e.target.value)}
        placeholder="Placeholder answer..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      />

      <div className="mt-2 flex gap-3">
        {canGoBack && (
          <button
            type="button"
            onClick={goBack}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={goNext}
          className="flex-1 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
