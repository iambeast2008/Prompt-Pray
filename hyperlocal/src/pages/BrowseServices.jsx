import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import { categories, neighborhoods, providers, filterProviders } from '../data/providers';

const BrowseServices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'All';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: null,
    rating: null,
    availability: null,
    location: 'All locations'
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const priceOptions = [
    { label: 'Any price', value: null },
    { label: 'Under ₹300', value: 'under300' },
    { label: '₹300–₹500', value: '300to500' },
    { label: '₹500–₹1,000', value: '500to1000' },
    { label: '₹1,000+', value: 'above1000' },
  ];

  const ratingOptions = [
    { label: 'Any', value: null },
    { label: '4.5+', value: '4.5' },
    { label: '4.0+', value: '4.0' },
    { label: '3.5+', value: '3.5' },
  ];

  const availabilityOptions = [
    { label: 'Any', value: null },
    { label: 'Available today', value: 'today' },
  ];

  const handleSearch = (query, category) => {
    setSearchQuery(query);
    if (category) {
      setFilters(prev => ({ ...prev, category: category }));
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setVisibleCount(8); // Reset pagination on filter change
  };

  const clearAllFilters = () => {
    setFilters({
      category: 'All',
      price: null,
      rating: null,
      availability: null,
      location: 'All locations'
    });
    setSearchQuery('');
    setSearchParams({});
    setVisibleCount(8);
  };

  const applyMobileFilters = () => {
    setIsMobileFiltersOpen(false);
  };

  const filteredAndSortedResults = useMemo(() => {
    let results = filterProviders({
      category: filters.category === 'All' ? 'all' : filters.category,
      priceRange: filters.price,
      minRating: filters.rating,
      availability: filters.availability,
      neighborhood: filters.location === 'All locations' ? null : filters.location,
      search: searchQuery || null,
    });
    
    // Sort
    switch (sortBy) {
        case 'rating':
            results.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            results.sort((a, b) => a.startingPrice - b.startingPrice);
            break;
        case 'price-high':
            results.sort((a, b) => b.startingPrice - a.startingPrice);
            break;
        case 'relevance':
        default:
            break;
    }
    
    return results;
  }, [filters, searchQuery, sortBy]);

  const visibleResults = filteredAndSortedResults.slice(0, visibleCount);

  const FilterGroup = ({ title, options, filterKey }) => (
    <div className="mb-6">
      <h3 className="font-semibold text-sm text-[#2D2D2D] mb-3">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = filters[filterKey] === opt.value;
          return (
            <button
              key={opt.label}
              onClick={() => handleFilterChange(filterKey, opt.value)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                isSelected 
                  ? 'bg-[#D8F3DC] text-[#1B4332] font-medium' 
                  : 'text-[#6B7280] hover:bg-gray-100'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const SidebarContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#2D2D2D]">Filters</h2>
        <button 
          onClick={clearAllFilters}
          className="text-sm text-[#E8772E] hover:text-[#D4641A] font-medium"
        >
          Clear All
        </button>
      </div>

      <FilterGroup 
        title="Category" 
        options={[
          { label: 'All', value: 'All' },
          ...categories.map(c => ({ label: `${c.icon} ${c.name}`, value: c.id }))
        ]} 
        filterKey="category" 
      />

      <FilterGroup 
        title="Location" 
        options={[
          { label: 'All locations', value: 'All locations' },
          ...neighborhoods.map(n => ({ label: n, value: n }))
        ]} 
        filterKey="location" 
      />

      <FilterGroup 
        title="Price" 
        options={priceOptions} 
        filterKey="price" 
      />

      <FilterGroup 
        title="Rating" 
        options={ratingOptions} 
        filterKey="rating" 
      />

      <FilterGroup 
        title="Availability" 
        options={availabilityOptions} 
        filterKey="availability" 
      />
    </>
  );

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
            Find a service near you
          </h1>
          <p className="text-[#6B7280] text-lg mb-8">
            Explore trusted independent providers in your neighborhood.
          </p>
          <div className="max-w-3xl">
            <SearchBar variant="default" onSearch={handleSearch} initialQuery={searchQuery} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E5E5] sticky top-24">
              <SidebarContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-[#6B7280]">
                Showing <span className="font-semibold text-[#2D2D2D]">{visibleResults.length}</span> of <span className="font-semibold text-[#2D2D2D]">{filteredAndSortedResults.length}</span> services
              </p>
              
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-[#6B7280]">Sort by:</label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-[#E5E5E5] text-[#2D2D2D] text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="rating">Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filteredAndSortedResults.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleResults.map(provider => (
                    <ProviderCard key={provider.id} provider={provider} />
                  ))}
                </div>

                {/* Pagination */}
                {visibleCount < filteredAndSortedResults.length && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 8)}
                      className="px-6 py-3 bg-white border border-[#E5E5E5] text-[#1B4332] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-12 text-center">
                <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#9CA3AF]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">No services found</h3>
                <p className="text-[#6B7280] mb-6">
                  We couldn't find any providers matching your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-[#E8772E] text-white font-semibold rounded-xl hover:bg-[#D4641A] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2D6A4F] transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-in slide-in-from-bottom-full duration-300 md:hidden overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5]">
            <h2 className="text-xl font-bold text-[#2D2D2D]">Filters</h2>
            <button 
              onClick={() => setIsMobileFiltersOpen(false)}
              className="p-2 text-[#6B7280] hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 pb-24">
            <SidebarContent />
          </div>

          <div className="border-t border-[#E5E5E5] p-4 bg-white flex gap-4 absolute bottom-0 left-0 right-0">
            <button
              onClick={clearAllFilters}
              className="flex-1 py-3 px-4 border border-[#E5E5E5] text-[#2D2D2D] font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={applyMobileFilters}
              className="flex-1 py-3 px-4 bg-[#E8772E] text-white font-semibold rounded-xl hover:bg-[#D4641A] transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseServices;
