'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export interface FunnelAnswers {
  name: string;
  gender: string;
  age: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  email: string;
}

export type AnswerKey = keyof FunnelAnswers;

export type FunnelStepId =
  | 'hook'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 'interstitial'
  | 7
  | 8
  | 9
  | 'personalizing'
  | 'email'
  | 'success';

const TOTAL_STEPS = 10;

const initialAnswers: FunnelAnswers = {
  name: '',
  gender: '',
  age: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
  email: '',
};

interface FunnelContextValue {
  currentStep: FunnelStepId;
  answers: FunnelAnswers;
  totalSteps: number;
  progressStep: number;
  setAnswer: (key: AnswerKey, value: string) => void;
  goNext: () => void;
  goBack: () => void;
  canGoBack: boolean;
}

const FunnelContext = createContext<FunnelContextValue | null>(null);

function getNextStep(step: FunnelStepId): FunnelStepId {
  if (step === 'hook') return 1;
  if (typeof step === 'number') {
    if (step === 6) return 'interstitial';
    if (step < 9) return (step + 1) as FunnelStepId;
    return 'personalizing'; // step === 9
  }
  if (step === 'interstitial') return 7;
  if (step === 'personalizing') return 'email';
  return 'success'; // step === 'email'
}

function getPreviousStep(step: FunnelStepId): FunnelStepId {
  if (step === 'hook') return 'hook';
  if (typeof step === 'number') {
    if (step === 1) return 'hook';
    if (step === 7) return 'interstitial';
    return (step - 1) as FunnelStepId;
  }
  if (step === 'interstitial') return 6;
  if (step === 'personalizing') return 9;
  return 'personalizing'; // step === 'email'
}

function getProgressStep(step: FunnelStepId): number {
  if (step === 'hook') return 0;
  if (typeof step === 'number') return step;
  if (step === 'interstitial') return 6;
  if (step === 'personalizing') return 9;
  return 10; // email, success
}

export function FunnelProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FunnelStepId>('hook');
  const [answers, setAnswers] = useState<FunnelAnswers>(initialAnswers);

  const setAnswer = (key: AnswerKey, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => setCurrentStep((step) => getNextStep(step));
  const goBack = () => setCurrentStep((step) => getPreviousStep(step));

  const value: FunnelContextValue = {
    currentStep,
    answers,
    totalSteps: TOTAL_STEPS,
    progressStep: getProgressStep(currentStep),
    setAnswer,
    goNext,
    goBack,
    canGoBack: currentStep !== 'hook' && currentStep !== 1 && currentStep !== 'success',
  };

  return (
    <FunnelContext.Provider value={value}>{children}</FunnelContext.Provider>
  );
}

export function useFunnel() {
  const ctx = useContext(FunnelContext);
  if (!ctx) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return ctx;
}
