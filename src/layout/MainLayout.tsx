import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { ScrollTrigger } from '../animations/gsap';

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Refresh scroll trigger on route change
    // Small timeout to ensure DOM is updated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
