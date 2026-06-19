import { motion } from 'motion/react';
import { Send, Instagram } from 'lucide-react';

export default function Contact({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="contacto" className="py-24 md:py-40 px-6 bg-neutral-50 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-10 leading-tight tracking-tight text-black">
            ¿Tienes un proyecto?
          </h2>
          
          <div className="text-xl md:text-2xl text-neutral-500 space-y-6 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            <p>
              Una maqueta, una sesión a medias o un tema que no te termina de cuadrar en la mezcla. Pásamelo y vemos.
            </p>
          </div>

          <button 
            onClick={onOpenForm}
            className="px-12 py-5 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-all shadow-2xl shadow-neutral-400/20 hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest mb-16"
          >
            Empezar tu proyecto
          </button>

          <div className="flex flex-col items-center gap-4 mb-12">
            <p className="text-neutral-500 font-medium tracking-wider uppercase text-sm">Háblalo con mi mánager (Daniel)</p>
            <a href="mailto:daniel@lizardo.co" className="text-xl md:text-2xl font-light text-black hover:text-neutral-600 border-b border-black/20 hover:border-black transition-all pb-1">
              daniel@lizardo.co
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/poloteme" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-black hover:bg-neutral-100 hover:scale-110 transition-all duration-300 shadow-sm text-sm" aria-label="Instagram de Poloteme">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://open.spotify.com/intl-de/artist/4F5r2orq7hG6sgbNs5CdPT" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-black hover:bg-neutral-100 hover:scale-110 transition-all duration-300 shadow-sm text-sm" aria-label="Spotify de Poloteme">
              <span className="sr-only">Spotify</span>
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                 <circle cx="12" cy="12" r="10"></circle>
                 <path d="M8 11.5c2.5-1 5.5-1 8 0"></path>
                 <path d="M8.5 14.5c2-1 4-1 6 0"></path>
                 <path d="M7.5 8.5c3-1.5 7-1.5 10 0"></path>
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
