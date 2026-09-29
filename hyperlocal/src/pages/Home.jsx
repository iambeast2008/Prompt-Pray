import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BarChart3, 
  Send, 
  BadgeCheck, 
  IndianRupee, 
  MapPin, 
  MessageSquare, 
  MessageCircle 
} from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import { providers, categories } from '../data/providers';

const Home = () => {
  const featuredProviders = providers.slice(0, 6);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#FAF8F5] to-[#D8F3DC]/30 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B4332] tracking-tight mb-6">
            Great services, right in your neighborhood.
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10">
            Discover trusted local people who can help with everyday needs—from homemade food and tutoring to repairs, fitness, and more.
          </p>
          
          <div className="max-w-3xl mx-auto mb-8">
            <SearchBar variant="hero" />
          </div>
          
          <div className="flex items-center justify-center gap-4 text-[#6B7280]">
            <span>Are you a local expert?</span>
            <Link to="/provider/signup" className="text-[#E8772E] font-medium hover:text-[#D4641A] transition-colors">
              Become a Provider
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories */}
      <section className="py-16 md:py-24 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-4">Popular Categories</h2>
            <p className="text-[#6B7280]">Browse by category to find exactly what you need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger-children">
            {categories.slice(0, 8).map((category, index) => (
              <Link 
                key={category.id} 
                to={`/browse?category=${category.id}`}
                className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${index % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-[#D8F3DC]/30'} border border-[#E5E5E5] hover:border-[#1B4332]/20`}
              >
                <span className="text-4xl mb-3">{category.icon}</span>
                <span className="font-semibold text-[#2D2D2D]">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Providers */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-4">Featured Providers</h2>
            <p className="text-[#6B7280]">Top-rated service providers in your area</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children mb-12">
            {featuredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/browse" 
              className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E5E5] text-base font-medium rounded-lg text-[#1B4332] bg-white hover:bg-[#FAF8F5] transition-colors shadow-sm"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-4">How it works</h2>
            <p className="text-[#6B7280]">Getting help from your neighbors is easy</p>
          </div>
          
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-[#E5E5E5]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative stagger-children">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-[#E5E5E5] relative mb-6 shadow-sm z-10">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm">01</span>
                  <Search className="w-10 h-10 text-[#1B4332]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Search</h3>
                <p className="text-[#6B7280]">Find services offered by people in your neighborhood.</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-[#E5E5E5] relative mb-6 shadow-sm z-10">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm">02</span>
                  <BarChart3 className="w-10 h-10 text-[#1B4332]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Compare</h3>
                <p className="text-[#6B7280]">Check profiles, prices, availability, and reviews.</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-[#E5E5E5] relative mb-6 shadow-sm z-10">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm">03</span>
                  <Send className="w-10 h-10 text-[#1B4332]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Request</h3>
                <p className="text-[#6B7280]">Send a service request directly to the provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-6">Local services. Built on trust.</h2>
            <p className="text-lg text-[#6B7280]">
              HyperLocal is dedicated to helping residents discover independent service providers. 
              We prioritize transparency and community feedback to ensure a reliable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children">
            {[
              { icon: BadgeCheck, title: "Verified Profiles", desc: "ID checks" },
              { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden fees" },
              { icon: MapPin, title: "Local Providers", desc: "Near you" },
              { icon: MessageSquare, title: "Community Reviews", desc: "Honest feedback" },
              { icon: MessageCircle, title: "Direct Communication", desc: "Chat instantly" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#D8F3DC] flex items-center justify-center mb-4 text-[#1B4332]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-[#2D2D2D] mb-1">{item.title}</h4>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Provider CTA */}
      <section id="become-provider" className="py-16 md:py-24 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1B4332] rounded-3xl overflow-hidden shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a skill to share?</h2>
              <p className="text-[#D8F3DC] text-lg max-w-2xl">
                Turn your skills into a local business. Create your HyperLocal profile and connect with people nearby.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                to="/provider/signup" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-[#E8772E] hover:bg-[#D4641A] transition-colors shadow-md transform hover:-translate-y-1 duration-200 whitespace-nowrap"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
