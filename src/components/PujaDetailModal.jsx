import React, { useState } from 'react';
import { X, Clock, Users, CheckCircle, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function PujaDetailModal({ puja, onClose, onBookPackage }) {
  if (!puja) return null;

  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);

  const currentPackage = puja.packages[selectedPkgIndex] || puja.packages[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-amber-50 text-stone-900 border-2 border-amber-400 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-fade-in my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="relative bg-rose-950 text-white p-6 flex justify-between items-start">
          <div>
            <span className="badge-gold text-rose-950 bg-amber-400 font-bold text-[10px] uppercase mb-2 inline-block">
              {puja.category}
            </span>
            <h2 className="text-2xl font-bold font-serif text-amber-300">{puja.name}</h2>
            <p className="text-xs text-amber-100/80 font-hindi mt-1">{puja.nameHindi}</p>
          </div>

          <button 
            onClick={onClose}
            className="bg-black/30 hover:bg-rose-900 p-2 rounded-full text-amber-300 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs md:text-sm">
          
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-amber-100/70 p-3.5 rounded-2xl border border-amber-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-900" />
              <div>
                <span className="text-[10px] text-stone-500 block">Duration</span>
                <span className="font-bold text-stone-800">{puja.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-700" />
              <div>
                <span className="text-[10px] text-stone-500 block">Pandits</span>
                <span className="font-bold text-stone-800">{currentPackage.pandits || puja.panditCount} Gurukul Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <div>
                <span className="text-[10px] text-stone-500 block">Samagri Status</span>
                <span className="font-bold text-emerald-800">100% Provided</span>
              </div>
            </div>
          </div>

          {/* Description & Vidhi */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-rose-950 text-base">Puja Significance & Meaning</h3>
            <p className="text-stone-700 leading-relaxed">{puja.details.whyDo}</p>
            <p className="text-stone-600 bg-amber-100/50 p-2.5 rounded-lg border-l-4 border-amber-500 font-medium text-xs">
              <strong>Auspicious Timing (कब करें):</strong> {puja.details.whenToDo}
            </p>
          </div>

          {/* Package selection */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-rose-950 text-base">Select Package (पैकेज चुनें)</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {puja.packages.map((pkg, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedPkgIndex(idx)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex flex-col justify-between ${
                    selectedPkgIndex === idx 
                      ? 'border-rose-900 bg-rose-50 shadow-md' 
                      : 'border-amber-200 bg-white hover:border-amber-400'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs text-rose-950">{pkg.name}</span>
                      {selectedPkgIndex === idx && <CheckCircle className="w-4 h-4 text-rose-900" />}
                    </div>
                    <p className="text-[11px] text-stone-600 line-clamp-3 leading-snug">{pkg.desc}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-200">
                    <span className="text-lg font-bold font-serif text-rose-950">₹{pkg.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Samagri Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl space-y-2">
              <h4 className="font-bold text-emerald-900 flex items-center gap-1.5 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Items Provided By Pandit (पंडित जी लाएंगे)</span>
              </h4>
              <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                {puja.details.samagriByPandit.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-300 p-3.5 rounded-2xl space-y-2">
              <h4 className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Items Arranged By Host (यजमान द्वारा)</span>
              </h4>
              <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                {puja.details.samagriByHost.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-amber-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">Selected Package</span>
            <span className="text-xl font-bold font-serif text-rose-950">
              ₹{currentPackage.price.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2"
            >
              Cancel
            </button>
            
            <button 
              onClick={() => onBookPackage(puja, currentPackage)}
              className="btn-primary text-xs py-2.5 px-6 shadow-lg"
            >
              <span>Add to Cart & Proceed</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
