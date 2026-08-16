'use client';

import { useEffect, useState } from 'react';
import { useFunnel } from '../FunnelContext';
import { PersonalizingIllustration } from '../illustrations/PersonalizingIllustration';

const LINES = [
  'Analyzing your clutter type…',
  'Calculating your pace…',
  'Building your Nook Plan…',
];

const STAGGER_MS = 700;
const COUNT_DURATION_MS = 600;
const AUTO_ADVANCE_MS = 2300;

function CountingLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / COUNT_DURATION_MS) * 100));
      setPercent(next);
      if (elapsed < COUNT_DURATION_MS) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="flex w-full items-center justify-between gap-3 text-sm text-ink-700">
      <span>{text}</span>
      <span className="tabular-nums font-semibold text-terracotta-600">
        {percent}%
      </span>
    </div>
  );
}

export function PersonalizingStep() {
  const { goNext } = useFunnel();

  useEffect(() => {
    const timer = setTimeout(goNext, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <PersonalizingIllustration />
      <div className="flex w-full flex-col gap-2">
        {LINES.map((line, index) => (
          <CountingLine key={line} text={line} delay={index * STAGGER_MS} />
        ))}
      </div>
    </div>
  );
}
