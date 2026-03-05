import { Section } from '../components/Section';
import { SOLUTIONS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Soluciones = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Soluciones <span className="text-brand-gray-light">Industriales</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Ecosistemas tecnológicos integrales diseñados para los entornos industriales más exigentes.
          </p>
        </div>
      </Section>

      {SOLUTIONS.map((solution, idx) => (
        <Section key={solution.id} className={idx % 2 === 1 ? 'bg-brand-black border-y border-brand-white/5' : 'bg-brand-black'}>
          <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 sm:gap-24`}>
            <div className="lg:w-1/2 w-full">
              <div className="gsap-reveal relative rounded-none overflow-hidden aspect-video group border border-brand-white/10">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row gap-4">
                  {solution.specs?.map((spec, i) => (
                    <div key={i} className="flex-1 glass-card p-4 rounded-none text-center border-brand-white/10">
                      <div className="text-brand-white font-bold text-xl sm:text-2xl tracking-tighter">{spec.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-light font-bold">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8 sm:space-y-12">
              <h2 className="gsap-reveal text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter">{solution.title}</h2>
              <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
                {solution.description} Nuestro enfoque combina hardware de última generación con software inteligente para optimizar el rendimiento y la fiabilidad.
              </p>
              <div className="gsap-reveal grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {solution.features?.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 text-brand-gray-light">
                    <CheckCircle2 size={18} className="text-brand-white shrink-0 mt-1" />
                    <span className="text-sm sm:text-base leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button className="gsap-reveal w-full sm:w-auto bg-brand-white text-brand-black px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-brand-gray-light transition-all flex items-center justify-center group">
                  <span>Solicitar ficha técnica</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};
