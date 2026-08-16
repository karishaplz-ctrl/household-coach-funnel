import { Plant } from './Plant';
import { GroundBand } from './Backdrop';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 640 420"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hero-back">
          <rect x="110" y="110" width="80" height="150" rx="28" />
        </clipPath>
        <clipPath id="hero-seat">
          <rect x="100" y="200" width="150" height="70" rx="26" />
        </clipPath>
        <clipPath id="hero-arm">
          <rect x="230" y="168" width="34" height="100" rx="16" />
        </clipPath>

        <filter
          id="hero-blur"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="36" />
        </filter>
      </defs>

      {/* soft blurred halo — no hard edge, floats like an island */}
      <ellipse
        cx="320"
        cy="230"
        rx="280"
        ry="165"
        fill="#FBEEE7"
        filter="url(#hero-blur)"
      />
      <ellipse
        cx="320"
        cy="230"
        rx="170"
        ry="100"
        fill="#FEFCFA"
        opacity="0.8"
        filter="url(#hero-blur)"
      />

      <g transform="translate(0,96) scale(0.605)">
        {/* sparkles */}
        <path
          d="M920,74 L923,81 L930,84 L923,87 L920,94 L917,87 L910,84 L917,81 Z"
          fill="#D98A5E"
          opacity="0.7"
        />
        <path
          d="M960,120 L962,124 L966,126 L962,128 L960,132 L958,128 L954,126 L958,124 Z"
          fill="#7C8F63"
          opacity="0.7"
        />

        {/* framed leaf picture */}
        <rect
          x="422"
          y="84"
          width="52"
          height="62"
          rx="6"
          fill="#FEFCFA"
          stroke="#E4D3BE"
          strokeWidth="3"
        />
        <path
          d="M448,130 C448,110 438,102 432,98 M448,130 C448,110 458,102 464,98 M448,130 L448,105"
          fill="none"
          stroke="#7C8F63"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* floor band */}
        <GroundBand
          width={1000}
          y={268}
          height={52}
          farColor="#F1E6D8"
          nearColor="#E4D3BE"
        />

        {/* ground shadow */}
        <ellipse
          cx="180"
          cy="272"
          rx="80"
          ry="8"
          fill="#2C2620"
          opacity="0.07"
        />
        <ellipse
          cx="820"
          cy="278"
          rx="70"
          ry="7"
          fill="#2C2620"
          opacity="0.06"
        />

        {/* armchair legs */}
        <rect x="125" y="264" width="7" height="16" rx="2" fill="#5B5148" />
        <rect x="230" y="264" width="7" height="16" rx="2" fill="#5B5148" />

        {/* backrest */}
        <rect x="110" y="110" width="80" height="150" rx="28" fill="#D98A5E" />
        <g clipPath="url(#hero-back)">
          <rect x="160" y="105" width="40" height="160" fill="#A8532C" />
        </g>

        {/* armrest */}
        <rect x="230" y="168" width="34" height="100" rx="16" fill="#D98A5E" />
        <g clipPath="url(#hero-arm)">
          <rect x="247" y="162" width="28" height="112" fill="#A8532C" />
        </g>

        {/* seat base */}
        <rect x="100" y="200" width="150" height="70" rx="26" fill="#C1663B" />
        <g clipPath="url(#hero-seat)">
          <rect x="190" y="194" width="70" height="82" fill="#8A4322" />
        </g>

        {/* cushion */}
        <rect x="120" y="214" width="95" height="46" rx="18" fill="#FEFCFA" />

        {/* side table */}
        <rect x="370" y="218" width="80" height="10" rx="5" fill="#E4D3BE" />
        <rect x="382" y="228" width="4" height="42" fill="#5B5148" />
        <rect x="434" y="228" width="4" height="42" fill="#5B5148" />

        {/* books on table */}
        <rect
          x="388"
          y="200"
          width="36"
          height="10"
          rx="2"
          fill="#DFE7D3"
          transform="rotate(-2 406 205)"
        />
        <rect
          x="386"
          y="190"
          width="32"
          height="9"
          rx="2"
          fill="#F3D6C4"
          transform="rotate(2 402 194)"
        />
        <line
          x1="390"
          y1="194"
          x2="414"
          y2="194"
          stroke="#8A4322"
          strokeWidth="1"
          opacity="0.5"
        />

        <Plant x={430} y={200} scale={1.05} full />

        {/* window on the right */}
        <rect
          x="800"
          y="90"
          width="160"
          height="180"
          rx="12"
          fill="#FEFCFA"
          stroke="#E4D3BE"
          strokeWidth="3"
        />
        <line
          x1="880"
          y1="90"
          x2="880"
          y2="270"
          stroke="#E4D3BE"
          strokeWidth="3"
        />
        <line
          x1="800"
          y1="180"
          x2="960"
          y2="180"
          stroke="#E4D3BE"
          strokeWidth="3"
        />

        <Plant x={840} y={272} scale={0.75} />
        <Plant x={930} y={272} scale={0.6} full />
      </g>
    </svg>
  );
}
