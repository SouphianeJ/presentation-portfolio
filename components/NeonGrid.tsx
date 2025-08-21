export default function NeonGrid() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="var(--pri)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
        <g filter="url(#glow)" stroke="var(--grid-line)" strokeWidth="0.1">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * (100 / 31)} x2={(i + 1) * (100 / 31)} y1="0" y2="100" />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2="100" y1={(i + 1) * (100 / 19)} y2={(i + 1) * (100 / 19)} />
          ))}
        </g>
      </svg>
    </div>
  );
}

