import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'insurance')!;

export default function InsurancePage() {
  return <IndustrySubPageLayout industry={industry} />;
}
