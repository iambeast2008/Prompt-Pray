import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, BadgeCheck, Share2, MessageCircle, ArrowLeft } from 'lucide-react';
import { getProviderById, categories } from '../data/providers';
import RatingDisplay from '../components/RatingDisplay';

export default function ProviderProfile() {
  const { id } = useParams();
  const provider = getProviderById(id);

  if (!provider) {
    return (
      <div className="pt-20 min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-4">Provider Not Found</h1>
        <p className="text-[#6B7280] mb-6">The service provider you're looking for doesn't exist or has been removed.</p>
        <Link to="/browse" className="flex items-center text-white bg-[#1B4332] px-6 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#FAF8F5] pb-12">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/browse" className="inline-flex items-center text-[#6B7280] hover:text-[#1B4332] transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Link>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E5E5]">
          {/* Cover Image */}
          <div 
            className="h-48 md:h-64 w-full bg-cover bg-center bg-[#E5E5E5]"
            style={{ backgroundImage: `url(${provider.coverImage || 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80'})` }}
          />
          
          <div className="px-6 sm:px-8 pb-8">
            {/* Avatar & Basic Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-12 mb-4 gap-4">
              <img 
                src={provider.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'} 
                alt={provider.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white shrink-0"
              />
              <div className="flex-grow pt-2 sm:pt-0">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-[#2D2D2D]">{provider.name}</h1>
                  {provider.verified && (
                    <BadgeCheck className="w-6 h-6 text-[#1B4332]" />
                  )}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[#6B7280] font-medium">{provider.businessName}</span>
                  <span className="bg-[#D8F3DC] text-[#1B4332] px-3 py-1 rounded-full text-sm font-medium">
                    {categories?.find(c => c.id === provider.categoryId)?.name || provider.categoryId || 'Service'}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-[#6B7280] text-sm pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <RatingDisplay rating={provider.rating} count={provider.reviewCount} />
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{provider.neighborhood}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Responds in {provider.responseTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Member since {provider.memberSince}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Main) */}
        <div className="w-full lg:w-2/3 space-y-8">
          
          {/* About Section */}
          <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">About</h2>
            <p className="text-[#6B7280] whitespace-pre-line leading-relaxed">
              {provider.description}
            </p>
          </section>

          {/* Services & Pricing */}
          <section>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Services & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {provider.services?.map((service) => (
                <div key={service.id} className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{service.name}</h3>
                    <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">{service.description}</p>
                    <div className="font-bold text-[#1B4332] mb-4">
                      From ₹{service.price}
                    </div>
                  </div>
                  <Link 
                    to={`/booking/${provider.id}/${service.id}`}
                    className="block w-full text-center bg-[#FAF8F5] text-[#1B4332] hover:bg-[#D8F3DC] border border-[#1B4332] font-medium py-2 rounded-lg transition-colors"
                  >
                    Request Service
                  </Link>
                </div>
              ))}
              
              {(!provider.services || provider.services.length === 0) && (
                <div className="col-span-full bg-white rounded-xl border border-[#E5E5E5] p-8 text-center text-[#6B7280]">
                  No specific services listed. Contact provider for details.
                </div>
              )}
            </div>
          </section>

          {/* Availability */}
          <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Availability</h2>
            {provider.availability ? (
              <div className="divide-y divide-[#E5E5E5]">
                {Object.entries(provider.availability).map(([day, hours]) => {
                  const isClosed = typeof hours === 'string' && hours.toLowerCase() === 'closed';
                  return (
                    <div key={day} className="flex justify-between py-3">
                      <span className="text-[#2D2D2D] font-medium capitalize">{day}</span>
                      <span className={isClosed ? "text-red-500 font-medium" : "text-[#6B7280]"}>
                        {hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-[#6B7280]">Availability information not provided.</p>
            )}
          </section>

          {/* Reviews */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-[#2D2D2D]">Reviews</h2>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-sm font-medium">
                {provider.reviews?.length || 0}
              </span>
            </div>
            
            <div className="space-y-4">
              {provider.reviews?.map((review) => (
                <div key={review.id} className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#6B7280]">{review.date}</span>
                  </div>
                  <p className="text-[#2D2D2D] italic mb-3">"{review.text}"</p>
                  <p className="text-sm font-medium text-[#6B7280]">— {review.author}</p>
                </div>
              ))}
              
              {(!provider.reviews || provider.reviews.length === 0) && (
                <div className="bg-white rounded-xl border border-[#E5E5E5] p-8 text-center text-[#6B7280]">
                  No reviews yet. Be the first to review!
                </div>
              )}
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar CTA) */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm p-6">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Ready to request a service?</h3>
            <p className="text-[#6B7280] mb-4">Book <span className="font-medium text-[#2D2D2D]">{provider.businessName}</span> for your next project.</p>
            
            {provider.availableToday && (
              <div className="inline-block bg-[#FFECD2] text-[#D4641A] px-3 py-1 rounded-full text-sm font-bold mb-6">
                Available Today
              </div>
            )}
            
            <Link 
              to={`/booking/${provider.id}`}
              className="flex justify-center items-center w-full bg-[#E8772E] hover:bg-[#D4641A] text-white font-bold py-3.5 px-4 rounded-xl transition-colors mb-4"
            >
              Request a Booking
            </Link>
            
            <div className="text-center text-sm text-[#6B7280] mb-6">
              Usually responds in {provider.responseTime}
            </div>
            
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E5E5E5]">
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#2D2D2D] transition-colors font-medium">
                <MessageCircle className="w-5 h-5" />
                Message
              </button>
              <div className="w-px h-5 bg-[#E5E5E5]"></div>
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#2D2D2D] transition-colors font-medium">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
