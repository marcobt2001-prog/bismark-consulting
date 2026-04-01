'use client';

import { useState } from 'react';
import { industries } from '../data/industries';

const ALL_ARCHETYPES = [
  'Intake',
  'Verification',
  'Authorization',
  'Scheduling',
  'Fulfillment',
  'Processing',
  'Monitoring',
  'Billing',
  'Collection',
  'Reconciliation',
  'Exception Handling',
  'Recovery',
] as const;

export default function FindYourOperationMatrix() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="w-max min-w-full border-collapse">
        {/* Column headers — archetypes, rotated */}
        <thead>
          <tr>
            {/* Empty corner cell for the industry names column */}
            <th className="pb-2" />
            {ALL_ARCHETYPES.map((arch) => (
              <th
                key={arch}
                className="relative h-[120px] w-[44px] min-w-[44px] pb-2 align-bottom"
              >
                <span
                  className="absolute bottom-2 left-1/2 origin-bottom-left -rotate-[50deg] whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-wide text-navy-900"
                >
                  {arch === 'Exception Handling' ? 'Exc. Handling' : arch}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {industries.map((industry, rowIdx) => {
            const isHovered = hoveredRow === rowIdx;
            return (
              <tr
                key={industry.slug}
                className="transition-colors duration-100"
                style={{
                  backgroundColor: isHovered
                    ? 'rgba(12,23,66,0.04)'
                    : rowIdx % 2 === 0
                      ? 'transparent'
                      : 'rgba(12,23,66,0.015)',
                }}
                onMouseEnter={() => setHoveredRow(rowIdx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Industry name — left column */}
                <td
                  className={
                    'pr-3 sm:pr-4 text-right whitespace-nowrap text-xs font-semibold border-b transition-colors duration-100 ' +
                    (isHovered
                      ? 'text-gold-600 border-gold-600/20'
                      : 'text-navy-900 border-gray-100')
                  }
                  style={{ height: '40px' }}
                >
                  {industry.name}
                </td>

                {/* Archetype cells */}
                {ALL_ARCHETYPES.map((arch) => {
                  const isActive = industry.activeArchetypes.includes(arch);
                  return (
                    <td
                      key={arch}
                      className="w-[44px] min-w-[44px] text-center align-middle border-b border-gray-100"
                      style={{ height: '40px', padding: '10px 0' }}
                    >
                      <span
                        className={
                          'inline-block w-5 h-5 rounded-full transition-all duration-150 ' +
                          (isActive
                            ? isHovered
                              ? 'bg-gold-600 scale-110'
                              : 'bg-navy-900'
                            : 'bg-transparent border-[1.5px] border-gray-300')
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-4 text-[11px] text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-navy-900" />
          Active archetype
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full border-[1.5px] border-gray-300" />
          Not active
        </span>
        <span className="italic text-gray-400">Hover to highlight</span>
      </div>
    </div>
  );
}
