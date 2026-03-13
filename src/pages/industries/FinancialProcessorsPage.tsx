import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'financial-processors')!;

export default function FinancialProcessorsPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
