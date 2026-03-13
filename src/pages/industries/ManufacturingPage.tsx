import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'manufacturing')!;

export default function ManufacturingPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
