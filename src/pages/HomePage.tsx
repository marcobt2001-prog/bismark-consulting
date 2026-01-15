import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import Stats from '../components/home/Stats';
import CaseStudies from '../components/home/CaseStudies';
import ClientLogos from '../components/home/ClientLogos';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Stats />
      <CaseStudies />
      <ClientLogos />
      <CTASection />
    </>
  );
};

export default HomePage;
