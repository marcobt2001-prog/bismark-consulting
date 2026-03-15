import type { Archetype } from './archetypes';

export type Process = {
  name: string;
  description: string;
  archetypes: Archetype[];
};

export type Industry = {
  slug: string;
  name: string;
  descriptor: string;
  processCount: number;
  activeArchetypes: Archetype[];
  prev: string | null;
  next: string | null;
  operationalContext: string;
  processes: Process[];
  transformationSummary: string;
};

export const industries: Industry[] = [
  // 1. Banking & Lending
  {
    slug: 'banking-lending',
    name: 'Banking & Lending',
    descriptor: 'Account opening through collections, recovery, and regulatory compliance',
    processCount: 16,
    activeArchetypes: [
      'Intake', 'Verification', 'Authorization', 'Fulfillment',
      'Processing', 'Billing', 'Collection', 'Reconciliation',
      'Exception Handling', 'Recovery',
    ],
    prev: null,
    next: 'distribution-logistics',
    operationalContext: `You know the feeling. A loan application arrives and enters a queue that shouldn\u2019t exist. Documents get reviewed, then reviewed again by someone who doesn\u2019t trust the first review. Underwriting decisions wait on approvals from people who don\u2019t know they\u2019re the bottleneck. Conditions get cleared, then new ones appear. Funding timelines slip \u2014 not by days, but by just enough to erode customer trust and broker confidence.

On the servicing side, payment processing runs on rules nobody wrote down. Exception queues grow because the definition of "exception" keeps expanding. Default management triggers too late because monitoring is retrospective. Foreclosure timelines stretch because every handoff between legal, vendor, and internal teams adds friction nobody owns.

The operation isn\u2019t broken. It\u2019s just slow enough to cost you yield, inconsistent enough to create risk, and manual enough that every volume spike feels like a crisis.`,
    processes: [
      { name: 'Loan Application Intake', description: 'Receiving and logging new loan applications across channels \u2014 broker, direct, digital, correspondent. Capturing borrower data, property information, and initial documentation. The process that determines whether the rest of the pipeline starts clean or starts behind.', archetypes: ['Intake'] },
      { name: 'Document Collection & Verification', description: 'Gathering required documentation \u2014 income, assets, identity, property \u2014 and validating completeness, accuracy, and authenticity. The process most lenders do twice because the first pass wasn\u2019t structured to catch what matters.', archetypes: ['Intake', 'Verification'] },
      { name: 'Credit Decisioning & Underwriting', description: 'Evaluating borrower risk through credit analysis, guideline application, and judgment-based decisioning. Where policy meets reality \u2014 and where inconsistency between underwriters creates unpredictable cycle times and approval rates.', archetypes: ['Authorization', 'Processing'] },
      { name: 'Condition Management', description: 'Tracking, communicating, and clearing pre- and post-approval conditions. The process that turns a clean approval into a weeks-long document chase when it\u2019s not engineered properly.', archetypes: ['Verification', 'Exception Handling'] },
      { name: 'Closing & Funding', description: 'Coordinating title, settlement, and disbursement to move a loan from approved to funded. The final mile where operational discipline either delivers or delays.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Loan Boarding & Setup', description: 'Onboarding funded loans into the servicing system \u2014 setting up payment schedules, escrow accounts, investor reporting, and compliance tracking. The handoff that most organizations treat as data entry rather than process engineering.', archetypes: ['Processing', 'Fulfillment'] },
      { name: 'Payment Processing', description: 'Receiving, applying, and reconciling borrower payments across payment methods and timing variations. The daily engine that runs invisibly until it doesn\u2019t.', archetypes: ['Processing', 'Reconciliation'] },
      { name: 'Escrow Administration', description: 'Managing tax and insurance escrow accounts \u2014 analysis, disbursement, shortage handling, and regulatory compliance. The process that generates more customer complaints per dollar than almost any other in servicing.', archetypes: ['Processing', 'Billing', 'Reconciliation'] },
      { name: 'Investor Reporting & Remittance', description: 'Calculating, validating, and transmitting payment data and funds to investors and guarantors. Where reconciliation gaps become financial exposure.', archetypes: ['Reconciliation', 'Billing'] },
      { name: 'Customer Service & Inquiry Resolution', description: 'Handling borrower inquiries, requests, and complaints across channels. The process that reveals whether your servicing operation is proactive or reactive.', archetypes: ['Intake', 'Exception Handling'] },
      { name: 'Default & Delinquency Management', description: 'Identifying, contacting, and working with delinquent borrowers through collections, loss mitigation, and workout options. The process where timing is everything and most organizations are already behind.', archetypes: ['Monitoring', 'Collection', 'Exception Handling'] },
      { name: 'Loss Mitigation & Workout', description: 'Evaluating and executing alternatives to foreclosure \u2014 modifications, forbearance, short sales, deed-in-lieu. The process that balances borrower outcomes, investor requirements, and regulatory expectations.', archetypes: ['Authorization', 'Processing', 'Exception Handling'] },
      { name: 'Foreclosure & REO Management', description: 'Managing the legal, operational, and asset disposition processes when loans reach terminal default. The process where every missed deadline has a dollar value.', archetypes: ['Processing', 'Recovery'] },
      { name: 'Compliance & Regulatory Reporting', description: 'Monitoring and reporting against federal, state, and investor regulatory requirements. The process that most organizations staff reactively rather than engineer proactively.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Vendor & Third-Party Management', description: 'Overseeing external service providers \u2014 appraisers, attorneys, title companies, field services \u2014 across performance, compliance, and cost. The process that extends your operation beyond your walls.', archetypes: ['Monitoring', 'Billing'] },
      { name: 'Portfolio Reconciliation & Audit', description: 'Balancing loan-level data across servicing, accounting, and investor systems. The process that tells you whether your operation is actually doing what you think it\u2019s doing.', archetypes: ['Reconciliation', 'Exception Handling'] },
    ],
    transformationSummary: `Banking and lending operations don\u2019t fail in spectacular ways. They degrade. Cycle times stretch a little. Exception rates creep up. Reconciliation takes longer each quarter. Nobody sounds the alarm because each individual metric is "within tolerance" \u2014 but the compounding effect is an operation that costs more, moves slower, and carries more risk than anyone realizes.

The Bismark Method exposes these patterns by mapping every process against its archetypes \u2014 revealing where Intake is creating downstream rework, where Authorization is hiding bottlenecks, where Reconciliation gaps are becoming financial exposure. Your apprentices don\u2019t just document these processes \u2014 they redesign them, with the discipline to sustain the improvement after we leave.`,
  },

  // 2. Distribution & Logistics
  {
    slug: 'distribution-logistics',
    name: 'Distribution & Logistics',
    descriptor: 'Receiving dock through last-mile delivery and freight settlement',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Scheduling', 'Fulfillment', 'Processing',
      'Monitoring', 'Billing', 'Collection', 'Reconciliation',
      'Exception Handling',
    ],
    prev: 'banking-lending',
    next: 'enterprise-technology',
    operationalContext: `You can feel it on the floor. Orders come in faster than the warehouse can stage them. Picks get batched inefficiently because the WMS logic hasn\u2019t been recalibrated since the last SKU expansion. Dock scheduling is a negotiation, not a process. Carriers show up early, late, or not at all \u2014 and the response is always reactive.

On the transportation side, route optimization exists in theory but dispatchers override it daily because the constraints aren\u2019t modeled correctly. Last-mile delivery windows get promised by sales and absorbed by operations. Returns flow back into the system through a process nobody designed \u2014 it just accumulated.

The operation moves product. But it moves it with more labor, more exceptions, more expedited freight, and more customer credits than it should. Every inefficiency is small. The aggregate is not.`,
    processes: [
      { name: 'Order Receipt & Entry', description: 'Receiving customer orders across channels \u2014 EDI, portal, email, phone \u2014 and translating them into actionable warehouse and transportation instructions. The process where data quality determines everything downstream.', archetypes: ['Intake', 'Processing'] },
      { name: 'Inventory Management & Allocation', description: 'Tracking inventory positions across locations, allocating stock against orders, and managing replenishment triggers. The process that determines whether you\u2019re shipping from strategy or shipping from panic.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Warehouse Receiving', description: 'Inbound processing of goods \u2014 unloading, inspection, putaway, and system updates. The process that sets the accuracy baseline for everything in the building.', archetypes: ['Intake', 'Verification'] },
      { name: 'Pick, Pack & Ship', description: 'Selecting, assembling, and preparing orders for shipment. The core fulfillment engine where labor efficiency, accuracy, and throughput converge.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Dock Scheduling & Load Planning', description: 'Coordinating inbound and outbound dock appointments, optimizing trailer loading, and managing carrier check-in. The process where minutes lost become hours delayed.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Transportation Planning & Dispatch', description: 'Routing shipments, selecting carriers, and dispatching loads against cost, service, and capacity constraints. The process where the gap between planned and actual is measured in dollars per mile.', archetypes: ['Scheduling', 'Fulfillment'] },
      { name: 'Last-Mile Delivery Management', description: 'Coordinating final delivery to the end customer \u2014 scheduling, driver management, proof of delivery, and exception handling. The process the customer actually experiences.', archetypes: ['Fulfillment', 'Monitoring', 'Exception Handling'] },
      { name: 'Freight Audit & Payment', description: 'Validating carrier invoices against contracted rates, actual shipments, and accessorial charges. The process where unaudited freight bills quietly erode margin.', archetypes: ['Billing', 'Reconciliation'] },
      { name: 'Returns & Reverse Logistics', description: 'Processing returned goods \u2014 authorization, receipt, inspection, disposition, and credit issuance. The process most operations bolt on rather than engineer.', archetypes: ['Intake', 'Processing', 'Exception Handling'] },
      { name: 'Customer Order Tracking & Communication', description: 'Providing visibility into order and shipment status across the lifecycle. The process that determines whether your customer service team is informing or apologizing.', archetypes: ['Monitoring', 'Exception Handling'] },
      { name: 'Carrier Performance Management', description: 'Measuring, reporting, and managing carrier service levels, on-time performance, and claims. The process that turns carrier relationships from negotiations into partnerships.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Inventory Reconciliation & Cycle Counting', description: 'Validating physical inventory against system records through systematic counting programs. The process that tells you whether your inventory number is a fact or an estimate.', archetypes: ['Reconciliation', 'Exception Handling'] },
      { name: 'Claims & Damage Resolution', description: 'Managing freight claims, damage reports, and shortage disputes with carriers and customers. The process where unresolved exceptions become permanent losses.', archetypes: ['Exception Handling', 'Collection'] },
      { name: 'Customer Billing & Settlement', description: 'Generating customer invoices, processing payments, and managing accounts receivable. The process that converts fulfilled orders into recognized revenue.', archetypes: ['Billing', 'Collection'] },
    ],
    transformationSummary: `Distribution and logistics operations are unforgiving. Every inefficiency multiplies across volume \u2014 an extra touch in the warehouse, an unoptimized route, a returns process that creates more work than the original shipment. The margins are thin and the tolerance for error is thinner.

The Bismark Method maps these operations at the archetype level \u2014 exposing where Intake errors cascade into Fulfillment delays, where Scheduling gaps create expedited freight costs, where Exception Handling has become the default rather than the exception. Your apprentices redesign these processes with the operational discipline to sustain throughput, accuracy, and cost performance after we leave.`,
  },

  // 3. Enterprise Technology
  {
    slug: 'enterprise-technology',
    name: 'Enterprise Technology',
    descriptor: 'Account provisioning through incident response and support operations',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Verification', 'Authorization', 'Fulfillment',
      'Processing', 'Monitoring', 'Billing', 'Exception Handling',
    ],
    prev: 'distribution-logistics',
    next: 'financial-processors',
    operationalContext: `You\u2019ve seen it before. A new customer signs and the handoff from sales to implementation loses context, timeline, and sometimes the customer\u2019s confidence. Onboarding timelines slip because nobody owns the dependency chain between configuration, data migration, and user training. The implementation team is stretched across too many concurrent deployments, and the project plan that looked clean in the SOW becomes a daily triage exercise.

Once the customer is live, support tickets flow into a queue that conflates "can\u2019t log in" with "the platform isn\u2019t delivering the value we were promised." Escalation paths exist on paper but not in practice. Product feedback from customers gets captured in six different systems and influences the roadmap in zero. Renewal conversations start too late because the signals of disengagement were visible months ago \u2014 in support patterns, usage data, and adoption metrics \u2014 but nobody was watching them as a system.

The technology works. The operation around it doesn\u2019t \u2014 not at the level required to retain and grow the customers you\u2019ve already won.`,
    processes: [
      { name: 'Lead-to-Contract Handoff', description: 'Transitioning closed deals from sales to delivery \u2014 capturing requirements, setting expectations, and initiating the implementation process. The handoff that determines whether the customer relationship starts with momentum or with recovery.', archetypes: ['Intake', 'Processing'] },
      { name: 'Customer Onboarding & Implementation', description: 'Configuring, migrating, training, and launching the platform for new customers. The process where time-to-value is either engineered or accidental.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Configuration & Customization Management', description: 'Managing customer-specific platform configurations, integrations, and workflow customizations. The process that determines whether your platform scales or fragments.', archetypes: ['Processing', 'Verification'] },
      { name: 'Technical Support & Issue Resolution', description: 'Receiving, triaging, diagnosing, and resolving customer-reported technical issues. The process that tells you whether your support operation is solving problems or managing frustration.', archetypes: ['Intake', 'Exception Handling'] },
      { name: 'Escalation & Critical Issue Management', description: 'Routing and resolving issues that exceed standard support capability \u2014 severity escalations, executive involvement, and cross-functional coordination. The process that reveals whether your organization can respond under pressure or just react.', archetypes: ['Exception Handling', 'Authorization'] },
      { name: 'Product Release & Change Management', description: 'Planning, communicating, deploying, and supporting platform releases and updates. The process where engineering velocity meets customer readiness.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Customer Success & Adoption Monitoring', description: 'Tracking customer health, usage patterns, and adoption metrics to identify risk and opportunity. The process that determines whether your renewals are proactive or reactive.', archetypes: ['Monitoring', 'Processing'] },
      { name: 'SLA Management & Performance Reporting', description: 'Measuring, tracking, and reporting service level performance against contractual commitments. The process where operational reality meets customer expectations.', archetypes: ['Monitoring', 'Verification'] },
      { name: 'Subscription Billing & Revenue Recognition', description: 'Managing subscription invoicing, usage-based billing, payment collection, and revenue recognition across contract terms. The process where billing complexity quietly creates leakage.', archetypes: ['Billing', 'Processing'] },
      { name: 'Contract Renewal & Expansion', description: 'Managing the renewal lifecycle \u2014 timeline, negotiation, upsell identification, and contract execution. The process that determines whether your customer base is an asset or a leaky bucket.', archetypes: ['Processing', 'Authorization'] },
      { name: 'Feature Request & Product Feedback Loop', description: 'Capturing, aggregating, and routing customer feedback to influence product development priorities. The process that determines whether your roadmap is market-driven or internally driven.', archetypes: ['Intake', 'Processing'] },
      { name: 'Data Migration & Integration Management', description: 'Managing the movement of customer data between systems and maintaining integration health. The process where technical debt accumulates invisibly.', archetypes: ['Processing', 'Verification'] },
      { name: 'Security & Compliance Management', description: 'Maintaining platform security posture, managing compliance certifications, and responding to customer security requirements. The process that can accelerate or block every deal in the pipeline.', archetypes: ['Monitoring', 'Authorization'] },
      { name: 'Customer Offboarding & Data Retention', description: 'Managing the end-of-relationship process \u2014 data export, access termination, contractual obligations, and knowledge capture. The process most organizations design last and regret first.', archetypes: ['Processing', 'Fulfillment'] },
    ],
    transformationSummary: `Enterprise technology companies live and die by retention. The product may win the deal, but the operation determines whether the customer stays. Implementation delays, support friction, missed adoption signals, and billing errors don\u2019t just create churn \u2014 they create the kind of churn that was preventable.

The Bismark Method maps every customer-facing operation against its archetypes \u2014 revealing where Intake handoffs lose context, where Fulfillment timelines slip without accountability, where Monitoring exists as data collection rather than action triggers. Your apprentices redesign these processes so that customer retention becomes an operational outcome, not a quarterly panic.`,
  },

  // 4. Financial Processors
  {
    slug: 'financial-processors',
    name: 'Financial Processors',
    descriptor: 'Payment processing, credit reporting, servicing, and reconciliation',
    processCount: 16,
    activeArchetypes: [
      'Intake', 'Verification', 'Authorization', 'Fulfillment',
      'Processing', 'Monitoring', 'Billing', 'Collection',
      'Reconciliation', 'Exception Handling', 'Recovery',
    ],
    prev: 'enterprise-technology',
    next: 'food-production',
    operationalContext: `The volume is relentless. Millions of transactions flow through your systems daily, and the operation is expected to be invisible \u2014 until it isn\u2019t. Authorization requests spike and latency creeps up. Settlement files don\u2019t balance and the reconciliation team starts their day in a hole. A merchant disputes a fee and the billing logic can\u2019t be explained by anyone currently on the team.

Exception queues grow because the definition of "normal" hasn\u2019t been recalibrated in years. Fraud rules trigger too often or not enough \u2014 and tuning them is a negotiation between risk, operations, and product that nobody owns. Chargebacks flow through a process that was designed for a fraction of current volume. Regulatory changes arrive as mandates and get implemented as patches.

The system processes transactions. But the operation around it \u2014 the human processes, the handoffs, the exception management, the reconciliation \u2014 is where margin, risk, and customer trust are actually determined.`,
    processes: [
      { name: 'Transaction Authorization', description: 'Receiving, validating, and decisioning real-time transaction requests against rules, limits, and risk parameters. The process where milliseconds and accuracy are non-negotiable.', archetypes: ['Intake', 'Authorization', 'Processing'] },
      { name: 'Transaction Clearing & Settlement', description: 'Aggregating, netting, and settling authorized transactions between parties. The process where timing, accuracy, and regulatory compliance converge.', archetypes: ['Processing', 'Reconciliation'] },
      { name: 'Merchant Onboarding & Underwriting', description: 'Evaluating, approving, and provisioning new merchants into the payment network. The process that determines whether growth comes with acceptable risk.', archetypes: ['Intake', 'Verification', 'Authorization'] },
      { name: 'Merchant Account Management', description: 'Managing ongoing merchant relationships \u2014 rate changes, terminal updates, compliance requirements, and service requests. The process that determines whether merchant retention is proactive or reactive.', archetypes: ['Processing', 'Fulfillment'] },
      { name: 'Fraud Detection & Prevention', description: 'Monitoring transactions for suspicious patterns, managing alerts, and executing prevention strategies. The process where false positives cost revenue and false negatives cost trust.', archetypes: ['Monitoring', 'Authorization', 'Exception Handling'] },
      { name: 'Chargeback & Dispute Management', description: 'Processing cardholder disputes, managing representment, and resolving chargebacks within network timelines. The process where volume growth has outpaced process design.', archetypes: ['Exception Handling', 'Processing', 'Recovery'] },
      { name: 'Fee Calculation & Merchant Billing', description: 'Computing interchange, assessment, and processor fees across transaction types and pricing models. The process where billing complexity creates revenue leakage that nobody notices.', archetypes: ['Billing', 'Processing'] },
      { name: 'Funding & Merchant Payout', description: 'Calculating and disbursing net settlement amounts to merchants. The process where timing and accuracy directly determine merchant satisfaction and cash flow.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Network Compliance & Certification', description: 'Maintaining compliance with card network rules, managing certifications, and implementing mandate changes. The process where regulatory changes arrive as deadlines and get implemented as projects.', archetypes: ['Monitoring', 'Verification'] },
      { name: 'Interchange Optimization', description: 'Ensuring transactions qualify at the lowest applicable interchange rate through data quality and transaction routing. The process where basis points become millions.', archetypes: ['Processing', 'Reconciliation'] },
      { name: 'Settlement Reconciliation', description: 'Balancing transaction records across authorization, clearing, and funding systems. The process that tells you whether your money is where you think it is.', archetypes: ['Reconciliation', 'Exception Handling'] },
      { name: 'PCI & Security Compliance', description: 'Maintaining Payment Card Industry data security standards across systems, processes, and third parties. The process where compliance is continuous, not annual.', archetypes: ['Monitoring', 'Verification'] },
      { name: 'Partner & ISO Channel Management', description: 'Managing relationships with independent sales organizations, referral partners, and resellers. The process that extends your distribution without extending your control.', archetypes: ['Processing', 'Billing', 'Collection'] },
      { name: 'Exception & Error Processing', description: 'Identifying, routing, and resolving transactions that fail to process normally. The process that most operations understaff and undermanage until the queue becomes a crisis.', archetypes: ['Exception Handling', 'Recovery'] },
      { name: 'Reporting & Analytics', description: 'Generating merchant statements, partner reports, and internal analytics. The process where data becomes insight \u2014 or becomes noise.', archetypes: ['Monitoring', 'Processing'] },
      { name: 'Risk & Portfolio Monitoring', description: 'Monitoring merchant portfolio health, concentration risk, and emerging fraud patterns. The process where early signals prevent large losses.', archetypes: ['Monitoring', 'Collection', 'Reconciliation'] },
    ],
    transformationSummary: `Financial processors operate at scale and speed that make small inefficiencies expensive and small errors dangerous. A reconciliation gap that takes an extra hour to resolve every day costs hundreds of hours a year. An exception process that handles 2% of volume but consumes 20% of staff time is a design failure, not an acceptable ratio.

The Bismark Method maps every process against its archetypes \u2014 exposing where Authorization bottlenecks create latency, where Reconciliation gaps become financial exposure, where Exception Handling has become the operation instead of the exception. Your apprentices redesign these processes for the volume and precision your business demands.`,
  },

  // 5. Food Production
  {
    slug: 'food-production',
    name: 'Food Production',
    descriptor: 'Ingredient intake through shelf life and regulatory compliance',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Scheduling', 'Fulfillment', 'Processing',
      'Monitoring', 'Reconciliation', 'Exception Handling',
    ],
    prev: 'financial-processors',
    next: 'industrial-technology',
    operationalContext: `The clock is always running. Raw materials arrive with variable quality and shelf life. Production schedules are built around demand forecasts that were wrong before the ink dried. Changeovers take too long because the line was designed for fewer SKUs than you\u2019re running today. Sanitation protocols are followed \u2014 but the time they consume keeps growing as regulatory requirements expand.

On the floor, operators know which machines drift and which readings to watch. But that knowledge lives in people, not in processes. When the experienced operator is off shift, the same line runs differently. Quality holds happen because the response protocol isn\u2019t clear enough to execute without a supervisor. Traceability is technically possible but operationally painful.

The product ships. The compliance boxes get checked. But the operation runs with more waste, more downtime, more rework, and more risk than the margins can sustain long-term.`,
    processes: [
      { name: 'Raw Material Receiving & Inspection', description: 'Accepting, inspecting, and dispositioning incoming ingredients and packaging materials. The process where supplier quality becomes your quality.', archetypes: ['Intake', 'Verification'] },
      { name: 'Ingredient Storage & Inventory Management', description: 'Managing raw material storage conditions, rotation, and availability. The process where FIFO discipline and temperature control determine whether your ingredients are assets or liabilities.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Production Scheduling & Planning', description: 'Sequencing production runs against demand, capacity, and material availability. The process where the gap between the plan and the floor is measured in lost capacity.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Batch Formulation & Mixing', description: 'Measuring, combining, and processing ingredients according to recipes and specifications. The process where precision determines both product quality and material yield.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Processing & Cooking', description: 'Applying heat, pressure, fermentation, or other transformation processes to convert raw ingredients into finished food products. The core conversion step where process control determines safety, quality, and consistency.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Packaging & Labeling', description: 'Filling, sealing, labeling, and coding finished products for distribution. The process where line speed, accuracy, and regulatory compliance converge.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Quality Control & Testing', description: 'Sampling, testing, and dispositioning product at critical control points throughout production. The process that determines whether quality is built into the operation or inspected after the fact.', archetypes: ['Monitoring', 'Exception Handling'] },
      { name: 'Sanitation & CIP (Clean-in-Place)', description: 'Cleaning and sanitizing production equipment and environments between runs. The process where food safety meets production efficiency \u2014 and where shortcuts have consequences.', archetypes: ['Processing', 'Scheduling'] },
      { name: 'Lot Tracking & Traceability', description: 'Maintaining chain-of-custody records from raw materials through finished goods. The process that determines whether a recall is a targeted response or a full-scale crisis.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Finished Goods Warehousing', description: 'Storing finished products under appropriate conditions, managing inventory positions, and staging for shipment. The process where shelf life management meets order fulfillment.', archetypes: ['Fulfillment', 'Reconciliation'] },
      { name: 'Order Fulfillment & Shipping', description: 'Picking, staging, loading, and shipping customer orders with temperature control and documentation. The process where the product leaves your control and enters the customer\u2019s.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Waste Management & Yield Optimization', description: 'Tracking, analyzing, and reducing waste across the production process. The process where every percentage point of yield improvement drops directly to the bottom line.', archetypes: ['Monitoring', 'Exception Handling'] },
      { name: 'Regulatory Compliance & Audit Readiness', description: 'Maintaining FSMA, HACCP, SQF, and other regulatory and certification compliance. The process that most operations manage as event preparation rather than daily discipline.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Supplier Quality & Vendor Management', description: 'Managing supplier performance, conducting audits, and ensuring incoming material consistency. The process that extends your quality system beyond your four walls.', archetypes: ['Intake', 'Exception Handling'] },
    ],
    transformationSummary: `Food production operations run on thin margins with zero tolerance for safety failures. Every minute of unplanned downtime, every batch that doesn\u2019t meet spec, every yield point lost to waste \u2014 these aren\u2019t just operational issues, they\u2019re existential ones. The regulatory environment only gets stricter, and the customers only get more demanding.

The Bismark Method maps food production at the archetype level \u2014 exposing where Intake variability creates Processing waste, where Scheduling gaps cost capacity, where Monitoring is collecting data but not driving action. Your apprentices redesign these processes with the discipline and rigor that food safety demands and that margins require.`,
  },

  // 6. Industrial Technology
  {
    slug: 'industrial-technology',
    name: 'Industrial Technology',
    descriptor: 'Equipment manufacturing through field service and maintenance contracts',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Scheduling', 'Fulfillment', 'Processing',
      'Monitoring', 'Exception Handling',
    ],
    prev: 'food-production',
    next: 'insurance',
    operationalContext: `Your equipment is in the field, and that\u2019s where the complexity lives. A service request comes in and the first question \u2014 warranty, contract, or billable \u2014 takes longer to answer than it should. Dispatching a technician requires matching skills, parts availability, geography, and customer priority in a system that was designed for half the product lines you support today.

On the manufacturing side, engineer-to-order configurations create unique BOMs that flow through a production process designed for repetition. Change orders arrive mid-build. Suppliers deliver late because procurement lead times are optimistic by design. Test and validation protocols are thorough but manually intensive.

The aftermarket operation \u2014 parts, service, warranties \u2014 generates margin but runs on institutional knowledge. The senior technicians know which parts actually fail. The parts team knows which substitutions work. But none of that knowledge is in the process. It\u2019s in the people. And when those people leave, the operation gets slower and more expensive.`,
    processes: [
      { name: 'Service Request Intake & Triage', description: 'Receiving, categorizing, and prioritizing service requests across channels and contract types. The process that determines whether field service starts with clarity or with guesswork.', archetypes: ['Intake', 'Processing'] },
      { name: 'Warranty & Entitlement Verification', description: 'Determining coverage status, contract terms, and service entitlements for incoming requests. The process where billing accuracy begins \u2014 or where revenue leakage starts.', archetypes: ['Verification', 'Authorization'] },
      { name: 'Field Service Dispatch & Scheduling', description: 'Matching technicians to jobs based on skills, location, parts availability, and priority. The process where utilization, first-time fix rate, and customer satisfaction are all determined.', archetypes: ['Scheduling', 'Fulfillment'] },
      { name: 'Parts Ordering & Inventory Management', description: 'Managing parts procurement, stocking, and distribution across field and depot locations. The process where parts availability determines whether a repair takes hours or weeks.', archetypes: ['Intake', 'Scheduling', 'Monitoring'] },
      { name: 'Equipment Installation & Commissioning', description: 'Deploying, configuring, testing, and handing over new equipment at customer sites. The process where first impressions become long-term relationships.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Preventive & Predictive Maintenance', description: 'Scheduling and executing maintenance activities based on time, usage, or condition data. The process that determines whether you\u2019re preventing failures or just reacting to them.', archetypes: ['Scheduling', 'Monitoring'] },
      { name: 'Break-Fix Repair & Resolution', description: 'Diagnosing and resolving equipment failures in the field or at depot. The core service process where technical skill meets operational efficiency.', archetypes: ['Processing', 'Exception Handling'] },
      { name: 'Engineer-to-Order Configuration', description: 'Managing custom product configurations from specification through manufacturing release. The process where customer requirements meet production reality.', archetypes: ['Processing', 'Fulfillment'] },
      { name: 'Production Planning & Shop Floor Execution', description: 'Scheduling production runs, managing work orders, and tracking floor-level execution against plan. The process where complexity meets capacity.', archetypes: ['Scheduling', 'Processing', 'Monitoring'] },
      { name: 'Quality Assurance & Test Validation', description: 'Inspecting, testing, and certifying products against specifications and standards. The process that determines whether quality is a gate or an afterthought.', archetypes: ['Monitoring', 'Exception Handling'] },
      { name: 'Returns & Depot Repair', description: 'Managing returned equipment through assessment, repair, refurbishment, and redeployment. The process where returned assets become recovered value \u2014 or permanent write-offs.', archetypes: ['Intake', 'Processing', 'Exception Handling'] },
      { name: 'Service Contract & SLA Management', description: 'Creating, managing, and measuring performance against service contracts and SLA commitments. The process where promises become operational requirements.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Technical Knowledge & Documentation Management', description: 'Capturing, organizing, and distributing technical knowledge across service and engineering teams. The process that determines whether expertise scales with your business or leaves with your people.', archetypes: ['Processing', 'Fulfillment'] },
      { name: 'Aftermarket Sales & Parts Revenue', description: 'Managing parts sales, consumables, and upgrade revenue through the installed base lifecycle. The process where the aftermarket either subsidizes the business or gets subsidized by it.', archetypes: ['Fulfillment', 'Processing'] },
    ],
    transformationSummary: `Industrial technology companies build complex products and support them in the field for decades. The operational challenge isn\u2019t any single process \u2014 it\u2019s the interaction between manufacturing, service, parts, and aftermarket operations that creates friction, delays, and margin erosion.

The Bismark Method maps these interconnected operations at the archetype level \u2014 exposing where Intake variability creates downstream chaos, where Scheduling gaps leave technicians idle while customers wait, where Exception Handling has become the dominant workflow. Your apprentices redesign these processes with the integration and discipline that complex industrial operations demand.`,
  },

  // 7. Insurance
  {
    slug: 'insurance',
    name: 'Insurance',
    descriptor: 'Policy application through claims payment, subrogation, and reinsurance',
    processCount: 16,
    activeArchetypes: [
      'Intake', 'Verification', 'Authorization', 'Fulfillment',
      'Processing', 'Monitoring', 'Billing', 'Collection',
      'Reconciliation', 'Exception Handling', 'Recovery',
    ],
    prev: 'industrial-technology',
    next: 'manufacturing',
    operationalContext: `The submission comes in and sits. Not because nobody\u2019s working \u2014 because the underwriting team is triaging across a backlog that doesn\u2019t distinguish between a straightforward renewal and a complex new risk. Pricing models exist but the data they need arrives incomplete, and the cleanup happens in the underwriter\u2019s head rather than in the process.

On the claims side, first notice of loss triggers a workflow that was designed for volume patterns from five years ago. Adjusters carry caseloads that make thorough investigation a luxury. Reserves are set based on experience and adjusted based on hope. Subrogation opportunities get identified late and pursued inconsistently because the recovery operation isn\u2019t connected to the claims operation in any meaningful way.

Policy administration hums along until it doesn\u2019t \u2014 endorsement backlogs create E&O exposure, billing discrepancies generate complaints that consume more resources than the premium they\u2019re arguing about, and renewal processing starts later than anyone is comfortable with.

The operation manages risk for a living. But the operational risks it carries inside its own processes \u2014 the delays, the inconsistencies, the invisible rework \u2014 are often larger than anyone has measured.`,
    processes: [
      { name: 'Submission Intake & Clearance', description: 'Receiving, logging, and clearing new business submissions and renewal requests. The process that determines whether underwriting starts with clean data or starts with cleanup.', archetypes: ['Intake', 'Processing'] },
      { name: 'Risk Assessment & Underwriting', description: 'Evaluating risk characteristics, applying rating algorithms, and making acceptance decisions. The process where risk appetite meets operational capacity \u2014 and where inconsistency between underwriters creates unpredictable results.', archetypes: ['Authorization', 'Processing', 'Verification'] },
      { name: 'Pricing & Quote Generation', description: 'Calculating premiums, building quotes, and communicating terms to brokers and agents. The process where pricing accuracy and turnaround time directly determine win rates.', archetypes: ['Processing', 'Fulfillment'] },
      { name: 'Policy Issuance & Binding', description: 'Converting accepted quotes into bound policies with complete documentation. The process where the promise becomes a contract.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Policy Administration & Endorsements', description: 'Managing in-force policy changes, endorsements, cancellations, and reinstatements. The process where backlog creates E&O exposure and customer friction.', archetypes: ['Processing', 'Exception Handling'] },
      { name: 'Premium Billing & Collection', description: 'Generating premium invoices, processing payments, and managing receivables. The process where billing accuracy determines whether you\u2019re collecting premiums or creating disputes.', archetypes: ['Billing', 'Collection'] },
      { name: 'First Notice of Loss (FNOL)', description: 'Receiving and recording initial claim reports across channels. The process that sets the tone for the entire claims experience \u2014 and captures (or fails to capture) the data that determines everything downstream.', archetypes: ['Intake', 'Processing'] },
      { name: 'Claims Assignment & Triage', description: 'Evaluating new claims, assigning complexity and priority, and routing to appropriate adjusters. The process where workload balancing meets claim severity \u2014 and where misrouting costs weeks.', archetypes: ['Processing', 'Authorization'] },
      { name: 'Claims Investigation & Adjustment', description: 'Investigating claim facts, evaluating coverage, determining liability, and setting reserves. The core claims process where thoroughness, consistency, and cycle time are in constant tension.', archetypes: ['Processing', 'Verification', 'Monitoring'] },
      { name: 'Claims Settlement & Payment', description: 'Negotiating, approving, and disbursing claim payments. The process where reserve accuracy meets settlement discipline.', archetypes: ['Authorization', 'Fulfillment', 'Processing'] },
      { name: 'Subrogation & Recovery', description: 'Identifying, pursuing, and collecting recovery opportunities from responsible third parties. The process where money left on the table is money that came off the loss ratio.', archetypes: ['Recovery', 'Collection', 'Processing'] },
      { name: 'Fraud Detection & SIU Referral', description: 'Identifying suspicious claims, conducting investigations, and managing special investigations unit referrals. The process where false positives waste resources and false negatives cost millions.', archetypes: ['Monitoring', 'Exception Handling', 'Authorization'] },
      { name: 'Reinsurance Administration', description: 'Managing treaty and facultative reinsurance \u2014 cessions, reporting, and recoveries. The process that connects your risk transfer strategy to your operational execution.', archetypes: ['Processing', 'Reconciliation', 'Billing'] },
      { name: 'Regulatory & Statutory Reporting', description: 'Preparing and submitting required filings to state and federal regulators. The process where operational data quality determines compliance posture.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Agency & Broker Management', description: 'Managing distribution relationships \u2014 appointments, commissions, performance, and compliance. The process where channel management meets operational execution.', archetypes: ['Processing', 'Billing', 'Reconciliation'] },
      { name: 'Renewal Processing', description: 'Evaluating in-force policies for renewal, repricing, and retention. The process that determines whether your book of business is an asset that grows or an asset that churns.', archetypes: ['Processing', 'Authorization', 'Fulfillment'] },
    ],
    transformationSummary: `Insurance operations are risk operations. Every process \u2014 from underwriting to claims to billing \u2014 is a risk decision, whether the organization recognizes it that way or not. The operational risks inside these processes \u2014 the delays that create E&O exposure, the inconsistencies that create adverse selection, the reconciliation gaps that create financial misstatement \u2014 are often larger than the risks the company is explicitly underwriting.

The Bismark Method maps every insurance operation against its archetypes \u2014 exposing where Intake failures create downstream rework, where Authorization bottlenecks delay decisions, where Recovery operations are leaving money on the table. Your apprentices redesign these processes with the actuarial precision that insurance operations demand.`,
  },

  // 8. Manufacturing
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    descriptor: 'Production planning through final quality release',
    processCount: 16,
    activeArchetypes: [
      'Intake', 'Verification', 'Scheduling', 'Fulfillment',
      'Processing', 'Monitoring', 'Billing', 'Reconciliation',
      'Exception Handling',
    ],
    prev: 'insurance',
    next: 'mining-metals',
    operationalContext: `You can hear it when the line is running well. And you can feel it when it\u2019s not. Changeovers take longer than the standard because the standard hasn\u2019t been updated since the last product launch. Operators adjust machine parameters based on experience \u2014 which works until the experienced operator isn\u2019t there. The morning production meeting reviews yesterday\u2019s numbers, but the decisions that caused those numbers were made (or not made) hours earlier.

Material shows up from suppliers within spec \u2014 technically. But "within spec" on the certificate of analysis doesn\u2019t always mean "runs well on line 3." Quality holds accumulate because the disposition process requires people who are already doing something else. Maintenance gets scheduled around production rather than with production, which means PM compliance slips until something breaks.

The plant ships what it\u2019s supposed to ship. Most of the time. But the cost to do it \u2014 in overtime, scrap, expedited material, and management attention \u2014 is higher than the P&L makes visible.`,
    processes: [
      { name: 'Sales & Operations Planning (S&OP)', description: 'Aligning demand forecasts, production capacity, and inventory strategy across the planning horizon. The process where the gap between commercial promises and manufacturing reality is either managed or ignored.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Material Procurement & Supplier Management', description: 'Sourcing, ordering, and managing raw materials and components against production requirements. The process that determines whether the line runs or waits.', archetypes: ['Intake', 'Scheduling', 'Monitoring'] },
      { name: 'Incoming Material Inspection', description: 'Inspecting and dispositioning received materials against specifications and quality requirements. The process where supplier quality becomes your quality \u2014 or your problem.', archetypes: ['Intake', 'Verification'] },
      { name: 'Production Scheduling & Sequencing', description: 'Creating and managing production schedules at the line, cell, or machine level. The process where capacity, changeovers, and priorities converge \u2014 and where the plan meets the floor.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Work Order Management', description: 'Creating, releasing, tracking, and closing production work orders. The process that connects the schedule to the execution and the execution to the cost.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Machine Setup & Changeover', description: 'Preparing equipment for the next production run \u2014 tooling, settings, materials, and validation. The process where minutes lost become hours of lost capacity.', archetypes: ['Processing', 'Scheduling'] },
      { name: 'Production Execution & Operator Management', description: 'Running the production line \u2014 machine operation, operator tasking, and real-time performance management. The core process where every other process either enables or constrains throughput.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'In-Process Quality Control', description: 'Monitoring and testing product quality during production at critical control points. The process that determines whether quality is built into the product or sorted out after.', archetypes: ['Monitoring', 'Exception Handling'] },
      { name: 'Maintenance Planning & Execution', description: 'Scheduling and performing preventive, predictive, and corrective maintenance on production assets. The process where uptime is either engineered or accidental.', archetypes: ['Scheduling', 'Processing', 'Monitoring'] },
      { name: 'Scrap, Rework & Non-Conformance', description: 'Identifying, dispositioning, and resolving non-conforming product through rework, scrap, or concession. The process where production failures become either learning opportunities or recurring costs.', archetypes: ['Exception Handling', 'Processing', 'Reconciliation'] },
      { name: 'Finished Goods Packaging & Palletizing', description: 'Packaging, labeling, and palletizing finished products for storage or shipment. The process where production output becomes shippable product.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'Warehouse & Finished Goods Management', description: 'Storing, managing, and staging finished goods inventory for order fulfillment. The process where inventory accuracy determines whether your shipment promise is real.', archetypes: ['Fulfillment', 'Reconciliation'] },
      { name: 'Shipping & Order Fulfillment', description: 'Picking, loading, and shipping customer orders against delivery requirements. The process where the manufacturing operation meets the customer commitment.', archetypes: ['Fulfillment', 'Processing'] },
      { name: 'OEE & Performance Management', description: 'Measuring, analyzing, and improving Overall Equipment Effectiveness across availability, performance, and quality. The process that tells you whether your assets are producing value or consuming it.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Customer Invoicing & Revenue', description: 'Generating invoices, managing pricing, and processing payments for shipped products. The process that converts production output into recognized revenue.', archetypes: ['Billing', 'Processing'] },
      { name: 'Regulatory Compliance & Audit', description: 'Maintaining compliance with industry regulations, customer requirements, and internal standards. The process that enables market access \u2014 and that gets expensive when it\u2019s reactive.', archetypes: ['Monitoring', 'Verification', 'Exception Handling'] },
    ],
    transformationSummary: `Manufacturing operations are physical, visible, and unforgiving. Every minute of downtime has a cost. Every percentage point of scrap is margin. Every changeover that runs long pushes the schedule, and the schedule pushes overtime, expedited shipping, and customer dissatisfaction.

The Bismark Method maps every manufacturing process against its archetypes \u2014 exposing where Scheduling gaps create overtime, where Monitoring is retrospective instead of real-time, where Exception Handling has become an accepted cost instead of a signal to redesign. Your apprentices don\u2019t just measure OEE \u2014 they redesign the processes that determine it.`,
  },

  // 9. Mining & Metals
  {
    slug: 'mining-metals',
    name: 'Mining & Metals',
    descriptor: 'Exploration through refining, maintenance, and environmental compliance',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Verification', 'Scheduling', 'Processing',
      'Monitoring', 'Reconciliation', 'Exception Handling', 'Recovery',
    ],
    prev: 'manufacturing',
    next: 'oil-gas',
    operationalContext: `The orebody doesn\u2019t negotiate. Grade declines, geology changes, and the operation has to adapt or lose yield. But the processes around extraction \u2014 blast planning, haul scheduling, crusher utilization, mill throughput \u2014 are often running on practices that were optimized for a different ore profile.

Maintenance backlogs grow because the planning process can\u2019t keep pace with equipment degradation in harsh conditions. Shutdown scheduling is a negotiation between production, maintenance, and management that nobody wins. Ore tracking from pit to plant to product is technically possible with the systems in place, but operationally fragmented \u2014 reconciliation between mine models, grade control, and plant feed is a quarterly exercise rather than a daily discipline.

Environmental and safety compliance isn\u2019t just a regulatory requirement \u2014 it\u2019s an operational one. Incidents disrupt production. Permit violations stop operations. But the processes that prevent them are managed as parallel obligations rather than integrated operations.

The operation extracts, processes, and ships. But it does it with more cost per ton, more variability in recovery, and more operational risk than the orebody and the installed equipment should require.`,
    processes: [
      { name: 'Mine Planning & Scheduling', description: 'Developing and executing extraction plans that optimize grade, recovery, and equipment utilization against geological constraints. The process where the plan meets the rock.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Drill & Blast Operations', description: 'Planning and executing drilling patterns and blast designs to fragment ore efficiently. The process where energy input determines everything downstream.', archetypes: ['Processing', 'Scheduling'] },
      { name: 'Load & Haul Operations', description: 'Moving broken material from the face to the crusher or stockpile. The process where truck utilization and cycle times determine the cost per ton.', archetypes: ['Processing', 'Scheduling', 'Monitoring'] },
      { name: 'Crushing & Screening', description: 'Reducing ore to target size fractions for downstream processing. The process where throughput, energy consumption, and liner wear define the operating cost.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Milling & Grinding', description: 'Reducing ore particle size to liberate valuable minerals from waste rock. The most energy-intensive process in the operation \u2014 and the one where small efficiency gains have the largest impact.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Beneficiation & Recovery', description: 'Separating valuable minerals from waste through flotation, leaching, gravity, or magnetic separation. The process where metallurgical knowledge meets process control.', archetypes: ['Processing', 'Recovery'] },
      { name: 'Grade Control & Ore Tracking', description: 'Measuring, tracking, and managing ore grade from in-situ through processing. The process that connects the mine model to the plant feed and tells you whether your recovery is real.', archetypes: ['Monitoring', 'Reconciliation', 'Verification'] },
      { name: 'Tailings & Waste Management', description: 'Managing process waste streams including tailings deposition, water balance, and facility monitoring. The process where environmental compliance is operational or it\u2019s a crisis.', archetypes: ['Processing', 'Monitoring', 'Exception Handling'] },
      { name: 'Equipment Maintenance & Reliability', description: 'Managing the maintenance lifecycle for heavy mobile equipment and fixed plant. The process where uptime is either planned or prayed for.', archetypes: ['Scheduling', 'Monitoring', 'Exception Handling'] },
      { name: 'Shutdown & Turnaround Management', description: 'Planning and executing planned maintenance shutdowns to minimize duration and maximize work completion. The process where every hour over plan costs production days.', archetypes: ['Scheduling', 'Processing'] },
      { name: 'Metal Accounting & Reconciliation', description: 'Tracking material flows and metal balances from mine through to product. The process that tells you whether your operation is actually producing what your models say it should.', archetypes: ['Reconciliation', 'Verification'] },
      { name: 'Safety & Environmental Compliance', description: 'Managing safety systems, environmental monitoring, and regulatory compliance as integrated operations. The process where compliance is either a daily discipline or an incident response.', archetypes: ['Monitoring', 'Exception Handling', 'Reconciliation'] },
      { name: 'Supply Chain & Consumables Management', description: 'Procuring and managing reagents, explosives, fuel, grinding media, and other consumables. The process where procurement lead times meet operational consumption rates.', archetypes: ['Intake', 'Scheduling'] },
      { name: 'Product Shipping & Sales Reconciliation', description: 'Managing concentrate or metal product shipment, sampling, assaying, and settlement against sales contracts. The process where the operation\u2019s output becomes the company\u2019s revenue.', archetypes: ['Fulfillment', 'Reconciliation'] },
    ],
    transformationSummary: `Mining and metals operations are constrained by geology, governed by physics, and judged by cost per ton. The orebody is what it is. The equipment is what it is. The only variable the operation controls is how well it runs the processes between the rock and the revenue.

The Bismark Method maps these operations at the archetype level \u2014 exposing where Scheduling gaps create idle equipment, where Monitoring is retrospective rather than predictive, where Reconciliation gaps mean you don\u2019t actually know your recovery rate. Your apprentices redesign these processes with the engineering rigor and operational discipline that extractive industries demand.`,
  },

  // 10. Oil & Gas
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    descriptor: 'Upstream exploration through downstream distribution and regulatory reporting',
    processCount: 14,
    activeArchetypes: [
      'Intake', 'Authorization', 'Scheduling', 'Processing',
      'Monitoring', 'Billing', 'Collection', 'Reconciliation',
      'Exception Handling', 'Recovery',
    ],
    prev: 'mining-metals',
    next: null,
    operationalContext: `The price is set by the market. The geology is set by nature. The only thing the operation controls is how efficiently it converts reservoir energy into revenue. And that efficiency is determined by processes that most operators manage by exception rather than by design.

Production operations run on well-level economics that change daily. Artificial lift optimization is reactive \u2014 wells decline and the response triggers when production drops below a threshold that was set when the well was new. Workover decisions are based on estimates and experience rather than integrated data. Lease operating expenses creep up because nobody owns the process of driving them down.

Midstream operations move product from wellhead to market through a network of gathering systems, processing plants, and pipelines. Scheduling, measurement, and allocation are technically sophisticated but operationally fragmented. Measurement discrepancies between custody transfer points create balancing issues that are "normal" \u2014 until audit reveals they\u2019re not.

The operation produces and delivers hydrocarbons. But the spread between revenue and lifting cost \u2014 the only number that actually matters \u2014 is wider than it needs to be, and the processes that determine it are running on institutional knowledge rather than operational discipline.`,
    processes: [
      { name: 'Well Planning & Permitting', description: 'Designing well programs and securing regulatory approvals for drilling and completion activities. The process where engineering design meets regulatory reality.', archetypes: ['Processing', 'Authorization'] },
      { name: 'Drilling & Completion Operations', description: 'Executing well construction from spud to first production. The process where daily costs are measured in tens of thousands and where operational efficiency is the primary controllable variable.', archetypes: ['Processing', 'Scheduling', 'Monitoring'] },
      { name: 'Production Operations & Optimization', description: 'Managing producing wells to maximize hydrocarbon recovery and minimize lifting costs. The daily process where operational discipline drives field-level economics.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Artificial Lift Management', description: 'Monitoring, optimizing, and maintaining artificial lift systems across the producing fleet. The process where equipment performance determines well economics.', archetypes: ['Monitoring', 'Processing', 'Exception Handling'] },
      { name: 'Workover & Intervention Planning', description: 'Evaluating, approving, and scheduling well interventions to restore or enhance production. The process where capital allocation meets reservoir management.', archetypes: ['Authorization', 'Scheduling', 'Processing'] },
      { name: 'Gathering & Transportation', description: 'Moving produced hydrocarbons from wellhead to processing or delivery points. The process where system capacity, scheduling, and measurement accuracy determine whether you\u2019re moving product efficiently or leaving money in the pipe.', archetypes: ['Processing', 'Scheduling', 'Monitoring'] },
      { name: 'Gas Processing & Treatment', description: 'Separating, treating, and conditioning natural gas and NGLs to meet pipeline or market specifications. The process where processing efficiency directly determines product realization.', archetypes: ['Processing', 'Monitoring'] },
      { name: 'Measurement & Allocation', description: 'Measuring volumes at custody transfer points and allocating production to ownership interests. The process that determines whether your revenue number is a fact or an approximation.', archetypes: ['Monitoring', 'Reconciliation'] },
      { name: 'Revenue Accounting & Joint Interest Billing', description: 'Calculating and distributing revenue, managing joint interest billing, and processing revenue disbursements. The process where production volumes become financial outcomes.', archetypes: ['Billing', 'Reconciliation', 'Collection'] },
      { name: 'Lease Operating Expense Management', description: 'Tracking, analyzing, and controlling field-level operating costs. The process where LOE discipline determines whether marginal wells are assets or liabilities.', archetypes: ['Monitoring', 'Billing', 'Reconciliation'] },
      { name: 'Pipeline Integrity & Maintenance', description: 'Inspecting, assessing, and maintaining pipeline systems to ensure safe and continuous operation. The process where maintenance discipline prevents both safety incidents and production interruptions.', archetypes: ['Monitoring', 'Scheduling', 'Exception Handling'] },
      { name: 'HSE & Regulatory Compliance', description: 'Managing health, safety, environmental, and regulatory requirements across operations. The process where compliance is either embedded in operations or bolted on \u2014 and the difference shows up in incident rates.', archetypes: ['Monitoring', 'Exception Handling', 'Reconciliation'] },
      { name: 'Asset Retirement & Abandonment', description: 'Planning and executing well plugging, facility decommissioning, and environmental remediation. The process where end-of-life obligations meet current-year budgets.', archetypes: ['Processing', 'Authorization', 'Recovery'] },
      { name: 'Land & Mineral Rights Management', description: 'Managing lease obligations, mineral interests, and surface use agreements. The process where operational execution meets legal compliance.', archetypes: ['Processing', 'Reconciliation', 'Intake'] },
    ],
    transformationSummary: `Oil and gas operations exist in a world where the top line is set by commodity markets and the bottom line is set by operational execution. Every dollar of lifting cost, every hour of unplanned downtime, every barrel of deferred production \u2014 these are the only variables the operator actually controls.

The Bismark Method maps these operations at the archetype level \u2014 exposing where Monitoring is collecting data without driving decisions, where Scheduling gaps create deferred production, where Reconciliation discrepancies mean you\u2019re not sure how much you actually produced. Your apprentices redesign these processes with the discipline that commodity operations require \u2014 because when you can\u2019t control the price, you\u2019d better control the cost.`,
  },
];
