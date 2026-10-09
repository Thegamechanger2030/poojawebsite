import React from 'react';
import { SERVICES } from '../data/services';
import { Compass, Gem, Flame, ShieldAlert, Feather, Sparkles, HeartHandshake, Crown, ArrowRight } from 'lucide-react';

const iconMap = {
  Compass,
  Gem,
  Flame,
  ShieldAlert,
  Feather,
  Sparkles,
  HeartHandshake,
  Crown
};

export default function ServicesGrid({ onSelectService }) {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wide">
            <span>हमारी मुख्य सेवाएं</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">
            वैदिक ज्योतिष एवं पूजार्थ मुख्य सेवाएं
          </h2>
          <p className="text-stone-600 text-sm md:text-base">
            आचार्य अंकित मिश्रा द्वारा शास्त्र सम्मत विधि विधान से संचालित आठ प्रमुख आध्यात्मिक सेवाएं
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.iconName] || Sparkles;
            return (
              <div 
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="cream-card p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-950 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="badge-gold text-[10px]">{service.badge}</span>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-bold font-hindi text-rose-950 group-hover:text-rose-800 transition">
                    {service.titleHindi}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 tracking-wider">
                    {service.titleEng}
                  </div>
                  <p className="text-xs font-semibold text-stone-800 bg-amber-100/60 p-1.5 rounded text-rose-900">
                    {service.subTitle}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="flex items-center justify-between text-xs font-bold text-rose-900 pt-3 border-t border-amber-200/60 group-hover:text-amber-700">
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
