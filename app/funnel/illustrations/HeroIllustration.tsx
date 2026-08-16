import { Plant } from './Plant';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 160 900 340"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="chair-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D98A5E" />
          <stop offset="100%" stopColor="#A8532C" />
        </linearGradient>
      </defs>

      {/* organic backdrop shape, rounded on every side, no straight/sharp edges */}
      <path
        d="M0,330 C0,280 25,245 70,240 C130,232 190,248 250,222 C330,190 410,228 490,202 C570,178 650,212 730,192 C795,178 855,188 885,212 C900,225 900,242 900,260 L900,440 C900,472 875,500 843,500 L57,500 C25,500 0,472 0,440 C-8,400 -5,365 0,330 Z"
        fill="#F6E1D3"
      />

      {/* ground shadows */}
      <ellipse cx="175" cy="388" rx="115" ry="12" fill="#2C2620" opacity="0.06" />
      <ellipse cx="715" cy="470" rx="100" ry="10" fill="#2C2620" opacity="0.05" />

      {/* armchair */}
      <g transform="translate(100,210)">
        <rect x="10" y="0" width="80" height="150" rx="28" fill="url(#chair-grad)" />
        <rect x="120" y="58" width="34" height="100" rx="16" fill="url(#chair-grad)" />
        <rect x="0" y="90" width="150" height="70" rx="26" fill="url(#chair-grad)" />
        <rect x="20" y="104" width="95" height="46" rx="18" fill="#FEFCFA" />
        <rect x="25" y="154" width="7" height="16" rx="2" fill="#5B5148" />
        <rect x="130" y="154" width="7" height="16" rx="2" fill="#5B5148" />
      </g>

      {/* framed leaf picture */}
      <rect
        x="340"
        y="200"
        width="90"
        height="100"
        rx="16"
        fill="#FEFCFA"
        stroke="#E4D3BE"
        strokeWidth="4"
      />
      <path
        d="M385,275 C385,255 370,245 360,238 M385,275 C385,255 400,245 410,238 M385,275 L385,245"
        fill="none"
        stroke="#7C8F63"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* side table with books and plant */}
      <rect x="320" y="380" width="110" height="14" rx="7" fill="#E4D3BE" />
      <rect x="335" y="394" width="6" height="55" fill="#5B5148" />
      <rect x="415" y="394" width="6" height="55" fill="#5B5148" />
      <rect
        x="338"
        y="350"
        width="38"
        height="11"
        rx="3"
        fill="#F3D6C4"
        transform="rotate(2 357 355)"
      />
      <rect
        x="340"
        y="362"
        width="42"
        height="13"
        rx="3"
        fill="#DFE7D3"
        transform="rotate(-2 361 368)"
      />
      <Plant x={400} y={380} scale={1.3} full />

      {/* cabinet */}
      <g>
        <rect
          x="630"
          y="240"
          width="180"
          height="210"
          rx="18"
          fill="#FEFCFA"
          stroke="#E4D3BE"
          strokeWidth="4"
        />
        <line
          x1="720"
          y1="240"
          x2="720"
          y2="450"
          stroke="#E4D3BE"
          strokeWidth="4"
        />
        <line
          x1="630"
          y1="345"
          x2="810"
          y2="345"
          stroke="#E4D3BE"
          strokeWidth="4"
        />
        <rect
          x="650"
          y="448"
          width="10"
          height="30"
          rx="3"
          fill="#5B5148"
          transform="rotate(6 655 448)"
        />
        <rect
          x="790"
          y="448"
          width="10"
          height="30"
          rx="3"
          fill="#5B5148"
          transform="rotate(-6 795 448)"
        />

        {/* vase with trailing vine */}
        <rect x="758" y="210" width="24" height="26" rx="10" fill="#C1663B" />
        <path
          d="M770,212 C792,202 812,218 816,242 C819,262 806,276 796,271"
          fill="none"
          stroke="#7C8F63"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="800"
          cy="224"
          rx="8"
          ry="5"
          fill="#7C8F63"
          transform="rotate(30 800 224)"
        />
        <ellipse
          cx="811"
          cy="245"
          rx="7.5"
          ry="4.5"
          fill="#64744E"
          transform="rotate(55 811 245)"
        />
        <ellipse
          cx="801"
          cy="263"
          rx="6.5"
          ry="4"
          fill="#7C8F63"
          transform="rotate(70 801 263)"
        />
      </g>

      <Plant x={595} y={460} scale={1} full />
    </svg>
  );
}
