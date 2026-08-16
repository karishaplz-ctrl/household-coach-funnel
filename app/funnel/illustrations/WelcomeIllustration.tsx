import { Plant } from './Plant';
import { SkyBackdrop, GroundBand } from './Backdrop';

export function WelcomeIllustration() {
  return (
    <svg
      viewBox="0 0 260 190"
      className="w-full max-w-[240px] lg:max-w-[280px]"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="wel-pad">
          <rect x="70" y="46" width="120" height="104" rx="10" />
        </clipPath>
      </defs>

      <SkyBackdrop
        id="wel-sky"
        width={260}
        height={190}
        top="#FEFCFA"
        bottom="#F1F4EC"
      />

      <GroundBand
        width={260}
        y={158}
        height={32}
        farColor="#DFE7D3"
        nearColor="#F1E6D8"
      />

      <ellipse cx="130" cy="168" rx="70" ry="7" fill="#2C2620" opacity="0.07" />

      <Plant x={38} y={148} scale={0.65} />

      {/* sparkles */}
      <path d="M198,38 L201,45 L208,48 L201,51 L198,58 L195,51 L188,48 L195,45 Z" fill="#D98A5E" />
      <path d="M215,60 L217,64 L221,66 L217,68 L215,72 L213,68 L209,66 L213,64 Z" fill="#7C8F63" />

      {/* notepad */}
      <rect x="70" y="46" width="120" height="104" rx="10" fill="#FEFCFA" stroke="#E4D3BE" strokeWidth="2" />
      <g clipPath="url(#wel-pad)">
        <rect x="150" y="40" width="60" height="120" fill="#F1E6D8" opacity="0.7" />
      </g>

      {/* spiral binding */}
      <circle cx="85" cy="46" r="3" fill="#5B5148" />
      <circle cx="105" cy="46" r="3" fill="#5B5148" />
      <circle cx="125" cy="46" r="3" fill="#5B5148" />
      <circle cx="145" cy="46" r="3" fill="#5B5148" />
      <circle cx="165" cy="46" r="3" fill="#5B5148" />
      <circle cx="185" cy="46" r="3" fill="#5B5148" />

      {/* handwriting lines */}
      <line x1="84" y1="72" x2="164" y2="72" stroke="#9C9187" strokeWidth="3" strokeLinecap="round" />
      <line x1="84" y1="88" x2="176" y2="88" stroke="#9C9187" strokeWidth="3" strokeLinecap="round" />
      <line x1="84" y1="104" x2="150" y2="104" stroke="#9C9187" strokeWidth="3" strokeLinecap="round" />

      {/* pencil */}
      <g transform="rotate(-28 150 120)">
        <rect x="95" y="112" width="95" height="14" rx="4" fill="#C1663B" />
        <rect x="95" y="120" width="95" height="6" fill="#8A4322" />
        <rect x="82" y="112" width="16" height="14" rx="3" fill="#F1E6D8" />
        <path d="M190,112 L206,119 L190,126 Z" fill="#F3D6C4" />
        <path d="M202,117 L206,119 L202,121 Z" fill="#2C2620" />
      </g>
    </svg>
  );
}
