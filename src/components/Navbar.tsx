import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { cn } from '../utils/cn';
import { gsap } from '../animations/gsap';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-brand-black/80 backdrop-blur-lg border-b border-brand-white/10 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-white rounded-none flex items-center justify-center">
            <span className="text-brand-black font-bold text-xl">T</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            TEMPEL<span className="text-brand-gray-light">GROUP</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-xs uppercase tracking-widest font-bold transition-colors hover:text-brand-white relative group',
                location.pathname === link.path ? 'text-brand-white' : 'text-brand-gray-light'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-px bg-brand-white transition-all duration-300 group-hover:w-full',
                location.pathname === link.path && 'w-full'
              )} />
            </Link>
          ))}
          <Link
            to="/contacto"
            className="border border-brand-white text-brand-white px-6 py-2 rounded-none text-xs font-bold uppercase tracking-widest transition-all hover:bg-brand-white hover:text-brand-black"
          >
            CONTACTO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-brand-black z-40 lg:hidden transition-all duration-500 pt-24 px-6 flex flex-col',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <div className="flex flex-col space-y-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-4xl font-display font-bold uppercase tracking-tighter flex justify-between items-center transition-colors',
                location.pathname === link.path ? 'text-brand-white' : 'text-brand-gray-dark'
              )}
            >
              {link.name}
              <ChevronRight className={location.pathname === link.path ? 'text-brand-white' : 'text-brand-gray-dark'} />
            </Link>
          ))}
        </div>
        <div className="mt-auto pb-12">
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="w-full block text-center border border-brand-white text-brand-white py-4 font-bold uppercase tracking-widest"
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};
