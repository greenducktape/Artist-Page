import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white">
      {/* Subtle light background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-neutral-50 to-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight mb-4 text-black"
        >
          Poloteme
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl font-light text-neutral-500 mb-8 md:mb-10 tracking-wide uppercase px-4"
        >
          Cantante <span className="text-neutral-300 mx-2 md:mx-3">·</span> Productor <span className="text-neutral-300 mx-2 md:mx-3">·</span> Mezcla & Mastering
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-5xl font-display font-medium italic mb-12 md:mb-16 max-w-3xl text-neutral-900 leading-tight tracking-tight px-4"
        >
          "Tu canción, sonando como en la radio."
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <a 
            href="#escucha" 
            className="w-full sm:w-auto px-12 py-5 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300 text-center shadow-2xl shadow-black/10 tracking-wide"
          >
            Escucha mi trabajo
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#quien-soy" className="text-neutral-400 hover:text-black transition-colors" aria-label="Scroll down">
          <ChevronDown size={32} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
}
