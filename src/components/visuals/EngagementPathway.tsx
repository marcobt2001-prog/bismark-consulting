export default function EngagementPathway() {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <svg viewBox="0 0 900 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-ep" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" />
            </marker>
          </defs>

          {/* Node 1: Walkthrough */}
          <rect x="10" y="60" width="170" height="70" rx="8" fill="#0c1742" stroke="#c9a227" strokeWidth="0" />
          <rect x="10" y="60" width="170" height="4" rx="2" fill="#c9a227" />
          <text x="95" y="102" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '14px', letterSpacing: '1px' }}>THE WALKTHROUGH</text>

          {/* Arrow to diamond */}
          <line x1="180" y1="95" x2="260" y2="95" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep)" />

          {/* Diamond: Data Decides */}
          <polygon points="300,60 340,95 300,130 260,95" fill="none" stroke="#c9a227" strokeWidth="2" />
          <text x="300" y="155" textAnchor="middle" fill="#9ca3af" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '11px', letterSpacing: '1px' }}>DATA DECIDES</text>

          {/* Top path: Discovery */}
          <line x1="340" y1="85" x2="420" y2="40" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep)" />
          <rect x="420" y="10" width="170" height="60" rx="8" fill="#0c1742" />
          <rect x="420" y="10" width="170" height="4" rx="2" fill="#c9a227" />
          <text x="505" y="47" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '13px', letterSpacing: '1px' }}>DISCOVERY</text>

          {/* Bottom path: DTI */}
          <line x1="340" y1="105" x2="420" y2="150" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep)" />
          <rect x="420" y="125" width="170" height="60" rx="8" fill="#0c1742" />
          <rect x="420" y="125" width="170" height="4" rx="2" fill="#c9a227" />
          <text x="505" y="160" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '11px', letterSpacing: '1px' }}>DIRECT TO</text>
          <text x="505" y="175" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '11px', letterSpacing: '1px' }}>IMPLEMENTATION</text>

          {/* Both paths converge to Implementation */}
          <line x1="590" y1="40" x2="680" y2="80" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep)" />
          <line x1="590" y1="155" x2="680" y2="110" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep)" />

          {/* Node: Implementation */}
          <rect x="680" y="60" width="200" height="70" rx="8" fill="#0c1742" stroke="#c9a227" strokeWidth="2" />
          <rect x="680" y="60" width="200" height="4" rx="2" fill="#c9a227" />
          <text x="780" y="98" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '13px', letterSpacing: '1px' }}>16-WEEK</text>
          <text x="780" y="116" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '13px', letterSpacing: '1px' }}>IMPLEMENTATION</text>
        </svg>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-4">
        <div className="bg-navy-900 border-t-4 border-gold-600 rounded-lg p-4 text-center">
          <p className="font-display text-sm text-white tracking-wider">THE WALKTHROUGH</p>
        </div>
        <div className="flex justify-center">
          <svg width="20" height="30"><line x1="10" y1="0" x2="10" y2="20" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep-m)" /><defs><marker id="arrow-ep-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" /></marker></defs></svg>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-2 border-gold-600 rotate-45 flex items-center justify-center">
            <span className="font-display text-[8px] text-gray-400 -rotate-45 tracking-wider">DATA</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-navy-900 border-t-4 border-gold-600 rounded-lg p-3 text-center">
            <p className="font-display text-xs text-white tracking-wider">DISCOVERY</p>
          </div>
          <div className="bg-navy-900 border-t-4 border-gold-600 rounded-lg p-3 text-center">
            <p className="font-display text-[10px] text-white tracking-wider leading-tight">DIRECT TO IMPLEMENTATION</p>
          </div>
        </div>
        <div className="flex justify-center">
          <svg width="20" height="30"><line x1="10" y1="0" x2="10" y2="20" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow-ep-m2)" /><defs><marker id="arrow-ep-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227" /></marker></defs></svg>
        </div>
        <div className="bg-navy-900 border-2 border-gold-600 border-t-4 rounded-lg p-4 text-center">
          <p className="font-display text-sm text-white tracking-wider">16-WEEK IMPLEMENTATION</p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Every engagement starts with the Walkthrough. The data tells us which path comes next.
      </p>
    </div>
  );
}
