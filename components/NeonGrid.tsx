export default function NeonGrid() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
      aria-hidden
    >
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="var(--pri)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <g filter="url(#glow)" stroke="var(--grid-line)">
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={`v${i}`} x1={`${i * 3.5}%`} x2={`${i * 3.5}%`} y1="0" y2="100%" />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`h${i}`} x1="0" x2="100%" y1={`${i * 5.5}%`} y2={`${i * 5.5}%`} />
        ))}
      </g>
    </svg>
  );
}
