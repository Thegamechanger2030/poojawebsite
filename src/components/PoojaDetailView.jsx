import React, { useState } from 'react';
import { 
  X, Clock, Users, ShieldCheck, Sparkles, CheckCircle, 
  HelpCircle, ChevronDown, Calendar, ArrowRight, Flower2, AlertCircle, BookOpen 
} from 'lucide-react';
import { PUJAS } from '../data/pujas';
import DevotionalArtwork from './DevotionalArtwork';

export default function PoojaDetailView({ puja, onClose, onBookPackage, onSelectRelatedPuja }) {
  if (!puja) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currentPackage = puja.packages?.[selectedPkgIndex] || puja.packages?.[0] || { price: puja.startingPrice, name: 'Standard Vidhi' };

  // Find related poojas
  const relatedPoojas = (puja.details?.relatedSlugs || [])
    .map(slug => PUJAS.find(p => p.id === slug || p.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#FFF9F0] text-stone-900 border-2 border-amber-400 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl animate-fadeIn my-4 max-h-[92vh] flex flex-col">
        
        {/* Header Hero Banner */}
        <div className="relative h-48 sm:h-64 bg-stone-950 text-white flex-shrink-0">
          <DevotionalArtwork label={puja.name} className="absolute inset-0 h-full w-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-[#D94E1F] p-2 rounded-full text-amber-200 transition-colors shadow-lg"
            title="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 space-y-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="bg-[#D94E1F] text-amber-200 font-bold text-[11px] px-3 py-0.5 rounded-full border border-amber-400/40">
                {puja.category}
              </span>
              {puja.tag && (
                <span className="bg-amber-400 text-[#D94E1F] font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                  {puja.tag}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-serif text-amber-300 drop-shadow-md">
              {puja.name}
            </h2>
            <p className="font-hindi text-amber-100 text-xs sm:text-sm">
              {puja.nameHindi}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-amber-100/70 border-b border-amber-300/80 px-4 sm:px-6 flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-none text-xs sm:text-sm font-medium text-stone-700 flex-shrink-0">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`py-3 whitespace-nowrap transition-colors border-b-2 font-semibold ${activeTab === 'overview' ? 'border-[#D94E1F] text-[#D94E1F]' : 'border-transparent hover:text-[#D94E1F]'}`}
          >
            Overview & Benefits
          </button>
          <button 
            onClick={() => setActiveTab('procedure')}
            className={`py-3 whitespace-nowrap transition-colors border-b-2 font-semibold ${activeTab === 'procedure' ? 'border-[#D94E1F] text-[#D94E1F]' : 'border-transparent hover:text-[#D94E1F]'}`}
          >
            Vidhi & Occasions
          </button>
          <button 
            onClick={() => setActiveTab('samagri')}
            className={`py-3 whitespace-nowrap transition-colors border-b-2 font-semibold ${activeTab === 'samagri' ? 'border-[#D94E1F] text-[#D94E1F]' : 'border-transparent hover:text-[#D94E1F]'}`}
          >
            Samagri Checklist
          </button>
          <button 
            onClick={() => setActiveTab('packages')}
            className={`py-3 whitespace-nowrap transition-colors border-b-2 font-semibold ${activeTab === 'packages' ? 'border-[#D94E1F] text-[#D94E1F]' : 'border-transparent hover:text-[#D94E1F]'}`}
          >
            Packages ({puja.packages?.length || 1})
          </button>
          {puja.details?.faqs?.length > 0 && (
            <button 
              onClick={() => setActiveTab('faqs')}
              className={`py-3 whitespace-nowrap transition-colors border-b-2 font-semibold ${activeTab === 'faqs' ? 'border-[#D94E1F] text-[#D94E1F]' : 'border-transparent hover:text-[#D94E1F]'}`}
            >
              FAQs
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          
          {/* Quick Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-amber-50 p-3.5 rounded-2xl border border-amber-300/80">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D94E1F]" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-semibold">Duration</span>
                <span className="font-bold text-stone-800">{puja.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-semibold">Vedic Pandits</span>
                <span className="font-bold text-stone-800">{currentPackage.pandits || puja.panditCount} Gurukul Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-semibold">Samagri Status</span>
                <span className="font-bold text-emerald-800">100% Supplied</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-semibold">Guidance</span>
                <span className="font-bold text-[#D94E1F]">Acharya Ankit Mishra</span>
              </div>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-[#D94E1F] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <span>Spiritual Significance & Introduction</span>
                </h3>
                <p className="text-stone-700 leading-relaxed bg-white p-4 rounded-2xl border border-amber-200/80 shadow-sm">
                  {puja.details?.introduction || puja.shortDesc}
                </p>
              </div>

              {/* Traditional Beliefs & Importance */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-[#D94E1F]">
                    Traditional Beliefs & Religious Importance
                  </h3>
                  <span className="text-[11px] text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full font-medium">
                    Traditional Shastra Beliefs
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(puja.details?.benefits || [
                    'Believed to bring peace, prosperity and positive energy.',
                    'Fosters domestic harmony and nullifies negative influences.'
                  ]).map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-amber-200/60 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-700 font-medium leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 italic bg-amber-50/80 p-2.5 rounded-xl border border-amber-200">
                  * Note: Religious and astrological benefits are based on traditional Vedic scriptural beliefs and ancient lore, not guaranteed empirical outcomes. All rituals are performed according to authentic Shastra Vidhi by qualified Brahmins.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PROCEDURE & OCCASIONS */}
          {activeTab === 'procedure' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200 space-y-1">
                <span className="text-xs font-bold text-[#D94E1F] uppercase tracking-wider block">
                  Auspicious Occasions (कब और किस मुहूर्त में कराएं)
                </span>
                <p className="text-stone-800 font-medium leading-relaxed">
                  {puja.details?.occasions || 'On Shubh Muhurat, sacred tithis, birthdays, or family milestones.'}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif font-bold text-base text-[#D94E1F]">
                  Step-by-Step Pooja Vidhi (शास्त्र सम्मत पूजन प्रक्रिया)
                </h3>
                <div className="space-y-2.5">
                  {(puja.details?.procedure || [
                    'Ganesh & Gauri Avahan',
                    'Kalash Sthapana & Navgrah Pujan',
                    'Main Deity Abhishek & Stuti Chanting',
                    'Sacred Hawan Yagna & Purnahuti',
                    'Maha Mangal Aarti & Prasad Distribution'
                  ]).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-200/80 shadow-sm">
                      <span className="w-6 h-6 rounded-full bg-[#D94E1F] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-stone-800 font-medium pt-0.5 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAMAGRI */}
          {activeTab === 'samagri' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl space-y-3 shadow-sm">
                <h4 className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-700" />
                  <span>Items Supplied By Pandit Ji (पंडित जी द्वारा)</span>
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {(puja.details?.samagriByPandit || ['Desi Cow Ghee', 'Hawan Herbs & Wood', 'Kumkum, Akshat, Chandan', 'Mouli & Janeyu', 'Gangajal']).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-emerald-100 font-medium">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-300/80 p-4 rounded-2xl space-y-3 shadow-sm">
                <h4 className="font-bold text-amber-900 flex items-center gap-2 text-sm">
                  <AlertCircle className="w-5 h-5 text-amber-700" />
                  <span>Items Arranged By Host (यजमान द्वारा)</span>
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {(puja.details?.samagriByHost || ['Fresh Flowers & Garland', 'Fresh Fruits & Bananas', 'Coconut', 'Clean Utensils & Diya Lamps']).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-amber-200/80 font-medium">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PACKAGES */}
          {activeTab === 'packages' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-base text-[#D94E1F]">
                Select Package Option (उपलब्ध पूजा पैकेज)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(puja.packages || [
                  { name: 'Standard Package', price: puja.startingPrice, pandits: puja.panditCount, desc: 'Complete Shastra Vidhi with verified Pandits and samagri.' }
                ]).map((pkg, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedPkgIndex(idx)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      selectedPkgIndex === idx 
                        ? 'border-[#D94E1F] bg-orange-50/80 shadow-md scale-[1.02]' 
                        : 'border-amber-200/80 bg-white hover:border-amber-400'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-stone-900 text-sm">{pkg.name}</span>
                        {selectedPkgIndex === idx && (
                          <span className="bg-[#D94E1F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{pkg.desc}</p>
                      <div className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#D94E1F]" />
                        <span>{pkg.pandits || puja.panditCount} Gurukul Trained Pandits</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-baseline justify-between">
                      <span className="text-xs text-stone-500 font-medium">Package Price:</span>
                      <span className="text-xl font-bold font-serif text-[#D94E1F]">₹{pkg.price?.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-3 animate-fadeIn">
              <h3 className="font-serif font-bold text-base text-[#D94E1F] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-2.5">
                {(puja.details?.faqs || [
                  { q: 'How do I schedule the auspicious Muhurat?', a: 'Upon booking, Acharya Ankit Mishra team calls you to finalize the exact Shubh Muhurat according to your birth chart.' }
                ]).map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-amber-200/80 overflow-hidden">
                    <button 
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left p-3.5 font-bold text-xs sm:text-sm text-stone-900 flex justify-between items-center hover:bg-amber-50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#D94E1F] transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-3.5 pt-0 text-xs text-stone-700 bg-amber-50/40 border-t border-amber-100 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RELATED POOJAS SECTION */}
          {relatedPoojas.length > 0 && (
            <div className="pt-4 border-t border-amber-200 space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#D94E1F]">
                Related Sacred Rituals (संबंधित पूजन)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedPoojas.map(rel => (
                  <div 
                    key={rel.id} 
                    onClick={() => onSelectRelatedPuja(rel)}
                    className="bg-white p-3 rounded-xl border border-amber-200/80 hover:border-[#D94E1F] cursor-pointer transition flex items-center gap-3 group"
                  >
                    <DevotionalArtwork label={rel.name} className="w-12 h-12 flex-shrink-0 rounded-lg" />
                    <div className="overflow-hidden">
                      <h5 className="font-serif font-bold text-xs text-stone-900 group-hover:text-[#D94E1F] truncate">{rel.name}</h5>
                      <span className="text-[11px] text-amber-800 font-semibold block">₹{rel.startingPrice?.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Booking Action Bar */}
        <div className="p-4 bg-white border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">Selected Vidhi Package</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#D94E1F]">
                ₹{currentPackage.price?.toLocaleString()}
              </span>
              <span className="text-xs text-stone-600 font-medium">({currentPackage.name})</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-4 py-2.5 rounded-full border border-stone-300 flex-1 sm:flex-none text-center"
            >
              Close
            </button>

            <button 
              onClick={() => onBookPackage(puja, currentPackage)}
              className="bg-[#D94E1F] hover:bg-[#A83200] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none cursor-pointer"
            >
              <Flower2 className="w-4 h-4 text-amber-300" />
              <span>Book This Pooja Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
