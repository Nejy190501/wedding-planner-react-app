import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' }
];

export default function LanguageSelector({ onSelect }: { onSelect: () => void }) {
  const { setLanguage } = useLanguage();

  const handleSelect = (code: Language) => {
    setLanguage(code);
    onSelect();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9998] bg-stone-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center max-w-md px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-stone-800 tracking-wider mb-2">
          L <span className="italic font-light text-stone-400 mx-3">&</span> L
        </h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-stone-300 mt-6 mb-10"
        />

        <p className="text-stone-400 font-sans text-xs tracking-[0.4em] uppercase mb-12">
          Choose your language
        </p>

        <div className="flex flex-col gap-4 w-full">
          {languages.map((lang, idx) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
              onClick={() => handleSelect(lang.code)}
              className="group flex items-center justify-center gap-4 bg-white border border-stone-200 rounded-sm px-8 py-5 
                         hover:bg-stone-800 hover:text-white hover:border-stone-800 
                         transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-serif text-xl tracking-widest text-stone-700 group-hover:text-white transition-colors">
                {lang.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
