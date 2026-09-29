import { useState } from 'react';
import { Star, MapPin, Heart, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/providers';

export default function ProviderCard({ provider, className = '' }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  const category = categories.find(c => c.id === provider.category);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      setAnimateHeart(true);
      setTimeout(() => setAnimateHeart(false), 400);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Image Header */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={provider.image}
          alt={`${provider.name} - ${provider.businessName}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${animateHeart ? 'animate-heart' : ''} ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray'
            }`}
          />
        </button>

        {/* Category Badge */}
        {category && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${category.color}`}>
            {category.icon} {category.name}
          </span>
        )}

        {/* Verified Badge */}
        {provider.verified && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
            <BadgeCheck className="w-4 h-4 text-forest" />
            <span className="text-xs font-medium text-forest">Verified</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <h3 className="font-bold text-charcoal text-lg leading-tight group-hover:text-forest transition-colors">
            {provider.businessName}
          </h3>
          <p className="text-sm text-gray mt-0.5">{provider.name}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-sm text-charcoal">{provider.rating}</span>
          </div>
          <span className="text-sm text-gray">({provider.reviewCount} reviews)</span>
        </div>

        {/* Location & Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray">
            <MapPin className="w-3.5 h-3.5" />
            {provider.neighborhood}
          </div>
          <div className="text-sm">
            <span className="text-gray">From </span>
            <span className="font-bold text-forest">₹{provider.startingPrice}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/provider/${provider.id}`}
          className="mt-4 block w-full text-center py-2.5 bg-cream border border-forest/20 text-forest font-semibold text-sm rounded-xl hover:bg-forest hover:text-white transition-all duration-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
