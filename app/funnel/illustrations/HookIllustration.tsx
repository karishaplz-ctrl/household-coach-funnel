import { Plant } from './Plant';
import { SkyBackdrop, GroundBand } from './Backdrop';

export function HookIllustration() {
  return (
    <svg
      viewBox="0 0 260 220"
      className="w-full max-w-[240px]"
      aria-hidden="true"
    >
      <SkyBackdrop
        id="hook-sky"
        width={260}
        height={220}
        top="#FEFCFA"
        bottom="#FBEEE7"
      />

      <GroundBand
        width={260}
        y={182}
        height={38}
        farColor="#F1E6D8"
        nearColor="#E4D3BE"
      />

      <ellipse cx="130" cy="196" rx="60" ry="7" fill="#2C2620" opacity="0.08" />

      <Plant x={40} y={172} scale={0.7} />

      {/* clock rim */}
      <circle cx="130" cy="105" r="70" fill="#2C2620" />
      <circle cx="130" cy="105" r="66" fill="#FEFCFA" />
      <path
        d="M130,39 A66,66 0 0,1 196,105 A66,66 0 0,1 130,171"
        fill="none"
        stroke="#E4D3BE"
        strokeWidth="6"
      />

      {/* 15-minute wedge (quarter circle) */}
      <path
        d="M130,105 L130,45 A60,60 0 0,1 190,105 Z"
        fill="#C1663B"
      />
      <path
        d="M130,105 L182,68 A60,60 0 0,1 190,105 Z"
        fill="#A8532C"
      />

      {/* tick marks */}
      <line x1="130" y1="45" x2="130" y2="55" stroke="#2C2620" strokeWidth="3" strokeLinecap="round" />
      <line x1="190" y1="105" x2="180" y2="105" stroke="#2C2620" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="165" x2="130" y2="155" stroke="#2C2620" strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="105" x2="80" y2="105" stroke="#2C2620" strokeWidth="3" strokeLinecap="round" />

      {/* hands */}
      <line x1="130" y1="105" x2="130" y2="52" stroke="#2C2620" strokeWidth="4" strokeLinecap="round" />
      <line x1="130" y1="105" x2="178" y2="105" stroke="#2C2620" strokeWidth="4" strokeLinecap="round" />
      <circle cx="130" cy="105" r="6" fill="#2C2620" />
    </svg>
  );
}
