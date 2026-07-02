import { motion } from "motion/react";
import { Music, Play, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function MusicPlaylist() {
  const { t } = useLanguage();

  const teaserSongs = [
    { title: "Can't Help Falling in Love", artist: "Kina Grannis", duration: "3:24" },
    { title: "L-O-V-E", artist: "Nat King Cole", duration: "2:33" },
    { title: "Isn't She Lovely", artist: "Stevie Wonder", duration: "3:20" },
    { title: "You Are The Best Thing", artist: "Ray LaMontagne", duration: "3:52" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-stone-400 font-sans text-xs tracking-[0.4em] uppercase mb-4 block">{t("music.tag")}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">{t("music.title")}</h2>
              <div className="w-16 h-px bg-stone-200 mb-8"></div>
              <p className="text-stone-600 font-light leading-relaxed text-lg mb-8">
                {t("music.desc")}
              </p>
              
              <div className="bg-stone-50 p-6 md:p-8 rounded-sm border border-stone-100 italic text-stone-500 font-serif">
                {t("music.quote")}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-stone-900 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="p-6 bg-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-700 rounded-sm flex items-center justify-center">
                    <Music className="w-5 h-5 text-stone-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Wedding Vibes</h4>
                    <p className="text-stone-400 text-[10px] uppercase tracking-widest">Léonie & Liverance</p>
                  </div>
                </div>
                <Play className="w-5 h-5 text-stone-300 fill-stone-300" />
              </div>

              <div className="p-6 space-y-1">
                {teaserSongs.map((song, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-stone-800 last:border-0 group cursor-pointer hover:bg-stone-800/50 px-2 rounded-sm transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-stone-600 font-mono text-xs">{idx + 1}</span>
                      <div>
                        <p className="text-stone-200 text-sm group-hover:text-white transition-colors">{song.title}</p>
                        <p className="text-stone-500 text-xs">{song.artist}</p>
                      </div>
                    </div>
                    <span className="text-stone-600 font-mono text-xs">{song.duration}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noreferrer"
                className="block text-center py-4 bg-stone-800 text-stone-400 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors border-t border-stone-800"
              >
                {t("music.openSpotify")} <ExternalLink className="inline-block w-3 h-3 ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
