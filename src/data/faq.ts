export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCluster = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const faqClusters: FAQCluster[] = [
  {
    id: 'understanding-bismark',
    title: 'Understanding Bismark',
    items: [
      {
        question: 'What does Bismark Consulting Group actually do?',
        answer:
          'We transform operations, permanently. Specifically, we work on end-to-end processes: the workflows your people execute every day, the systems those processes run on, the organizational structure around them, and the leadership behaviors that hold it all together. We don\u2019t advise from the side. We work inside your operation, shoulder to shoulder with your team, coaching them to redesign and improve their own processes so the results sustain long after we\u2019re gone.',
      },
      {
        question: 'How is Bismark different from other consulting firms?',
        answer:
          'Most people think of consulting in two modes. There are firms that analyze, recommend, and leave, handing you a report your team is expected to implement with the same thinking that created the problem. Then there are implementation-based firms that go a step further: they analyze, design a solution, and implement it for you. That sounds better, but the result is the same. They\u2019re implementing their plan, based on their analysis. Your team didn\u2019t build it, doesn\u2019t own it, and can\u2019t sustain it once the consultants leave. That\u2019s why it doesn\u2019t stick.\n\nThe Bismark Method works differently. We don\u2019t recommend and we don\u2019t implement for you. We coach your people, through direct observation, proven tools and techniques, and structured learning, to arrive at their own recommendations and build the solutions themselves. Every process redesign, every measurement system, every operating rhythm comes from your team, with our coaches standing beside them. That\u2019s the \u201cLearn and Do\u201d model, and it\u2019s why results hold.\n\nOn top of that, we integrate Transformative Leadership Mastery (TLM) as the foundation of every full engagement. TLM addresses the leadership behaviors, conversations, and commitments that either sustain transformation or quietly erode it. No other firm we\u2019re aware of integrates executive leadership transformation as a structural requirement of operational improvement. And it\u2019s the reason we can guarantee outcomes when TLM is included.',
      },
      {
        question: 'What industries do you work in?',
        answer:
          "We work across a wide range of industries because we operate at the process level, not the industry level. Our current portfolio includes Banking & Lending, Distribution & Logistics, Enterprise Technology, Financial Processors, Food Production, Industrial Technology, Insurance, Manufacturing, Mining & Metals, and Oil & Gas. But that list isn\u2019t a boundary. If your organization runs end-to-end processes that need to perform better, the method applies.\n\nYou can explore our full industry portfolio, including the specific processes we\u2019ve worked on within each, on our Industries page.",
      },
      {
        question: 'How long has Bismark been doing this?',
        answer:
          'Since 1998. The Bismark Method wasn\u2019t built in a lab. It was built in operations over more than 25 years of engagements. It\u2019s been refined continuously, but the core architecture has held because it was designed around how operations actually work, not around a consulting framework that needed a market.',
      },
    ],
  },
  {
    id: 'evaluating-the-method',
    title: 'Evaluating the Method',
    items: [
      {
        question: 'What is The Bismark Method?',
        answer:
          'The Bismark Method is a proprietary operational transformation methodology built on two integrated components: Transformative Leadership Mastery (TLM) and the Five Pillars of Operational Excellence.\n\nWe use an analogy: TLM is the palm of the hand, and the Five Pillars are the fingers. You can engage the pillars without TLM (and some clients do) but the hand doesn\u2019t grip without the palm. TLM is what connects leadership commitment to operational execution, and it\u2019s the reason we can guarantee outcomes when it\u2019s included.\n\nThe Five Pillars are executed in sequence, and that sequence is non-negotiable:\n\nPillar 1: Customer Profile — Defining exactly who your operation serves and what they actually need.\n\nPillar 2: Process Design and Engineering — Redesigning how work flows through the operation using direct observation, proven tools, and proven techniques. We don\u2019t train your people to become expert tool handlers. We coach them to apply the right tools in the right situations. And through that coaching, they become process designers.\n\nPillar 3: Organizational Strategy — Structuring roles, spans, and reporting lines to support the redesigned processes, not the other way around.\n\nPillar 4: Measurement — Building the metrics architecture that tells the truth about performance, in real time.\n\nPillar 5: Continuous Improvement — Installing the operating rhythms and feedback loops that keep the operation improving after we leave.\n\nThe order matters. Companies with internal improvement teams instinctively want to start with the org chart (Pillar 3) or the metrics (Pillar 4). That impulse is understandable and consistently wrong. You can\u2019t restructure around processes you haven\u2019t redesigned, and you can\u2019t measure what you haven\u2019t defined.',
      },
      {
        question: 'What is TLM, and why does it matter?',
        answer:
          'Transformative Leadership Mastery is a structured leadership development program woven into every week of a full Bismark engagement. It\u2019s not a workshop series bolted onto the side of an operational project. It runs concurrently, same weeks, same leaders, same operational context.\n\nTLM addresses a reality that most consulting firms either ignore or treat as someone else\u2019s problem: the leadership behaviors that created the current state of operations don\u2019t disappear when new processes are installed. Without a deliberate intervention at the leadership level, organizations default back. TLM works on how leaders listen, how they hold commitments, how they have difficult conversations, and how they create accountability without surveillance. These aren\u2019t soft skills, they\u2019re the structural conditions under which operational change either sustains or collapses.\n\nThis is the single biggest differentiator between The Bismark Method and every other operational consulting approach we\u2019ve encountered. Other firms will redesign your processes. Some will even implement the redesign for you. But none of them address the leadership system that has to hold those redesigned processes in place under pressure, under turnover, under the next budget cycle.',
      },
      {
        question: 'What does the 16-week engagement actually look like?',
        answer:
          'The standard full engagement runs 16 weeks, structured in four phases of four weeks each. Bismark coaches are on-site Monday through Thursday. Mondays are structured classroom sessions where apprentices learn the curriculum, the specific topics and tools relevant to where they are in the pillar sequence. The curriculum is built around the processes in scope: once we understand the work being done, we apply the most relevant curriculum across all apprentices based on process archetypes. Apprentices attend the sessions that are relevant to their specific process, though they\u2019re welcome to participate in all of them. Tuesday through Thursday, coaches work side by side with apprentices, applying what was covered Monday directly in the operation. Fridays, the coaches go home and your team works independently, every Friday is a rehearsal for post-engagement life.\n\nYour team isn\u2019t watching us work, they\u2019re doing the work, with coaching. By week 16, every process redesign, every measurement system, every operating rhythm was built by your people. They own it because they made it.',
      },
      {
        question: 'When will I know the curriculum timeline and topics?',
        answer:
          'It depends on where things stand at the end of the Walkthrough. If the picture is clear enough, processes are well-defined, apprentice candidates are identifiable, and the operational landscape is straightforward, you may have a strong sense of the curriculum direction coming out of the Walkthrough itself. But in most cases, the curriculum timeline and topics are fully defined by the end of the Discovery phase. Discovery is where we lock in the processes in scope, confirm apprentice assignments, and build the curriculum plan around the specific archetypes and operational realities of your environment. By the time Discovery is complete, you\u2019ll know exactly what your team will be learning, when, and why.',
      },
      {
        question: 'Can we engage Bismark for just one or two of the Five Pillars?',
        answer:
          'Yes. We call this a Pillars-Only engagement. Some organizations have strong leadership cultures and genuinely need targeted operational work, process redesign, measurement architecture, organizational restructuring. We\u2019ll do that work and do it well.\n\nWhat we won\u2019t do is guarantee the outcome. The guarantee requires TLM because our experience, across 25+ years, is that operational change without leadership change reverts. If you\u2019re confident your leadership system will hold the new operational design in place, a Pillars-Only engagement can deliver significant value. But we\u2019d rather be transparent about that distinction upfront than let you discover it later.',
      },
    ],
  },
  {
    id: 'planning-the-engagement',
    title: 'Planning the Engagement',
    items: [
      {
        question: 'What is the Walkthrough, and is it really free?',
        answer:
          'The Walkthrough is a 3\u20135 day on-site engagement where a Bismark team comes to your operation. We begin by interviewing key stakeholders to understand the operational landscape and determine initial or hypothetical SMART goals for the processes in scope. From there, we conduct direct observations, on the floor, in the workflow, watching how work actually moves. The Walkthrough concludes with a written executive summary including data exhibits and an oral presentation to your leadership team.\n\nIt\u2019s free of consulting fees. Travel-related expenses (flights, hotels, ground transportation) are covered by you. That\u2019s the asterisk, and we\u2019re upfront about it because we don\u2019t believe in burying costs.\n\nWhy do we do it this way? Because the Walkthrough replaces the need for traditional case studies and client testimonials. You don\u2019t need to take our word for what we can do, you experience our rigor firsthand, inside your own operation, with your own data. Most firms ask you to buy before you see the work. We show you the work before you buy anything.',
      },
      {
        question: 'What happens after the Walkthrough?',
        answer:
          'The Walkthrough produces one of two proposals. A Discovery proposal is recommended when the situation calls for it, whether that\u2019s because of the complexity of the processes in scope, the need to properly identify and select the right apprentice candidates, or the need for more time to develop well-defined SMART goals. A Direct to Implementation (DTI) proposal is offered when the Walkthrough reveals enough clarity to proceed without an intermediate phase.\n\nEither way, the decision is yours. There is no obligation, no pressure, and no trailing sales process. The Walkthrough stands on its own as a deliverable, if you never engage us again, you still walk away with findings your internal team can act on.',
      },
      {
        question: 'How does the Discovery phase relate to the Walkthrough?',
        answer:
          'Think of it as a progression of depth and precision. The Walkthrough gives you and us a clear-eyed view of the operational landscape, what\u2019s working, what isn\u2019t, and where the opportunities are. It\u2019s designed to be sharp enough to act on, but it\u2019s still a 3\u20135 day window into your operation.\n\nDiscovery picks up where the Walkthrough leaves off. It\u2019s a deeper, more structured phase that translates the Walkthrough\u2019s findings into an implementation-ready plan. During Discovery, we work with your team to finalize the processes in scope, identify and select the right apprentice candidates, refine SMART goals from hypothetical to validated, build the curriculum plan, define the resource requirements, and establish the investment level and timeline.\n\nThe Walkthrough tells you what\u2019s possible. Discovery tells you exactly what it will take, people, time, investment, and expected outcomes. By the end of Discovery, there are no open questions going into the 16-week engagement.',
      },
      {
        question: 'What can I expect at the end of the Discovery phase?',
        answer:
          'Discovery is the bridge between the Walkthrough and implementation. By the end of Discovery, you will have a complete picture of the engagement ahead: the confirmed processes in scope, the apprentice assignments, validated SMART goals that will anchor The Stake meeting at week four, the full curriculum plan with timeline and topics, the investment level and cost structure, and a detailed resource plan covering both Bismark and client commitments.\n\nIn short, Discovery answers every question you need answered before committing to the 16-week engagement. There are no surprises on day one of implementation because Discovery eliminated them.',
      },
      {
        question: 'How do I know if the Walkthrough is right for my organization?',
        answer:
          'The Walkthrough is designed for leaders who are accountable for operational performance and know something needs to change, COOs, VPs of Operations, asset managers, heads of processing centers, and anyone responsible for how work gets done at scale. Typical triggers include past improvement initiatives that didn\u2019t sustain, mounting cost pressure without a clear operational path forward, scaling challenges where adding headcount isn\u2019t solving the throughput problem, or quality and service-level issues that keep recurring despite attention and investment.\n\nIf your organization runs end-to-end processes and you\u2019re the person accountable for their performance, the Walkthrough is built for you.',
      },
      {
        question: 'What do we need to prepare before the Walkthrough?',
        answer:
          'Before the Walkthrough, we\u2019ll schedule as many preparatory meetings as needed to make sure we hit the ground running on day one. These are ad hoc conversations, not a rigid schedule, and they cover logistics, data requests, the Walkthrough schedule and itinerary, key people we need to meet with, and the timeline for final delivery of outputs.\n\nDuring these conversations, we\u2019ll also work together to identify the processes in scope and the client staff who need to participate based on those processes. You don\u2019t need to prepare a formal package. We\u2019ll guide the process and tell you exactly what we need. The goal is simple: no wasted time once we\u2019re on-site.',
      },
      {
        question: 'How do I select who is right for the apprentice role?',
        answer:
          'This is one of the most important decisions in the engagement, and you don\u2019t have to make it alone. Identifying the right apprentice candidates is one of the key reasons to pursue a Discovery phase after the Walkthrough rather than jumping straight to implementation. During Discovery, we work with your leadership team to evaluate candidates based on their operational knowledge, their credibility within the organization, their capacity to be dedicated full-time to the engagement, and their potential to carry the work forward after the engagement ends.\n\nThe right apprentice isn\u2019t necessarily the most senior person or the highest performer on paper. It\u2019s the person who has the trust of the floor, the curiosity to learn a new way of working, and the commitment to see it through. We\u2019ve done this across hundreds of engagements, and we\u2019ll help you get it right.',
      },
      {
        question: 'What does a Bismark engagement cost?',
        answer:
          'We scope engagements based on the size and complexity of the operation, the number of end-to-end processes in scope, and whether TLM is included. We don\u2019t publish standard pricing because no two operations are the same. What we can tell you: the Walkthrough is free of consulting fees, and the ROI on a full engagement typically runs 3\u201310x within 18\u201324 months, measured in real operational metrics, not consultant-generated projections.\n\nThe more relevant cost question is what your current operational gaps are costing you today. The Walkthrough answers that question with data.',
      },
    ],
  },
  {
    id: 'assessing-risk-and-results',
    title: 'Assessing Risk and Results',
    items: [
      {
        question: 'What exactly does the guarantee cover?',
        answer:
          'When TLM is included, making it a full Bismark Method engagement, we guarantee measurable operational improvement. If we don\u2019t deliver the results defined at the outset, our consulting fees during the guarantee period are waived. Travel-related expenses during that period are not included in the guarantee.\n\nThis isn\u2019t a marketing claim. It\u2019s a contractual commitment, and it\u2019s possible only because TLM gives us confidence that the leadership system will sustain the operational changes. Without TLM, we\u2019ll still do excellent work, but we won\u2019t guarantee it, because we\u2019ve learned what happens when operational change meets unchanged leadership.',
      },
      {
        question: 'How do you measure results?',
        answer:
          'It depends on the processes and operations in scope. Every engagement includes process-specific metrics that target the outcomes of each process, the things that matter to the business, whether that\u2019s cycle time, accuracy, throughput, cost per transaction, or service levels. But we also measure something most firms don\u2019t: whether the process itself is holding to the original design specifications established in Pillar 2. That\u2019s the difference between measuring outcomes and measuring process integrity. Both matter, because strong outcomes from a drifting process are temporary.\n\nThe measurement architecture is built during the engagement (Pillar 4) by your team, with our coaching. Your people understand the metrics, trust the data, and own the reporting.',
      },
      {
        question: 'What happens after the 16 weeks? Do results hold?',
        answer:
          'This is the question every operations leader should ask, and the one most consulting firms hope you don\u2019t.\n\nResults hold because of three design choices baked into the method. First, your team built everything. The process redesigns, the measurement systems, the operating rhythms, none of it was delivered by Bismark for your team to adopt. Your people made it, which means they understand it, they believe in it, and they can fix it when something breaks. Second, TLM changes how your leaders lead, not just during the engagement, but permanently. The conversations, commitments, and accountability structures from TLM don\u2019t expire. Third, Pillar 5 (Continuous Improvement) installs the feedback loops and operating cadences that keep the operation improving after we leave. We don\u2019t build a static solution. We build a system that learns.\n\nThe apprentice model reinforces all three. By the end of 16 weeks, your key people have been working alongside our coaches every day. They don\u2019t need a transition document. They\u2019ve been doing the work.',
      },
      {
        question: 'Will you replace our people or restructure our team?',
        answer:
          'Organizational Strategy is Pillar 3, and it follows Process Design (Pillar 2) for a reason. We don\u2019t walk in with a restructuring plan. We redesign how work flows through your operation first, and then align the organizational structure to support those redesigned processes. Sometimes that means role changes. Sometimes it means span adjustments. Sometimes the current structure is closer to right than anyone expected. The point is that organizational decisions are driven by operational reality, not by a template.\n\nWe are not a headcount-reduction firm. Our focus is on building operational capacity, which often means your existing team can do significantly more with the same or fewer resources, but the goal is throughput, quality, and sustainability, not a body count.',
      },
      {
        question: 'We\u2019ve tried consultants before and it didn\u2019t work. Why would this be different?',
        answer:
          'We hear this often, and it\u2019s a fair question. Here\u2019s the honest answer: most consulting engagements fail for one of three reasons. The recommendations were sound but never implemented. They were implemented by the consulting firm but didn\u2019t stick because the client\u2019s team never owned the work. Or the engagement addressed symptoms without touching root causes.\n\nThe Bismark Method is designed specifically to eliminate all three failure modes. We don\u2019t hand you recommendations, we coach your people to develop their own. We don\u2019t implement for you, your team builds the solution with our guidance. And root-cause work is non-negotiable, that\u2019s what the sequential pillar architecture ensures. You can\u2019t redesign processes (Pillar 2) without first understanding your customer (Pillar 1). You can\u2019t restructure the org (Pillar 3) without first fixing the processes. The sequence prevents the kind of surface-level work that feels productive in the moment and falls apart in six months.\n\nAnd if you\u2019re still skeptical, that\u2019s exactly what the Walkthrough is for. Come see the work. No commitment. No obligation. Just clarity.',
      },
      {
        question: 'Can you share client references or case studies?',
        answer:
          'We protect the confidentiality of our client engagements. What we offer instead is more valuable: the Walkthrough. Rather than reading about what we did for someone else, you see what we can do for you, in your operation, with your data, on your floor. Every other consulting firm asks you to trust their track record. We ask you to verify our capability directly.\n\nThat said, we do share anonymized transformation metrics across our Industries pages, real performance improvements drawn from actual engagements, not theoretical projections.',
      },
    ],
  },
];
