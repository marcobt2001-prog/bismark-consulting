import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'mining-metals')!;

export default function MiningMetalsPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
