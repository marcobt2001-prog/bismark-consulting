import Link from 'next/link';
import CalendlyButton from '../../components/CalendlyButton';

const SectionBreak = () => (
  <div className="text-gold-600 text-center my-12 tracking-widest text-lg">
    &bull; &bull; &bull;
  </div>
);

export default function WhatHappensAfterConsultantsLeave() {
  return (
    <div className="bg-white">
      {/* A. Article Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <p className="font-display text-xs text-gray-400 uppercase tracking-wider mb-6">
          <Link href="/insights" className="hover:text-gold-600 transition-colors">
            INSIGHTS
          </Link>
          {' '}&rsaquo;{' '}
          What Happens After the Consultants Leave
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight mb-4">
          WHAT HAPPENS AFTER THE CONSULTANTS LEAVE
        </h1>
        <p className="text-xl italic text-gray-500 mb-6">
          And Why Nobody in the Industry Wants to Talk About It
        </p>

        <div className="h-px bg-gold-600 w-16 my-6" />

        <div className="flex items-center justify-between text-xs font-display text-gray-400 uppercase tracking-wider">
          <span>Luis Telleria-Xucla, Founder &amp; Managing Director</span>
          <span>14 min read &middot; April 2026</span>
        </div>
      </div>

      {/* B. Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Opening */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I spent the first nine years of my career as a contractor-for-hire,
          fixing operations. I was good at it. I worked inside gold mines in Peru,
          financial services companies processing millions of transactions a day,
          food production plants, energy utilities, and manufacturers across three
          continents and more industries than most consultants see in a lifetime.
          The work itself was never the problem. I could walk into an operation,
          see what was broken, design the fix, and implement it. The numbers would
          move. The client would be thrilled. I&rsquo;d leave.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          And then, six months later, the phone would ring.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The results had faded. The metrics had drifted. The improvements we&rsquo;d
          put in place were slowly being undone, not by some catastrophic failure,
          but by the quiet gravitational pull of an organization reverting to what
          it knew. Every time. Different company, different industry, different
          country. Same outcome.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          That pattern is the reason I created The Bismark Method in 2007. But
          before I explain what I built to solve it, I want to explain what I
          learned about <em>why</em> it happens. Because the conventional wisdom about
          why consulting results don&rsquo;t last is wrong, and that misunderstanding is
          costing organizations millions.
        </p>

        <SectionBreak />

        {/* The Condition You're Already In */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          THE CONDITION YOU&rsquo;RE ALREADY IN WHEN YOU PICK UP THE PHONE
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          No company hires consultants because everything is working. They hire
          consultants because they&rsquo;ve already tried to fix the problem themselves
          and couldn&rsquo;t. That&rsquo;s an important starting point, because it means the
          organization that consultants walk into is already compromised in
          specific, predictable ways.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          First, leadership has lost faith in their own people. They may not say
          it that way, but the decision to bring in outside help is, at its core,
          an admission that the internal team either can&rsquo;t deliver what&rsquo;s needed
          or has already failed to. Usually it&rsquo;s both. The executives have watched
          their frontline leaders and middle managers promise improvements that
          didn&rsquo;t materialize. Sometimes those leaders made commitments they
          genuinely didn&rsquo;t have the skills to keep. Sometimes the executives lost
          patience before the efforts had time to take hold. In many cases,
          there&rsquo;s a history of both: a cycle of ambitious plans, partial
          execution, fading results, and mounting frustration.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This creates an organizational dynamic that nobody talks about in the
          consulting pitch meeting but that shapes everything that happens next.
          By the time the consultants arrive, the internal team already knows that
          leadership doesn&rsquo;t fully believe in them. They know they&rsquo;re being
          supplemented, or replaced, for a reason. And that knowledge doesn&rsquo;t make
          them more motivated. It makes them defensive.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Second, the people who are supposed to sustain whatever the consultants
          build (your frontline supervisors, your department managers, your
          operations leads) are often in their roles for reasons that have nothing
          to do with their ability to design and maintain operational systems.
          They&rsquo;re there because they were the best individual contributors on the
          line before they got promoted. They&rsquo;re there because they&rsquo;re good with
          people. They&rsquo;re there because they&rsquo;ve been loyal to the company for
          twenty years. All valid reasons to be in a leadership role. None of them
          equip a person to design a fit-for-purpose process, build a measurement
          system, or engineer the workflows that actually drive performance.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This is not a criticism of those people. It&rsquo;s a structural observation
          about how most companies fill operational leadership positions. And it&rsquo;s
          directly relevant to what happens after the consultants leave, because
          those are the people who will be left holding the bag.
        </p>

        <SectionBreak />

        {/* The Mercenary Model */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          THE MERCENARY MODEL
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Now bring the consultants into this picture.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Consultants are mercenaries. I don&rsquo;t use that word pejoratively. I was
          one for nine years. The economics are clear: consultants are paid to
          deliver specific outcomes on specific timelines. Their contracts and
          their reputations depend on hitting those numbers. The best firms in the
          world, McKinsey, BCG, Bain, are brilliant at analysis, at strategy, at
          identifying what needs to change. But here&rsquo;s the thing most people in
          the industry won&rsquo;t say out loud: the most prestigious consulting firms
          in the world typically do not get involved with direct implementation.
          They don&rsquo;t get into the operations. And there&rsquo;s a reason for that.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Operations is a messy, grinding, human business. It&rsquo;s shift schedules
          and equipment breakdowns and the supervisor who&rsquo;s been doing it her way
          for fifteen years. Strategy is clean. Implementation is not. The
          business model of a firm that bills $500 an hour for senior partners
          does not reward having those partners spend their Tuesday mornings on a
          production floor resolving a bottleneck in second shift changeover. The
          margins don&rsquo;t support it, the talent doesn&rsquo;t want it, and the brand
          would suffer if it became known that your McKinsey team spends half its
          time in a hard hat arguing about conveyor belt throughput.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          So the work gets segmented. The strategy firm diagnoses and recommends.
          The implementation, the actual doing, gets handed to the client, or to a
          different tier of consultant, or to an internal team that may or may not
          have the skills to execute what was recommended. This is the first
          consulting failure mode: <strong className="text-navy-900">recommend and leave</strong>.
          The analysis is rigorous. The recommendations are sound. The PowerPoint
          is beautiful. And the organization is left holding a roadmap it doesn&rsquo;t
          have the capabilities to follow.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The second failure mode shows up when the consulting firm <em>does</em> stay
          for implementation. Now you have a team of highly paid, highly skilled
          outsiders doing the work <em>for</em> the client&rsquo;s people rather than <em>with</em>{' '}
          them. The consultants design the processes, build the systems, install
          the metrics, and deliver the results. The numbers look great. The
          engagement ends. And the client&rsquo;s own team, the people who were there
          before and will be there after, watched it happen like spectators. They
          didn&rsquo;t design the new process. They don&rsquo;t understand why the metrics are
          structured the way they are. They can follow the new procedures, but
          they can&rsquo;t maintain them, adapt them, or improve them, because they were
          never taught how. This is <strong className="text-navy-900">implement for you</strong>,
          and it produces results that are impressive on paper and fragile in practice.
        </p>

        <SectionBreak />

        {/* Survive Until They Leave */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          SURVIVE UNTIL THEY LEAVE
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Here&rsquo;s where it gets uncomfortable.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In the second model, consultants implementing for you, there&rsquo;s a dynamic
          that develops inside the client organization that I&rsquo;ve seen in virtually
          every engagement I&rsquo;ve ever observed or inherited. The internal employees
          know the consultants are temporary. Many of them have been through this
          before. A previous firm came in, changed everything, and eventually
          left. Some of those changes stuck. Most didn&rsquo;t. The institutional memory
          of the organization includes a deeply held pattern: <em>this too shall
          pass.</em>
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          When you combine that institutional memory with the pre-existing dynamic
          (leadership doesn&rsquo;t fully trust the internal team, the internal team
          knows it, and many of them lack the skills to genuinely engage with the
          work the consultants are doing) you get a survival strategy that nobody
          announces but everyone practices. The frontline and middle management
          adopt the new processes just enough to stay out of trouble. They attend
          the meetings. They fill in the new forms. They hit the numbers while the
          consultants are in the building, watching. But they are not invested in
          the change. They are enduring it. They are waiting for the consultants
          to leave so they can go back to something more comfortable, or at
          minimum, something they actually understand.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          And here&rsquo;s the part that rarely gets discussed: many of these employees
          have real job security. They&rsquo;ve been with the company for years. They
          have relationships up and down the org chart. They know that the
          consultants are the ones on a clock, not them. So the calculus is
          simple. Do enough to stay out of the crosshairs. Don&rsquo;t fight the changes
          openly. Wait it out.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The consultants, who are smart people operating under contract pressure,
          often sense this but don&rsquo;t have the time or the mandate to address it.
          Their job is to deliver the contracted outcomes by the contracted date.
          If the numbers are moving in the right direction, the engagement is
          succeeding. What happens after they&rsquo;re gone is, structurally, not their
          problem. Their reputation is built on the results they delivered, not on
          the results that lasted.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I want to be clear: I&rsquo;m not describing bad consultants. I&rsquo;m describing
          rational actors inside a broken model. The consulting industry&rsquo;s
          incentive structure rewards delivery, not durability. The firms that
          have built the most successful practices in the world have done so by
          being excellent at a specific part of the value chain (diagnosis,
          strategy, or short-term implementation) and none of those parts require
          the results to sustain after the firm leaves.
        </p>

        <SectionBreak />

        {/* The Maintenance Trap */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          THE MAINTENANCE TRAP
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          So the consultants leave. The numbers were good on the final report.
          Leadership is cautiously optimistic. And the internal team, the same
          frontline supervisors and middle managers who watched the consultants do
          the work, is now responsible for maintaining the gains.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At first, they do. The processes are fresh. The metrics are visible. The
          memory of the consultants is still in the building. For a few weeks,
          sometimes a few months, the operation holds.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Then reality sets in.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A process exception comes up that wasn&rsquo;t covered in the new procedures.
          A team member pushes back on a new standard. A piece of equipment
          changes the throughput calculation. And the supervisor or manager who&rsquo;s
          now responsible for the process doesn&rsquo;t know what to do. Not because
          they&rsquo;re incompetent, but because they were never taught how to <em>design</em>.
          They can follow a process that someone else built. They cannot diagnose
          why it&rsquo;s failing, redesign it for a new condition, or build a new
          measurement approach that captures the actual performance drivers. They
          were trained to <em>operate</em>, not to <em>engineer</em>.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Worse, they often lack the leadership skills to address the human side
          of what&rsquo;s happening. When a team member isn&rsquo;t following the new
          standard, the root issue is usually not defiance. It&rsquo;s a gap in
          understanding, or a conflict between the new process and the way the
          work actually flows, or a personality dynamic that requires a difficult
          conversation. Consultants handle these situations reflexively because
          it&rsquo;s a core competency of the profession. But the internal leader who&rsquo;s
          now responsible for the process may not have the skills or the
          confidence to address interpersonal friction, enforce accountability, or
          navigate the kind of conflict that comes with sustained change. So they
          avoid it. Or they address it indirectly. Or they escalate it to someone
          who doesn&rsquo;t have time.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The result is drift. Not a collapse. A drift. The metrics slip a little.
          Then a little more. Standards loosen. Workarounds creep back in. Within
          six to twelve months, the operation has reverted to something that looks
          recognizably like what it was before the consultants arrived, just with
          newer forms and a more expensive set of procedures that nobody fully
          follows.
        </p>

        <SectionBreak />

        {/* The Grand Misperception */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          THE GRAND MISPERCEPTION: IT MUST BE THE PEOPLE
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Here is where most organizations make the mistake that costs them the
          most.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          When the results fade, leadership looks at the situation and draws what
          seems like a reasonable conclusion: the processes were good, the
          consultants built them, and the numbers proved they worked. So if the
          processes were good and the results still faded, the problem must be the
          people. The supervisor in Department B isn&rsquo;t the right fit. The
          operations manager doesn&rsquo;t have the right mindset. The VP needs a fresh
          pair of eyes on the team.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          And so the organization reaches for the one lever it knows how to pull:
          the org chart. They restructure. They move people around. They bring in
          new leaders from outside. They reorganize departments, consolidate
          reporting lines, create new roles. The logic feels airtight: if the{' '}
          <em>ways of working</em> were validated by the consultants and the results
          still didn&rsquo;t hold, it must be the <em>individuals</em> who failed.
        </p>

        <blockquote className="border-l-4 border-gold-600 pl-6 my-8 text-xl italic text-gray-800">
          This is the grandest misperception in operational management: the
          belief that when a well-designed process fails to sustain, the fault
          lies with the personalities and individual traits of the people
          running it, rather than with the organization&rsquo;s failure to build the
          capability to maintain, adapt, and improve it.
        </blockquote>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The processes weren&rsquo;t sustained because nobody in the organization was
          ever given the skills to sustain them. The leadership didn&rsquo;t hold
          because nobody taught the leaders how to lead through process change.
          The accountability faded because nobody built an accountability system
          that the internal team understood well enough to own. The consultants
          built a machine and handed the keys to people who were never taught to
          drive it. And when it stalled, leadership blamed the drivers instead of
          the training.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The org chart move feels decisive. It feels like leadership. But it&rsquo;s
          actually the most expensive way to avoid addressing the real problem,
          because the new people who come in will inherit the same structural gap.
          They&rsquo;ll have different personalities but the same missing capabilities.
          And in twelve months, leadership will be looking at the org chart again.
        </p>

        <SectionBreak />

        {/* The Objections */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          THE OBJECTIONS I KNOW YOU&rsquo;RE THINKING
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I&rsquo;ve made this argument to executives, to consultants, and to boards for
          nearly twenty years. By now I know the objections before they come, and
          they deserve honest answers.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          <strong className="text-navy-900">
            &ldquo;You&rsquo;re a consultant yourself. Isn&rsquo;t this a sales pitch disguised as
            an insight?&rdquo;
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Fair question. Yes, I run a consulting firm. Yes, I&rsquo;m describing a
          problem that my firm was specifically built to solve. I don&rsquo;t pretend
          that makes me a neutral observer. What I&rsquo;d ask you to consider is
          whether the pattern I&rsquo;m describing matches your experience. If you&rsquo;ve
          hired consultants before and the results faded within a year, you
          already know the cycle I&rsquo;m talking about. The question isn&rsquo;t whether I
          have a stake in the answer. The question is whether the answer is
          accurate.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          <strong className="text-navy-900">
            &ldquo;Sometimes it really is the wrong person in the role. You can&rsquo;t train
            your way out of a bad hire.&rdquo;
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Absolutely true. There are cases where someone genuinely does not belong
          in the role they&rsquo;re in, and no amount of coaching or skill-building will
          change that. I&rsquo;ve seen it. I&rsquo;ve had to have those conversations with
          clients. But here&rsquo;s the distinction that matters: you cannot know
          whether it&rsquo;s a people problem or a capability problem until the
          capability gap has been addressed. If you move someone out of a role
          before giving them the skills the role actually requires, you haven&rsquo;t
          made a diagnosis. You&rsquo;ve made an assumption. And most organizations skip
          the diagnosis entirely because restructuring is faster, more visible,
          and feels more like a decision. The ones who do the skills work first
          are often surprised by how many of those &ldquo;wrong people&rdquo; turn out to be
          the right people who were never given the right tools.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          <strong className="text-navy-900">
            &ldquo;Plenty of consulting engagements produce results that last. You&rsquo;re
            overgeneralizing.&rdquo;
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Some do. And when I look at the ones that do, they almost always share a
          specific characteristic: the engagement included meaningful knowledge
          transfer to the client&rsquo;s team, whether that was the firm&rsquo;s intent or a
          byproduct of how the work happened to unfold. A consultant who works
          shoulder to shoulder with a client employee for six months will transfer
          skills by proximity even if the engagement model doesn&rsquo;t require it. The
          issue isn&rsquo;t that lasting results are impossible under traditional
          models. It&rsquo;s that lasting results happen despite those models, not
          because of them. When results sustain, it&rsquo;s usually because a particular
          consultant went beyond the contract, or because a particular client
          employee was exceptional enough to absorb what they observed. That&rsquo;s
          luck, not a system.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          <strong className="text-navy-900">
            &ldquo;What about Lean and Six Sigma programs? Those are specifically
            designed to build internal capability.&rdquo;
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          They are, and I have deep respect for both frameworks. I&rsquo;m a certified
          Lean trainer and a Six Sigma Black Belt. The tools work. The question is
          how they&rsquo;re deployed. In most organizations, Lean and Six Sigma programs
          train individuals in methodology and then send them back into an
          organization that hasn&rsquo;t changed its leadership practices, its process
          design approach, or its measurement systems. You end up with certified
          people operating inside unreformed structures. They know how to run a
          Kaizen event, but the operation they&rsquo;re running the event inside doesn&rsquo;t
          have the process architecture or the leadership alignment to sustain
          what the event produces. The skills are real. The organizational
          infrastructure to use them is often missing.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          <strong className="text-navy-900">
            &ldquo;You&rsquo;re being unfair to McKinsey and the strategy firms. Their role is
            strategy, not implementation. That&rsquo;s not a failure.&rdquo;
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I agree with that completely. McKinsey, BCG, and Bain are exceptional at
          what they do, and what they do is not implementation. I&rsquo;m not
          criticizing them for staying out of operations. I&rsquo;m pointing out that
          the industry has a structural gap between the firms that design the
          strategy and the organizations that have to execute it. The strategy
          firms occupy one end. The implementation firms occupy the other. And the
          space in the middle, where the client&rsquo;s own people need to be built into
          the solution rather than served by it, is largely unoccupied. That&rsquo;s not
          a criticism of any firm. It&rsquo;s an observation about the industry. The gap
          exists whether you find it uncomfortable or not.
        </p>

        <SectionBreak />

        {/* What Has to Be Structurally Different */}
        <h2 className="font-display text-navy-900 text-2xl mt-10 mb-4">
          WHAT HAS TO BE STRUCTURALLY DIFFERENT
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I spent nine years watching this cycle from the inside before I
          understood it well enough to build something that breaks it. The insight
          wasn&rsquo;t complicated. It was just uncomfortable for the consulting
          industry to accept.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If the results fade because the internal team doesn&rsquo;t have the skills to
          sustain them, the answer isn&rsquo;t to build better processes for them to
          follow. The answer is to build better <em>people</em>. To transfer the actual
          design skills, the diagnostic capabilities, and the leadership
          competencies so that the client&rsquo;s own team can do what the consultants
          did. Not follow what the consultants built. <em>Do what the consultants
          did.</em> Design processes. Engineer measurement systems. Diagnose failures.
          Have the hard conversations. Lead through change rather than administer
          through compliance.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          That&rsquo;s the principle The Bismark Method was built on in 2007, and it&rsquo;s
          the reason the model works the way it does. Monday classroom sessions
          where the actual skills are taught. Tuesday through Thursday, hands-on
          coaching where dedicated apprentices from the client&rsquo;s own team apply
          what they learned. A sequential structure that ensures the foundational
          work is done before the more complex work begins. It&rsquo;s not a faster or
          more efficient version of traditional consulting. It&rsquo;s a fundamentally
          different model, what I call{' '}
          <strong className="text-navy-900">coach to build</strong>, the third mode that
          neither the strategy firms nor the implementation firms occupy.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The strategy firms don&rsquo;t occupy it because it requires being in the
          operations, and that&rsquo;s not their business. The implementation firms
          don&rsquo;t occupy it because teaching the client to do the work eliminates
          the dependency that drives repeat engagements. And most internal
          improvement teams don&rsquo;t occupy it because they tend to start with
          organizational restructuring, moving people around on the org chart
          before the process design work has been done, which guarantees they&rsquo;ll
          have to redo the work once they realize the structure doesn&rsquo;t match the
          process.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I&rsquo;ve coached over eighty clients through this model across ten
          industries and three continents. The ones where the results sustained,
          and I mean truly sustained, years after we left, are the ones where the
          client&rsquo;s own people could stand in front of their leadership team and
          explain not just <em>what</em> had changed, but <em>why</em> it was designed that way,
          and <em>what they would do differently</em> if the conditions changed. That&rsquo;s
          not maintenance. That&rsquo;s ownership. And it&rsquo;s the only thing that lasts.
        </p>

        <SectionBreak />

        {/* Closing */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The consulting industry doesn&rsquo;t have a quality problem. It has a
          structural one. The model rewards firms for delivering results, not for
          building the client&rsquo;s capacity to sustain them. And until that changes,
          the phone will keep ringing six months later.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The question isn&rsquo;t whether your last consulting engagement produced
          results. It almost certainly did. The question is whether your team can
          explain why those results happened, adapt the approach when conditions
          change, and improve on what was built without picking up the phone.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If they can&rsquo;t, the problem isn&rsquo;t your people. The problem is the model
          that was used to get you here.
        </p>
      </div>

      {/* C. Author Bio Strip */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border-t-2 border-gold-600 py-8 px-6">
          <p className="font-display text-xs text-gold-600 uppercase tracking-wider mb-3">
            ABOUT THE AUTHOR
          </p>
          <p className="text-navy-900 font-bold text-lg mb-2">
            Luis Telleria-Xucla
          </p>
          <p className="text-gray-700 leading-relaxed">
            Founder &amp; Managing Director of Bismark Consulting, which he
            established in 1998. He created The Bismark Method&trade; in 2007 after
            nine years of watching consulting results fade. He has personally
            coached over 80 clients through operational transformations across ten
            industries on three continents.
          </p>
        </div>
      </div>

      {/* D. CTA Strip */}
      <section className="py-16 bg-navy-900 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            SEE WHAT A BISMARK ENGAGEMENT LOOKS LIKE FROM DAY ONE.
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            The Walkthrough is a complimentary, on-site assessment &mdash; no
            obligation to move forward.
          </p>
          <CalendlyButton
            label="SCHEDULE A MEETING"
            className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
          />
        </div>
      </section>
    </div>
  );
}
