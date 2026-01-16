import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BismarkMethodPage from './pages/BismarkMethodPage';
import IndustriesPage from './pages/IndustriesPage';
import WalkthroughPage from './pages/WalkthroughPage';
import ContactPage from './pages/ContactPage';

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
          <Route path="/walkthrough" element={<WalkthroughPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
