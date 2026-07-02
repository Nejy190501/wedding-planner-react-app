import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BridalParty() {
  const { t } = useLanguage();

  const party = [
    {
      role: t("party.items.0.role"),
      name: t("party.items.0.name"),
      description: t("party.items.0.desc"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: t("party.items.1.role"),
      name: t("party.items.1.name"),
      description: t("party.items.1.desc"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: t("party.items.2.role"),
      name: t("party.items.2.name"),
      description: t("party.items.2.desc"),
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    },
    {
      role: t("party.items.3.role"),
      name: t("party.items.3.name"),
      description: t("party.items.3.desc"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="cortege" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6"
          >
            {t("party.title")}
          </motion.h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t("party.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {party.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-1">{person.name}</h3>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">{person.role}</p>
              <p className="text-stone-500 font-light text-sm">{person.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
