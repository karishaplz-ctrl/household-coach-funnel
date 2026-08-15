'use client';

import { useFunnel } from './FunnelContext';
import { FunnelStep } from './FunnelStep';
import { HookStep } from './steps/HookStep';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { QuestionStep } from './steps/QuestionStep';
import { InterstitialStep } from './steps/InterstitialStep';
import { PersonalizingStep } from './steps/PersonalizingStep';
import { EmailCaptureStep } from './steps/EmailCaptureStep';
import { SuccessStep } from './steps/SuccessStep';

function renderStep(currentStep: ReturnType<typeof useFunnel>['currentStep']) {
  if (currentStep === 'hook') {
    return <HookStep />;
  }
  if (currentStep === 1) {
    return <PersonalInfoStep />;
  }
  if (typeof currentStep === 'number' && currentStep <= 9) {
    return <QuestionStep questionNumber={currentStep} />;
  }
  if (currentStep === 'interstitial') {
    return <InterstitialStep />;
  }
  if (currentStep === 'personalizing') {
    return <PersonalizingStep />;
  }
  if (currentStep === 'email') {
    return <EmailCaptureStep />;
  }
  return <SuccessStep />;
}

export function StepRouter() {
  const { currentStep } = useFunnel();

  return <FunnelStep>{renderStep(currentStep)}</FunnelStep>;
}
