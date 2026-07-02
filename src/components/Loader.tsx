import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onLoadingComplete, 800); // Allow fade out animation to finish
    }, 2000); // 2 seconds loading duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-stone-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-stone-800 tracking-wider">
              L <span className="italic font-light text-stone-400 mx-4">&</span> L
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-px bg-stone-300 mt-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-stone-400 font-sans text-xs tracking-[0.3em] uppercase mt-6"
            >
              {t("loader.date")}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
