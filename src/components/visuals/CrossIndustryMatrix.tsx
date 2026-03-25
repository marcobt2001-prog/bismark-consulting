import { industries } from '../../data/industries';

const allArchetypes = [
  'Intake', 'Verification', 'Authorization', 'Scheduling',
  'Fulfillment', 'Processing', 'Monitoring', 'Billing',
  'Collection', 'Reconciliation', 'Exception Handling', 'Recovery',
] as const;

const shortNames: Record<string, string> = {
  'Banking & Lending': 'Banking',
  'Distribution & Logistics': 'Dist/Log',
  'Enterprise Technology': 'Ent Tech',
  'Financial Processors': 'Fin Proc',
  'Food Production': 'Food',
  'Industrial Technology': 'Ind Tech',
  'Insurance': 'Insurance',
  'Manufacturing': 'Mfg',
  'Mining & Metals': 'Mining',
  'Oil & Gas': 'Oil/Gas',
};

export default function CrossIndustryMatrix() {
  return (
    <div className="my-12 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-36" />
                {industries.map((ind) => (
                  <th key={ind.slug} className="px-1 pb-2 text-center">
                    <span
                      className="block font-display text-[10px] text-navy-900 tracking-wider"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '80px' }}
                    >
                      {shortNames[ind.name] || ind.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allArchetypes.map((archetype) => (
                <tr key={archetype} className="border-t border-gray-100">
                  <td className="py-1.5 pr-3 text-right">
                    <span className="font-display text-xs text-navy-900 tracking-wider">{archetype}</span>
                  </td>
                  {industries.map((ind) => {
                    const active = ind.activeArchetypes.includes(archetype as never);
                    return (
                      <td key={ind.slug} className="text-center py-1.5">
                        <div
                          className={`w-4 h-4 rounded-full mx-auto ${
                            active ? 'bg-gold-600' : 'bg-gray-200'
                          }`}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden mt-2 text-right">
          <span className="text-gray-400 text-xs italic">scroll →</span>
        </div>
      </div>
      <p className="text-center text-gray-500 font-display text-xs tracking-wider mt-6">
        Gold dots indicate active archetypes. The pattern is the method.
      </p>
    </div>
  );
}
