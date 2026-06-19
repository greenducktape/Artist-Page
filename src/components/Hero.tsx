import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white">
      {/* Background accents using SVGs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.img 
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 0.4, rotate: 10, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Bitting%20teeth%20Poloteme%20Icon%20Face.svg"
          className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 object-contain filter grayscale invert opacity-30 blur-[2px]"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
          animate={{ opacity: 0.3, rotate: -15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Wav%20Wave.svg"
          className="absolute top-32 right-[-5%] w-64 h-64 md:w-96 md:h-96 object-contain opacity-50 mix-blend-multiply"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
          animate={{ opacity: 0.4, rotate: 5, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Jack%20Cable.svg"
          className="absolute bottom-20 left-[5%] w-32 h-32 md:w-48 md:h-48 object-contain opacity-40 mix-blend-multiply"
          alt=""
        />
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-neutral-50/50 to-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-10 w-full max-w-sm md:max-w-2xl px-6"
        >
          <img 
            src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Poloteme%20Word%20Logo.svg"
            alt="Poloteme"
            className="w-full h-auto drop-shadow-sm" 
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl font-light text-neutral-500 mb-8 md:mb-10 tracking-wide uppercase px-4 z-10"
        >
          Producción y mezcla para el salto que ya estás listo para dar.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-5xl font-display font-medium italic mb-12 md:mb-16 max-w-3xl text-neutral-900 leading-tight tracking-tight px-4 z-10"
        >
          "Que se note que eres tú desde el primer acorde."
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full z-10"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <a href="#quien-soy" className="text-neutral-400 hover:text-black transition-colors" aria-label="Scroll down">
          <ChevronDown size={32} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
}
