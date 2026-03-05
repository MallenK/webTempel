import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Empresa } from './pages/Empresa';
import { Soluciones } from './pages/Soluciones';
import { Proyectos } from './pages/Proyectos';
import { Mercados } from './pages/Mercados';
import { Tecnologia } from './pages/Tecnologia';
import { Noticias } from './pages/Noticias';
import { Contacto } from './pages/Contacto';
import { ThemeProvider } from './context/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="empresa" element={<Empresa />} />
            <Route path="soluciones" element={<Soluciones />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="mercados" element={<Mercados />} />
            <Route path="tecnologia" element={<Tecnologia />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
