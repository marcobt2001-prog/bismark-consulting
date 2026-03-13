export type Archetype =
  | 'Intake'
  | 'Verification'
  | 'Authorization'
  | 'Scheduling'
  | 'Fulfillment'
  | 'Processing'
  | 'Monitoring'
  | 'Billing'
  | 'Collection'
  | 'Reconciliation'
  | 'Exception Handling'
  | 'Recovery';

export type ArchetypeInfo = {
  name: Archetype;
  description: string;
  industries: string[];
};

export const archetypes: ArchetypeInfo[] = [
  {
    name: 'Intake',
    description: 'The front door. Where work enters the system \u2014 applications, orders, claims, requests, tickets. Every operation has one. Most are leaking capacity before the work even begins.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'food-production',
      'industrial-technology',
      'insurance',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Verification',
    description: 'Confirming that what came in is accurate, complete, and real. Document checks, data validation, identity confirmation, quality inspection. The step most organizations do twice \u2014 because they didn\u2019t do it right the first time.',
    industries: [
      'banking-lending',
      'enterprise-technology',
      'financial-processors',
      'insurance',
      'manufacturing',
      'mining-metals',
    ],
  },
  {
    name: 'Authorization',
    description: 'The decision gate. Approval, underwriting, credit decisioning, permitting, sign-off. Where human judgment meets policy \u2014 and where bottlenecks hide behind the word "review."',
    industries: [
      'banking-lending',
      'enterprise-technology',
      'financial-processors',
      'insurance',
      'oil-gas',
    ],
  },
  {
    name: 'Scheduling',
    description: 'Sequencing work against time, capacity, and constraints. Production scheduling, dispatch, appointment setting, resource allocation. The archetype that connects promises to reality.',
    industries: [
      'distribution-logistics',
      'food-production',
      'industrial-technology',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Fulfillment',
    description: 'Delivering what was promised. Shipping, provisioning, policy issuance, loan funding, order completion. The moment the customer finds out whether your operation actually works.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'food-production',
      'industrial-technology',
      'insurance',
      'manufacturing',
    ],
  },
  {
    name: 'Processing',
    description: 'The core transformation. Where raw inputs become outputs \u2014 transactions processed, materials converted, data transformed, claims adjudicated. The engine room of every operation.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'food-production',
      'industrial-technology',
      'insurance',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Monitoring',
    description: 'Watching the operation while it runs. Dashboards, alerts, quality checks, compliance surveillance, performance tracking. Most organizations confuse having data with actually monitoring.',
    industries: [
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'food-production',
      'industrial-technology',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Billing',
    description: 'Converting completed work into revenue. Invoicing, premium calculation, fee assessment, charge capture. Where operational sloppiness quietly becomes financial leakage.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'insurance',
      'manufacturing',
      'oil-gas',
    ],
  },
  {
    name: 'Collection',
    description: 'Getting paid for what you\u2019ve billed. Payment processing, accounts receivable, premium collection, debt recovery. The archetype that separates revenue recognized from revenue received.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'financial-processors',
      'insurance',
      'oil-gas',
    ],
  },
  {
    name: 'Reconciliation',
    description: 'Making sure the numbers match. Account reconciliation, inventory counts, settlement balancing, audit trails. The archetype that tells you whether your operation is actually doing what you think it\u2019s doing.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'financial-processors',
      'food-production',
      'insurance',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Exception Handling',
    description: 'What happens when the process breaks. Escalations, rework queues, dispute resolution, error correction. The archetype most operations pretend is rare \u2014 until you measure it.',
    industries: [
      'banking-lending',
      'distribution-logistics',
      'enterprise-technology',
      'financial-processors',
      'food-production',
      'industrial-technology',
      'insurance',
      'manufacturing',
      'mining-metals',
      'oil-gas',
    ],
  },
  {
    name: 'Recovery',
    description: 'Reclaiming value after something goes wrong. Subrogation, asset recovery, product recall, rework salvage, debt recovery. The archetype that determines whether mistakes are permanent losses or temporary setbacks.',
    industries: [
      'banking-lending',
      'financial-processors',
      'insurance',
      'mining-metals',
      'oil-gas',
    ],
  },
];
