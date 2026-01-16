import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'The Bismark Method', href: '/method' },
      { name: 'Industries', href: '/industries' },
    ],
    services: [
      { name: 'The Walkthrough', href: '/walkthrough' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Looking for a consulting approach that sustains and maximizes results? Contact Bismark Consulting Group today to learn how The Bismark Method™ would be applied to your business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bismark Consulting. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Founded 1998 | 20+ Years of Sustained Results
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
