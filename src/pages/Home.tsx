import { useEffect, useRef } from 'react';
import { ArrowRight, Battery, Settings, Cpu, ChevronRight, Zap, Radio, Factory, Building2, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '../animations/gsap';
import { Section } from '../components/Section';
import { PROJECTS, SOLUTIONS, MARKETS, STATS } from '../data/content';

export const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', { y: 100, opacity: 0, duration: 1.2, ease: 'power4.out' })
        .from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .from('.hero-cta', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6');
      
      // Parallax effect for hero background
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Stats animation
      gsap.from('.stat-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black" />
          <div className="absolute inset-0 bg-mesh opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
            Engineering the <br />
            <span className="text-brand-gray-light">Energy</span> of the Future
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto mb-10 font-light">
            Líderes globales en ingeniería industrial, almacenamiento energético y distribución tecnológica.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/soluciones" className="w-full sm:w-auto bg-brand-white text-brand-black px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-brand-gray-light transition-all flex items-center justify-center group">
              Nuestras Soluciones <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/empresa" className="w-full sm:w-auto bg-transparent text-brand-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-brand-white/10 transition-all border border-brand-white">
              Sobre Nosotros
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-brand-white to-transparent" />
        </div>
      </div>

      {/* Stats Section */}
      <Section className="bg-brand-black py-12 sm:py-24">
        <div className="stats-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-item text-center p-8 sm:p-12 glass-card rounded-none border-brand-white/5">
              <div className="text-5xl md:text-7xl font-display font-bold text-brand-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-brand-gray-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section className="bg-brand-black">
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="gsap-reveal text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Soluciones Core</h2>
          <p className="gsap-reveal text-brand-gray-light max-w-2xl mx-auto text-sm sm:text-base">
            Ofrecemos un ecosistema completo de tecnología y servicios de ingeniería diseñados para potenciar la próxima generación de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((solution, idx) => (
            <div key={solution.id} className="gsap-reveal group relative overflow-hidden rounded-none glass-card p-8 sm:p-10 hover:border-brand-white/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {solution.icon === 'Battery' && <Battery size={120} />}
                {solution.icon === 'Settings' && <Settings size={120} />}
                {solution.icon === 'Cpu' && <Cpu size={120} />}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-white/5 border border-brand-white/10 rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500">
                  {solution.icon === 'Battery' && <Battery size={20} />}
                  {solution.icon === 'Settings' && <Settings size={20} />}
                  {solution.icon === 'Cpu' && <Cpu size={20} />}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{solution.title}</h3>
                <p className="text-brand-gray-light mb-8 leading-relaxed line-clamp-3 text-sm">{solution.description}</p>
                <Link to="/soluciones" className="flex items-center text-brand-white text-xs font-bold uppercase tracking-widest group/link">
                  Saber Más <ChevronRight className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Markets Section */}
      <Section className="bg-brand-black border-y border-brand-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-24">
          <div className="lg:w-1/2">
            <h2 className="gsap-reveal text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">Mercados Globales</h2>
            <p className="gsap-reveal text-brand-gray-light text-base sm:text-lg mb-12 leading-relaxed">
              Nuestra experiencia abarca múltiples sectores críticos, proporcionando soluciones tecnológicas a medida que impulsan la eficiencia y la innovación en todo el mundo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {MARKETS.map((market) => (
                <div key={market.name} className="gsap-reveal flex items-center space-x-4 p-5 rounded-none bg-brand-white/5 border border-brand-white/5 hover:bg-brand-white/10 transition-colors">
                  <div className="w-10 h-10 bg-brand-white/5 rounded-none flex items-center justify-center text-brand-white">
                    {market.icon === 'Radio' && <Radio size={18} />}
                    {market.icon === 'Factory' && <Factory size={18} />}
                    {market.icon === 'Zap' && <Zap size={18} />}
                    {market.icon === 'Building2' && <Building2 size={18} />}
                    {market.icon === 'Globe' && <Globe size={18} />}
                    {market.icon === 'Shield' && <Shield size={18} />}
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-widest">{market.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="gsap-reveal relative rounded-none overflow-hidden border border-brand-white/10">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Global Technology"
                className="w-full h-auto grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-brand-black py-12 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-brand-gray-dark uppercase tracking-[0.4em] text-[10px] font-bold">Líderes que confían en nosotros</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-24 opacity-20 grayscale">
          {['Siemens', 'ABB', 'Schneider', 'Tesla', 'Panasonic', 'Intel'].map((partner) => (
            <div key={partner} className="text-xl sm:text-3xl font-display font-black tracking-tighter uppercase">{partner}</div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-24 gap-6">
          <div>
            <h2 className="gsap-reveal text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 tracking-tighter">Proyectos Destacados</h2>
            <p className="gsap-reveal text-brand-gray-light text-sm sm:text-base">Aplicaciones reales de nuestra excelencia en ingeniería.</p>
          </div>
          <Link to="/proyectos" className="gsap-reveal flex items-center text-brand-white text-xs font-bold uppercase tracking-widest hover:underline">
            Ver Todos los Proyectos <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="gsap-reveal group relative aspect-[4/5] overflow-hidden rounded-none border border-brand-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                <span className="text-brand-gray-light text-[10px] font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-display font-bold leading-tight group-hover:text-brand-white transition-colors uppercase tracking-tighter">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-0">
        <div className="gsap-reveal relative bg-brand-white rounded-none p-12 sm:p-24 md:p-32 overflow-hidden text-center">
          <div className="absolute inset-0 bg-mesh opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-8 text-brand-black tracking-tighter leading-[0.9]">¿Listo para potenciar tu próximo proyecto?</h2>
            <p className="text-brand-gray-dark text-base sm:text-xl mb-12 font-medium">
              Contacta con nuestros expertos en ingeniería hoy mismo y descubre cómo podemos transformar tus desafíos industriales en oportunidades.
            </p>
            <Link to="/contacto" className="w-full sm:w-auto bg-brand-black text-brand-white px-12 py-5 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-brand-gray-dark transition-all inline-block">
              Contactar Ahora
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};
