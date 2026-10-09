import { BookOpen, Flame, Flower2, HandHeart } from 'lucide-react';

function getArtworkIcon(label = '') {
  const text = label.toLowerCase();

  if (text.includes('havan') || text.includes('yagya') || text.includes('hawan')) {
    return Flame;
  }

  if (text.includes('daan') || text.includes('annaprashan') || text.includes('seva')) {
    return HandHeart;
  }

  if (text.includes('katha') || text.includes('path') || text.includes('book')) {
    return BookOpen;
  }

  return Flower2;
}

export default function DevotionalArtwork({ label, className = '' }) {
  const Icon = getArtworkIcon(label);

  return (
    <div
      role="img"
      aria-label={label}
      className={`devotional-artwork relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-3 rounded-[inherit] border border-amber-500/30"
      />
      <div
        aria-hidden="true"
        className="absolute h-32 w-32 rounded-full bg-amber-300/20 blur-2xl"
      />
      <div className="relative flex flex-col items-center gap-2 text-[#A83200]">
        <Icon aria-hidden="true" className="h-10 w-10 sm:h-12 sm:w-12 stroke-[1.4]" />
        <span className="max-w-full px-3 text-center text-xs font-semibold text-[#7C341D]">
          {label}
        </span>
      </div>
    </div>
  );
}
