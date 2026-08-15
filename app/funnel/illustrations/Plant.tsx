interface PlantProps {
  x?: number;
  y?: number;
  scale?: number;
  full?: boolean;
}

export function Plant({ x = 0, y = 0, scale = 1, full = false }: PlantProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-11,2 L11,2 L8,26 L-8,26 Z" fill="#E4D3BE" />
      <path d="M1,2 L11,2 L8,26 L2,26 Z" fill="#D9C4A9" />
      <rect x="-12" y="-2" width="24" height="6" rx="2.5" fill="#F1E6D8" />
      {full ? (
        <>
          <ellipse
            cx="-11"
            cy="-17"
            rx="13"
            ry="6"
            fill="#7C8F63"
            transform="rotate(-32 -11 -17)"
          />
          <ellipse
            cx="11"
            cy="-17"
            rx="13"
            ry="6"
            fill="#7C8F63"
            transform="rotate(32 11 -17)"
          />
          <ellipse cx="0" cy="-28" rx="7" ry="15" fill="#7C8F63" />
          <ellipse
            cx="4"
            cy="-19"
            rx="8"
            ry="3"
            fill="#64744E"
            transform="rotate(32 4 -19)"
          />
          <ellipse cx="2.5" cy="-30" rx="3" ry="9" fill="#64744E" />
        </>
      ) : (
        <>
          <ellipse
            cx="-7"
            cy="-10"
            rx="9"
            ry="4"
            fill="#7C8F63"
            transform="rotate(-28 -7 -10)"
          />
          <ellipse
            cx="7"
            cy="-6"
            rx="9"
            ry="4"
            fill="#7C8F63"
            transform="rotate(10 7 -6)"
          />
          <ellipse
            cx="15"
            cy="-12"
            rx="8"
            ry="3.5"
            fill="#7C8F63"
            transform="rotate(28 15 -12)"
          />
          <ellipse
            cx="9"
            cy="-7"
            rx="6"
            ry="2.3"
            fill="#64744E"
            transform="rotate(10 9 -7)"
          />
        </>
      )}
    </g>
  );
}
