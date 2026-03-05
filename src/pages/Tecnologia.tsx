import { Section } from '../components/Section';
import { Cpu, Battery, Zap, Database } from 'lucide-react';

export const Tecnologia = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Tecnología <span className="text-brand-gray-light">Core</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            La base técnica de nuestra excelencia industrial.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {[
            { title: 'Almacenamiento Litio', icon: Battery, desc: 'Sistemas avanzados de gestión de baterías (BMS) para soluciones de almacenamiento de energía de alta densidad.' },
            { title: 'IoT Industrial', icon: Database, desc: 'Conectividad inteligente y análisis de datos para el monitoreo industrial en tiempo real.' },
            { title: 'Electrónica de Potencia', icon: Zap, desc: 'Sistemas de conversión y distribución de energía de alta eficiencia.' },
            { title: 'Sistemas Embebidos', icon: Cpu, desc: 'Diseño de hardware personalizado para aplicaciones industriales especializadas.' }
          ].map((tech, i) => (
            <div key={i} className="gsap-reveal flex flex-col md:flex-row gap-8 glass-card p-10 sm:p-12 rounded-none border-brand-white/5">
              <div className="w-20 h-20 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center text-brand-white shrink-0">
                <tech.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{tech.title}</h3>
                <p className="text-brand-gray-light leading-relaxed mb-8 text-sm sm:text-base font-light">{tech.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {['Eficiencia', 'Fiabilidad', 'Escalabilidad'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-brand-white/5 border border-brand-white/10 rounded-none text-[10px] text-brand-white font-bold uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-black border-t border-brand-white/5">
        <div className="relative rounded-none overflow-hidden aspect-[21/9] border border-brand-white/10">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920" 
            alt="Technology Background"
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 sm:p-12">
            <div className="max-w-3xl">
              <h2 className="gsap-reveal text-3xl sm:text-6xl font-display font-bold mb-6 tracking-tighter uppercase">Excelencia en I+D</h2>
              <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
                Invertimos el 15% de nuestros ingresos anuales en Investigación y Desarrollo para asegurar que nos mantenemos a la vanguardia absoluta de la tecnología industrial.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
