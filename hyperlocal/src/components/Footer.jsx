import { Link } from 'react-router-dom';
import { MapPin, Globe, MessageCircle, ExternalLink, Play, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Hyper<span className="text-orange-badge">Local</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Helping neighborhoods help each other. Discover trusted local service providers
              and connect with skilled people in your community.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: 'Website' },
                { icon: MessageCircle, label: 'Twitter' },
                { icon: ExternalLink, label: 'Facebook' },
                { icon: Play, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/browse', label: 'Browse Services' },
                { to: '/#how-it-works', label: 'How It Works' },
                { to: '/#become-provider', label: 'Become a Provider' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Company
            </h3>
            <ul className="space-y-3">
              {['About', 'Contact', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0" />
                hello@hyperlocal.in
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Sector 14, Gurugram,<br />Haryana 122001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} HyperLocal. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Made with ❤️ for local communities
          </p>
        </div>
      </div>
    </footer>
  );
}
