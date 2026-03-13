import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'industrial-technology')!;

export default function IndustrialTechnologyPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
