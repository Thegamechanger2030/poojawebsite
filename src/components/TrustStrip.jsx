import React from 'react';
import { ShieldCheck, Users, MapPin, Award } from 'lucide-react';

export default function TrustStrip() {
  const stats = [
    { icon: ShieldCheck, count: '100%', label: 'शास्त्र सम्मत विधि', desc: 'शुद्ध वैदिक मंत्रोच्चार एवं पूर्ण संकल्प' },
    { icon: Users, count: '100+', label: 'अनुभवी गुरुकुल पंडित', desc: 'आचार्य अंकित मिश्रा जी का मार्गदर्शन' },
    { icon: MapPin, count: '25+', label: 'शहरों में सेवा उपलब्ध', desc: 'बरेली, दिल्ली NCR, लखनऊ एवं ई-पूजा' },
    { icon: Award, count: '100%', label: 'प्रमाणित पूजन सामग्री', desc: 'शुद्ध गंगाजल, ऑर्गेनिक धूप व जड़ी-बूटी' }
  ];

  return (
    <section className="bg-rose-950 text-amber-100 py-8 border-y border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="space-y-1 p-3 rounded-xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
                <IconComponent className="w-7 h-7 text-amber-400 mx-auto mb-1" />
                <div className="text-2xl md:text-3xl font-extrabold text-amber-300 font-serif">
                  {item.count}
                </div>
                <div className="font-semibold text-xs md:text-sm text-white">{item.label}</div>
                <div className="text-[11px] text-amber-200/60 hidden sm:block">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

