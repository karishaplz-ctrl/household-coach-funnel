'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type QuestionKey =
  | 'q1'
  | 'q2'
  | 'q3'
  | 'q4'
  | 'q5'
  | 'q6'
  | 'q7'
  | 'q8'
  | 'q9';

export interface FunnelAnswers {
  q1: string;
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

export type FunnelStepId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 'personalizing'
  | 10
  | 'success';

const TOTAL_STEPS = 10;

const initialAnswers: FunnelAnswers = {
  q1: '',
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
  setAnswer: (key: QuestionKey | 'email', value: string) => void;
  goNext: () => void;
  goBack: () => void;
  canGoBack: boolean;
}

const FunnelContext = createContext<FunnelContextValue | null>(null);

function getNextStep(step: FunnelStepId): FunnelStepId {
  if (typeof step === 'number') {
    if (step < 9) return (step + 1) as FunnelStepId;
    if (step === 9) return 'personalizing';
    return 'success'; // step === 10
  }
  if (step === 'personalizing') return 10;
  return 'success';
}

function getPreviousStep(step: FunnelStepId): FunnelStepId {
  if (typeof step === 'number') {
    if (step === 1) return 1;
    if (step === 10) return 9;
    return (step - 1) as FunnelStepId;
  }
  if (step === 'personalizing') return 9;
  return 10; // success -> back to email capture
}

function getProgressStep(step: FunnelStepId): number {
  if (typeof step === 'number') return step;
  if (step === 'personalizing') return 9;
  return 10; // success
}

export function FunnelProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FunnelStepId>(1);
  const [answers, setAnswers] = useState<FunnelAnswers>(initialAnswers);

  const setAnswer = (key: QuestionKey | 'email', value: string) => {
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
    canGoBack: currentStep !== 1 && currentStep !== 'success',
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
