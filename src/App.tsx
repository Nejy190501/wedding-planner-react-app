import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Events from './components/Events';
import Timeline from './components/Timeline';
import LocationsMap from './components/LocationsMap';
import Info from './components/Info';
import Recommendations from './components/Recommendations';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import FloatingRSVP from './components/FloatingRSVP';
import LanguageSelector from './components/LanguageSelector';
import BackToTop from './components/BackToTop';
import OrnamentDivider from './components/OrnamentDivider';
import Admin from './components/Admin';

import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(() => {
    return !!localStorage.getItem('wedding_lang');
  });
  const { t } = useLanguage();

  // Simple path-based routing for /admin
  const [isAdmin, setIsAdmin] = useState(window.location.pathname === '/admin');

  useEffect(() => {
    const handlePopState = () => {
      setIsAdmin(window.location.pathname === '/admin');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render admin page
  if (isAdmin) {
    return <Admin />;
  }

  return (
    <>
      <Loader onLoadingComplete={() => setLoadingComplete(true)} />
      
      {/* Language Selector - shown after loader, before main content */}
      {loadingComplete && !languageSelected && (
        <LanguageSelector onSelect={() => setLanguageSelected(true)} />
      )}

      <FloatingRSVP />
      <BackToTop />
      
      <div className={`min-h-screen font-sans selection:bg-stone-300 selection:text-stone-900 transition-opacity duration-1000 ${loadingComplete && languageSelected ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navbar />
        <main>
          <Hero />
          <Countdown />
          <Timeline />
          <Story />
          <Events />
          <LocationsMap />
          <Info />
          <Recommendations />
          <FAQ />
          <RSVP />
        </main>
        <footer className="bg-stone-900 text-stone-400 py-16 text-center text-sm tracking-wide">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-serif italic text-2xl mb-8 text-stone-300">
              {t("footer.quote")}
            </p>
            <div className="flex justify-center mb-8">
              <OrnamentDivider style="minimal" dark />
            </div>

            <p className="font-serif italic text-2xl mb-4 text-stone-300">Leonie & Liverance</p>
            <p>&copy; {new Date().getFullYear()} - {t("footer.madeWithLove")}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
