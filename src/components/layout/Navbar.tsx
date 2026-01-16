import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'The Bismark Method', href: '/method' },
    { name: 'Industries', href: '/industries' },
    { name: 'The Walkthrough', href: '/walkthrough' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={'text-sm font-medium transition-colors ' + (isActive(item.href) ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600')}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/walkthrough"
              className="bg-gold-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gold-700 transition-colors"
            >
              Schedule a Walkthrough
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-navy-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={'block px-3 py-2 rounded-md text-base font-medium ' + (isActive(item.href) ? 'bg-gold-50 text-gold-600' : 'text-navy-700 hover:bg-gray-50')}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/walkthrough"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold-600 text-white px-6 py-2 rounded-md text-base font-semibold hover:bg-gold-700 mt-4"
            >
              Schedule a Walkthrough
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
