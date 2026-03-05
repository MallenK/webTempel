import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-white rounded-none flex items-center justify-center">
                <span className="text-brand-black font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                TEMPEL<span className="text-brand-gray-light">GROUP</span>
              </span>
            </Link>
            <p className="text-brand-gray-light text-sm leading-relaxed max-w-xs">
              Engineering the energy of the future. Proporcionamos soluciones industriales avanzadas para un mundo sostenible y conectado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-none border border-brand-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-brand-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-brand-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-white">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/empresa" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Empresa</Link></li>
              <li><Link to="/soluciones" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Soluciones</Link></li>
              <li><Link to="/proyectos" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Proyectos</Link></li>
              <li><Link to="/noticias" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Noticias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-white">Soluciones</h4>
            <ul className="space-y-4">
              <li><Link to="/soluciones" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Almacenamiento Energía</Link></li>
              <li><Link to="/soluciones" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Ingeniería Industrial</Link></li>
              <li><Link to="/soluciones" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Iluminación Profesional</Link></li>
              <li><Link to="/soluciones" className="text-brand-gray-light hover:text-brand-white transition-colors text-sm">Sistemas IoT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-gray-light text-sm">
                <MapPin size={18} className="text-brand-white shrink-0 mt-1" />
                <span>Tech Plaza, 123 Innovation Way, Madrid, España</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-gray-light text-sm">
                <Phone size={18} className="text-brand-white shrink-0" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-gray-light text-sm">
                <Mail size={18} className="text-brand-white shrink-0" />
                <span>info@tempelgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-gray-dark text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Tempel Group. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-brand-gray-dark">
            <a href="#" className="hover:text-brand-white transition-colors">Política Privacidad</a>
            <a href="#" className="hover:text-brand-white transition-colors">Términos</a>
            <a href="#" className="hover:text-brand-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
