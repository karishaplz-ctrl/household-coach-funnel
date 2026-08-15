interface NoteProps {
  x: number;
  y: number;
  rotate: number;
  fill: string;
  children: React.ReactNode;
}

export function Note({ x, y, rotate, fill, children }: NoteProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect
        x={-20}
        y={-18}
        width={44}
        height={40}
        rx={6}
        fill="#2C2620"
        opacity={0.1}
      />
      <rect
        x={-22}
        y={-20}
        width={44}
        height={40}
        rx={6}
        fill={fill}
        stroke="#E4D3BE"
        strokeWidth={1.5}
      />
      <g stroke="#5B5148" strokeWidth={1.5} fill="none" strokeLinecap="round">
        {children}
      </g>
    </g>
  );
}
