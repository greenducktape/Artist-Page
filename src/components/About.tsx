import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="quien-soy" className="py-24 md:py-32 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Decorative SVGs */}
      <motion.img 
        initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
        whileInView={{ opacity: 0.1, rotate: -5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Cat%20Face.svg"
        className="absolute top-10 right-[10%] w-40 h-40 md:w-64 md:h-64 object-contain filter grayscale pointer-events-none"
        alt=""
      />
      <motion.img 
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        whileInView={{ opacity: 0.1, rotate: 15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Eyes%20closed%20Poloteme%20Icon%20Face.svg"
        className="absolute bottom-10 left-[5%] w-48 h-48 md:w-72 md:h-72 object-contain filter grayscale pointer-events-none"
        alt=""
      />

      <div className="max-w-5xl mx-auto position-relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-16 md:gap-20 items-center"
        >
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 shadow-2xl shadow-neutral-400/20 relative z-10">
              <img 
                src="https://i.postimg.cc/0Nmk70H9/Portrait-Poloteme.png" 
                alt="Retrato de Poloteme" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            {/* Playful accessory floating behind portrait */}
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.4 }}
              src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Moon%20Icon.svg"
              className="absolute -top-12 -right-10 w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl -z-0 rotate-12"
              alt=""
            />
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
                Productor y mezclador con más de 80 referencias publicadas y trabajo de producción para artistas de la escena pop española y latina. Produje y mezclé «De ellos aprendí» (David Rees), +600M de reproducciones.
              </p>
              <p>
                Vengo del conservatorio y del directo, así que entiendo la canción antes de tocar un fader. Trabajo igual de cómodo escribiendo una topline que cuadrando una mezcla a las 3 de la mañana.
              </p>
              <p className="text-neutral-900 font-medium pt-4">
                Si ya tienes claro lo que buscas, hablamos en el mismo idioma.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
