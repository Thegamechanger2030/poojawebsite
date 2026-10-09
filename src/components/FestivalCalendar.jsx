import React from 'react';
import { UPCOMING_FESTIVALS } from '../data/reviews';
import { Calendar, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

export default function FestivalCalendar({ onBookPujaById, onNavigateShop }) {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/40 to-amber-50 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-rose-100 px-3 py-1 rounded-full text-xs font-bold text-rose-950 uppercase tracking-wide mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Upcoming Vedic Festival Calendar</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-stone-900">
              आगामी व्रत एवं त्यौहार पूजा बुकिंग
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Never miss auspicious dates. Reserve your pandit slot in advance for upcoming Navratri, Dhanteras & Deepawali.
            </p>
          </div>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_FESTIVALS.map((fest) => (
            <div key={fest.id} className="cream-card p-5 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-3">
                  <span className="badge-saffron font-mono text-[11px]">{fest.date}</span>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    {fest.tithi}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-rose-900 transition leading-snug">
                  {fest.name}
                </h3>
                
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {fest.importance}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                <button 
                  onClick={() => onBookPujaById(fest.pujaLink)}
                  className="btn-primary text-xs py-2 px-3 flex-1 justify-center shadow"
                >
                  <span>Book Puja</span>
                </button>

                <button 
                  onClick={onNavigateShop}
                  className="btn-secondary text-xs py-2 px-3 flex items-center justify-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-rose-900" />
                  <span>Kit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
