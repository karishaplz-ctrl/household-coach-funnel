'use client';

import { useFunnel } from './FunnelContext';
import { FunnelStep } from './FunnelStep';
import { QuestionStep } from './steps/QuestionStep';
import { PersonalizingStep } from './steps/PersonalizingStep';
import { EmailCaptureStep } from './steps/EmailCaptureStep';
import { SuccessStep } from './steps/SuccessStep';

function renderStep(currentStep: ReturnType<typeof useFunnel>['currentStep']) {
  if (typeof currentStep === 'number' && currentStep <= 9) {
    return <QuestionStep questionNumber={currentStep} />;
  }
  if (currentStep === 'personalizing') {
    return <PersonalizingStep />;
  }
  if (currentStep === 10) {
    return <EmailCaptureStep />;
  }
  return <SuccessStep />;
}

export function StepRouter() {
  const { currentStep } = useFunnel();

  return <FunnelStep>{renderStep(currentStep)}</FunnelStep>;
}
