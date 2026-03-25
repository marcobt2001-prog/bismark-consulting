export default function WeeklyRhythmTimeline() {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="flex items-stretch mb-4" style={{ height: '80px' }}>
          {/* Monday - LEARN */}
          <div className="bg-gold-600 flex-1 flex flex-col items-center justify-center rounded-l-lg">
            <p className="font-display text-navy-900 text-lg tracking-wider">LEARN</p>
            <p className="text-navy-900 text-xs font-medium">Monday</p>
          </div>
          {/* Tue-Thu - DO */}
          <div className="bg-navy-900 flex-[3] flex flex-col items-center justify-center">
            <p className="font-display text-white text-lg tracking-wider">DO — COACH & APPLY</p>
            <p className="text-gray-400 text-xs">Tuesday – Thursday</p>
          </div>
          {/* Friday - INDEPENDENCE */}
          <div className="bg-white border-2 border-navy-900 flex-1 flex flex-col items-center justify-center rounded-r-lg">
            <p className="font-display text-navy-900 text-sm tracking-wider">INDEPENDENCE</p>
            <p className="text-gray-500 text-xs">Friday</p>
          </div>
        </div>

        {/* Repeat indicator */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 flex gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="flex-1 h-3 flex">
                <div className="w-[20%] bg-gold-600 opacity-40 rounded-l-sm" />
                <div className="w-[60%] bg-navy-900 opacity-30" />
                <div className="w-[20%] border border-navy-200 opacity-40 rounded-r-sm" />
              </div>
            ))}
          </div>
          <span className="font-display text-gold-600 text-sm tracking-wider whitespace-nowrap">× 16 WEEKS</span>
        </div>

        {/* Post-engagement flourish */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-10 bg-white border-2 border-navy-900 rounded-lg flex items-center justify-center">
              <p className="font-display text-navy-900 text-sm tracking-wider">YOUR TEAM OWNS EVERY DAY</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs italic max-w-[200px]">
            Post-engagement: your team owns every day
          </p>
        </div>
      </div>

      {/* Mobile layout - stacked */}
      <div className="md:hidden space-y-2">
        <div className="bg-gold-600 rounded-lg p-4 text-center">
          <p className="font-display text-navy-900 text-lg tracking-wider">LEARN</p>
          <p className="text-navy-900 text-xs font-medium">Monday</p>
        </div>
        <div className="bg-navy-900 rounded-lg p-4 text-center">
          <p className="font-display text-white text-lg tracking-wider">DO — COACH & APPLY</p>
          <p className="text-gray-400 text-xs">Tuesday – Thursday</p>
        </div>
        <div className="bg-white border-2 border-navy-900 rounded-lg p-4 text-center">
          <p className="font-display text-navy-900 text-sm tracking-wider">INDEPENDENCE</p>
          <p className="text-gray-500 text-xs">Friday</p>
        </div>
        <div className="text-center pt-2">
          <span className="font-display text-gold-600 text-sm tracking-wider">× 16 WEEKS</span>
        </div>
        <div className="bg-white border-2 border-navy-900 rounded-lg p-4 text-center mt-4">
          <p className="font-display text-navy-900 text-xs tracking-wider">POST-ENGAGEMENT: YOUR TEAM OWNS EVERY DAY</p>
        </div>
      </div>
    </div>
  );
}
