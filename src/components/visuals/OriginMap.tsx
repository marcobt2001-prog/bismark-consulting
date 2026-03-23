export default function OriginMap() {
  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-navy-900 border-2 border-gold-600 rounded-lg p-8 md:p-12 relative" style={{ minHeight: '320px' }}>
          <svg viewBox="0 0 700 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Dashed connection lines */}
            <line x1="200" y1="100" x2="400" y2="80" stroke="#c9a227" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            <line x1="200" y1="100" x2="180" y2="200" stroke="#c9a227" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            <line x1="400" y1="80" x2="520" y2="140" stroke="#c9a227" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            <line x1="180" y1="200" x2="520" y2="140" stroke="#c9a227" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />

            {/* North America */}
            <circle cx="200" cy="100" r="6" fill="#c9a227" />
            <text x="200" y="78" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '16px', letterSpacing: '2px' }}>NORTH AMERICA</text>
            <text x="200" y="130" textAnchor="middle" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px' }}>United States · Canada</text>
            {/* Industry labels */}
            <text x="120" y="150" fill="#c9a227" opacity="0.7" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontStyle: 'italic' }}>Financial Services</text>
            <text x="240" y="148" fill="#c9a227" opacity="0.7" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontStyle: 'italic' }}>Insurance</text>
            <text x="160" y="164" fill="#c9a227" opacity="0.7" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontStyle: 'italic' }}>Tire Manufacturing</text>

            {/* South America */}
            <circle cx="180" cy="200" r="6" fill="#c9a227" />
            <text x="180" y="188" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '16px', letterSpacing: '2px' }}>SOUTH AMERICA</text>
            <text x="180" y="230" textAnchor="middle" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px' }}>Peru</text>
            <text x="180" y="248" fill="#c9a227" opacity="0.7" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontStyle: 'italic' }}>Gold Mining</text>

            {/* Africa */}
            <circle cx="520" cy="140" r="6" fill="#c9a227" />
            <text x="520" y="125" textAnchor="middle" fill="white" style={{ fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '16px', letterSpacing: '2px' }}>AFRICA</text>
            <text x="520" y="170" textAnchor="middle" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px' }}>South Africa</text>
            <text x="520" y="190" fill="#c9a227" opacity="0.7" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9px', fontStyle: 'italic' }}>Energy · Food Production</text>

            {/* Caption */}
            <text x="350" y="270" textAnchor="middle" fill="#9ca3af" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px' }}>25+ years across three continents and dozens of industries</text>
          </svg>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-3">
        PLACEHOLDER — Custom map illustration to be commissioned
      </p>
    </div>
  );
}
