export default function PillarCircularFlow() {
  const pillars = [
    { num: '01', label: 'CUSTOMER PROFILE' },
    { num: '02', label: 'PROCESS DESIGN' },
    { num: '03', label: 'ORG STRATEGY' },
    { num: '04', label: 'MEASUREMENT' },
    { num: '05', label: 'CONT. IMPROVEMENT' },
  ];

  const cx = 320;
  const cy = 215;
  const r = 160;
  const nodeW = 130;
  const nodeH = 60;
  const viewBoxW = 660;
  const viewBoxH = 420;

  // Convert angle (degrees, clockwise from top) to point on circle
  const pointOnCircle = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + r * Math.sin(rad),
      y: cy - r * Math.cos(rad),
    };
  };

  // Five evenly spaced nodes: 0°, 72°, 144°, 216°, 288° (clockwise from top)
  const nodes = pillars.map((p, i) => ({
    ...p,
    angle: i * 72,
    ...pointOnCircle(i * 72),
  }));

  // Curved arrows between consecutive nodes
  // 22° offset on each side keeps the arrow clear of the node boxes
  const arrowOffset = 22;
  const arrows = nodes.map((_, i) => {
    const startDeg = i * 72 + arrowOffset;
    const endDegRaw = ((i + 1) % nodes.length) * 72 - arrowOffset;
    const endDeg = endDegRaw < startDeg ? endDegRaw + 360 : endDegRaw;
    const startPt = pointOnCircle(startDeg);
    const endPt = pointOnCircle(endDeg);
    const endRad = (endDeg * Math.PI) / 180;
    return {
      startPt,
      endPt,
      tangentX: Math.cos(endRad),
      tangentY: Math.sin(endRad),
    };
  });

  // "Most firms start here" red callout — placed to the right of node 03 (lower right)
  const node03 = nodes[2];
  const calloutX = node03.x + nodeW / 2 + 26;
  const calloutY = node03.y - 13;
  const calloutW = 80;
  const calloutH = 26;

  return (
    <div className="my-8">
      <svg
        viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="The Bismark Method five pillars arranged as a clockwise cycle"
      >
        <title>The Bismark Method — Five Pillars Cycle</title>

        {/* Curved gold arrows */}
        {arrows.map((a, i) => {
          const pathD = `M ${a.startPt.x} ${a.startPt.y} A ${r} ${r} 0 0 1 ${a.endPt.x} ${a.endPt.y}`;
          const arrowLen = 10;
          const halfWidth = 5;
          const baseX = a.endPt.x - arrowLen * a.tangentX;
          const baseY = a.endPt.y - arrowLen * a.tangentY;
          const perpX = -a.tangentY;
          const perpY = a.tangentX;
          const p1x = baseX + halfWidth * perpX;
          const p1y = baseY + halfWidth * perpY;
          const p2x = baseX - halfWidth * perpX;
          const p2y = baseY - halfWidth * perpY;
          return (
            <g key={`arrow-${i}`}>
              <path d={pathD} fill="none" stroke="#c9a227" strokeWidth={2.5} />
              <polygon
                points={`${a.endPt.x},${a.endPt.y} ${p1x},${p1y} ${p2x},${p2y}`}
                fill="#c9a227"
              />
            </g>
          );
        })}

        {/* Pillar nodes */}
        {nodes.map((n) => {
          const boxX = n.x - nodeW / 2;
          const boxY = n.y - nodeH / 2;
          return (
            <g key={n.num}>
              <rect x={boxX} y={boxY} width={nodeW} height={nodeH} rx={6} fill="#0c1742" />
              {/* Top gold accent */}
              <rect x={boxX} y={boxY} width={nodeW} height={3} rx={1.5} fill="#c9a227" />
              {/* Pillar number */}
              <text
                x={n.x}
                y={boxY + 24}
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: "'Bebas Neue', Arial, sans-serif",
                  fontSize: '18px',
                  letterSpacing: '1.5px',
                }}
              >
                {n.num}
              </text>
              {/* Gold divider under the number */}
              <line
                x1={boxX + 30}
                y1={boxY + 32}
                x2={boxX + nodeW - 30}
                y2={boxY + 32}
                stroke="#c9a227"
                strokeWidth={1.2}
              />
              {/* Pillar label */}
              <text
                x={n.x}
                y={boxY + 48}
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.6px',
                }}
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* "Most firms start here" callout pointing at node 03 */}
        <g>
          <line
            x1={node03.x + nodeW / 2 + 2}
            y1={node03.y}
            x2={calloutX}
            y2={calloutY + calloutH / 2}
            stroke="#c0392b"
            strokeWidth={1.5}
            strokeDasharray="4,3"
          />
          <rect
            x={calloutX}
            y={calloutY}
            width={calloutW}
            height={calloutH}
            rx={4}
            fill="#c0392b"
          />
          <text
            x={calloutX + calloutW / 2}
            y={calloutY + 11}
            textAnchor="middle"
            fill="white"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '8.5px',
              fontWeight: 700,
            }}
          >
            Most firms
          </text>
          <text
            x={calloutX + calloutW / 2}
            y={calloutY + 21}
            textAnchor="middle"
            fill="white"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '8.5px',
              fontWeight: 700,
            }}
          >
            start here
          </text>
        </g>
      </svg>
    </div>
  );
}
