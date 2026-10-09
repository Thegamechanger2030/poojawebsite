import React, { useState } from 'react';
import { 
  POOJA_CATEGORIES, 
  PUJAS, 
  UPCOMING_FESTIVALS 
} from '../data/pujas';
import { 
  Search, Filter, Sparkles, Clock, Users, ArrowRight, Flower2, 
  Calendar, Check, Flame, ShieldCheck, Heart 
} from 'lucide-react';
import DevotionalArtwork from './DevotionalArtwork';

export default function PoojaSection({ onSelectPuja, onBookPuja, initialSearchQuery = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  // Filtered Poojas List
  const filteredPujas = PUJAS.filter(puja => {
    const matchesCategory = selectedCategory === 'All' || puja.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      puja.name.toLowerCase().includes(q) ||
      puja.nameHindi.includes(q) ||
      puja.shortDesc.toLowerCase().includes(q) ||
      puja.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Featured Poojas List
  const featuredPujas = PUJAS.filter(p => p.isFeatured);

  // Original illustrations keep the gallery independent of third-party photos.
  const galleryPhotos = [
    { title: 'Gurukul Vedic Batuk Brahmins', desc: 'Trained Vedic Gurukul Scholars & Pandits' },
    { title: 'Sacred Yagya Shala & Havan Kunds', desc: 'Siddha Yagya Shala for Hawan & Anushthan' },
    { title: 'Maha Yagya Pavilion Mandap', desc: 'Outdoor Vedic Yagya Pavilion' },
    { title: 'Tirth Pind Daan Ritual', desc: 'Ancestral Pind Daan & Tarpan Vidhi' },
    { title: 'Annaprashan Sanskar Vidhi', desc: 'First solid food feeding for baby' },
    { title: 'Maha Rudrabhishek Jaladhara', desc: 'Narmadeshwar Shivling Abhishekam' },
    { title: 'Goddess Durga Shringhar', desc: 'Shodashopachara Devi Durga Pujan' },
    { title: 'Shree Satyanarayan Pujan', desc: 'Panjiri Prasad & Tulsi Archana' }
  ];

  return (
    <div id="pooja-section-root" className="min-h-screen bg-[#FFF9F0] py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#A83200] via-[#D94E1F] to-[#8C2700] text-white p-6 sm:p-12 shadow-2xl border-2 border-amber-400/60">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D6A13C_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-black/30 border border-amber-400/40 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300 uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Vedic Rituals & Anushthan</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-amber-300 leading-tight tracking-tight">
              पवित्र वैदिक पूजा एवं अनुष्ठान
            </h1>

            <p className="text-amber-100/95 text-sm sm:text-base leading-relaxed font-sans font-normal max-w-2xl">
              Select from over 25+ authentic Vedic pujas, kathas, and yagnas. Performed by verified Gurukul Brahmins under the expert guidance of Acharya Ankit Mishra.
            </p>

            {/* Live Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-xl border-2 border-amber-400 focus-within:ring-2 focus-within:ring-amber-500">
                <Search className="w-5 h-5 text-amber-700 ml-3.5 flex-shrink-0" />
                <input 
                  type="text"
                  placeholder="Search pooja by name (e.g. Rudrabhishek, Satyanarayan, Lakshmi Pooja)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-stone-900 text-xs sm:text-sm font-medium focus:outline-none placeholder:text-stone-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mr-2 text-xs font-bold text-stone-400 hover:text-stone-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-300/80 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#D94E1F]" />
            <h2 className="text-lg font-serif font-bold text-stone-900">
              Browse by Pooja Category
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {POOJA_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#D94E1F] text-white shadow-lg scale-105' 
                    : 'bg-white text-stone-700 border border-amber-300/80 hover:bg-orange-50 hover:border-[#D94E1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN POOJA CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-serif text-stone-900">
            {selectedCategory === 'All' ? 'All Vedic Poojas & Anushthans (पवित्र वैदिक अनुष्ठान)' : `${selectedCategory} (${filteredPujas.length})`}
          </h2>
          <span className="text-xs text-stone-600 font-medium">
            Showing {filteredPujas.length} Rituals
          </span>
        </div>

        {filteredPujas.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-amber-200">
            <span className="text-4xl">🪷</span>
            <h3 className="text-xl font-bold font-serif text-[#D94E1F]">No Poojas Found</h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              We couldn't find any poojas matching "{searchQuery}". Try adjusting your search term or select another category.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="bg-[#D94E1F] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPujas.map(puja => (
              <div 
                key={puja.id}
                className="bg-white rounded-3xl overflow-hidden border border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden bg-stone-950">
                    <DevotionalArtwork label={puja.name} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 bg-[#D94E1F] text-amber-200 font-bold text-[10px] px-3 py-1 rounded-full shadow border border-amber-400/40">
                      {puja.category}
                    </span>

                    {puja.tag && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-[#D94E1F] font-bold text-[10px] px-2.5 py-1 rounded-full shadow">
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

                  {/* Info Meta */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-600 bg-amber-50 p-2.5 rounded-xl border border-amber-200/80">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-4 h-4 text-[#D94E1F]" />
                        <span>{puja.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Users className="w-4 h-4 text-amber-700" />
                        <span>{puja.panditCount} Pandits</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {puja.shortDesc}
                    </p>

                    {/* Check items */}
                    <div className="space-y-1.5 text-xs text-stone-700 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Includes complete Ghee & Hawan Samagri</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Mantra Chanting & Custom Sankalp</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 border-t border-amber-100 flex items-center justify-between gap-3 mt-4">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-semibold">Starting Price</span>
                    <span className="text-xl font-bold text-[#D94E1F] font-serif">₹{puja.startingPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onSelectPuja(puja)}
                      className="text-xs font-bold text-[#D94E1F] bg-orange-50 hover:bg-orange-100 border border-orange-300 px-3 py-2 rounded-full transition cursor-pointer"
                    >
                      View Details
                    </button>

                    <button 
                      onClick={() => onBookPuja(puja)}
                      className="bg-[#D94E1F] hover:bg-[#A83200] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-1"
                    >
                      <Flower2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. UPCOMING FESTIVALS & SACRED OCCASIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50 to-white border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-300/60 pb-4">
            <div>
              <span className="text-xs font-bold text-[#D94E1F] uppercase tracking-widest block">Verified Muhurats</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-amber-700" />
                <span>Upcoming Sacred Festivals & Tithis</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md">
              Book special tithi sankalp in advance for maximum planetary alignment and divine blessings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UPCOMING_FESTIVALS.map(fest => (
              <div 
                key={fest.id} 
                className="bg-white p-4 rounded-2xl border border-amber-300/80 shadow-sm flex items-center gap-4 hover:shadow-md transition group"
              >
                <DevotionalArtwork label={fest.name} className="w-16 h-16 rounded-xl flex-shrink-0 border border-amber-200" />
                <div className="space-y-1 overflow-hidden flex-1">
                  <span className="text-[10px] font-bold text-[#D94E1F] bg-orange-50 px-2 py-0.5 rounded-full inline-block">
                    {fest.date}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#D94E1F] transition truncate">
                    {fest.name}
                  </h3>
                  <p className="text-[11px] text-stone-600 line-clamp-1">{fest.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SACRED POOJA GALLERY */}
      <section id="gallery-section" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Vedic Atmosphere</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#D94E1F]">
            Sacred Rituals & Yagna Gallery
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Empirical moments of authentic Vedic Yagnas, Rudrabhishekam, and Mandap Sthapana.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryPhotos.map((photo, idx) => (
            <div key={idx} className="relative h-36 sm:h-44 rounded-2xl overflow-hidden group shadow-md border border-amber-300/60">
              <DevotionalArtwork label={photo.title} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-white">
                <span className="text-[11px] font-serif font-bold leading-tight">{photo.title}</span>
                <span className="text-[9px] text-amber-200 opacity-90 truncate">{photo.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
