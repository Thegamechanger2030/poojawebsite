import React, { useState } from 'react';
import { Calendar, BookOpen, ArrowRight, CheckCircle2, Crown } from 'lucide-react';
import KundaliCalculator from './KundaliCalculator';
import kalashArtwork from '../../ChatGPT Image Sep 30, 2026, 12_08_01 AM.png';

export default function SampleHero({ onNavigate }) {
  const [selectedPackage, setSelectedPackage] = useState('');

  const choosePackage = (packageName) => {
    setSelectedPackage(packageName);
    document.getElementById('kundali-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 md:space-y-14 pb-8">
      
      {/* Hero section */}
      <section
        className="premium-hero hero-sample-section kundali-home-hero relative overflow-hidden pt-8 pb-12 md:py-12 border-b border-amber-200/50"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 244, 220, 0.76) 0%, rgba(255, 239, 211, 0.62) 43%, rgba(255, 232, 190, 0.34) 100%), url("${kalashArtwork}")`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Sanskrit Shloka & CTA Buttons */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="shloka-tag font-hindi text-[#7b1e1b] font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
              <span>॥ जय माँ राजराजेश्वरी ॥</span>
            </div>

            <h1 className="hero-main-title text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-[#741b1b] leading-tight tracking-tight">
              Maa Rajrajeshwari <br className="hidden sm:block" />
              Pooja
            </h1>

            <p className="hero-subtitle text-stone-700 text-lg sm:text-xl font-medium max-w-xl">
              Divine Blessings for Peace, Prosperity and Happiness
            </p>

            {/* Sanskrit Shloka Quote Box */}
            <div className="shloka-quote-bar py-2 my-4 text-[#7b1e1b] font-hindi text-base sm:text-lg font-semibold leading-relaxed">
              <span className="shloka-type-line shloka-type-line--first">या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता ।</span>
              <span className="shloka-type-line shloka-type-line--second">नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate('pooja')}
                className="btn-sample-saffron cursor-pointer text-sm sm:text-base px-6 py-3 rounded-full bg-[#D94E1F] hover:bg-[#A83200] text-white font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="text-lg">🪷</span>
                <span>Book Pooja Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onNavigate('pooja')}
                className="btn-sample-cream cursor-pointer text-sm sm:text-base px-6 py-3 rounded-full bg-white border-2 border-amber-400 hover:border-[#D94E1F] text-[#D94E1F] font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg text-amber-600">🪷</span>
                <span>Explore Services</span>
              </button>
            </div>
          </div>

          {/* Kundali form is the primary action on the homepage */}
          <div className="lg:col-span-5 flex justify-center">
            <KundaliCalculator
              compact
              selectedPackage={selectedPackage}
              onSelectPackage={setSelectedPackage}
            />
          </div>

        </div>
      </section>

      <section
        aria-labelledby="kundali-packages-title"
        className="kundali-packages mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:gap-5"
      >
        <h2 id="kundali-packages-title" className="sr-only">Kundali packages</h2>
        <article className="kundali-package-card">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f78b16] to-[#d84b08] text-white shadow-md">
              <BookOpen aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-xl font-bold text-[#741b1b]">Basic Kundali</h3>
            <span className="ml-auto font-serif text-xl font-bold text-[#a52b1c]">₹ 2,100</span>
          </div>
          <ul className="mt-3 space-y-1.5 pl-1 text-sm text-[#4d382f]">
            {['जन्म कुंडली चार्ट', 'ग्रह एवं भाव स्थिति', 'दशा विवरण', 'सामान्य फलित एवं मार्गदर्शन', 'PDF + WhatsApp/Email डिलीवरी'].map(item => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#d94e1f] text-white" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => choosePackage('Basic Kundali (₹2,100)')}
            className="kundali-package-button mt-4"
          >
            Basic Kundali बनवाएं <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </article>

        <article className="kundali-package-card">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f78b16] to-[#d84b08] text-white shadow-md">
              <Crown aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-xl font-bold text-[#741b1b]">Detailed Kundali</h3>
            <span className="ml-auto font-serif text-xl font-bold text-[#a52b1c]">₹ 4,100</span>
          </div>
          <ul className="mt-3 space-y-1.5 pl-1 text-sm text-[#4d382f]">
            {['Basic Kundali की सभी सुविधाएं', 'विस्तृत जन्म कुंडली विश्लेषण', 'करियर, विवाह, वित्त एवं स्वास्थ्य विवरण', 'विशेष योग/दोष एवं उपाय', 'पंडित जी से सलाह / Consultation'].map(item => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#d94e1f] text-white" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => choosePackage('Detailed Kundali (₹4,100)')}
            className="kundali-package-button mt-4"
          >
            Detailed Kundali बनवाएं <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </article>
      </section>

      {/* 2. QUICK SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Pooja Services */}
          <div 
            onClick={() => onNavigate('pooja')}
            className="quick-service-card quick-service-card--saffron-gold group rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full border border-amber-300/70 bg-gradient-to-br from-[#fff0bc] to-[#f2bd57] flex items-center justify-center text-2xl shadow-inner text-[#8c3517] flex-shrink-0 group-hover:scale-110 transition-transform">
              🪷
            </div>
            <div>
              <h4 className="font-bold text-[#67231b] text-base font-serif group-hover:text-[#9e3510] transition-colors">Pooja Services</h4>
              <p className="text-xs text-[#68472e] font-medium mt-0.5">Various Pooja & Anushthan</p>
            </div>
          </div>

          {/* Card 2: Book Online */}
          <div 
            onClick={() => onNavigate('pooja')}
            className="quick-service-card quick-service-card--saffron-gold group rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full border border-amber-300/70 bg-gradient-to-br from-[#fff0bc] to-[#f2bd57] flex items-center justify-center text-[#8c3517] flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-[#8c3517]" />
            </div>
            <div>
              <h4 className="font-bold text-[#67231b] text-base font-serif group-hover:text-[#9e3510] transition-colors">Book Online</h4>
              <p className="text-xs text-[#68472e] font-medium mt-0.5">Easy & Secure Booking</p>
            </div>
          </div>

          {/* Card 4: Religious Articles */}
          <div 
            onClick={() => onNavigate('shop')}
            className="quick-service-card quick-service-card--saffron-gold group rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full border border-amber-300/70 bg-gradient-to-br from-[#fff0bc] to-[#f2bd57] flex items-center justify-center text-[#8c3517] flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-[#8c3517]" />
            </div>
            <div>
              <h4 className="font-bold text-[#67231b] text-base font-serif group-hover:text-[#9e3510] transition-colors">Religious Articles</h4>
              <p className="text-xs text-[#68472e] font-medium mt-0.5">Learn & Stay Connected</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT MAA RAJRAJESHWARI SECTION */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="about-card-wrapper bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Gold Mandala Watermark Pattern */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <svg width="320" height="320" viewBox="0 0 100 100" fill="none" stroke="#D6A13C" strokeWidth="0.8">
              <circle cx="50" cy="50" r="45" />
              <circle cx="50" cy="50" r="35" />
              <circle cx="50" cy="50" r="25" />
              <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
            </svg>
          </div>

          {/* Left Column: Photo of Divine Golden Kalash */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-md h-full min-h-[280px] bg-amber-50">
              <img
                src={kalashArtwork}
                alt="Mangal pavitra golden kalash"
                className="w-full h-[320px] sm:h-[370px] object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: About Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="about-tag font-bold text-amber-600 text-sm tracking-wider uppercase flex items-center gap-2">
              <span>— About</span>
            </div>

            <h2 className="about-heading font-serif text-3xl sm:text-4xl font-bold text-[#D94E1F]">
              Maa Rajrajeshwari
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Maa Rajrajeshwari is the supreme form of Divine Mother, representing power, compassion, wisdom and abundance. Her blessings bring peace, prosperity and spiritual growth to her devotees. Through dedicated worship and pooja, we seek her divine grace for a better and brighter life.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => onNavigate('pooja')}
                className="btn-sample-saffron text-sm px-6 py-2.5 rounded-full bg-[#D94E1F] hover:bg-[#A83200] text-white font-semibold inline-flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
