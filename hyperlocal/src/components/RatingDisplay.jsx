import { Star } from 'lucide-react';

export default function RatingDisplay({ rating, reviewCount, size = 'sm', showCount = true }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const starSize = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4.5 h-4.5' : 'w-4 h-4';
  const textSize = size === 'lg' ? 'text-lg' : size === 'md' ? 'text-base' : 'text-sm';

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} fill-amber-400 text-amber-400`} />
        ))}
        {hasHalf && (
          <div className="relative">
            <Star className={`${starSize} text-gray-200`} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={`${starSize} fill-amber-400 text-amber-400`} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-gray-200`} />
        ))}
      </div>
      <span className={`font-semibold text-charcoal ${textSize}`}>{rating}</span>
      {showCount && reviewCount !== undefined && (
        <span className={`text-gray ${textSize}`}>({reviewCount} reviews)</span>
      )}
    </div>
  );
}
