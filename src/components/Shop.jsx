import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ShoppingBag, ShieldCheck, Check, Sparkles, Filter } from 'lucide-react';
import DevotionalArtwork from './DevotionalArtwork';

export default function Shop({ onAddToCart, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Puja Kits', 'Certified Rashi Ratna', 'Yagyopaveet', 'Herbal Kumkum & Chandan', 'Devotional Malas'];

  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameHindi.includes(searchQuery) ||
      prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="shop-section" className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 px-3 py-1 rounded-full text-xs font-bold text-amber-950 uppercase tracking-wide mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-rose-900" />
              <span>Samagri & Certified Gemstones Store</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-stone-900">
              पूजा सामग्री एवं प्रमाणित राशि रत्न दुकान
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Handcrafted Yagyopaveet, Pure Ashtagandha Chandan, Occasion Puja Kits & ISO Certified Gemstones.
            </p>
          </div>

          {/* Category Filter */}
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id}
              className="cream-card p-4 flex flex-col justify-between group relative"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-amber-100">
                  <DevotionalArtwork label={prod.name} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  {prod.tag && (
                    <span className="absolute top-2 left-2 bg-rose-900 text-amber-200 font-bold text-[10px] px-2 py-0.5 rounded border border-amber-400">
                      {prod.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <h3 className="font-serif font-bold text-stone-900 text-base line-clamp-1 group-hover:text-rose-900 transition">
                    {prod.name}
                  </h3>
                  <p className="font-hindi text-rose-800 text-xs">
                    {prod.nameHindi}
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-2 pt-1 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-rose-950 font-serif">₹{prod.price.toLocaleString()}</span>
                    {prod.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">₹{prod.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    In Stock (Free Delivery)
                  </span>
                </div>

                <button 
                  onClick={() => onAddToCart(prod)}
                  className="btn-primary text-xs py-2 px-3 flex items-center gap-1 shadow"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
