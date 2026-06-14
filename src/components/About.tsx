import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="quien-soy" className="py-24 md:py-32 px-6 bg-neutral-50 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-16 md:gap-20 items-center"
        >
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 shadow-2xl shadow-neutral-400/20">
              <img 
                src="https://i.postimg.cc/0Nmk70H9/Portrait-Poloteme.png" 
                alt="Retrato de Poloteme" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            {/* Minimalist decorative block */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-3xl -z-10 hidden md:block border border-neutral-100"></div>
          </div>
          
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">Quién Soy</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight text-neutral-900 tracking-tight">
              Llevo haciendo música desde que <span className="text-black relative inline-block">tengo memoria<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neutral-300"></span></span>.
            </p>
            <div className="space-y-6 text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              <p>
                Empecé a los 15 tocando en la calle en Badajoz; de ahí al conservatorio, a producir en Madrid y a publicar más de 80 canciones propias.
              </p>
              <p>
                Por el camino produje «De ellos aprendí» para David Rees —más de 600 millones de reproducciones— y temas que han sonado en media España y Latinoamérica.
              </p>
              <p className="text-neutral-900 font-medium pt-4">
                Hoy hago lo que más me gusta: coger tu canción y dejarla lista para competir con cualquiera.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
