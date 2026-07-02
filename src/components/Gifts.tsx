import { motion } from "motion/react";
import { Plane, Home, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Gifts() {
  const { t } = useLanguage();

  const funds = [
    {
      title: t("gifts.cards.0.title"),
      description: t("gifts.cards.0.desc"),
      icon: <Plane className="w-8 h-8 text-stone-400 mb-6" />
    },
    {
      title: t("gifts.cards.1.title"),
      description: t("gifts.cards.1.desc"),
      icon: <Home className="w-8 h-8 text-stone-400 mb-6" />
    }
  ];

  return (
    <section id="cadeaux" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Heart className="w-8 h-8 text-stone-400" />
              </div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
              {t("gifts.title")}
            </h2>
            <div className="w-16 h-px bg-stone-300 mx-auto mb-8"></div>
            
            <p className="text-stone-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto text-lg text-center">
              {t("gifts.subtitle")}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {funds.map((fund, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-10 text-center rounded-sm shadow-sm border border-stone-100 group hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center transition-transform duration-500 group-hover:-translate-y-2">
                {fund.icon}
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">{fund.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">{fund.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button 
            className="inline-block bg-stone-800 text-stone-100 font-medium tracking-widest uppercase px-10 py-4 hover:bg-stone-700 transition-colors duration-300 text-sm shadow-md"
          >
            {t("gifts.btn")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
