import { motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../i18n/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.events"), href: "#programme", originalKey: "events" },
    { name: t("nav.story"), href: "#histoire", originalKey: "story" },
    { name: t("nav.timeline"), href: "#planning", originalKey: "timeline" },
    { name: t("nav.info"), href: "#infos", originalKey: "info" },
    { name: t("nav.faq"), href: "#faq", originalKey: "faq" },
    { name: t("nav.rsvp"), href: "#rsvp", originalKey: "rsvp" },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-50/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className={`font-serif text-2xl tracking-widest ${
            isScrolled ? "text-stone-800" : "text-white drop-shadow-md"
          }`}
        >
          L & L
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.originalKey}
              href={link.href}
              className={`text-[12px] tracking-widest uppercase transition-colors ${
                link.originalKey === "rsvp" 
                ? (isScrolled ? "bg-stone-800 text-stone-100 hover:bg-stone-700 px-4 py-2 rounded-sm" : "bg-white text-stone-900 hover:bg-stone-200 px-4 py-2 rounded-sm shadow-sm")
                : (isScrolled
                  ? "text-stone-600 hover:text-stone-900"
                  : "text-stone-100 hover:text-white drop-shadow-md")
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Globe className={`w-4 h-4 ${isScrolled ? "text-stone-600" : "text-stone-200 drop-shadow-md"}`} />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className={`bg-transparent outline-none text-[12px] tracking-widest cursor-pointer ${
                isScrolled ? "text-stone-600" : "text-stone-100 drop-shadow-md [&>option]:text-stone-800"
              }`}
              aria-label="Select language"
            >
              {langs.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={isScrolled ? "text-stone-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-stone-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-stone-50 shadow-lg py-6 flex flex-col items-center gap-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.originalKey}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-800 text-sm tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-px bg-stone-200 my-2"></div>
          <div className="flex gap-4">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`text-sm tracking-widest uppercase ${
                  language === l.code ? "text-stone-900 font-bold" : "text-stone-500"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
