import { Section } from '../components/Section';
import { MARKETS } from '../data/content';
import { Radio, Factory, Zap, Building2, Globe, ArrowRight, Shield } from 'lucide-react';

const iconMap: any = {
  Radio: Radio,
  Factory: Factory,
  Zap: Zap,
  Building2: Building2,
  Globe: Globe,
  Shield: Shield,
};

export const Mercados = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Mercados <span className="text-brand-gray-light">Globales</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Soluciones especializadas para las industrias críticas que mantienen el mundo en movimiento.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MARKETS.map((market, idx) => {
            const Icon = iconMap[market.icon];
            return (
              <div key={idx} className="gsap-reveal glass-card p-8 sm:p-12 rounded-none hover:border-brand-white/30 transition-all group border-brand-white/5">
                <div className="w-16 h-16 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center text-brand-white mb-8 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 uppercase tracking-tight">{market.name}</h3>
                <p className="text-brand-gray-light mb-8 leading-relaxed text-sm sm:text-base">
                  {market.details || `Servicios de ingeniería y distribución a medida diseñados para cumplir con las demandas operativas específicas del sector de ${market.name.toLowerCase()}.`}
                </p>
                <button className="flex items-center space-x-2 text-brand-white text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  <span>Explorar sector</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};
