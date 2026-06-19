import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const faceImages = [
  "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Thinking%20Poloteme%20Icon%20Face.svg",
  "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Smile%20Poloteme%20Icon%20Face.svg",
  "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Eyes%20closed%20Poloteme%20Icon%20Face.svg",
];

export default function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    let duration = 2000;
    if (currentFace === 0) duration = 2000; // Thinking
    else if (currentFace === 1) duration = 1500; // Smiling
    else if (currentFace === 2) duration = 150; // Eyes closed (blink)

    const timeout = setTimeout(() => {
      setCurrentFace((prev) => (prev + 1) % faceImages.length);
    }, duration);
    
    return () => clearTimeout(timeout);
  }, [currentFace]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 overflow-hidden bg-white">
      {/* Background accents using SVGs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.2 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Wav%20Wave.svg"
          className="absolute top-20 right-[5%] md:right-[15%] w-32 h-32 md:w-48 md:h-48 object-contain"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.7, y: [0, 20, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.4 }, y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 } }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Jack%20Cable.svg"
          className="absolute bottom-32 left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 object-contain"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: [0, -10, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.6 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 } }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Guitar%20icon.svg"
          className="absolute top-[15%] left-[5%] md:left-[20%] w-24 h-24 md:w-40 md:h-40 object-contain -rotate-12"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: [0, 15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.8 }, y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.5 } }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Snare%20Icon.svg"
          className="absolute bottom-[25%] right-[5%] md:right-[20%] w-20 h-20 md:w-28 md:h-28 object-contain rotate-12"
          alt=""
        />
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: [1, 1.05, 1] }}
          transition={{ opacity: { duration: 1, delay: 1 }, scale: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Compressor%20icon.svg"
          className="absolute top-[40%] right-[2%] md:right-[8%] w-16 h-16 md:w-24 md:h-24 object-contain"
          alt=""
        />
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-neutral-50/10 to-white/50 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pt-16">
        
        {/* Left: Stop Motion Faces */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
            {faceImages.map((src, index) => (
              <img 
                key={src}
                src={src}
                alt="Poloteme"
                className={`absolute inset-0 w-full h-full object-contain filter drop-shadow-xl transition-opacity duration-0 ${index === currentFace ? 'opacity-100' : 'opacity-0'}`} 
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Text and Logo */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 w-full max-w-[16rem] sm:max-w-xs md:max-w-md lg:max-w-lg"
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
            className="text-2xl sm:text-3xl md:text-5xl font-display font-medium italic mb-6 max-w-2xl text-neutral-900 leading-tight tracking-tight"
          >
            "Que se note que eres tú desde el primer acorde."
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl font-light text-neutral-500 mb-10 tracking-wide uppercase max-w-lg"
          >
            Producción y mezcla para el salto que ya estás listo para dar.
          </motion.p>
          

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex w-full justify-center md:justify-start"
          >
            <a 
              href="#escucha" 
              className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300 text-center shadow-2xl shadow-black/10 tracking-wide"
            >
              Escucha mi trabajo
            </a>
          </motion.div>
        </div>
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
