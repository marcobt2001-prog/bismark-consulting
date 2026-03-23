export default function WalkthroughProcessFlow() {
  const phases = [
    {
      label: 'STAKEHOLDER\nENGAGEMENT',
      icon: (
        <>
          <circle cx="15" cy="10" r="4" fill="white" />
          <circle cx="25" cy="10" r="4" fill="white" />
          <path d="M8 22 Q15 16 22 22" stroke="white" strokeWidth="2" fill="none" />
          <path d="M18 22 Q25 16 32 22" stroke="white" strokeWidth="2" fill="none" />
        </>
      ),
    },
    {
      label: 'DATA &\nDOCUMENTATION',
      icon: (
        <>
          <rect x="10" y="6" width="20" height="22" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <line x1="15" y1="13" x2="25" y2="13" stroke="white" strokeWidth="1.5" />
          <line x1="15" y1="18" x2="25" y2="18" stroke="white" strokeWidth="1.5" />
          <line x1="15" y1="23" x2="22" y2="23" stroke="white" strokeWidth="1.5" />
        </>
      ),
    },
    {
      label: 'OPERATIONAL\nOBSERVATION',
      icon: (
        <>
          <circle cx="20" cy="16" r="8" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="20" cy="16" r="3" fill="white" />
          <line x1="26" y1="22" x2="32" y2="28" stroke="white" strokeWidth="2" />
        </>
      ),
    },
    {
      label: 'FINDINGS &\nRECOMMENDATION',
      icon: (
        <>
          <rect x="8" y="8" width="24" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <line x1="8" y1="14" x2="32" y2="14" stroke="white" strokeWidth="1.5" />
          <line x1="14" y1="8" x2="14" y2="14" stroke="white" strokeWidth="1.5" />
        </>
      ),
      isOutput: true,
    },
  ];

  return (
    <div className="my-12 max-w-4xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {phases.map((phase, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center" style={{ width: '140px' }}>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    phase.isOutput ? 'bg-navy-900 ring-2 ring-gold-600 ring-offset-2' : 'bg-navy-900'
                  }`}
                >
                  <svg width="40" height="34" viewBox="0 0 40 34">{phase.icon}</svg>
                </div>
                <p className="font-display text-navy-900 text-xs text-center mt-3 tracking-wider whitespace-pre-line leading-tight">
                  {phase.label}
                </p>
              </div>
              {i < phases.length - 1 && (
                <div className="flex flex-col items-center mx-2">
                  <svg width="50" height="20" viewBox="0 0 50 20">
                    <defs>
                      <marker id="arrow-wpf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" />
                      </marker>
                    </defs>
                    <line x1="0" y1="10" x2="40" y2="10" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-wpf)" />
                  </svg>
                  <span className="text-gray-400 text-[9px] italic">feeds into</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bracket with duration */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gold-600" />
          <span className="font-display text-gold-600 text-sm tracking-wider whitespace-nowrap">3–5 DAYS ON-SITE</span>
          <div className="flex-1 h-px bg-gold-600" />
        </div>
      </div>

      {/* Mobile - vertical */}
      <div className="md:hidden space-y-4">
        {phases.map((phase, i) => (
          <div key={i}>
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                  phase.isOutput ? 'bg-navy-900 ring-2 ring-gold-600' : 'bg-navy-900'
                }`}
              >
                <svg width="34" height="28" viewBox="0 0 40 34">{phase.icon}</svg>
              </div>
              <p className="font-display text-navy-900 text-xs tracking-wider whitespace-pre-line leading-tight">
                {phase.label}
              </p>
            </div>
            {i < phases.length - 1 && (
              <div className="flex justify-center my-2">
                <svg width="20" height="24">
                  <defs>
                    <marker id={`arrow-wpf-m-${i}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" />
                    </marker>
                  </defs>
                  <line x1="10" y1="0" x2="10" y2="16" stroke="#c9a227" strokeWidth="2" markerEnd={`url(#arrow-wpf-m-${i})`} />
                </svg>
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-center gap-3 pt-4">
          <div className="flex-1 h-px bg-gold-600" />
          <span className="font-display text-gold-600 text-xs tracking-wider">3–5 DAYS ON-SITE</span>
          <div className="flex-1 h-px bg-gold-600" />
        </div>
      </div>
    </div>
  );
}
