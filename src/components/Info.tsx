import { motion } from "motion/react";
import { TrainFront, FileHeart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Info() {
  const { t } = useLanguage();

  const infos = [
    {
      icon: <TrainFront className="w-8 h-8 mb-6 text-stone-400" />,
      title: t("info.items.0.title"),
      description: t("info.items.0.desc")
    },
    {
      icon: <FileHeart className="w-8 h-8 mb-6 text-stone-400" />,
      title: t("info.items.1.title"),
      description: t("info.items.1.desc")
    }
  ];

  return (
    <section id="infos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6"
          >
            {t("info.title")}
          </motion.h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t("info.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {infos.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 bg-stone-50 rounded-sm border border-stone-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                {info.icon}
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">{info.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
