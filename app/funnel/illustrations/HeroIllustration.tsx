import { Plant } from './Plant';
import { GroundBand } from './Backdrop';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 700 300"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hero-back">
          <rect x="70" y="80" width="80" height="150" rx="28" />
        </clipPath>
        <clipPath id="hero-seat">
          <rect x="60" y="170" width="150" height="70" rx="26" />
        </clipPath>
        <clipPath id="hero-arm">
          <rect x="190" y="138" width="34" height="100" rx="16" />
        </clipPath>

        <radialGradient id="hero-glow" cx="50%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#FEFCFA" />
          <stop offset="55%" stopColor="#FBEEE7" />
          <stop offset="100%" stopColor="#FBF5EC" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="700" height="300" fill="url(#hero-glow)" />

      {/* soft light beam */}
      <path
        d="M420,0 L700,0 L700,180 L280,300 L160,300 Z"
        fill="#FBEEE7"
        opacity="0.55"
      />

      {/* sparkles */}
      <path
        d="M600,44 L603,51 L610,54 L603,57 L600,64 L597,57 L590,54 L597,51 Z"
        fill="#D98A5E"
        opacity="0.7"
      />
      <path
        d="M640,90 L642,94 L646,96 L642,98 L640,102 L638,98 L634,96 L638,94 Z"
        fill="#7C8F63"
        opacity="0.7"
      />

      {/* framed leaf picture */}
      <rect
        x="292"
        y="54"
        width="52"
        height="62"
        rx="6"
        fill="#FEFCFA"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <path
        d="M318,100 C318,80 308,72 302,68 M318,100 C318,80 328,72 334,68 M318,100 L318,75"
        fill="none"
        stroke="#7C8F63"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* floor band */}
      <GroundBand
        width={700}
        y={238}
        height={52}
        farColor="#F1E6D8"
        nearColor="#E4D3BE"
      />

      {/* ground shadow */}
      <ellipse cx="140" cy="242" rx="80" ry="8" fill="#2C2620" opacity="0.07" />
      <ellipse cx="500" cy="248" rx="70" ry="7" fill="#2C2620" opacity="0.06" />

      {/* armchair legs */}
      <rect x="85" y="234" width="7" height="16" rx="2" fill="#5B5148" />
      <rect x="190" y="234" width="7" height="16" rx="2" fill="#5B5148" />

      {/* backrest */}
      <rect x="70" y="80" width="80" height="150" rx="28" fill="#D98A5E" />
      <g clipPath="url(#hero-back)">
        <rect x="120" y="75" width="40" height="160" fill="#A8532C" />
      </g>

      {/* armrest */}
      <rect x="190" y="138" width="34" height="100" rx="16" fill="#D98A5E" />
      <g clipPath="url(#hero-arm)">
        <rect x="207" y="132" width="28" height="112" fill="#A8532C" />
      </g>

      {/* seat base */}
      <rect x="60" y="170" width="150" height="70" rx="26" fill="#C1663B" />
      <g clipPath="url(#hero-seat)">
        <rect x="150" y="164" width="70" height="82" fill="#8A4322" />
      </g>

      {/* cushion */}
      <rect x="80" y="184" width="95" height="46" rx="18" fill="#FEFCFA" />

      {/* side table */}
      <rect x="240" y="188" width="80" height="10" rx="5" fill="#E4D3BE" />
      <rect x="252" y="198" width="4" height="42" fill="#5B5148" />
      <rect x="304" y="198" width="4" height="42" fill="#5B5148" />

      {/* books on table */}
      <rect
        x="258"
        y="170"
        width="36"
        height="10"
        rx="2"
        fill="#DFE7D3"
        transform="rotate(-2 276 175)"
      />
      <rect
        x="256"
        y="160"
        width="32"
        height="9"
        rx="2"
        fill="#F3D6C4"
        transform="rotate(2 272 164)"
      />
      <line
        x1="260"
        y1="164"
        x2="284"
        y2="164"
        stroke="#8A4322"
        strokeWidth="1"
        opacity="0.5"
      />

      <Plant x={300} y={170} scale={1.05} full />

      {/* window on the right */}
      <rect
        x="480"
        y="60"
        width="160"
        height="180"
        rx="12"
        fill="#FEFCFA"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <line
        x1="560"
        y1="60"
        x2="560"
        y2="240"
        stroke="#E4D3BE"
        strokeWidth="3"
      />
      <line
        x1="480"
        y1="150"
        x2="640"
        y2="150"
        stroke="#E4D3BE"
        strokeWidth="3"
      />

      <Plant x={520} y={242} scale={0.75} />
      <Plant x={610} y={242} scale={0.6} full />
    </svg>
  );
}
