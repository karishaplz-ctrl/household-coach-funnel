'use client';

import { useEffect } from 'react';
import { useFunnel } from '../FunnelContext';
import { PersonalizingIllustration } from '../illustrations/PersonalizingIllustration';

export function PersonalizingStep() {
  const { goNext } = useFunnel();

  useEffect(() => {
    const timer = setTimeout(goNext, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <PersonalizingIllustration />
      <h2 className="text-lg font-semibold text-ink-900">
        Building your Nook Plan…
      </h2>
    </div>
  );
}
