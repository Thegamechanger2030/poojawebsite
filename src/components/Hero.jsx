import React from 'react';
import { Sparkles, Calendar, ShoppingBag, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import DevotionalArtwork from './DevotionalArtwork';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50/40 to-amber-50 py-12 lg:py-20 border-b border-amber-200/60">
      {/* Decorative Lotus line-art watermark in corners */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="#A83200">
          <circle cx="50" cy="50" r="45" stroke="#D6A13C" strokeWidth="1" fill="none"/>
          <path d="M50 10 Q65 35 50 60 Q35 35 50 10 Z"/>
          <path d="M50 10 Q85 50 50 90 Q15 50 50 10 Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Devotional Copy & 3 Main CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-300 text-rose-950 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>शास्त्र सम्मत वैदिक अनुष्ठान एवं सटीक ज्योतिष समाधान</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 leading-tight">
            मां राजराजेश्वरी <br />
            <span className="gold-gradient-text italic font-normal">दिव्य आशीर्वाद एवं वैदिक पूजन</span>
          </h1>

          <p className="shloka-text text-base md:text-lg font-semibold border-l-4 border-amber-500 pl-4 py-1 bg-amber-100/50 rounded-r-lg">
            ॥ या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता । नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥
          </p>

          <p className="text-stone-700 text-sm sm:text-base max-w-2xl leading-relaxed">
            बरेली के सुप्रसिद्ध <strong className="text-rose-900">आचार्य अंकित मिश्रा</strong> द्वारा संचालित। 
            अपने गृह प्रवेश, वास्तु शांति, नवग्रह दोष निवारण या राशि रत्न परामर्श के लिए अनुभवी वैदिक ब्राह्मणों की बुकिंग करें एवं 100% शुद्ध सामग्री अपने द्वार पाएं।
          </p>

          {/* Main action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('pujas')}
              className="btn-primary text-base py-3.5 px-7 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>Book a Pandit / Puja</span>
            </button>

            <button 
              onClick={() => onNavigate('shop')}
              className="btn-secondary text-base py-3.5 px-7"
            >
              <ShoppingBag className="w-5 h-5 text-rose-900" />
              <span>Shop Samagri & Ratna</span>
            </button>

            <button 
              onClick={() => onNavigate('kundali')}
              className="btn-gold text-base py-3.5 px-6 text-stone-900"
            >
              <Sparkles className="w-5 h-5 text-amber-950" />
              <span>Free Kundali Report</span>
            </button>
          </div>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-amber-200 text-xs text-stone-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Verified Vedic Pandits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Complete Samagri Kit Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Instant WhatsApp Confirm</span>
            </div>
          </div>
        </div>

        {/* Acharya Ankit Mishra and Maa Rajrajeshwari card */}
        <div className="lg:col-span-5 relative">
          <div className="relative cream-card p-6 md:p-8 bg-gradient-to-br from-rose-950 via-rose-900 to-stone-950 text-white border-2 border-amber-400/40 shadow-2xl rounded-3xl overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
            
            {/* Acharya Ankit Mishra Card Header */}
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xl">🪷</span>
                <span className="text-xs tracking-wider text-amber-200 uppercase font-bold">शास्त्र प्रमाणित संस्थान</span>
              </div>
              <span className="badge-gold text-amber-950 bg-amber-400 font-bold text-xs">बरेली (उ.प्र.)</span>
            </div>

            {/* Center details */}
            <div className="text-center space-y-4">
              <div className="inline-block relative">
                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-300 via-amber-500 to-yellow-200 shadow-xl overflow-hidden">
                  <DevotionalArtwork label="माँ राजराजेश्वरी" className="w-full h-full rounded-full" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-rose-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow border border-rose-900 whitespace-nowrap">
                  <span className="mr-1 font-serif">श्री</span>मुख्य ज्योतिषाचार्य
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-amber-300">
                  आचार्य अंकित मिश्रा
                </h3>
                <p className="text-xs text-amber-100/90 font-hindi mt-1">
                  माँ राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र
                </p>
              </div>

              {/* Direct phone links */}
              <div className="bg-rose-900/80 border border-amber-400/40 rounded-xl p-3 space-y-1 text-xs">
                <div className="text-amber-300 font-semibold flex items-center justify-center gap-1">
                  <span>संपर्क सूत्र:</span>
                  <a href="tel:9410202087" className="underline hover:text-white font-mono text-sm">9410202087</a>
                  <span>,</span>
                  <a href="tel:9997586355" className="underline hover:text-white font-mono text-sm">9997586355</a>
                </div>
                <p className="text-[11px] text-amber-100/70">मां राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र, बरेली (उ.प्र.)</p>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 gap-2 text-left pt-2 text-xs">
                <div className="bg-black/30 p-2.5 rounded-lg border border-amber-400/20 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-amber-200">100% प्रमाणित</div>
                    <div className="text-[10px] text-stone-300">लैब टेस्टेड राशि रत्न</div>
                  </div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-lg border border-amber-400/20 flex items-center gap-2">
                  <span aria-hidden="true" className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/60 font-serif text-[10px] font-bold text-amber-300">श्री</span>
                  <div>
                    <div className="font-bold text-amber-200">4.9 रेटिंग</div>
                    <div className="text-[10px] text-stone-300">5,000+ संतुष्ट यजमान</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
