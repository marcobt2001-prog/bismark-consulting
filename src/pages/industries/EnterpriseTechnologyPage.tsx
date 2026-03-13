import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'enterprise-technology')!;

export default function EnterpriseTechnologyPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
