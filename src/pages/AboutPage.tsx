import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'We put our clients first, delivering tailored solutions that address their unique challenges and goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism in everything we do.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work alongside our clients as partners, building lasting relationships based on trust and mutual success.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With offices worldwide, we bring global expertise and local insights to every engagement.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Managing Partner',
      bio: 'Former McKinsey partner with 20+ years of experience in operational transformation.',
    },
    {
      name: 'David Chen',
      role: 'Partner, Insurance Practice',
      bio: 'Insurance industry veteran specializing in claims optimization and digital transformation.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Partner, Mining & Resources',
      bio: 'Former COO of major mining operations with expertise in safety and productivity.',
    },
    {
      name: 'James O\'Connor',
      role: 'Partner, Industrial Operations',
      bio: 'Lean Six Sigma expert with extensive manufacturing and energy sector experience.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bismark Consulting</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Founded in 1999, Bismark Consulting has been at the forefront of operational
              excellence in insurance, mining, and industrial operations. We help organizations
              transform their operations, enhance safety, and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bismark Consulting was founded with a simple mission: to help organizations
                  achieve operational excellence through proven methodologies and deep industry expertise.
                </p>
                <p>
                  Over the past 25 years, we've worked with hundreds of clients across insurance,
                  mining, and industrial sectors, delivering measurable results and building
                  lasting partnerships.
                </p>
                <p>
                  Our approach combines rigorous analytical frameworks with practical, hands-on
                  implementation support. We don't just provide recommendations—we work alongside
                  our clients to ensure sustainable change.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-950 mb-6">By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-accent-500">25+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-500">500+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-500">95%</div>
                  <div className="text-gray-600">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-500">4x</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <Icon className="text-accent-500 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-primary-950 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-950 to-primary-800 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-950 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-600 text-center font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-200 mb-8">
            We're always looking for exceptional talent to join our growing team.
          </p>
          <a
            href="#careers"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
