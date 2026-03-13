import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'food-production')!;

export default function FoodProductionPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
