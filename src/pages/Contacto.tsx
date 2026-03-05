import { Section } from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contacto = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Ponte en <span className="text-brand-gray-light">Contacto</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Nuestro equipo global de expertos en ingeniería está listo para discutir tu próximo desafío.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          <div className="space-y-12 sm:space-y-16">
            <h2 className="gsap-reveal text-3xl sm:text-5xl font-display font-bold uppercase tracking-tighter">Información</h2>
            <div className="gsap-reveal space-y-8 sm:space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center text-brand-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Sede Central</h3>
                  <p className="text-brand-gray-light text-sm sm:text-base">Tech Plaza, 123 Innovation Way, Madrid, España</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center text-brand-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Teléfono</h3>
                  <p className="text-brand-gray-light text-sm sm:text-base">+34 912 345 678</p>
                  <p className="text-brand-gray-light text-sm sm:text-base">+34 912 345 679</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center text-brand-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Email</h3>
                  <p className="text-brand-gray-light text-sm sm:text-base">info@tempelgroup.com</p>
                  <p className="text-brand-gray-light text-sm sm:text-base">support@tempelgroup.com</p>
                </div>
              </div>
            </div>

            <div className="gsap-reveal relative rounded-none overflow-hidden h-64 bg-brand-white/5 border border-brand-white/10 flex items-center justify-center">
              <span className="text-brand-gray-dark font-display font-bold text-xl uppercase tracking-[0.3em]">Mapa Interactivo</span>
            </div>
          </div>

          <div className="gsap-reveal glass-card p-8 sm:p-12 rounded-none border-brand-white/5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 uppercase tracking-tight">Envíanos un mensaje</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-brand-gray-dark uppercase tracking-widest">Nombre Completo</label>
                  <input type="text" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-none px-6 py-4 focus:border-brand-white transition-colors outline-none text-brand-white" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-brand-gray-dark uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-none px-6 py-4 focus:border-brand-white transition-colors outline-none text-brand-white" placeholder="juan@ejemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-gray-dark uppercase tracking-widest">Asunto</label>
                <select className="w-full bg-brand-white/5 border border-brand-white/10 rounded-none px-6 py-4 focus:border-brand-white transition-colors outline-none appearance-none text-brand-white">
                  <option className="bg-brand-black">Consulta Soluciones Energía</option>
                  <option className="bg-brand-black">Ingeniería Industrial</option>
                  <option className="bg-brand-black">Asociación Distribución</option>
                  <option className="bg-brand-black">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-gray-dark uppercase tracking-widest">Mensaje</label>
                <textarea rows={5} className="w-full bg-brand-white/5 border border-brand-white/10 rounded-none px-6 py-4 focus:border-brand-white transition-colors outline-none resize-none text-brand-white" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-brand-white text-brand-black py-5 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-brand-gray-light transition-all flex items-center justify-center space-x-2">
                <span>Enviar Mensaje</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
