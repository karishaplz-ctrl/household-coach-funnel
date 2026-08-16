import { Plant } from './Plant';
import { GroundBand } from './Backdrop';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 700 330"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hero-back">
          <rect x="70" y="110" width="80" height="150" rx="28" />
        </clipPath>
        <clipPath id="hero-seat">
          <rect x="60" y="200" width="150" height="70" rx="26" />
        </clipPath>
        <clipPath id="hero-arm">
          <rect x="190" y="168" width="34" height="100" rx="16" />
        </clipPath>

        <radialGradient id="hero-glow" cx="50%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#FEFCFA" />
          <stop offset="55%" stopColor="#FBEEE7" />
          <stop offset="100%" stopColor="#FBF5EC" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="700" height="330" fill="url(#hero-glow)" />

      {/* soft light beam */}
      <path
        d="M420,0 L700,0 L700,210 L280,330 L160,330 Z"
        fill="#FBEEE7"
        opacity="0.55"
      />

      {/* sparkles */}
      <path
        d="M600,74 L603,81 L610,84 L603,87 L600,94 L597,87 L590,84 L597,81 Z"
        fill="#D98A5E"
        opacity="0.7"
      />
      <path
        d="M640,120 L642,124 L646,126 L642,128 L640,132 L638,128 L634,126 L638,124 Z"
        fill="#7C8F63"
        opacity="0.7"
      />

      {/* framed leaf picture */}
      <rect
        x="292"
        y="84"
        width="52"
        height="62"
        rx="6"
        fill="#FEFCFA"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <path
        d="M318,130 C318,110 308,102 302,98 M318,130 C318,110 328,102 334,98 M318,130 L318,105"
        fill="none"
        stroke="#7C8F63"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* floor band */}
      <GroundBand
        width={700}
        y={268}
        height={52}
        farColor="#F1E6D8"
        nearColor="#E4D3BE"
      />

      {/* ground shadow */}
      <ellipse cx="140" cy="272" rx="80" ry="8" fill="#2C2620" opacity="0.07" />
      <ellipse cx="500" cy="278" rx="70" ry="7" fill="#2C2620" opacity="0.06" />

      {/* armchair legs */}
      <rect x="85" y="264" width="7" height="16" rx="2" fill="#5B5148" />
      <rect x="190" y="264" width="7" height="16" rx="2" fill="#5B5148" />

      {/* backrest */}
      <rect x="70" y="110" width="80" height="150" rx="28" fill="#D98A5E" />
      <g clipPath="url(#hero-back)">
        <rect x="120" y="105" width="40" height="160" fill="#A8532C" />
      </g>

      {/* armrest */}
      <rect x="190" y="168" width="34" height="100" rx="16" fill="#D98A5E" />
      <g clipPath="url(#hero-arm)">
        <rect x="207" y="162" width="28" height="112" fill="#A8532C" />
      </g>

      {/* seat base */}
      <rect x="60" y="200" width="150" height="70" rx="26" fill="#C1663B" />
      <g clipPath="url(#hero-seat)">
        <rect x="150" y="194" width="70" height="82" fill="#8A4322" />
      </g>

      {/* cushion */}
      <rect x="80" y="214" width="95" height="46" rx="18" fill="#FEFCFA" />

      {/* side table */}
      <rect x="240" y="218" width="80" height="10" rx="5" fill="#E4D3BE" />
      <rect x="252" y="228" width="4" height="42" fill="#5B5148" />
      <rect x="304" y="228" width="4" height="42" fill="#5B5148" />

      {/* books on table */}
      <rect
        x="258"
        y="200"
        width="36"
        height="10"
        rx="2"
        fill="#DFE7D3"
        transform="rotate(-2 276 205)"
      />
      <rect
        x="256"
        y="190"
        width="32"
        height="9"
        rx="2"
        fill="#F3D6C4"
        transform="rotate(2 272 194)"
      />
      <line
        x1="260"
        y1="194"
        x2="284"
        y2="194"
        stroke="#8A4322"
        strokeWidth="1"
        opacity="0.5"
      />

      <Plant x={300} y={200} scale={1.05} full />

      {/* window on the right */}
      <rect
        x="480"
        y="90"
        width="160"
        height="180"
        rx="12"
        fill="#FEFCFA"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <line
        x1="560"
        y1="90"
        x2="560"
        y2="270"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <line
        x1="480"
        y1="180"
        x2="640"
        y2="180"
        stroke="#E4D3BE"
        strokeWidth="3"
      />

      <Plant x={520} y={272} scale={0.75} />
      <Plant x={610} y={272} scale={0.6} full />
    </svg>
  );
}
