interface ApertureProps {
  className?: string;
  size?: number;
}

/**
 * Signature motif: a camera-aperture iris rendered from gradient-stroked
 * blades. Echoes both "security" (an iris that opens/closes on trust) and
 * "photography" (an actual aperture) — the one recurring graphic element
 * used across the Hero and Gallery sections.
 */
export default function Aperture({ className = "", size = 120 }: ApertureProps) {
  const blades = 6;
  const radius = size / 2;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="apertureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <g transform={`translate(${radius}, ${radius})`}>
        {Array.from({ length: blades }).map((_, i) => {
          const angle = (360 / blades) * i;
          return (
            <path
              key={i}
              d="M0,0 L0,-50 A50,50 0 0,1 21.65,-45.32 Z"
              fill="none"
              stroke="url(#apertureGradient)"
              strokeWidth="1.4"
              strokeLinejoin="round"
              opacity={0.55}
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="14" fill="none" stroke="url(#apertureGradient)" strokeWidth="1.4" opacity="0.8" />
      </g>
    </svg>
  );
}
