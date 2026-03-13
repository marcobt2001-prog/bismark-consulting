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
        question: 'What does Bismark Consulting actually do?',
        answer:
          'We run 16-week operational transformation engagements for service industry companies — insurance, banking, response centers, and similar operations-heavy organizations. Our method trains your internal teams to redesign and improve your own processes, rather than handing you a report and walking away. The result is measurable performance improvement that your people own and sustain after we leave.',
      },
      {
        question: 'How is Bismark different from other consulting firms?',
        answer:
          'Most consulting firms deliver recommendations. We deliver capability. Our engagements are built on a "Learn and Do" model — your people do the work, with our coaches alongside them, so the knowledge transfers by design. We also guarantee results, which is only possible because the method is structured to make outcomes inevitable when followed. And we leave after 16 weeks. We don\'t create dependency. We eliminate it.',
      },
      {
        question: 'What industries do you work in?',
        answer:
          'We work primarily in insurance, banking and financial services, and response/contact center operations. The Bismark Method is built around operational processes — claims processing, policy administration, loan origination, payment processing, customer service workflows, compliance operations — not industry labels. If your organization runs high-volume, process-driven operations, the method applies.',
      },
      {
        question: 'How long has Bismark been doing this?',
        answer:
          'Bismark Consulting was founded in 1998. The Bismark Method in its current form was created in 2007. Since then, we\'ve worked with over 80 clients, trained more than 1,600 apprentices, and our clients have documented over $1 billion in total savings. The method has been refined continuously over nearly two decades of real-world application.',
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
          'The Bismark Method is a 16-week "Learn and Do" engagement with two parallel tracks. Track 1 is Transformative Leadership Mastery (TLM), an executive development program that runs during the first 8 weeks. Track 2 is the 5 Pillars — a sequential, hands-on operational transformation framework executed by your dedicated apprentices across all 16 weeks.\n\nThe five pillars are:\n1. Customer Profile\n2. Process Design & Engineering\n3. Organizational Strategy\n4. Measurement\n5. Continuous Improvement\n\nThe pillars are taught and applied in strict sequence — each one builds on the foundation of the one before it. Your apprentices learn the method by doing the work, on your real operations, with Bismark coaches alongside them Monday through Thursday. By Week 16, your team owns the methodology and the results.',
      },
      {
        question: 'What is TLM, and why does it matter?',
        answer:
          'Transformative Leadership Mastery (TLM) is the executive track of the Bismark Method. It runs during the first 8 weeks and is designed for your senior leadership team — the people who will need to hold and extend the results your apprentices create.\n\nTLM doesn\'t teach management techniques. It shifts how your leaders relate to performance, language, and accountability. The curriculum is built on three core principles: how performance follows perception, how reality arises in language, and how committed language transforms what\'s possible.\n\nTLM matters because operational improvements without leadership transformation are fragile. They depend on conditions staying favorable. With TLM, your leaders have the capacity to sustain and extend results through whatever comes next. This is also why full executive participation in TLM is the condition for our guarantee.',
      },
      {
        question: 'What does the 16-week engagement actually look like?',
        answer:
          'Every week follows the same rhythm:\n\nMonday — Learn: In-class training sessions led by 1–2 Bismark coaches. TLM principles are woven throughout all 16 Mondays. The 5 Pillars are taught in order.\n\nTuesday through Thursday — Do: Bismark coaches work side-by-side with your apprentices, applying what was taught on Monday directly to your operations. This is hands-on execution with real-time coaching.\n\nFriday — Own: Our coaches go home. Your apprentices keep working. They have assignments that feed into the following Monday\'s session — work that can only be done independently.\n\nAt Week 4, The Stake occurs — your apprentices present findings to the executive team and the guarantee goals are validated. The first 8 weeks cover Pillars 1–4 and the full TLM track. The final 8 weeks focus on Pillar 5 (Continuous Improvement) and full ownership transfer.',
      },
      {
        question: 'Can we engage Bismark for just one or two of the Five Pillars?',
        answer:
          'No. The Five Pillars are designed to be executed in strict sequence, and each one depends on the foundation of the one before it. Starting at Pillar 3 (Organizational Strategy) without first completing Customer Profile and Process Design would be like restructuring your teams before understanding how your customers actually experience your processes — which is exactly the mistake the method is designed to prevent.\n\nYou can engage with the 5 Pillars without the TLM executive track. The operational transformation is still real — your apprentices still learn and do, your processes are still redesigned, your team still builds the capability to improve independently. What we can\'t do in that case is guarantee the results will sustain, because without the leadership foundation, the structural support for long-term performance isn\'t there.',
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
          'The Walkthrough is a 3–5 day on-site operational assessment. We send senior practitioners — not junior analysts — to your facility to meet with your leadership, review your data, observe your operations, and deliver an Executive Summary with Data Exhibits that includes quantified findings, specific improvement opportunities, and projected financial impact.\n\nConsulting fees for the Walkthrough are complimentary. The client covers travel-related expenses (flights, hotels, meals). We\'ve conducted these assessments for over 20 years and have never completed one without identifying significant, quantifiable improvement opportunities.',
      },
      {
        question: 'What happens after the Walkthrough?',
        answer:
          'The Walkthrough findings point to one of two forward paths:\n\nPath A — Discovery Proposal: When the Walkthrough identifies complex, interconnected opportunities that require deeper diagnostic work before implementation design. Discovery is a paid 4-week engagement that produces the full transformation blueprint.\n\nPath B — Direct to Implementation (DTI): When the Walkthrough reveals that the operational picture is clear enough — the diagnosis is confirmed, the organization has the foundation, and the path is evident. A DTI engagement skips the extended discovery phase and moves directly into implementation design and deployment.\n\nThe Walkthrough always tells us which path is right. We don\'t decide in advance — the data does. Either way, you walk away from the Walkthrough with a clear, quantified picture of your operational improvement opportunities — whether or not you engage Bismark for the next step.',
      },
      {
        question: 'How do I know if the Walkthrough is right for my organization?',
        answer:
          'The Walkthrough delivers the most value for organizations that share a few characteristics:\n\n1. Established operations at scale — you\'re past the startup phase, typically $100M+ in revenue, with real operational infrastructure.\n2. Executive sponsorship — someone at the C-suite or senior VP level is driving this, because the Bismark Method requires enterprise-wide visibility.\n3. Willingness to invest in transformation — our engagements typically start at $300K per identified end-to-end process.\n4. A culture of learning, not just outsourcing — the Bismark Method is built on knowledge transfer, which means your team needs to be willing to learn, participate, and own the results.\n\nIf your organization runs high-volume, process-driven operations and you have leadership willing to commit to real transformation, the Walkthrough will find value.',
      },
      {
        question: 'What do we need to prepare before the Walkthrough?',
        answer:
          'You don\'t need to prepare a formal package, but the more access and context you provide upfront, the more value the Walkthrough delivers. Here\'s what helps:\n\n1. Stakeholder availability — block time for 3–5 key leaders. We\'ll need 60–90 minutes with each, plus a 2-hour block with the executive sponsor on day one and again for the findings presentation.\n2. Operational data — current performance dashboards, KPI reports, process documentation or workflow maps, org charts for areas in scope, and any recent audit or consulting reports.\n3. Physical and system access — floor access, desk access, and ideally observer-level access to the systems your teams use daily.\n4. An open mind — the Walkthrough works best when leaders are genuinely curious about what we\'ll find, including the uncomfortable parts.',
      },
      {
        question: 'What does a Bismark engagement cost?',
        answer:
          'Our engagements typically start at $300,000 per identified end-to-end process. The scope and total investment depend on the number of processes being addressed, the complexity of your operations, and the size of the apprentice team required.\n\nThe Bismark Method delivers 3–10x return within 18–24 months, with your team owning the method after approximately 16 weeks. That ROI is not aspirational — it\'s what our track record across 80+ clients demonstrates.\n\nThe Walkthrough is the best way to get a specific picture of what an engagement would look like for your organization, including projected financial impact and scope.',
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
          'If the agreed-upon goals from The Stake (validated at Week 4) are not achieved by the end of the 16-week engagement, the Bismark coaching leader returns and continues working with your team — consulting fees waived — until those goals are met.\n\nThe guarantee covers consulting fees only. Standard travel and lodging expenses for on-site coaching remain the client\'s responsibility.\n\nThe guarantee requires that your executive leadership team attends all TLM sessions (or completes make-up sessions within the first 8 weeks). Full participation in TLM is not optional for the guarantee — it\'s the structural condition that makes sustained results possible. If you engage with the 5 Pillars without TLM, the operational transformation is still real, but we cannot guarantee long-term sustainability.',
      },
      {
        question: 'How do you measure results?',
        answer:
          'Results are measured against the SMART goals defined by your leadership team in the first TLM session and validated at The Stake in Week 4. These are specific, measurable targets — not vague aspirations.\n\nDuring the engagement, Pillar 4 (Measurement) builds a management operating system with leading and lagging indicators at every level. Your apprentices design the metrics, build the visibility structures, and learn to use them for real-time decision-making. By the end of the engagement, you have a measurement infrastructure that your team built, understands, and owns.',
      },
      {
        question: 'What happens after the 16 weeks? Do results hold?',
        answer:
          'This is the question the entire method is designed to answer with "yes." Results hold because your people built them. The knowledge didn\'t transfer at the end — it transferred throughout, because your apprentices did the work from Week 1.\n\nThe TLM track ensures your leadership team has the capacity to sustain and extend results through leadership changes, market shifts, and organizational evolution. Pillar 5 (Continuous Improvement) gives your team the governance structures and improvement disciplines to compound results year over year.\n\nOur track record across 80+ clients confirms that organizations sustain and build upon their results long after the engagement ends — without consultant dependency. That\'s not a claim. It\'s the structural outcome of a method designed to leave.',
      },
      {
        question: 'Will you replace our people or restructure our team?',
        answer:
          'No. The Bismark Method is built on your people. We don\'t bring in outside operators. We don\'t recommend layoffs as a path to savings. We don\'t restructure your team from the outside.\n\nPillar 3 (Organizational Strategy) does address organizational alignment — but it\'s your apprentices who do that work, based on what they\'ve learned in Pillars 1 and 2. Structure follows process. If organizational changes are needed, they emerge from the data and are designed by the people who understand your operations best: your own team.',
      },
      {
        question: 'We\'ve tried consultants before and it didn\'t work. Why would this be different?',
        answer:
          'Most consulting engagements fail to sustain for predictable, structural reasons:\n\n1. The consultants did the work, so the knowledge left when they did.\n2. The recommendations were sound but the organization lacked the capability to execute them.\n3. Leadership wasn\'t transformed — only informed — so there was no structural support for new ways of operating.\n4. The engagement created dependency rather than capability, requiring ongoing consulting support to maintain results.\n\nThe Bismark Method is designed specifically to address each of these failure modes. Your people do the work (knowledge stays). They build capability through doing, not reading (execution is built in). TLM transforms leadership capacity (structural support is created). And the entire method is designed to end at Week 16 (dependency is eliminated by design).\n\nWe also guarantee results — something most firms won\'t do because their model doesn\'t structurally produce them.',
      },
      {
        question: 'Can you share client references or case studies?',
        answer:
          'Yes. We can provide references from past clients who have agreed to speak with prospective organizations about their experience. We can also share case studies with specific, quantified results.\n\nThe best time to request references is during or after the Walkthrough, when you have enough context about your own situation to ask the right questions of a reference. We\'ll match you with clients in similar industries or with similar operational challenges when possible.\n\nReach out to us at info@bismarkconsulting.com or schedule a discovery call to start the conversation.',
      },
    ],
  },
];
