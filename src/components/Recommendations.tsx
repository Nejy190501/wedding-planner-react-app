import { motion } from "motion/react";
import { Map } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Recommendations() {
  const { t } = useLanguage();

  const items = [
    { name: t("reco.items.0.name"), desc: t("reco.items.0.desc") },
    { name: t("reco.items.1.name"), desc: t("reco.items.1.desc") },
    { name: t("reco.items.2.name"), desc: t("reco.items.2.desc") }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-stone-800 mb-6"
          >
            {t("reco.title")}
          </motion.h2>
          <div className="w-16 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-500 font-light max-w-2xl mx-auto">
            {t("reco.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <Map className="w-8 h-8 mb-6 text-stone-500" />
              <h3 className="font-serif text-2xl text-stone-800 mb-8">{t("reco.cats.0")}</h3>
            </div>
            <ul className="space-y-6">
              {items.map((item, id) => (
                <li key={id} className="text-center md:text-left border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-medium text-stone-800 text-sm tracking-wide uppercase mb-1">{item.name}</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
