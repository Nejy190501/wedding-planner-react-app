import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

function FlipDigit({ value }: { value: string; key?: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (value !== prevValue.current) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
        setFlipping(false);
        prevValue.current = value;
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [value]);

  return (
    <div className="relative w-[52px] md:w-[72px] h-[64px] md:h-[88px] overflow-hidden">
      {/* Card background */}
      <div className="absolute inset-0 bg-stone-800/60 backdrop-blur-sm rounded-md border border-stone-700/50 shadow-lg" />
      
      {/* Top half */}
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-md">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-700/20 to-transparent" />
      </div>
      
      {/* Center line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-stone-600/30 z-10" />
      
      {/* Digit */}
      <div className={`absolute inset-0 flex items-center justify-center font-serif text-3xl md:text-5xl text-white tabular-nums transition-transform duration-300 ${flipping ? 'scale-y-0' : 'scale-y-100'}`}>
        {displayValue}
      </div>
    </div>
  );
}

export default function Countdown() {
  const targetDate = new Date("2026-11-21T14:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: t("countdown.days"), value: timeLeft.days },
    { label: t("countdown.hours"), value: timeLeft.hours },
    { label: t("countdown.minutes"), value: timeLeft.minutes },
    { label: t("countdown.seconds"), value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold-700/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-700/10 rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stone-300">{t("countdown.title")}</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1 mb-3">
                {String(item.value).padStart(item.label === t("countdown.days") ? 3 : 2, '0').split('').map((digit, i) => (
                  <FlipDigit key={i} value={digit} />
                ))}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
