'use client';

import {
  useFunnel,
  type AnswerKey,
  type MultiAnswerKey,
} from '../FunnelContext';
import { QUESTIONS } from '../questions';

interface QuestionStepProps {
  questionNumber: number;
}

export function QuestionStep({ questionNumber }: QuestionStepProps) {
  const { answers, setAnswer, toggleArrayAnswer, goNext, goBack, canGoBack } =
    useFunnel();
  const question = QUESTIONS[questionNumber - 2];
  const isMulti = !!question.multiSelect;

  const singleKey = `q${questionNumber}` as Exclude<AnswerKey, MultiAnswerKey>;
  const multiKey = `q${questionNumber}` as MultiAnswerKey;

  const selectedValues: string[] = isMulti
    ? answers[multiKey]
    : answers[singleKey]
      ? [answers[singleKey]]
      : [];

  const canContinue = isMulti
    ? selectedValues.length > 0
    : !!answers[singleKey];

  const handleSelect = (option: string) => {
    if (isMulti) {
      toggleArrayAnswer(multiKey, option);
    } else {
      setAnswer(singleKey, option);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-serif text-xl font-bold text-ink-900">{question.text}</h2>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const isSelected = selectedValues.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                isSelected
                  ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-700'
                  : 'border-cream-300 text-ink-700 hover:bg-cream-50'
              }`}
            >
              {isMulti && (
                <span
                  aria-hidden="true"
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isSelected
                      ? 'border-terracotta-500 bg-terracotta-500'
                      : 'border-cream-300 bg-cream-50'
                  }`}
                >
                  {isSelected && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
                      <path
                        d="M2.5,6.2 L4.8,8.5 L9.5,3.2"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              )}
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
            className="flex-1 rounded-full border border-cream-300 px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-cream-50"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={goNext}
          disabled={!canContinue}
          className="flex-1 rounded-full bg-terracotta-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Next
        </button>
      </div>
    </div>
  );
}
