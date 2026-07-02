import { motion } from "motion/react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Check, CalendarClock, Phone, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "../contexts/LanguageContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await addDoc(collection(db, "rsvp"), {
        name: formData.get("name"),
        presence: formData.get("presence"),
        diet: formData.get("diet") || "",
        language,
        createdAt: serverTimestamp()
      });
      
      setSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#c9a96e', '#e2cf9e', '#fafaf9', '#ffffff'],
        disableForReducedMotion: true
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Eine Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const festleiterSection = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 max-w-2xl mx-auto"
    >
      <div className="border border-stone-600 rounded-sm p-8 bg-stone-700/30">
        <h4 className="font-serif text-xl text-gold-300 mb-2 text-center">{t("rsvp.contactTitle")}</h4>
        <p className="text-stone-400 text-sm text-center mb-6">{t("rsvp.contactSubtitle")}</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-white font-medium text-lg mb-3">Marcus Doberitz</p>
            <div className="flex flex-col items-center gap-2">
              <a 
                href="tel:+4917624746200" 
                className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +49 176 24746200
              </a>
              <a 
                href="https://wa.me/4917624746200" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white font-medium text-lg mb-3">Nicolas Boulnois</p>
            <div className="flex flex-col items-center gap-2">
              <a 
                href="tel:+491602439154" 
                className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +49 160 2439154
              </a>
              <a 
                href="https://wa.me/491602439154" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-stone-800 text-stone-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
        >
          {t("rsvp.title")}
        </motion.h2>
        <div className="w-24 h-px bg-stone-500 mx-auto mb-8"></div>
        
        {/* Deadline notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <CalendarClock className="w-5 h-5 text-stone-400 shrink-0" />
          <p className="text-stone-300 font-light text-lg italic">
            {t("rsvp.deadline")}
          </p>
        </motion.div>

        {submitted ? (
          <>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-stone-700/50 p-12 rounded-sm border border-stone-600 max-w-lg mx-auto flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-stone-800" />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-white">{t("rsvp.successTitle")}</h3>
              <p className="text-stone-300 font-light text-lg">
                {t("rsvp.successDesc")}
              </p>
            </motion.div>
            {festleiterSection}
          </>
        ) : (
          <>
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-8 text-left"
            >
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm tracking-widest uppercase text-stone-300">{t("rsvp.form.name")}</label>
                <input 
                  type="text" 
                  name="name"
                  id="fullName" 
                  required
                  placeholder={t("rsvp.form.namePlaceholder")}
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                  aria-label={t("rsvp.form.name")}
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm tracking-widest uppercase text-stone-300">{t("rsvp.form.presenceTitle")}</label>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="radio" name="presence" value="yes" required className="mt-1 w-5 h-5 accent-gold-400 shrink-0" />
                    <span className="text-stone-200 group-hover:text-white transition-colors">{t("rsvp.form.yes")}</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="radio" name="presence" value="no" className="mt-1 w-5 h-5 accent-gold-400 shrink-0" />
                    <span className="text-stone-200 group-hover:text-white transition-colors">{t("rsvp.form.no")}</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                  <label htmlFor="diet" className="block text-sm tracking-widest uppercase text-stone-300">{t("rsvp.form.dietTitle")}</label>
                  <textarea 
                  name="diet"
                  id="diet" 
                  rows={3}
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  placeholder={t("rsvp.form.dietPlaceholder")}
                  aria-label={t("rsvp.form.dietTitle")}
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block bg-gold-500 text-white font-medium tracking-widest uppercase px-12 py-4 rounded-sm hover:bg-gold-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? t("rsvp.form.btnSubmitting") : t("rsvp.form.btnSubmit")}
                </button>
              </div>
            </motion.form>
            {festleiterSection}
          </>
        )}
      </div>
    </section>
  );
}
