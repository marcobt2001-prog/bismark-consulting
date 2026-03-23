export default function ConsultingFailureCycle() {
  const steps = [
    'Engage Consultant',
    'Analyze & Recommend',
    'Consultants Leave',
    'Results Decay',
    'Call New Consultant',
  ];

  const positions = [
    { x: 200, y: 30 },
    { x: 340, y: 120 },
    { x: 290, y: 270 },
    { x: 110, y: 270 },
    { x: 60, y: 120 },
  ];

  return (
    <div className="my-12 max-w-lg mx-auto">
      <svg viewBox="0 0 400 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-cfc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" />
          </marker>
        </defs>

        {/* Arrows between nodes */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % 5];
          const dx = next.x - pos.x;
          const dy = next.y - pos.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const nx = dx / len;
          const ny = dy / len;
          const startX = pos.x + nx * 50;
          const startY = pos.y + 15 + ny * 25;
          const endX = next.x - nx * 50;
          const endY = next.y + 15 - ny * 25;
          return (
            <line
              key={`arrow-${i}`}
              x1={startX} y1={startY}
              x2={endX} y2={endY}
              stroke="#c9a227" strokeWidth="2"
              markerEnd="url(#arrow-cfc)"
            />
          );
        })}

        {/* Center broken cycle indicator */}
        <circle cx="200" cy="170" r="35" fill="none" stroke="#c0392b" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
        <text x="200" y="165" textAnchor="middle" fill="#c0392b" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '22px', fontWeight: 'bold' }}>×</text>

        {/* Center label */}
        <text x="200" y="225" textAnchor="middle" fill="#c9a227" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '9px', letterSpacing: '1px' }}>THE CYCLE BISMARK</text>
        <text x="200" y="237" textAnchor="middle" fill="#c9a227" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '9px', letterSpacing: '1px' }}>WAS BUILT TO BREAK</text>

        {/* Nodes */}
        {positions.map((pos, i) => (
          <g key={i}>
            <rect x={pos.x - 55} y={pos.y} width="110" height="30" rx="15" fill="#0c1742" />
            <text x={pos.x} y={pos.y + 19} textAnchor="middle" fill="white" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontWeight: 500 }}>
              {steps[i]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
