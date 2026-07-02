import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function GoldenParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 10,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const { t } = useLanguage();

  const calculateTimeLeft = () => {
    const difference = +new Date("2026-11-21T00:00:00") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/images/couple-story.jpg"
          alt="Wedding Background"
          className="w-full h-full object-cover grayscale"
        />
        {/* Gradient overlay with warm gold tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-stone-900/60"></div>
      </motion.div>

      {/* Golden Particles */}
      <GoldenParticles />

      <div className="relative z-10 text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-gold-200"
        >
          {t("hero.gettingMarried")}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-4"
        >
          Leonie <span className="text-gradient-gold text-3xl md:text-5xl italic px-4">&</span> Liverance
        </motion.h1>

        {/* Gold ornament under names */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-2xl md:text-4xl italic mb-2 text-gold-100"
        >
          {t("hero.date")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-stone-300 mb-16"
        >
          {t("hero.location")}
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center gap-4 md:gap-12"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl tabular-nums">{String(value).padStart(2, '0')}</span>
              <span className="text-xs tracking-[0.2em] uppercase text-gold-300 mt-2">
                {t(`countdown.${unit}`)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#planning"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gold-300/70 hover:text-gold-200 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </motion.a>
    </section>
  );
}
