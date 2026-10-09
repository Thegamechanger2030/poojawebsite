import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [activePolicyModal, setActivePolicyModal] = useState(null);

  const policyContent = {
    refund: {
      title: 'Refund & Cancellation Policy (रिफंड नीति)',
      text: 'Puja booking cancellations made 24 hours prior to the scheduled slot receive 100% refund. Samagri store items can be returned within 7 days if unopened.'
    },
    shipping: {
      title: 'Shipping Policy (शिपिंग नीति)',
      text: 'All Samagri Kits and Certified Gemstones are dispatched via express courier with real-time tracking code sent on WhatsApp within 24-48 hours.'
    },
    astrology: {
      title: 'Astrology Disclaimer (ज्योतिष परामर्श डिस्क्लेमर)',
      text: 'Astrological guidance and Kundali reports are based on ancient Vedic calculations. Results vary based on individual karma. We never make fear-inducing or false guaranteed claim statements.'
    },
    terms: {
      title: 'Terms of Service & Privacy (सेवा शर्तें एवं गोपनीयता)',
      text: 'Your birth details and Kundali data are strictly confidential and protected under strict privacy protocols.'
    }
  };

  return (
    <footer id="contact-section" className="scroll-mt-32 bg-[#8A3B08] text-amber-50 pt-16 pb-8 border-t-4 border-amber-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span
                aria-label="Shri mark"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-amber-400/50 bg-amber-400/10 text-lg font-black font-serif text-amber-300"
              >
                श्री
              </span>
              <div>
                <h3 className="text-xl font-bold font-serif text-amber-300">
                  माँ राजराजेश्वरी <span className="text-amber-100 font-normal">पूजा</span>
                </h3>
                <p className="text-[11px] text-amber-200/80 font-hindi">
                  माँ राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र
                </p>
              </div>
            </div>

            <p className="text-xs text-amber-50/90 leading-relaxed max-w-sm">
              बरेली (उत्तर प्रदेश) में स्थित शास्त्र सम्मत वैदिक अनुष्ठान संस्थान। आचार्य अंकित मिश्रा जी के नेतृत्व में गृह प्रवेश, रुद्राभिषेक, बगलामुखी अनुष्ठान एवं लैब प्रमाणित राशि रत्न सेवा।
            </p>

            <div className="p-3 bg-black/40 border border-amber-400/30 rounded-2xl space-y-1.5 text-xs text-amber-200">
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:9410202087" className="hover:underline">9410202087</a>
                <span>/</span>
                <a href="tel:9997586355" className="hover:underline">9997586355</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>मां राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र, बरेली (उ.प्र.)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="text-amber-300 font-serif font-bold text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition">Home Page</button>
              </li>
              <li>
                <button onClick={() => onNavigate('pujas')} className="hover:text-amber-300 transition">Book a Vedic Pandit</button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-amber-300 transition">Samagri & Ratna Store</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.setTimeout(() => {
                      document.getElementById('kundali-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-amber-300 transition"
                >
                  Free Kundali Generator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Pujas */}
          <div className="space-y-3 text-xs">
            <h4 className="text-amber-300 font-serif font-bold text-sm">Popular Pujas</h4>
            <ul className="space-y-2 text-amber-50/90">
              <li>Griha Pravesh & Vastu Shanti</li>
              <li>Maha Rudrabhishek</li>
              <li>Maa Baglamukhi Vishesh Sadhna</li>
              <li>Kaal Sarp Dosh Nivaran</li>
              <li>Shree Satyanarayan Vrat Katha</li>
            </ul>
          </div>

          {/* Col 5: Trust Policies */}
          <div className="space-y-3 text-xs">
            <h4 className="text-amber-300 font-serif font-bold text-sm">Trust & Policies</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActivePolicyModal('refund')} className="hover:text-amber-300 transition">Refund & Cancellation</button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-amber-300 transition">Shipping Policy</button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('astrology')} className="hover:text-amber-300 transition">Astrology Disclaimer</button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('terms')} className="hover:text-amber-300 transition">Terms & Privacy Policy</button>
              </li>
            </ul>

            {/* Payment badges */}
            <div className="pt-2 space-y-1">
              <span className="text-[10px] text-amber-200/60 uppercase font-semibold block">Supported Payments</span>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-stone-950 flex-wrap">
                <span className="bg-amber-100 px-2 py-0.5 rounded">UPI / QR</span>
                <span className="bg-amber-100 px-2 py-0.5 rounded">GPay</span>
                <span className="bg-amber-100 px-2 py-0.5 rounded">Cards</span>
                <span className="bg-amber-100 px-2 py-0.5 rounded">Cash</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-amber-200/30 flex flex-col md:flex-row justify-between items-center text-xs text-amber-100/75 gap-4">
          <p>© 2026 Maa Rajrajeshwari Puja Platform. Brand Founder: आचार्य अंकित मिश्रा (बरेली).</p>
          <div className="flex items-center gap-1 text-amber-200/80">
            <span>Designed with Vedic Purity</span>
            <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
            <span>for Devotees</span>
          </div>
        </div>

      </div>

      {/* Policy View Modal */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-amber-50 text-stone-900 border-2 border-amber-400 p-6 rounded-3xl max-w-md w-full space-y-4 animate-fade-in shadow-2xl">
            <h3 className="text-lg font-bold font-serif text-[#8A3B08]">
              {policyContent[activePolicyModal].title}
            </h3>
            <p className="text-xs leading-relaxed text-stone-700">
              {policyContent[activePolicyModal].text}
            </p>
            <button 
              onClick={() => setActivePolicyModal(null)}
              className="btn-primary w-full justify-center py-2 text-xs"
            >
              Understand & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
