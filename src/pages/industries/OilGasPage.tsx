import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'oil-gas')!;

export default function OilGasPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
