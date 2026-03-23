export default function PillarStaircase() {
  const pillars = [
    { num: 5, label: 'PILLAR 5 — CONTINUOUS IMPROVEMENT', width: 45 },
    { num: 4, label: 'PILLAR 4 — MEASUREMENT', width: 55 },
    { num: 3, label: 'PILLAR 3 — ORGANIZATIONAL STRATEGY', width: 68 },
    { num: 2, label: 'PILLAR 2 — PROCESS DESIGN & ENGINEERING', width: 82 },
    { num: 1, label: 'PILLAR 1 — CUSTOMER PROFILE', width: 100 },
  ];

  return (
    <div className="my-12 max-w-4xl mx-auto">
      {/* Desktop layout */}
      <div className="hidden md:block relative">
        <svg viewBox="0 0 800 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical gold line on left */}
          <line x1="60" y1="20" x2="60" y2="280" stroke="#c9a227" strokeWidth="2" />
          {/* Arrow head */}
          <polygon points="55,25 60,10 65,25" fill="#c9a227" />
          {/* SEQUENCE label */}
          <text x="30" y="160" textAnchor="middle" fill="#c9a227" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '12px', letterSpacing: '2px' }} transform="rotate(-90, 30, 160)">
            SEQUENCE
          </text>

          {/* Staircase bars (top=narrowest, bottom=widest) */}
          {pillars.map((pillar, i) => {
            const y = 20 + i * 54;
            const barWidth = pillar.width * 6.5;
            return (
              <g key={i}>
                <rect x="80" y={y} width={barWidth} height="44" rx="4" fill="#0c1742" />
                <text x="100" y={y + 28} fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '14px', letterSpacing: '1px' }}>
                  {pillar.label}
                </text>
              </g>
            );
          })}

          {/* Annotation callout between Pillar 2 and 3 */}
          <line x1="520" y1="145" x2="620" y2="145" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="520" cy="145" r="3" fill="#9ca3af" />
          <text x="630" y="140" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontStyle: 'italic' }}>
            You can&apos;t restructure around
          </text>
          <text x="630" y="155" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontStyle: 'italic' }}>
            processes you haven&apos;t redesigned
          </text>
        </svg>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-0.5 h-6 bg-gold-600" />
          <span className="font-display text-xs text-gold-600 tracking-wider">↑ SEQUENCE</span>
        </div>
        {pillars.map((pillar, i) => (
          <div key={i} className="bg-navy-900 rounded px-4 py-3" style={{ width: `${pillar.width}%` }}>
            <p className="font-display text-white text-xs tracking-wider">{pillar.label}</p>
          </div>
        ))}
        <p className="text-gray-500 text-xs italic mt-4 pl-2">
          You can&apos;t restructure around processes you haven&apos;t redesigned
        </p>
      </div>
    </div>
  );
}
