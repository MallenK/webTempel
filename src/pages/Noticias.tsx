import { Section } from '../components/Section';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const Noticias = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Noticias <span className="text-brand-gray-light">Corporativas</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Mantente al día con nuestros últimos avances, asociaciones y conocimientos de la industria.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: 'Nuevo Hub de Almacenamiento de Energía en Madrid', date: '24 Oct, 2025', category: 'Corporativo', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
            { title: 'Tempel Group se asocia con Siemens', date: '12 Sep, 2025', category: 'Asociación', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
            { title: 'El Futuro del IoT Industrial', date: '05 Ago, 2025', category: 'Perspectivas', img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800' },
            { title: 'Premios a la Iluminación Sostenible 2025', date: '20 Jul, 2025', category: 'Premios', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800' },
            { title: 'Expansión en los Mercados Asiáticos', date: '15 Jun, 2025', category: 'Global', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
            { title: 'Lanzamiento de Tecnología BMS de Nueva Generación', date: '30 May, 2025', category: 'Tecnología', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' }
          ].map((post, i) => (
            <div key={i} className="gsap-reveal group glass-card rounded-none overflow-hidden hover:border-brand-white/30 transition-all border-brand-white/5">
              <div className="aspect-video overflow-hidden border-b border-brand-white/5">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark mb-6">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={12} className="mr-1" /> Admin</span>
                  <span className="text-brand-white">{post.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-8 group-hover:text-brand-white transition-colors uppercase tracking-tight leading-tight">{post.title}</h3>
                <button className="flex items-center space-x-2 text-brand-gray-light text-xs font-bold uppercase tracking-widest group-hover:text-brand-white transition-colors">
                  <span>Leer Artículo</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
