export default function HandMethodDiagram() {
  const pillars = [
    { label: 'CUSTOMER PROFILE', short: 'P1', height: 120 },
    { label: 'PROCESS DESIGN', short: 'P2', height: 150 },
    { label: 'ORG STRATEGY', short: 'P3', height: 170 },
    { label: 'MEASUREMENT', short: 'P4', height: 145 },
    { label: 'CONTINUOUS IMPROVEMENT', short: 'P5', height: 110 },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-10">
        {/* Desktop SVG */}
        <div className="hidden md:block">
          <svg viewBox="0 0 600 450" className="w-full" style={{ minHeight: '400px' }} xmlns="http://www.w3.org/2000/svg">
            {/* Fingers (bars extending upward from palm) */}
            {pillars.map((pillar, i) => {
              const x = 60 + i * 105;
              const barWidth = 80;
              const barY = 300 - pillar.height;
              return (
                <g key={i}>
                  <rect x={x} y={barY} width={barWidth} height={pillar.height} rx="6" fill="#0c1742" />
                  {/* Pillar number */}
                  <text x={x + barWidth / 2} y={barY + 25} textAnchor="middle" fill="#c9a227" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '14px' }}>
                    PILLAR {i + 1}
                  </text>
                  {/* Pillar label (vertical) */}
                  <text
                    x={x + barWidth / 2}
                    y={barY + pillar.height / 2 + 15}
                    textAnchor="middle"
                    fill="white"
                    style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '10px', letterSpacing: '0.5px' }}
                  >
                    {pillar.label}
                  </text>
                </g>
              );
            })}

            {/* Palm (wide rectangle at bottom) */}
            <rect x="40" y="310" width="520" height="80" rx="12" fill="#0c1742" />
            <text x="300" y="348" textAnchor="middle" fill="#c9a227" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '16px', letterSpacing: '2px' }}>
              TLM — TRANSFORMATIVE LEADERSHIP MASTERY
            </text>
            <text x="300" y="370" textAnchor="middle" fill="white" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '10px' }}>
              The foundation that connects everything
            </text>

            {/* Gold accent lines between fingers and palm */}
            {pillars.map((_, i) => {
              const x = 60 + i * 105 + 40;
              return <line key={`line-${i}`} x1={x} y1="300" x2={x} y2="310" stroke="#c9a227" strokeWidth="2" />;
            })}
          </svg>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex gap-1 justify-center mb-2" style={{ minHeight: '200px', alignItems: 'flex-end' }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-navy-900 rounded-t-md flex flex-col items-center justify-start pt-2 px-1"
                style={{ width: '18%', height: `${pillar.height * 0.7}px` }}
              >
                <span className="font-display text-gold-600 text-[10px]">{pillar.short}</span>
              </div>
            ))}
          </div>
          <div className="bg-navy-900 rounded-lg p-4 text-center">
            <p className="font-display text-gold-600 text-sm tracking-wider">TLM</p>
            <p className="text-white text-[10px]">TRANSFORMATIVE LEADERSHIP MASTERY</p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-3">
        PLACEHOLDER — Custom illustration to be commissioned
      </p>
    </div>
  );
}
