import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const inspirations = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594552072238-18e3881cae48?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588147575305-6ec0d9daaa5b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612450379410-6c9ab45771ab?q=80&w=400&auto=format&fit=crop"
];

export default function DressCode() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">{t("dressCode.title")}</h2>
              <div className="w-16 h-px bg-stone-300 mb-6"></div>
              <h3 className="text-xl tracking-widest uppercase text-stone-500 mb-6">{t("dressCode.subtitle")}</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                {t("dressCode.p1")}
              </p>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                <strong>{t("dressCode.p2")}</strong> {t("dressCode.p3")}
              </p>
              <p className="font-serif italic text-lg text-stone-500">
                {t("dressCode.p4")}
              </p>
            </motion.div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {inspirations.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative aspect-[3/4] rounded-sm overflow-hidden ${idx % 2 === 1 ? 'mt-8' : ''}`}
              >
                <img 
                  src={img} 
                  alt="Dress code inspiration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
