type IndustryOperationPool = {
  industry: string;
  operations: string[];
};

export const rotationPool: IndustryOperationPool[] = [
  {
    industry: 'Banking & Lending',
    operations: [
      'Loan Underwriting',
      'Account Servicing',
      'Mortgage Processing',
      'Credit Decisioning',
      'Fraud Investigation',
      'Account Opening & Onboarding',
      'Collections & Recovery',
      'Wire & Fund Transfers',
      'Regulatory Compliance Review',
      'Customer Dispute Resolution',
      'Statement Processing',
      'Loan Modification & Restructuring',
    ],
  },
  {
    industry: 'Insurance',
    operations: [
      'Claims Adjudication',
      'Policy Issuance',
      'Underwriting Review',
      'Premium Billing & Collection',
      'Claims Investigation',
      'Policy Renewal Processing',
      'Subrogation Recovery',
      'First Notice of Loss Intake',
      'Catastrophe Response Operations',
      'Provider Network Management',
      'Policyholder Correspondence',
      'Regulatory Filing & Compliance',
    ],
  },
  {
    industry: 'Healthcare',
    operations: [
      'Patient Intake & Registration',
      'Claims Processing & Billing',
      'Prior Authorization',
      'Medical Records Management',
      'Appointment Scheduling & Throughput',
      'Discharge Planning',
      'Revenue Cycle Management',
      'Referral Processing',
      'Credentialing & Enrollment',
      'Utilization Review',
      'Patient Collections',
      'Lab Order Processing',
    ],
  },
  {
    industry: 'Food Production & Distribution',
    operations: [
      'Incoming Material Inspection',
      'Production Line Scheduling',
      'Quality Assurance & HACCP Compliance',
      'Order Fulfillment & Picking',
      'Inventory Management & Rotation',
      'Batch Record Processing',
      'Supplier Qualification',
      'Shipping & Cold Chain Logistics',
      'Recall Response Protocols',
      'Sanitation & Changeover',
      'Yield Optimization',
      'Demand Forecasting & Planning',
    ],
  },
  {
    industry: 'Manufacturing',
    operations: [
      'Production Scheduling',
      'Incoming Quality Inspection',
      'Work Order Management',
      'Assembly Line Balancing',
      'Preventive Maintenance Scheduling',
      'Non-Conformance & CAPA Processing',
      'Material Requirements Planning',
      'Final Inspection & Release',
      'Shop Floor Reporting',
      'Supplier Scorecard Management',
      'Engineering Change Order Processing',
      'Capacity Planning & Utilization',
    ],
  },
  {
    industry: 'Response & Contact Centers',
    operations: [
      'Inbound Call Resolution',
      'Escalation Management',
      'Service Level Adherence',
      'Quality Monitoring & Calibration',
      'Workforce Scheduling',
      'First-Call Resolution Optimization',
      'Multi-Channel Inquiry Routing',
      'Customer Retention & Save Operations',
      'Knowledge Base Management',
      'Real-Time Queue Management',
      'Agent Onboarding & Ramp',
      'Back-Office Fulfillment',
    ],
  },
  {
    industry: 'Logistics & Distribution',
    operations: [
      'Order-to-Delivery Cycle Management',
      'Warehouse Receiving & Put-Away',
      'Route Planning & Optimization',
      'Inventory Accuracy & Cycle Counting',
      'Returns Processing & Reverse Logistics',
      'Cross-Dock Operations',
      'Carrier Selection & Rate Management',
      'Last-Mile Delivery Coordination',
      'Freight Claims Processing',
      'Load Planning & Consolidation',
      'Dock Scheduling',
      'Proof of Delivery & Exception Management',
    ],
  },
  {
    industry: 'Enterprise Technology',
    operations: [
      'Incident Management & Resolution',
      'Change Management Processing',
      'Service Request Fulfillment',
      'Release Management',
      'Configuration & Asset Management',
      'Problem Management & Root Cause',
    ],
  },
  {
    industry: 'Financial Processing',
    operations: [
      'Payment Settlement',
      'Transaction Reconciliation',
      'Exception Processing',
      'Clearing Operations',
      'Regulatory Reporting',
      'Account Maintenance & Corrections',
    ],
  },
  {
    industry: 'Industrial Technology',
    operations: [
      'Field Service Dispatch',
      'Installation Scheduling & Coordination',
      'Warranty Claims Processing',
      'Equipment Commissioning',
      'Technical Support Escalation',
      'Spare Parts Inventory & Fulfillment',
    ],
  },
];

export function getRandomPairings(
  count: number = 5,
  lastShown?: { industry: string; operation: string }[]
): { industry: string; operation: string }[] {
  const clampedCount = Math.max(4, Math.min(6, count));

  const generate = (): { industry: string; operation: string }[] => {
    const shuffled = [...rotationPool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, clampedCount);
    return selected.map((entry) => ({
      industry: entry.industry,
      operation: entry.operations[Math.floor(Math.random() * entry.operations.length)],
    }));
  };

  let result = generate();

  if (lastShown && lastShown.length === result.length) {
    const isIdentical = result.every(
      (r, i) => r.industry === lastShown[i].industry && r.operation === lastShown[i].operation
    );
    if (isIdentical) {
      result = generate();
    }
  }

  return result;
}
