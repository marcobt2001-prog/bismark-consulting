const archetypeData = [
  {
    name: 'Intake',
    definition: 'Something enters the system and needs to move. The first touch — capturing, logging, and routing incoming work so it can be acted on.',
    icon: <><rect x="8" y="14" width="24" height="16" rx="2" stroke="#0c1742" strokeWidth="2" fill="none" /><path d="M20 4 L20 14" stroke="#0c1742" strokeWidth="2" /><path d="M15 9 L20 14 L25 9" stroke="#0c1742" strokeWidth="2" fill="none" /></>,
  },
  {
    name: 'Verification',
    definition: 'Confirming that what came in is what it claims to be. Identity checks, document validation, eligibility determination.',
    icon: <><circle cx="20" cy="18" r="12" stroke="#0c1742" strokeWidth="2" fill="none" /><path d="M14 18 L18 22 L26 14" stroke="#c9a227" strokeWidth="2.5" fill="none" /></>,
  },
  {
    name: 'Authorization',
    definition: 'A decision is made: yes, no, or not yet. Approval routing, credit decisioning, underwriting, release authority.',
    icon: <><circle cx="20" cy="16" r="10" stroke="#0c1742" strokeWidth="2" fill="none" /><circle cx="20" cy="16" r="5" stroke="#0c1742" strokeWidth="1.5" fill="#c9a227" opacity="0.3" /><rect x="12" y="26" width="16" height="4" rx="1" fill="#0c1742" /></>,
  },
  {
    name: 'Scheduling',
    definition: 'Allocating time and capacity to work. Production scheduling, dispatch planning, route sequencing.',
    icon: <><rect x="8" y="6" width="24" height="24" rx="3" stroke="#0c1742" strokeWidth="2" fill="none" /><line x1="8" y1="14" x2="32" y2="14" stroke="#0c1742" strokeWidth="1.5" /><line x1="16" y1="6" x2="16" y2="14" stroke="#0c1742" strokeWidth="1" /><line x1="24" y1="6" x2="24" y2="14" stroke="#0c1742" strokeWidth="1" /><rect x="12" y="18" width="5" height="4" rx="1" fill="#c9a227" opacity="0.5" /><rect x="20" y="18" width="5" height="4" rx="1" fill="#c9a227" opacity="0.5" /></>,
  },
  {
    name: 'Fulfillment',
    definition: 'The work gets done and something goes out the door. Order picking, shipment dispatch, service delivery.',
    icon: <><rect x="8" y="10" width="24" height="16" rx="2" stroke="#0c1742" strokeWidth="2" fill="none" /><path d="M20 26 L20 16" stroke="#0c1742" strokeWidth="2" /><path d="M15 21 L20 16 L25 21" stroke="#0c1742" strokeWidth="2" fill="none" /></>,
  },
  {
    name: 'Processing',
    definition: 'Inputs become outputs. Manufacturing operations, refining, data transformation, batch runs.',
    icon: <><circle cx="14" cy="18" r="8" stroke="#0c1742" strokeWidth="2" fill="none" /><circle cx="26" cy="18" r="8" stroke="#0c1742" strokeWidth="2" fill="none" /><circle cx="14" cy="18" r="2" fill="#c9a227" opacity="0.5" /><circle cx="26" cy="18" r="2" fill="#c9a227" opacity="0.5" /></>,
  },
  {
    name: 'Monitoring',
    definition: 'Watching what\u2019s moving and catching what isn\u2019t. Production tracking, pipeline flow, inventory levels.',
    icon: <><ellipse cx="20" cy="18" rx="14" ry="8" stroke="#0c1742" strokeWidth="2" fill="none" /><circle cx="20" cy="18" r="4" fill="#0c1742" /><path d="M30 10 Q36 6 38 8" stroke="#c9a227" strokeWidth="1.5" fill="none" /><path d="M32 6 Q38 2 40 4" stroke="#c9a227" strokeWidth="1" fill="none" /></>,
  },
  {
    name: 'Billing',
    definition: 'Creating the financial obligation. Invoice generation, premium billing, subscription charges.',
    icon: <><rect x="10" y="6" width="20" height="26" rx="2" stroke="#0c1742" strokeWidth="2" fill="none" /><text x="20" y="24" textAnchor="middle" fill="#c9a227" style={{ fontSize: '14px', fontWeight: 'bold' }}>$</text></>,
  },
  {
    name: 'Collection',
    definition: 'Collecting what\u2019s owed. Payment posting, debt recovery, delinquency management.',
    icon: <><path d="M12 24 Q12 12 20 10 Q28 12 28 24" stroke="#0c1742" strokeWidth="2" fill="none" /><path d="M16 24 Q16 16 20 14 Q24 16 24 24" stroke="#0c1742" strokeWidth="1.5" fill="none" /><line x1="12" y1="24" x2="28" y2="24" stroke="#0c1742" strokeWidth="2" /></>,
  },
  {
    name: 'Reconciliation',
    definition: 'Making two sets of records agree. Bank reconciliation, payment matching, settlement balancing.',
    icon: <><line x1="8" y1="12" x2="32" y2="12" stroke="#0c1742" strokeWidth="2" /><line x1="8" y1="24" x2="32" y2="24" stroke="#0c1742" strokeWidth="2" /><path d="M26 12 L20 18 L26 24" stroke="#c9a227" strokeWidth="2" fill="none" /></>,
  },
  {
    name: 'Exception Handling',
    definition: 'When the process breaks, something has to catch it. Billing disputes, shipment errors, claim denials.',
    icon: <><polygon points="20,4 34,28 6,28" stroke="#0c1742" strokeWidth="2" fill="none" /><text x="20" y="24" textAnchor="middle" fill="#c9a227" style={{ fontSize: '14px', fontWeight: 'bold' }}>!</text><path d="M34 18 L38 14" stroke="#0c1742" strokeWidth="1.5" /><path d="M38 14 L38 20" stroke="#0c1742" strokeWidth="1.5" /></>,
  },
  {
    name: 'Recovery',
    definition: 'Getting back what\u2019s been lost or owed. Repossession, subrogation, asset liquidation.',
    icon: <><circle cx="20" cy="18" r="10" stroke="#0c1742" strokeWidth="2" fill="none" /><path d="M14 14 A8 8 0 1 1 14 22" stroke="#c9a227" strokeWidth="2" fill="none" /><path d="M14 14 L10 10 M14 14 L10 18" stroke="#c9a227" strokeWidth="1.5" /></>,
  },
];

export default function ArchetypeIconSet() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
      {archetypeData.map((archetype) => (
        <div key={archetype.name} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10">
            <svg viewBox="0 0 40 36" className="w-10 h-10">{archetype.icon}</svg>
          </div>
          <div>
            <h4 className="font-display text-navy-900 text-sm tracking-wider">{archetype.name}</h4>
            <p className="text-gray-600 text-xs leading-relaxed mt-1">{archetype.definition}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
