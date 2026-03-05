import { Section } from '../components/Section';
import { Globe, Users, Target, ShieldCheck, Zap } from 'lucide-react';
import { TIMELINE } from '../data/content';

export const Empresa = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Nuestro Legado de <span className="text-brand-gray-light">Innovación</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Con más de 45 años de experiencia, Tempel Group ha evolucionado de un distribuidor local a una potencia global en ingeniería industrial y soluciones energéticas.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="gsap-reveal relative rounded-none overflow-hidden border border-brand-white/10">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              alt="Corporate Office"
              className="w-full h-auto grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8 sm:space-y-12">
            <h2 className="gsap-reveal text-3xl sm:text-5xl font-display font-bold uppercase tracking-tighter">Misión & Visión</h2>
            <div className="gsap-reveal space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 p-8 sm:p-10 glass-card rounded-none border-brand-white/5">
                <div className="w-12 h-12 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center shrink-0 text-brand-white">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Misión</h3>
                  <p className="text-brand-gray-light text-sm sm:text-base">Proveer soluciones tecnológicas de vanguardia que impulsen la eficiencia y sostenibilidad de nuestros clientes industriales a nivel global.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 p-8 sm:p-10 glass-card rounded-none border-brand-white/5">
                <div className="w-12 h-12 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center shrink-0 text-brand-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Visión</h3>
                  <p className="text-brand-gray-light text-sm sm:text-base">Ser el referente mundial en la integración de sistemas energéticos y electrónicos para la industria 4.0.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-brand-black border-y border-brand-white/5">
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="gsap-reveal text-4xl sm:text-7xl font-display font-bold mb-4 tracking-tighter">Nuestra Historia</h2>
          <p className="gsap-reveal text-brand-gray-light uppercase tracking-[0.2em] text-[10px] font-bold">Un viaje de crecimiento constante y excelencia tecnológica.</p>
        </div>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-white/10" />
          
          <div className="space-y-12 sm:space-y-24">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`gsap-reveal flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                  <div className={`p-8 sm:p-12 glass-card rounded-none border-brand-white/5 w-full max-w-xl ${idx % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-brand-white font-display font-bold text-3xl sm:text-5xl mb-4 block tracking-tighter">{item.year}</span>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-brand-gray-light text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-2 h-2 bg-brand-white rounded-none z-10 hidden md:block" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Presence Section */}
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-24">
          <div className="lg:w-1/2 space-y-8 sm:space-y-12">
            <h2 className="gsap-reveal text-4xl sm:text-7xl font-display font-bold tracking-tighter">Presencia Global</h2>
            <p className="gsap-reveal text-brand-gray-light text-base sm:text-xl leading-relaxed font-light">
              Nuestra red logística y técnica se extiende por los 5 continentes, con sedes estratégicas que nos permiten ofrecer soporte local con visión global.
            </p>
            <div className="gsap-reveal grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {[
                { region: 'Europa', details: 'Sede central en Madrid y oficinas en Barcelona, Lisboa y Lyon.' },
                { region: 'América', details: 'Presencia en México, Colombia, Brasil, Chile y Argentina.' },
                { region: 'Asia', details: 'Centros de I+D en Shenzhen y oficinas comerciales en Singapur.' },
                { region: 'África', details: 'Proyectos de infraestructura energética en Marruecos y Sudáfrica.' }
              ].map((loc, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-brand-white mb-2 tracking-tight uppercase">{loc.region}</div>
                  <p className="text-brand-gray-dark text-xs sm:text-sm leading-relaxed">{loc.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="gsap-reveal relative glass-card p-4 rounded-none border-brand-white/5">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Global Map"
                className="w-full h-auto grayscale opacity-40"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-black">
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="gsap-reveal text-4xl sm:text-7xl font-display font-bold mb-4 tracking-tighter">Nuestros Valores</h2>
          <p className="gsap-reveal text-brand-gray-light uppercase tracking-[0.2em] text-[10px] font-bold">Los pilares que sostienen nuestra excelencia operativa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: 'Excelencia Técnica', icon: ShieldCheck, desc: 'Compromiso inquebrantable con la calidad y la precisión en cada proyecto.' },
            { title: 'Innovación Constante', icon: Zap, desc: 'Búsqueda permanente de nuevas tecnologías y metodologías.' },
            { title: 'Talento Humano', icon: Users, desc: 'Invertimos en las personas como el motor principal de nuestro éxito.' }
          ].map((val, i) => (
            <div key={i} className="gsap-reveal glass-card p-10 sm:p-12 rounded-none text-center hover:border-brand-white/30 transition-all">
              <div className="w-16 h-16 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center mx-auto mb-8 text-brand-white">
                <val.icon size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{val.title}</h3>
              <p className="text-brand-gray-light text-sm sm:text-base leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
