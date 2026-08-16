'use client';

import { useEffect } from 'react';
import { useFunnel } from '../FunnelContext';
import { GreetingIllustration } from '../illustrations/GreetingIllustration';

export function GreetingStep() {
  const { answers, goNext } = useFunnel();
  const name = answers.name.trim();

  useEffect(() => {
    const timer = setTimeout(goNext, 1750);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-6 text-center">
      <GreetingIllustration />
      <h2 className="font-serif text-xl font-bold text-ink-900">
        {name ? `Nice to meet you, ${name}!` : 'Nice start!'}
      </h2>
      <p className="text-sm text-ink-500">
        That&apos;s your first step to success.
      </p>
    </div>
  );
}
