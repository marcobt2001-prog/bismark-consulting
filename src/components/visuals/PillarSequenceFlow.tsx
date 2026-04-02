export default function PillarSequenceFlow() {
  const pillars = [
    { num: '01', label: 'CUSTOMER PROFILE' },
    { num: '02', label: 'PROCESS DESIGN' },
    { num: '03', label: 'ORG STRATEGY' },
    { num: '04', label: 'MEASUREMENT' },
    { num: '05', label: 'CONT. IMPROVEMENT' },
  ];

  const nodeW = 130;
  const nodeH = 56;
  const gap = 40;
  const startX = 20;
  const nodeY = 40;
  const totalW = startX * 2 + pillars.length * nodeW + (pillars.length - 1) * gap;
  const totalH = 140;

  return (
    <div className="my-8">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {pillars.map((p, i) => {
          const x = startX + i * (nodeW + gap);

          return (
            <g key={p.num}>
              {/* Node rectangle */}
              <rect
                x={x}
                y={nodeY}
                width={nodeW}
                height={nodeH}
                rx={6}
                fill="#0c1742"
              />
              {/* Gold top accent */}
              <rect
                x={x}
                y={nodeY}
                width={nodeW}
                height={3}
                rx={1.5}
                fill="#c9a227"
              />
              {/* Pillar number */}
              <text
                x={x + nodeW / 2}
                y={nodeY + nodeH / 2 + 5}
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: "'Bebas Neue', Arial, sans-serif",
                  fontSize: '20px',
                  letterSpacing: '2px',
                }}
              >
                {p.num}
              </text>
              {/* Label below */}
              <text
                x={x + nodeW / 2}
                y={nodeY + nodeH + 18}
                textAnchor="middle"
                fill="#c9a227"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '8.5px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {p.label}
              </text>

              {/* Arrow to next node */}
              {i < pillars.length - 1 && (
                <>
                  <line
                    x1={x + nodeW + 4}
                    y1={nodeY + nodeH / 2}
                    x2={x + nodeW + gap - 10}
                    y2={nodeY + nodeH / 2}
                    stroke="#c9a227"
                    strokeWidth={2}
                  />
                  <polygon
                    points={`${x + nodeW + gap - 10},${nodeY + nodeH / 2 - 5} ${x + nodeW + gap - 2},${nodeY + nodeH / 2} ${x + nodeW + gap - 10},${nodeY + nodeH / 2 + 5}`}
                    fill="#c9a227"
                  />
                </>
              )}

              {/* Warning callout between Pillar 02 and 03 */}
              {i === 1 && (
                <g>
                  <rect
                    x={x + nodeW + 2}
                    y={nodeY - 28}
                    width={gap - 4}
                    height={18}
                    rx={4}
                    fill="#c0392b"
                  />
                  <text
                    x={x + nodeW + gap / 2}
                    y={nodeY - 16}
                    textAnchor="middle"
                    fill="white"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '5.5px',
                      fontWeight: 700,
                    }}
                  >
                    Most firms
                  </text>
                  <text
                    x={x + nodeW + gap / 2}
                    y={nodeY - 9}
                    textAnchor="middle"
                    fill="white"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '5.5px',
                      fontWeight: 700,
                    }}
                  >
                    start here
                  </text>
                  {/* Small arrow pointing down */}
                  <line
                    x1={x + nodeW + gap / 2}
                    y1={nodeY - 10}
                    x2={x + nodeW + gap / 2}
                    y2={nodeY + nodeH / 2 - 8}
                    stroke="#c0392b"
                    strokeWidth={1.5}
                    strokeDasharray="3,2"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
