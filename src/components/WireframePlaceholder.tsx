interface WireframePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function WireframePlaceholder({
  label,
  aspectRatio = 'aspect-video',
  className = '',
}: WireframePlaceholderProps) {
  const aspectClass = aspectRatio === '' ? 'h-full w-full' : aspectRatio;

  return (
    <div
      className={`bg-navy-100 border-2 border-dashed border-navy-300 w-full ${aspectClass} flex flex-col items-center justify-center ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-navy-400 mb-3"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <path d="M22 17L16.5 11.5 12.5 15.5 9 12 2 19" />
      </svg>
      <p className="text-sm font-mono text-navy-500 tracking-wide text-center max-w-xs px-4">
        {label}
      </p>
    </div>
  );
}
