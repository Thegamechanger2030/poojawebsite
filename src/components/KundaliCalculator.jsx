import React, { useState } from 'react';
import { Mail, MessageCircle, User } from 'lucide-react';

const PANDIT_WHATSAPP = '919410202087';
const PANDIT_EMAIL = 'maarajrajeshwari2026@gmail.com';

export default function KundaliCalculator({
  compact = false,
  selectedPackage = '',
  onSelectPackage
}) {
  const [formData, setFormData] = useState({
    name: '',
    dob: '1998-05-15',
    tob: '10:30',
    pob: 'Bareilly, U.P.',
    gender: 'male'
  });

  const [requestDetails, setRequestDetails] = useState(null);

  const handleRequest = (e) => {
    e.preventDefault();
    setRequestDetails({
      ...formData,
      gender: compact ? '' : formData.gender,
      packageName: compact ? selectedPackage : ''
    });
  };

  const requestMessage = requestDetails
    ? [
        'Namaste Pandit ji, mujhe apni Vedic Kundali banwani hai.',
        `Naam: ${requestDetails.name}`,
        `Janm tithi: ${requestDetails.dob}`,
        `Janm samay: ${requestDetails.tob}`,
        `Janm sthan: ${requestDetails.pob}`,
        ...(requestDetails.packageName ? [`Kundali package: ${requestDetails.packageName}`] : []),
        ...(requestDetails.gender ? [`Ling: ${requestDetails.gender === 'male' ? 'Purush' : 'Mahila'}`] : []),
        ...(requestDetails.phone ? [`WhatsApp: ${requestDetails.phone}`] : []),
        ...(requestDetails.email ? [`Email: ${requestDetails.email}`] : []),
        'Kripya full Kundali ki fees aur aage ki prakriya batayein.'
      ].join('\n')
    : '';
  const whatsappUrl = `https://wa.me/${PANDIT_WHATSAPP}?text=${encodeURIComponent(requestMessage)}`;
  const emailUrl = `mailto:${PANDIT_EMAIL}?subject=${encodeURIComponent('Vedic Kundali request')}&body=${encodeURIComponent(requestMessage)}`;

  if (compact) {
    const compactInputClass = 'w-full rounded-lg border border-[#d5a84e] bg-[#fff9ed] px-3 py-2.5 text-sm text-[#452017] placeholder-[#9b8174] outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30';

    return (
      <section id="kundali-section" className="kundali-home-form w-full max-w-xl">
        <div className="kundali-home-card">
          <div className="mb-4 flex items-center gap-3 border-b border-amber-200/20 pb-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/80 bg-[#fff1d2] font-serif text-xl text-[#7c261c]">
              ॐ
            </span>
            <div>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#fff4df] sm:text-[1.7rem]">Vedic Kundali</h2>
              <p className="mt-1 text-xs leading-relaxed text-[#f3d9bd] sm:text-sm">
                जन्म विवरण भरें और अपनी कुंडली का अनुरोध भेजें।
              </p>
            </div>
          </div>

          <form onSubmit={handleRequest} className="space-y-3">
            {selectedPackage && (
              <div className="rounded-lg border border-amber-200/40 bg-white/10 px-3 py-2 text-xs font-semibold text-[#fff1d2]">
                Selected package: {selectedPackage}
              </div>
            )}
            <label className="block text-xs font-semibold text-[#f6dfc5]">
              पूरा नाम (Full Name)
              <input
                type="text"
                required
                placeholder="उदा. राहुल शर्मा"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className={`${compactInputClass} mt-1`}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold text-[#f6dfc5]">
                जन्म तिथि (DOB)
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={e => setFormData({ ...formData, dob: e.target.value })}
                  className={`${compactInputClass} mt-1`}
                />
              </label>
              <label className="block text-xs font-semibold text-[#f6dfc5]">
                जन्म समय (Time)
                <input
                  type="time"
                  required
                  value={formData.tob}
                  onChange={e => setFormData({ ...formData, tob: e.target.value })}
                  className={`${compactInputClass} mt-1`}
                />
              </label>
            </div>

            <label className="block text-xs font-semibold text-[#f6dfc5]">
              जन्म स्थान (Place of Birth)
              <input
                type="text"
                required
                placeholder="उदा. बरेली, U.P."
                value={formData.pob}
                onChange={e => setFormData({ ...formData, pob: e.target.value })}
                className={`${compactInputClass} mt-1`}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold text-[#f6dfc5]">
                WhatsApp नंबर
                <input
                  type="tel"
                  placeholder="+91"
                  value={formData.phone || ''}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className={`${compactInputClass} mt-1`}
                />
              </label>
              <label className="block text-xs font-semibold text-[#f6dfc5]">
                Email (वैकल्पिक)
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email || ''}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={`${compactInputClass} mt-1`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="kundali-home-submit mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-white transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              <MessageCircle className="h-4 w-4" />
              कुंडली Summary प्राप्त करें
            </button>
            {selectedPackage && onSelectPackage && (
              <button
                type="button"
                onClick={() => onSelectPackage('')}
                className="block mx-auto text-xs text-[#f3d9bd] underline underline-offset-2 hover:text-white"
              >
                Package बदलें
              </button>
            )}
          </form>

          {requestDetails && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fff1d2] px-3 py-2.5 text-xs font-bold text-[#762319] transition hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp पर भेजें
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-200/50 bg-white/10 px-3 py-2.5 text-xs font-bold text-[#fff1d2] transition hover:bg-white/15"
              >
                <Mail className="h-4 w-4" />
                Email पर भेजें
              </a>
            </div>
          )}

          <p className="mt-3 text-center text-[11px] leading-relaxed text-[#e8cbb1]">
            आपकी जानकारी के आधार पर कुंडली तैयार की जाएगी। शुल्क और प्रक्रिया अनुरोध भेजने पर बताई जाएगी।
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="kundali-section" className="py-16 bg-gradient-to-b from-[#FFF4D7] via-[#FFE6B0] to-[#FFD58A] text-[#3A2418] relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#7C2D12]">
            Vedic Kundali
          </h2>
          <p className="text-[#51351F] text-sm md:text-base">
            जन्म तिथि, समय एवं स्थान के आधार पर अपनी कुंडली प्राप्त करें।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Input Form */}
          <div className="lg:col-span-5 bg-[#FFFCF5] border border-[#D6A13C]/60 p-6 md:p-8 rounded-3xl shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-[#D6A13C]/40 pb-4">
              <h3 className="text-xl font-bold font-serif text-[#7C2D12] flex items-center gap-2">
                <User className="w-5 h-5 text-[#A83200]" />
                <span>अपनी विवरणी दर्ज करें</span>
              </h3>
              <span className="text-[10px] bg-[#FFF0C2] text-[#713B16] px-2 py-1 rounded border border-[#D6A13C]/50">निवेदन निःशुल्क</span>
            </div>

            <form onSubmit={handleRequest} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#51351F] mb-1">पूरा नाम (Full Name)</label>
                <input 
                  type="text" 
                  required
                  placeholder="उदा. राहुल शर्मा"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-[#C8A66A] rounded-xl px-4 py-2.5 text-sm text-[#292323] placeholder-stone-500 focus:outline-none focus:border-[#A83200] focus:ring-2 focus:ring-[#D6A13C]/25"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#51351F] mb-1">जन्म तिथि (DOB)</label>
                  <input 
                    type="date" 
                    required
                    value={formData.dob}
                    onChange={e => setFormData({...formData, dob: e.target.value})}
                    className="w-full bg-white border border-[#C8A66A] rounded-xl px-3 py-2 text-xs text-[#292323] focus:outline-none focus:border-[#A83200] focus:ring-2 focus:ring-[#D6A13C]/25"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#51351F] mb-1">जन्म समय (Time)</label>
                  <input 
                    type="time" 
                    required
                    value={formData.tob}
                    onChange={e => setFormData({...formData, tob: e.target.value})}
                    className="w-full bg-white border border-[#C8A66A] rounded-xl px-3 py-2 text-xs text-[#292323] focus:outline-none focus:border-[#A83200] focus:ring-2 focus:ring-[#D6A13C]/25"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#51351F] mb-1">जन्म स्थान (Place of Birth)</label>
                <input 
                  type="text" 
                  required
                  placeholder="उदा. बरेली, उत्तर प्रदेश"
                  value={formData.pob}
                  onChange={e => setFormData({...formData, pob: e.target.value})}
                  className="w-full bg-white border border-[#C8A66A] rounded-xl px-4 py-2.5 text-sm text-[#292323] placeholder-stone-500 focus:outline-none focus:border-[#A83200] focus:ring-2 focus:ring-[#D6A13C]/25"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#51351F] mb-1">लिंग (Gender)</label>
                <div className="flex items-center gap-4 text-xs font-medium text-[#3A2418] pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={formData.gender === 'male'}
                      onChange={() => setFormData({...formData, gender: 'male'})}
                      className="accent-[#A83200] focus:ring-0"
                    />
                    <span>पुरुष (Male)</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={formData.gender === 'female'}
                      onChange={() => setFormData({...formData, gender: 'female'})}
                      className="accent-[#A83200] focus:ring-0"
                    />
                    <span>महिला (Female)</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full justify-center py-3 text-sm mt-4 rounded-xl bg-[#A83200] text-white font-bold shadow-sm transition-colors hover:bg-[#8C2700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A13C]"
              >
                कुंडली के लिए संपर्क विकल्प देखें
              </button>
            </form>
          </div>

          {/* Right: Request options */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[350px] bg-[#FFFCF5] border border-[#D6A13C]/60 rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-5 text-[#51351F] shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#FFF0C2] flex items-center justify-center border border-[#D6A13C]/60 text-[#8C3D12] text-2xl font-serif">
                श्री
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-serif text-[#7C2D12]">
                  {requestDetails ? 'अपनी कुंडली का अनुरोध भेजें' : 'Pandit ji से अपनी कुंडली मंगाएं'}
                </h4>
                <p className="text-sm text-[#51351F] max-w-lg">
                  {requestDetails
                    ? `आपकी जन्म जानकारी ${requestDetails.name} के नाम से message में जोड़ दी गई है। भेजने से पहले details जांच लें।`
                    : 'जन्म विवरण भरने के बाद WhatsApp या email से Pandit ji को अनुरोध भेजें।'}
                </p>
              </div>
              <div className="rounded-2xl border border-[#D6A13C]/50 bg-[#FFF3D4] px-5 py-4 text-sm">
                <p className="font-semibold text-[#713B16]">विस्तृत / Full Kundali सशुल्क है।</p>
                <p className="mt-1 text-xs text-[#51351F]">
                  शुल्क और प्रक्रिया Pandit ji से अनुरोध भेजने पर confirm करें।
                </p>
              </div>
              {requestDetails && (
                <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#A83200] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8C2700]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp पर भेजें
                  </a>
                  <a
                    href={emailUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#A83200]/50 bg-[#FFF3D4] px-4 py-3 text-sm font-bold text-[#7C2D12] transition-colors hover:bg-[#FFE3A6]"
                  >
                    <Mail className="h-4 w-4" />
                    Email पर भेजें
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
