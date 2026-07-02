import { motion } from "motion/react";
import { MapPin, Clock, CalendarDays, Map } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import OrnamentDivider from "./OrnamentDivider";
import AnimatedText from "./AnimatedText";

export default function Events() {
  const { t } = useLanguage();

  const events = [
    {
      title: t("events.event1.title"),
      date: t("events.event1.date"),
      time: t("events.event1.time"),
      location: t("events.event1.location"),
      address: t("events.event1.address"),
      mapQuery: "Naumburger+Str.+37+12057+Berlin",
      description: t("events.event1.description")
    },
    {
      title: t("events.event2.title"),
      date: t("events.event2.date"),
      time: t("events.event2.time"),
      location: t("events.event2.location"),
      address: t("events.event2.address"),
      mapQuery: "Markgrafenstraße+67+10969+Berlin",
      description: t("events.event2.description")
    }
  ];

  const downloadICS = (event: typeof events[0], idx: number) => {
    const startDate = idx === 0 ? "20261121T100000Z" : "20261121T163000Z";
    const endDate = idx === 0 ? "20261121T150000Z" : "20261122T030000Z";
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title} - Leonie & Liverance
DESCRIPTION:${event.description}
LOCATION:${event.location}, ${event.address}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}_Leonie_Liverance.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="programme" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            text={t("events.title")}
            el="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6"
          />
          <OrnamentDivider style="rings" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col"
            >
              <div className="p-8 md:p-12 text-center md:text-left flex-1 flex flex-col">
                <h3 className="font-serif text-3xl text-stone-800 mb-6">{event.title}</h3>
                
                <div className="space-y-4 mb-8 text-stone-600">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <CalendarDays className="w-5 h-5 text-stone-400 shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Clock className="w-5 h-5 text-stone-400 shrink-0" />
                    <span className="font-semibold text-stone-800 text-lg">{event.time}</span>
                  </div>
                  <div className="flex items-start justify-center md:justify-start gap-3">
                    <MapPin className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium block">{event.location}</span>
                      <span className="text-stone-400 text-sm">{event.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={() => downloadICS(event, index)}
                    className="text-xs tracking-widest uppercase border border-stone-300 text-stone-600 px-4 py-2 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-colors rounded-sm"
                  >
                    {t("events.addToCalendar")}
                  </button>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${event.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest flex items-center gap-2 uppercase border border-stone-300 text-stone-600 px-4 py-2 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-colors rounded-sm"
                  >
                    <Map className="w-3 h-3" />
                    {t("events.viewOnMap")}
                  </a>
                </div>

                <p className="text-stone-500 font-light leading-relaxed mt-auto">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
