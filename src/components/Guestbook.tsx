import { motion } from "motion/react";
import { MessageSquareHeart } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Guestbook() {
  const { t } = useLanguage();
  
  const initialMessages = [
    {
      name: "Sarah & Thomas",
      text: t("guestbook.initialMsg1") || "Tellement hâte de célébrer cette journée extraordinaire avec vous deux ! 💕",
      date: t("guestbook.dateYesterday") || "Hier"
    },
    {
      name: "Tante Marie",
      text: t("guestbook.initialMsg2") || "Mes félicitations les plus sincères. Que votre amour grandisse chaque jour davantage.",
      date: t("guestbook.dateDaysAgo") || "Il y a 3 jours"
    },
    {
      name: "Julien (Le Témoin)",
      text: t("guestbook.initialMsg3") || "Le discours est en cours d'écriture... préparez vos mouchoirs !",
      date: t("guestbook.dateLastWeek") || "La semaine dernière"
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !newName.trim()) return;

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setMessages([
        {
          name: newName,
          text: newMessage,
          date: t("guestbook.dateJustNow") || "A l'instant"
        },
        ...messages
      ]);
      setNewMessage("");
      setNewName("");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="livredor" className="py-24 md:py-32 bg-stone-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Column: Intro & Form */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MessageSquareHeart className="w-6 h-6 text-stone-500" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">{t("guestbook.title")}</h2>
            <p className="text-stone-500 font-light leading-relaxed">
              {t("guestbook.subtitle")}
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-sm shadow-sm border border-stone-200"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="gb-name" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">{t("guestbook.formName")}</label>
                <input 
                  type="text" 
                  id="gb-name" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-800 focus:outline-none focus:border-stone-400 transition-colors"
                  placeholder="Ex: Clara & Paul"
                />
              </div>
              <div>
                <label htmlFor="gb-msg" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">{t("guestbook.formMessage")}</label>
                <textarea 
                  id="gb-msg" 
                  rows={4}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-800 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  placeholder="..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-stone-800 text-stone-100 font-medium tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? t("guestbook.btnSigning") : t("guestbook.btnSign")}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Right Column: Messages Grid */}
        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 pb-4 styled-scrollbar">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-stone-100 relative"
            >
              <div className="absolute top-8 left-0 w-1 h-12 bg-stone-300 rounded-r-full"></div>
              <p className="font-serif italic text-lg text-stone-700 mb-4 ml-4">
                "{msg.text}"
              </p>
              <div className="ml-4 flex justify-between items-end border-t border-stone-100 pt-4">
                <span className="font-semibold text-stone-800 font-sans tracking-wide">{msg.name}</span>
                <span className="text-xs text-stone-400 tracking-widest uppercase">{msg.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scrollbar styling (hide default, use custom subtle scrollbar) */}
      <style>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d6d3d1; /* stone-300 */
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
}
