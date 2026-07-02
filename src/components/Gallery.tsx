import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const photos = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544078755-6b5825ae7d98?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550005886-ee52820a8fe3?q=80&w=600&auto=format&fit=crop",
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="galerie" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6"
          >
            {t("gallery.title")}
          </motion.h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-sm group relative cursor-pointer"
              onClick={() => setSelectedPhoto(photo.replace('w=600', 'w=1600'))}
            >
              <img 
                src={photo} 
                alt={`Wedding moment ${index + 1}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-12 flex items-center justify-center cursor-pointer"
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedPhoto}
              alt="Enlarged wedding moment"
              className="max-w-full max-h-full object-contain cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
