import { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { neighborhoods } from '../data/providers';

export default function SearchBar({ variant = 'default', onSearch, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, location);
    } else {
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      if (location) params.set('loc', location);
      navigate(`/browse?${params.toString()}`);
    }
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto" role="search">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-2 flex flex-col sm:flex-row gap-2">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <Search className="w-5 h-5 text-gray shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need help with?"
              className="w-full text-base text-charcoal placeholder:text-gray-light outline-none bg-transparent"
              aria-label="Search for services"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-border self-stretch my-1" />

          {/* Location */}
          <div className="relative flex items-center gap-3 px-4 py-2 min-w-[180px]">
            <MapPin className="w-5 h-5 text-gray shrink-0" />
            <button
              type="button"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-1 text-base text-charcoal outline-none bg-transparent w-full text-left"
              aria-label="Select neighborhood"
              aria-expanded={showLocationDropdown}
            >
              <span className={location ? 'text-charcoal' : 'text-gray-light'}>
                {location || 'Your neighborhood'}
              </span>
              <ChevronDown className="w-4 h-4 text-gray ml-auto" />
            </button>

            {showLocationDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-border py-2 z-10 animate-scale-in">
                <button
                  type="button"
                  onClick={() => { setLocation(''); setShowLocationDropdown(false); }}
                  className="w-full px-4 py-2 text-left text-sm text-gray hover:bg-cream transition-colors"
                >
                  All neighborhoods
                </button>
                {neighborhoods.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => { setLocation(n); setShowLocationDropdown(false); }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      location === n ? 'text-forest bg-green-badge' : 'text-charcoal hover:bg-cream'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <Search className="w-4 h-4" />
            Search Services
          </button>
        </div>
      </form>
    );
  }

  // Default compact variant
  return (
    <form onSubmit={handleSubmit} className="w-full" role="search">
      <div className="flex items-center gap-2 bg-white rounded-xl border border-border px-4 py-2.5 focus-within:border-forest/30 focus-within:shadow-sm transition-all">
        <Search className="w-5 h-5 text-gray shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for "tutor", "cake", "repair", etc.'
          className="w-full text-sm text-charcoal placeholder:text-gray-light outline-none bg-transparent"
          aria-label="Search for services"
        />
        <button
          type="submit"
          className="px-4 py-1.5 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-forest-light transition-colors shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
}
