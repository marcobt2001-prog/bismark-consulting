import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Press', href: '#press' },
    ],
    services: [
      { name: 'Strategy Consulting', href: '#strategy' },
      { name: 'Operations', href: '#operations' },
      { name: 'Digital Transformation', href: '#digital' },
      { name: 'M&A Advisory', href: '#ma' },
    ],
    industries: [
      { name: 'Insurance', href: '#insurance' },
      { name: 'Mining', href: '#mining' },
      { name: 'Industrial Operations', href: '#industrial' },
    ],
  };

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Bismark <span className="text-accent-400">Consulting</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming organizations. Delivering results.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">New York</p>
                  <p className="text-sm">350 Fifth Avenue, Suite 7400</p>
                  <p className="text-sm">New York, NY 10118</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (212) 555-0100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">contact@bismarkconsulting.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Global Offices</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
            <div>
              <p className="font-semibold text-white">London</p>
              <p className="text-sm">United Kingdom</p>
            </div>
            <div>
              <p className="font-semibold text-white">Singapore</p>
              <p className="text-sm">Asia Pacific</p>
            </div>
            <div>
              <p className="font-semibold text-white">Dubai</p>
              <p className="text-sm">Middle East</p>
            </div>
            <div>
              <p className="font-semibold text-white">San Francisco</p>
              <p className="text-sm">West Coast</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-accent-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-accent-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Bismark Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
