import { Plant } from './Plant';
import { Note } from './Note';

export function OverwhelmedIllustration() {
  return (
    <svg
      viewBox="0 0 320 250"
      className="w-full max-w-[280px]"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="ov-torso">
          <rect x="120" y="148" width="80" height="82" rx="28" />
        </clipPath>
        <clipPath id="ov-legs">
          <path d="M108,236 C108,204 130,193 160,193 C190,193 212,204 212,236 C212,252 190,260 160,260 C130,260 108,252 108,236 Z" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="320" height="250" rx="24" fill="#FBF5EC" />

      <Plant x={30} y={214} scale={0.9} />

      {/* connector lines */}
      <path
        d="M84,64 Q108,72 128,94"
        fill="none"
        stroke="#9C9187"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M236,64 Q212,72 192,94"
        fill="none"
        stroke="#9C9187"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M64,148 Q95,132 122,118"
        fill="none"
        stroke="#9C9187"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M256,148 Q225,132 198,118"
        fill="none"
        stroke="#9C9187"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* ground shadow */}
      <ellipse cx="160" cy="245" rx="70" ry="7" fill="#2C2620" opacity="0.08" />

      {/* seated legs */}
      <path
        d="M108,236 C108,204 130,193 160,193 C190,193 212,204 212,236 C212,252 190,260 160,260 C130,260 108,252 108,236 Z"
        fill="#7C8F63"
      />
      <g clipPath="url(#ov-legs)">
        <rect x="184" y="185" width="40" height="85" fill="#64744E" opacity="0.9" />
      </g>

      {/* torso */}
      <rect x="120" y="148" width="80" height="82" rx="28" fill="#D98A5E" />
      <g clipPath="url(#ov-torso)">
        <rect x="180" y="140" width="30" height="100" fill="#A8532C" opacity="0.9" />
      </g>

      {/* arms — right arm reads slightly darker (shadow side) */}
      <path
        d="M132,166 C108,158 106,132 121,114"
        fill="none"
        stroke="#D98A5E"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M188,166 C212,158 214,132 199,114"
        fill="none"
        stroke="#A8532C"
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* neck */}
      <rect x="149" y="138" width="22" height="20" fill="#F3D6C4" />

      {/* head */}
      <circle cx="160" cy="116" r="34" fill="#F3D6C4" />
      <ellipse cx="177" cy="128" rx="15" ry="19" fill="#D98A5E" opacity="0.3" />

      {/* hair */}
      <path
        d="M125,108 C125,76 160,68 160,68 C160,68 195,76 195,108 C195,92 178,86 160,86 C142,86 125,92 125,108 Z"
        fill="#2C2620"
      />
      <circle cx="160" cy="64" r="13" fill="#2C2620" />
      <ellipse cx="145" cy="80" rx="9" ry="6" fill="#5B5148" opacity="0.5" />

      {/* hands covering face */}
      <circle cx="127" cy="110" r="15" fill="#F3D6C4" />
      <ellipse cx="133" cy="115" rx="6" ry="8" fill="#D98A5E" opacity="0.3" />
      <circle cx="193" cy="110" r="15" fill="#F3D6C4" />
      <ellipse cx="199" cy="115" rx="6" ry="8" fill="#D98A5E" opacity="0.3" />

      {/* sticky notes */}
      <Note x={62} y={52} rotate={-8} fill="#FEFCFA">
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          stroke="none"
          fill="#5B5148"
        >
          ?
        </text>
      </Note>

      <Note x={252} y={50} rotate={7} fill="#FBEEE7">
        <rect x="-8" y="-6" width="16" height="12" rx="2" />
        <line x1="-8" y1="0" x2="8" y2="0" />
      </Note>

      <Note x={48} y={158} rotate={-6} fill="#F1F4EC">
        <circle cx="0" cy="0" r="8" />
        <line x1="0" y1="0" x2="0" y2="-5" />
        <line x1="0" y1="0" x2="4" y2="2" />
      </Note>

      <Note x={270} y={158} rotate={8} fill="#FEFCFA">
        <path d="M0,5 C-8,-2 -8,-9 0,-4 C8,-9 8,-2 0,5 Z" fill="#5B5148" />
      </Note>
    </svg>
  );
}
