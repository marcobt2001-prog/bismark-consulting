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
    <div>
      <table className="w-full border-collapse table-fixed">
        <colgroup>
          {/* Industry name column — fixed width */}
          <col className="w-[160px] sm:w-[200px]" />
          {/* 12 archetype columns — share remaining space equally */}
          {ALL_ARCHETYPES.map((_, i) => (
            <col key={i} />
          ))}
        </colgroup>

        <thead>
          <tr>
            <th />
            {ALL_ARCHETYPES.map((arch) => (
              <th
                key={arch}
                className="relative h-[110px] sm:h-[120px] align-bottom pb-2"
              >
                <span
                  className="absolute bottom-2 left-1/2 origin-bottom-left -rotate-[50deg] whitespace-nowrap text-[9px] sm:text-[10.5px] font-semibold uppercase tracking-wide text-navy-900"
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
                <td
                  className={
                    'pr-2 sm:pr-4 text-right text-[11px] sm:text-xs font-semibold border-b transition-colors duration-100 h-[40px] ' +
                    (isHovered
                      ? 'text-gold-600 border-gold-600/20'
                      : 'text-navy-900 border-gray-100')
                  }
                >
                  {industry.name}
                </td>

                {ALL_ARCHETYPES.map((arch) => {
                  const isActive = industry.activeArchetypes.includes(arch);
                  return (
                    <td
                      key={arch}
                      className="text-center align-middle border-b border-gray-100 h-[40px] py-2"
                    >
                      <span
                        className={
                          'inline-block w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-150 ' +
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
