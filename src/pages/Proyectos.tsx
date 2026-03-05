import { Section } from '../components/Section';
import { PROJECTS } from '../data/content';
import { ExternalLink, Calendar, User } from 'lucide-react';

export const Proyectos = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-black border-b border-brand-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">Portfolio de <span className="text-brand-gray-light">Ingeniería</span></h1>
          <p className="gsap-reveal text-base sm:text-xl text-brand-gray-light leading-relaxed font-light">
            Explora nuestra huella global de implementaciones industriales exitosas y avances en ingeniería.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="gsap-reveal group relative overflow-hidden rounded-none aspect-video border border-brand-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-90" />
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-brand-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-brand-white/5 border border-brand-white/10 rounded-none">{project.category}</span>
                    <div className="flex items-center text-brand-gray-light text-[10px] font-bold uppercase tracking-widest">
                      <Calendar size={12} className="mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-bold mb-4 group-hover:text-brand-white transition-colors uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-brand-gray-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xl line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center text-brand-gray-light text-xs font-bold uppercase tracking-widest">
                      <User size={14} className="mr-2 text-brand-white" />
                      <span>Cliente: <span className="text-brand-white">{project.client}</span></span>
                    </div>
                    <button className="flex items-center justify-center space-x-2 text-brand-black font-bold bg-brand-white px-8 py-3 rounded-none text-xs uppercase tracking-widest hover:bg-brand-gray-light transition-all opacity-0 group-hover:opacity-100">
                      <span>Ver Caso</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
