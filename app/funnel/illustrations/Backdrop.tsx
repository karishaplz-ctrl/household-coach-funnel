interface SkyBackdropProps {
  id: string;
  width: number;
  height: number;
  top: string;
  bottom: string;
  rx?: number;
}

export function SkyBackdrop({
  id,
  width,
  height,
  top,
  bottom,
  rx = 24,
}: SkyBackdropProps) {
  return (
    <>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx={rx}
        fill={`url(#${id})`}
      />
    </>
  );
}

interface GroundBandProps {
  width: number;
  y: number;
  height?: number;
  farColor: string;
  nearColor: string;
}

export function GroundBand({
  width,
  y,
  height = 30,
  farColor,
  nearColor,
}: GroundBandProps) {
  const bottom = y + height;
  return (
    <g>
      <path
        d={`M0,${bottom} L0,${y + height * 0.45} Q${width * 0.25},${y} ${width * 0.5},${y + height * 0.3} T${width},${y + height * 0.12} L${width},${bottom} Z`}
        fill={farColor}
      />
      <path
        d={`M0,${bottom} L0,${y + height * 0.7} Q${width * 0.3},${y + height * 0.32} ${width * 0.55},${y + height * 0.62} T${width},${y + height * 0.5} L${width},${bottom} Z`}
        fill={nearColor}
      />
    </g>
  );
}
