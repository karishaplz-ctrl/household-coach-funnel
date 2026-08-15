'use client';

import { useState } from 'react';
import { FunnelProvider } from './funnel/FunnelContext';
import { StepRouter } from './funnel/StepRouter';
import { LandingPage } from './funnel/LandingPage';

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />;
  }

  return (
    <FunnelProvider>
      <StepRouter />
    </FunnelProvider>
  );
}
