import { Note } from './Note';
import { Plant } from './Plant';
import { SkyBackdrop, GroundBand } from './Backdrop';

export function PersonalizingIllustration() {
  return (
    <svg
      viewBox="0 0 260 200"
      className="w-full max-w-[240px] lg:max-w-[280px]"
      aria-hidden="true"
    >
      <SkyBackdrop
        id="pz-sky"
        width={260}
        height={200}
        top="#FEFCFA"
        bottom="#FBEEE7"
      />

      <GroundBand
        width={260}
        y={166}
        height={34}
        farColor="#F1E6D8"
        nearColor="#E4D3BE"
      />

      <ellipse cx="130" cy="176" rx="65" ry="7" fill="#2C2620" opacity="0.07" />

      <Plant x={40} y={156} scale={0.65} />

      {/* sparkles */}
      <path d="M200,44 L203,51 L210,54 L203,57 L200,64 L197,57 L190,54 L197,51 Z" fill="#D98A5E" />
      <path d="M216,72 L218,76 L222,78 L218,80 L216,84 L214,80 L210,78 L214,76 Z" fill="#7C8F63" />

      <Note x={140} y={110} rotate={6} fill="#FBEEE7">
        <rect x="-9" y="-7" width="18" height="14" rx="2" />
      </Note>

      <Note x={116} y={98} rotate={-5} fill="#F1F4EC">
        <line x1="-9" y1="-3" x2="9" y2="-3" />
        <line x1="-9" y1="3" x2="4" y2="3" />
      </Note>

      <Note x={128} y={86} rotate={2} fill="#FEFCFA">
        <path d="M-7,0 L-2,6 L8,-6" strokeWidth="2.5" />
      </Note>
    </svg>
  );
}
