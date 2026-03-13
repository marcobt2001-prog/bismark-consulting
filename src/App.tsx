import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BismarkMethodPage from './pages/BismarkMethodPage';
import IndustriesPage from './pages/IndustriesPage';
import WalkthroughPage from './pages/WalkthroughPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import HomePageOld from './pages/HomePageOld';
import BankingLendingPage from './pages/industries/BankingLendingPage';
import DistributionLogisticsPage from './pages/industries/DistributionLogisticsPage';
import EnterpriseTechnologyPage from './pages/industries/EnterpriseTechnologyPage';
import FinancialProcessorsPage from './pages/industries/FinancialProcessorsPage';
import FoodProductionPage from './pages/industries/FoodProductionPage';
import IndustrialTechnologyPage from './pages/industries/IndustrialTechnologyPage';
import InsuranceIndustryPage from './pages/industries/InsurancePage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import MiningMetalsPage from './pages/industries/MiningMetalsPage';
import OilGasPage from './pages/industries/OilGasPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/method" element={<BismarkMethodPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/banking-lending" element={<BankingLendingPage />} />
          <Route path="/industries/distribution-logistics" element={<DistributionLogisticsPage />} />
          <Route path="/industries/enterprise-technology" element={<EnterpriseTechnologyPage />} />
          <Route path="/industries/financial-processors" element={<FinancialProcessorsPage />} />
          <Route path="/industries/food-production" element={<FoodProductionPage />} />
          <Route path="/industries/industrial-technology" element={<IndustrialTechnologyPage />} />
          <Route path="/industries/insurance" element={<InsuranceIndustryPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/mining-metals" element={<MiningMetalsPage />} />
          <Route path="/industries/oil-gas" element={<OilGasPage />} />
          <Route path="/walkthrough" element={<WalkthroughPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/homepage-old" element={<HomePageOld />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
