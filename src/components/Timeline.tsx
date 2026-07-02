import { motion } from "motion/react";
import { Users, GlassWater, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import OrnamentDivider from "./OrnamentDivider";
import AnimatedText from "./AnimatedText";

export default function Timeline() {
  const { t } = useLanguage();

  const schedule = [
    {
      time: "11:00",
      title: t("timeline.items.0.title"),
      desc: t("timeline.items.0.desc"),
      icon: <Users className="w-6 h-6" />,
      address: "Naumburger Str. 37, 12057 Berlin"
    },
    {
      time: "17:30",
      title: t("timeline.items.1.title"),
      desc: t("timeline.items.1.desc"),
      icon: <GlassWater className="w-6 h-6" />,
      address: "Markgrafenstraße 67, 10969 Berlin"
    }
  ];

  return (
    <section id="planning" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text={t("timeline.title")}
            el="h2"
            className="font-serif text-4xl md:text-5xl text-stone-800 mb-6"
          />
          <OrnamentDivider style="flourish" />
        </div>

        {/* Horizontal timeline layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white border border-stone-100 rounded-sm p-8 md:p-10 text-center hover:shadow-lg transition-all duration-500 hover:border-gold-200">
                {/* Time badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-900 text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                
                <div className="font-serif text-4xl text-gold-500 mb-2 tracking-wider">{item.time}</div>
                
                <h3 className="font-serif text-2xl text-stone-800 mb-4">{item.title}</h3>
                
                <p className="text-stone-500 font-light text-sm mb-6 leading-relaxed">{item.desc}</p>
                
                <div className="flex items-center justify-center gap-2 text-stone-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{item.address}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting line between cards (desktop) */}
        <div className="hidden md:flex justify-center mt-8">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gold-300"
          />
        </div>
      </div>
    </section>
  );
}
