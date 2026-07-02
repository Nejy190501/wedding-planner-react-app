import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function FloatingRSVP() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 60% of viewport
      if (window.scrollY > window.innerHeight * 0.6) {
        // Hide if we reached the RSVP section
        const rsvpSection = document.getElementById("rsvp");
        if (rsvpSection && window.scrollY + window.innerHeight > rsvpSection.offsetTop + 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#rsvp"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] bg-gold-500 text-white p-4 rounded-full shadow-lg hover:bg-gold-400 hover:scale-105 transition-all flex items-center justify-center group outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 border border-gold-400"
          aria-label={t("floatingRsvp")}
        >
          <Send className="w-5 h-5 md:w-6 md:h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out font-serif uppercase tracking-widest text-xs md:text-sm">
            {t("floatingRsvp")}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
