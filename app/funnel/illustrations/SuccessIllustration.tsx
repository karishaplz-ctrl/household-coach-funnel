import { Plant } from './Plant';
import { GroundBand } from './Backdrop';

export function SuccessIllustration() {
  return (
    <svg viewBox="0 0 400 170" className="block w-full" aria-hidden="true">
      <defs>
        <radialGradient id="succ-glow" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#FEFCFA" />
          <stop offset="50%" stopColor="#F1F4EC" />
          <stop offset="100%" stopColor="#FEFCFA" />
        </radialGradient>
        <linearGradient id="succ-fade-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEFCFA" />
          <stop offset="100%" stopColor="#FEFCFA" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="170" fill="url(#succ-glow)" />

      <GroundBand
        width={400}
        y={130}
        height={32}
        farColor="#DFE7D3"
        nearColor="#E4D3BE"
      />

      <ellipse cx="170" cy="146" rx="55" ry="6" fill="#2C2620" opacity="0.08" />
      <Plant x={170} y={130} scale={1.3} full />

      {/* sparkles */}
      <path
        d="M84,42 L87,49 L94,52 L87,55 L84,62 L81,55 L74,52 L81,49 Z"
        fill="#D98A5E"
      />
      <path
        d="M320,36 L322,40 L326,42 L322,44 L320,48 L318,44 L314,42 L318,40 Z"
        fill="#7C8F63"
      />
      <path
        d="M300,84 L302,88 L306,90 L302,92 L300,96 L298,92 L294,90 L298,88 Z"
        fill="#C1663B"
      />

      {/* checkmark badge */}
      <circle cx="272" cy="88" r="22" fill="#DFE7D3" />
      <path
        d="M263,88 L269,94 L282,79"
        fill="none"
        stroke="#64744E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect x="0" y="0" width="400" height="48" fill="url(#succ-fade-top)" />
    </svg>
  );
}
