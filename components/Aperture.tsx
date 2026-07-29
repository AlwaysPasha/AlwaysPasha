type ApertureProps = {
  className?: string;
  spin?: boolean;
};

/**
 * The aperture motif is AlwaysPasha's signature element: thin rotating
 * blades that read as a camera iris (Pasha's photography side) while
 * doubling as a precise, mechanical accent (his engineering side).
 * Used sparingly — hero backdrop, section eyebrows, section dividers.
 */
export default function Aperture({ className = "", spin = false }: ApertureProps) {
  const blades = Array.from({ length: 8 });

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spin ? "animate-spinSlow" : ""} ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {blades.map((_, i) => {
        const angle = (360 / blades.length) * i;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
            opacity={0.4}
          />
        );
      })}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
