import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('wedding_lang');
    if (saved === 'fr' || saved === 'en' || saved === 'de') return saved;
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('wedding_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    let found = true;
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        found = false;
        break;
      }
      current = current[key];
    }
    
    if (found && typeof current === 'string') return current;

    // Fallback to French
    let fallback: any = translations['fr'];
    for (const key of keys) {
      if (fallback === undefined || fallback[key] === undefined) {
        return path;
      }
      fallback = fallback[key];
    }
    return typeof fallback === 'string' ? fallback : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
