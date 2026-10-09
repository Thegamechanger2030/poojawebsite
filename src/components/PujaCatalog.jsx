import React, { useState } from 'react';
import { PUJAS } from '../data/pujas';
import { Clock, Users, Check, ArrowRight, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import DevotionalArtwork from './DevotionalArtwork';

export default function PujaCatalog({ onSelectPuja, onBookPuja, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Home & Vastu', 'Family & Prosperity', 'Shanti & Health', 'Vishesh Sadhna', 'Grah Dosh Nivaran', 'Corporate & Business'];

  const filteredPujas = PUJAS.filter(puja => {
    const matchesCategory = selectedCategory === 'All' || puja.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      puja.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.nameHindi.includes(searchQuery) ||
      puja.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pujas-section" className="py-16 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-rose-100 px-3 py-1 rounded-full text-xs font-bold text-rose-950 uppercase tracking-wide mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Maa Rajrajeshwari Puja Booking</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-stone-900">
              वैदिक पूजन सूची (Book a Vedic Pandit)
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Select an auspicious puja package with authentic pandit verification & complete samagri delivery.
            </p>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-amber-700 flex-shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat 
                    ? 'bg-rose-950 text-white shadow-md' 
                    : 'bg-white text-stone-700 border border-amber-300 hover:bg-rose-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pujas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPujas.map((puja) => (
            <div 
              key={puja.id}
              className="cream-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <DevotionalArtwork label={puja.name} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-transparent to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-amber-400 text-rose-950 font-bold text-[10px] px-2.5 py-1 rounded-full shadow">
                    {puja.category}
                  </span>

                  {puja.tag && (
                    <span className="absolute top-3 right-3 bg-rose-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-full border border-amber-300">
                      {puja.tag}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-lg font-bold leading-tight drop-shadow-md">
                      {puja.name}
                    </h3>
                    <p className="font-hindi text-amber-300 text-xs mt-0.5">
                      {puja.nameHindi}
                    </p>
                  </div>
                </div>

                {/* Details Meta */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-600 bg-amber-100/60 p-2.5 rounded-lg">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-rose-900" />
                      <span>{puja.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-amber-700" />
                      <span>{puja.panditCount} Learned Pandits</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {puja.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Complete Samagri & Hawan items supplied</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Languages: {puja.details.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Actions Footer */}
              <div className="p-5 pt-0 border-t border-amber-100 flex items-center justify-between gap-3 mt-4">
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-semibold">Starting from</span>
                  <span className="text-xl font-bold text-rose-950 font-serif">₹{puja.startingPrice.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => onSelectPuja(puja)}
                    className="text-xs font-bold text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-300 px-3 py-2 rounded-full transition"
                  >
                    View Vidhi
                  </button>

                  <button 
                    onClick={() => onBookPuja(puja)}
                    className="btn-primary text-xs py-2 px-4 shadow"
                  >
                    <span>Book Puja</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
