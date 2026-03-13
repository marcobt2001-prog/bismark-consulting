import IndustrySubPageLayout from '../../components/IndustrySubPageLayout';
import { industries } from '../../data/industries';

const industry = industries.find(i => i.slug === 'banking-lending')!;

export default function BankingLendingPage() {
  return <IndustrySubPageLayout industry={industry} />;
}
