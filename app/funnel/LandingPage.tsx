'use client';

import { HeroIllustration } from './illustrations/HeroIllustration';

interface LandingPageProps {
  onStart: () => void;
}

const TESTIMONIALS = [
  {
    quote:
      "I stopped waiting for a free weekend and just did the five minutes. My kitchen counter has stayed clear for two weeks now.",
    name: 'Sarah',
    description: 'working parent',
    avatarBg: 'bg-terracotta-100',
    avatarText: 'text-terracotta-700',
  },
  {
    quote:
      'The first tip felt almost too easy. That was the point — I actually did it.',
    name: 'Miguel',
    description: 'living solo',
    avatarBg: 'bg-sage-100',
    avatarText: 'text-sage-600',
  },
  {
    quote:
      "My partner and I finally have a plan that doesn't turn into an argument about who does more.",
    name: 'Priya',
    description: 'shares a home',
    avatarBg: 'bg-cream-200',
    avatarText: 'text-ink-700',
  },
];

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-terracotta-500">
      <path d="M10,1 L12.6,6.9 L19,7.6 L14.2,11.9 L15.6,18.2 L10,14.9 L4.4,18.2 L5.8,11.9 L1,7.6 L7.4,6.9 Z" />
    </svg>
  );
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <section className="w-full bg-cream-100 pt-16 sm:pt-20 lg:pt-6">
        <div className="mx-auto w-full max-w-2xl px-4 text-center">
          <h1 className="font-serif text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
            Your Home Doesn&apos;t Need a Weekend. It Needs 15 Minutes.
          </h1>
          <p className="mt-4 text-base text-ink-500 lg:text-lg">
            Meet Nook — the no-shame way to reset your space, one small step
            at a time.
          </p>
        </div>
        <div className="mx-auto mt-8 w-[clamp(280px,52vw,780px)] lg:mt-4">
          <div className="aspect-[640/420] w-full">
            <HeroIllustration />
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl px-4 py-6 text-center sm:py-8 lg:py-3">
          <button
            type="button"
            onClick={onStart}
            className="rounded-full bg-terracotta-500 px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-terracotta-600"
          >
            Find my plan
          </button>
        </div>
      </section>

      <section className="w-full bg-cream-50 px-4 py-16">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold text-ink-900 lg:text-3xl">
            You&apos;re Not Messy. You&apos;re Overwhelmed.
          </h2>
          <p className="mt-4 text-sm text-ink-500 lg:text-base">
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
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-center font-serif text-2xl font-bold text-ink-900 lg:text-3xl">
            How Nook Works
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="font-serif text-2xl font-bold text-ink-900 lg:text-3xl">
            You&apos;re Not Doing This Alone
          </h2>
          <p className="mt-3 text-sm text-ink-500 lg:text-base">
            Join a growing number of people resetting their homes, one small
            step at a time.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl bg-cream-50 p-4 text-sm text-ink-700 shadow-sm ring-1 ring-cream-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${testimonial.avatarBg} ${testimonial.avatarText}`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-500">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="mt-2">&quot;{testimonial.quote}&quot;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-terracotta-500 px-4 py-12">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="font-serif text-lg font-bold text-white lg:text-xl">
            Ready to see your plan? Takes 2 minutes.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="mt-4 rounded-full bg-white px-10 py-4 text-base font-semibold text-terracotta-600 transition-colors hover:bg-cream-50"
          >
            Find my plan
          </button>
        </div>
      </section>
    </div>
  );
}
