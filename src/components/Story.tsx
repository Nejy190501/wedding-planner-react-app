import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import OrnamentDivider from "./OrnamentDivider";
import AnimatedText from "./AnimatedText";

export default function Story() {
  const { t } = useLanguage();

  return (
    <section id="histoire" className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            text={t("story.title")}
            el="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6"
          />
          <OrnamentDivider style="heart" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src="/images/hero-bg.jpg" 
                alt={t("story.chapter1.title")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left px-4"
          >
            <p className="text-stone-600 leading-relaxed font-light whitespace-pre-line">
              {t("story.chapter1.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
