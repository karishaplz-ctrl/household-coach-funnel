'use client';

import { HeroIllustration } from './illustrations/HeroIllustration';

interface LandingPageProps {
  onStart: () => void;
}

const TESTIMONIALS = [
  {
    quote:
      "I stopped waiting for a free weekend and just did the five minutes. My kitchen counter has stayed clear for two weeks now.",
    attribution: 'A Nook user, working parent',
  },
  {
    quote:
      'The first tip felt almost too easy. That was the point — I actually did it.',
    attribution: 'A Nook user, living solo',
  },
  {
    quote:
      "My partner and I finally have a plan that doesn't turn into an argument about who does more.",
    attribution: 'A Nook user, shares a home',
  },
];

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <section className="w-full bg-cream-100 px-4 py-20">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl">
            Your Home Doesn&apos;t Need a Weekend. It Needs 15 Minutes.
          </h1>
          <p className="mt-4 text-base text-ink-500">
            Meet Nook — the no-shame way to reset your space, one small step
            at a time.
          </p>
          <div className="mt-8 flex justify-center">
            <HeroIllustration />
          </div>
          <button
            type="button"
            onClick={onStart}
            className="mt-8 rounded-lg bg-terracotta-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-600"
          >
            Find my plan
          </button>
        </div>
      </section>

      <section className="w-full bg-cream-50 px-4 py-16">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink-900">
            You&apos;re Not Messy. You&apos;re Overwhelmed.
          </h2>
          <p className="mt-4 text-sm text-ink-500">
            Clutter doesn&apos;t build up because you don&apos;t care — it
            builds up because every pile is dozens of tiny decisions, and
            your brain runs out of decisions before it runs out of stuff.
            That&apos;s not a character flaw. That&apos;s decision fatigue.
            It&apos;s why &quot;just clean it all this weekend&quot; never
            works — and why you don&apos;t need it to.
          </p>
        </div>
      </section>

      <section className="w-full bg-terracotta-50 px-4 py-16">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-ink-900">
            How Nook Works
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            <li className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200">
              🧠 One decision at a time — we tell you exactly what to tackle
              next
            </li>
            <li className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200">
              ⏱️ 10–15 minutes a day — real progress fits into a coffee
              break, not a weekend
            </li>
            <li className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200">
              🎯 Built around your mess — not a generic checklist
            </li>
            <li className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200">
              💛 No shame, ever — just steady progress you can feel
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-sage-50 px-4 py-16">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink-900">
            You&apos;re Not Doing This Alone
          </h2>
          <p className="mt-3 text-sm text-ink-500">
            Join a growing number of people resetting their homes, one small
            step at a time.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-left">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.attribution}
                className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200"
              >
                <p>&quot;{testimonial.quote}&quot;</p>
                <cite className="mt-3 block text-xs font-medium not-italic text-ink-500">
                  {testimonial.attribution}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-terracotta-500 px-4 py-16">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-base font-medium text-white">
            Ready to see your plan? Takes 2 minutes.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="mt-4 rounded-lg bg-white px-6 py-3 text-sm font-medium text-terracotta-600 transition-colors hover:bg-cream-50"
          >
            Find my plan
          </button>
        </div>
      </section>
    </div>
  );
}
