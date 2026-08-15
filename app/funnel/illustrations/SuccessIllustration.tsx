import { Plant } from './Plant';

export function SuccessIllustration() {
  return (
    <svg
      viewBox="0 0 220 190"
      className="w-full max-w-[190px]"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="220" height="190" rx="24" fill="#FBF5EC" />

      <ellipse cx="110" cy="170" rx="60" ry="7" fill="#2C2620" opacity="0.08" />

      <Plant x={110} y={148} scale={1.5} full />

      {/* sparkles */}
      <path d="M44,54 L47,61 L54,64 L47,67 L44,74 L41,67 L34,64 L41,61 Z" fill="#D98A5E" />
      <path d="M176,50 L178,54 L182,56 L178,58 L176,62 L174,58 L170,56 L174,54 Z" fill="#7C8F63" />
      <path d="M170,100 L172,104 L176,106 L172,108 L170,112 L168,108 L164,106 L168,104 Z" fill="#C1663B" />

      {/* checkmark badge */}
      <circle cx="150" cy="130" r="20" fill="#DFE7D3" />
      <path
        d="M142,130 L148,136 L160,122"
        fill="none"
        stroke="#64744E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
