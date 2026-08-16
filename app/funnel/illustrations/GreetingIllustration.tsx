import { Plant } from './Plant';
import { SkyBackdrop, GroundBand } from './Backdrop';

export function GreetingIllustration() {
  return (
    <svg
      viewBox="0 0 260 190"
      className="w-full max-w-[240px] lg:max-w-[280px]"
      aria-hidden="true"
    >
      <SkyBackdrop
        id="greet-sky"
        width={260}
        height={190}
        top="#FEFCFA"
        bottom="#FBEEE7"
      />

      <GroundBand
        width={260}
        y={158}
        height={32}
        farColor="#F1E6D8"
        nearColor="#E4D3BE"
      />

      <ellipse cx="140" cy="172" rx="20" ry="5" fill="#2C2620" opacity="0.08" />

      {/* sparkles */}
      <path
        d="M196,44 L199,51 L206,54 L199,57 L196,64 L193,57 L186,54 L193,51 Z"
        fill="#D98A5E"
      />
      <path
        d="M214,74 L216,78 L220,80 L216,82 L214,86 L212,82 L208,80 L212,78 Z"
        fill="#7C8F63"
      />
      <path
        d="M90,50 L92,54 L96,56 L92,58 L90,62 L88,58 L84,56 L88,54 Z"
        fill="#C1663B"
      />

      {/* flag pole */}
      <rect x="138" y="70" width="4" height="102" rx="2" fill="#5B5148" />

      {/* pennant flag */}
      <path d="M142,74 L192,92 L142,110 Z" fill="#C1663B" />
      <path d="M142,92 L192,92 L142,110 Z" fill="#8A4322" />

      <Plant x={70} y={150} scale={0.75} />
      <Plant x={200} y={155} scale={0.6} full />
    </svg>
  );
}
