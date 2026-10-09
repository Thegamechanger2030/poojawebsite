import React from 'react';
import { REVIEWS } from '../data/reviews';
import { ShieldCheck, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>सत्यापित यजमान अनुभव</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">
            यजमान समीक्षा एवं अनुभव (Customer Reviews)
          </h2>
          <p className="text-stone-600 text-sm">
            बरेली, दिल्ली-एनसीआर, लखनऊ एवं अन्य शहरों से आचार्य अंकित मिश्रा जी के मार्गदर्शन में पूजा कराने वाले भक्तों के अनुभव
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="cream-card p-6 flex flex-col justify-between relative">
              <Quote className="w-8 h-8 text-amber-300/40 absolute top-4 right-4" />

              <div className="space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1" aria-label={`${rev.rating} out of 5 rating`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full border border-amber-400/70 bg-amber-50 font-serif text-[8px] font-bold text-[#A83200]">श्री</span>
                  ))}
                </div>

                <p className="text-xs text-stone-700 italic leading-relaxed pt-1">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-amber-200/60 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full border-2 border-amber-400 shadow-sm bg-orange-100 text-[#A83200] flex items-center justify-center font-bold"
                >
                  {rev.name.slice(0, 1)}
                </span>
                <div>
                  <div className="font-bold text-xs text-stone-900 font-serif flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" title="Verified Customer" />
                    )}
                  </div>
                  <span className="text-[10px] text-rose-900 font-semibold block">{rev.puja}</span>
                  <span className="text-[10px] text-stone-500 block">{rev.city} • {rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
