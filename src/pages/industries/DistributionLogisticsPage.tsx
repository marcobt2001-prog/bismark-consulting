import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'distribution-logistics')!;

export default function DistributionLogisticsPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
