'use client';

import type { ReactNode } from 'react';
import { ProgressBar } from './ProgressBar';
import { useFunnel } from './FunnelContext';

interface FunnelStepProps {
  children: ReactNode;
}

export function FunnelStep({ children }: FunnelStepProps) {
  const { currentStep, progressStep, totalSteps } = useFunnel();
  const showProgress = currentStep !== 'hook';

  return (
    <div className="flex min-h-dvh w-full justify-center bg-cream-100 px-4 py-8">
      <div className="w-full max-w-[420px]">
        {showProgress && (
          <ProgressBar step={progressStep} total={totalSteps} />
        )}
        <div className="rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-cream-200">
          {children}
        </div>
      </div>
    </div>
  );
}
