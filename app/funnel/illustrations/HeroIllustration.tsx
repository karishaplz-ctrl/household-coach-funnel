import { Plant } from './Plant';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 340 260"
      className="w-full max-w-[360px]"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hero-back">
          <rect x="30" y="60" width="80" height="150" rx="28" />
        </clipPath>
        <clipPath id="hero-seat">
          <rect x="20" y="150" width="150" height="70" rx="26" />
        </clipPath>
        <clipPath id="hero-arm">
          <rect x="150" y="118" width="34" height="100" rx="16" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="340" height="260" rx="24" fill="#FBF5EC" />

      {/* soft light beam */}
      <path d="M180,0 L340,0 L340,140 L120,260 L60,260 Z" fill="#FBEEE7" opacity="0.55" />

      {/* framed leaf picture */}
      <rect x="252" y="34" width="52" height="62" rx="6" fill="#FEFCFA" stroke="#E4D3BE" strokeWidth="3" />
      <path
        d="M278,80 C278,60 268,52 262,48 M278,80 C278,60 288,52 294,48 M278,80 L278,55"
        fill="none"
        stroke="#7C8F63"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* rug */}
      <ellipse cx="170" cy="232" rx="140" ry="16" fill="#F1E6D8" />

      {/* ground shadow */}
      <ellipse cx="100" cy="222" rx="80" ry="8" fill="#2C2620" opacity="0.07" />

      {/* armchair legs */}
      <rect x="45" y="214" width="7" height="16" rx="2" fill="#5B5148" />
      <rect x="150" y="214" width="7" height="16" rx="2" fill="#5B5148" />

      {/* backrest */}
      <rect x="30" y="60" width="80" height="150" rx="28" fill="#D98A5E" />
      <g clipPath="url(#hero-back)">
        <rect x="80" y="55" width="40" height="160" fill="#A8532C" />
      </g>

      {/* armrest */}
      <rect x="150" y="118" width="34" height="100" rx="16" fill="#D98A5E" />
      <g clipPath="url(#hero-arm)">
        <rect x="167" y="112" width="28" height="112" fill="#A8532C" />
      </g>

      {/* seat base */}
      <rect x="20" y="150" width="150" height="70" rx="26" fill="#C1663B" />
      <g clipPath="url(#hero-seat)">
        <rect x="110" y="144" width="70" height="82" fill="#8A4322" />
      </g>

      {/* cushion */}
      <rect x="40" y="164" width="95" height="46" rx="18" fill="#FEFCFA" />

      {/* side table */}
      <rect x="200" y="168" width="80" height="10" rx="5" fill="#E4D3BE" />
      <rect x="212" y="178" width="4" height="42" fill="#5B5148" />
      <rect x="264" y="178" width="4" height="42" fill="#5B5148" />

      {/* books on table */}
      <rect x="218" y="150" width="36" height="10" rx="2" fill="#DFE7D3" transform="rotate(-2 236 155)" />
      <rect x="216" y="140" width="32" height="9" rx="2" fill="#F3D6C4" transform="rotate(2 232 144)" />
      <line x1="220" y1="144" x2="244" y2="144" stroke="#8A4322" strokeWidth="1" opacity="0.5" />

      <Plant x={260} y={150} scale={1.05} full />
    </svg>
  );
}
