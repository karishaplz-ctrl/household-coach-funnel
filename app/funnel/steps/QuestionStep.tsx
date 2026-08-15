'use client';

import { useFunnel, type AnswerKey } from '../FunnelContext';
import { QUESTIONS } from '../questions';

interface QuestionStepProps {
  questionNumber: number;
}

export function QuestionStep({ questionNumber }: QuestionStepProps) {
  const { answers, setAnswer, goNext, goBack, canGoBack } = useFunnel();
  const key = `q${questionNumber}` as AnswerKey;
  const question = QUESTIONS[questionNumber - 2];

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-ink-900">{question.text}</h2>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const isSelected = answers[key] === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setAnswer(key, option)}
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

      <div className="mt-2 flex gap-3">
        {canGoBack && (
          <button
            type="button"
            onClick={goBack}
            className="flex-1 rounded-lg border border-cream-300 px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-cream-50"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={goNext}
          disabled={!answers[key]}
          className="flex-1 rounded-lg bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Next
        </button>
      </div>
    </div>
  );
}
