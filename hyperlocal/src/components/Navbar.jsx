import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/browse', label: 'Browse Services' },
    { to: '/#how-it-works', label: 'How It Works' },
    { to: '/#become-provider', label: 'Become a Provider' },
  ];

  const isActive = (path) => {
    if (path.includes('#')) return false;
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="HyperLocal Home">
            <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center group-hover:bg-forest-light transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-forest">
              Hyper<span className="text-orange">Local</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-forest bg-green-badge'
                    : 'text-charcoal hover:text-forest hover:bg-green-badge/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/browse"
              className="text-sm font-medium text-gray hover:text-charcoal transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-xl hover:bg-forest-light transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
              Find a Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/browse"
              className="p-2 bg-forest text-white rounded-lg hover:bg-forest-light transition-colors"
              aria-label="Search services"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal hover:text-forest transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-forest bg-green-badge'
                    : 'text-charcoal hover:text-forest hover:bg-green-badge/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              to="/browse"
              className="block px-4 py-3 text-base font-medium text-gray hover:text-charcoal"
            >
              Sign In
            </Link>
            <Link
              to="/browse"
              className="block w-full text-center px-4 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors"
            >
              Find a Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
