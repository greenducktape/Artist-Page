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
              Soy Poloteme y llevo <span className="text-black relative inline-block">media vida<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neutral-300"></span></span> haciendo música.
            </p>
            <div className="space-y-6 text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              <p>
                Empecé tocando en la calle con 15 años y desde entonces no he parado. 
                De origen eslovaco-dominicano, criado en Badajoz, me formé en el conservatorio (saxofón) y soy multiinstrumentista autodidacta.
              </p>
              <p>
                Tengo más de <strong className="font-medium text-neutral-900">80 canciones publicadas</strong> y he producido para otros artistas que han sonado en medio mundo.
              </p>
              <p className="text-neutral-900 font-medium pt-4">
                Hoy ayudo a otros artistas a sacar lo mejor de sus canciones.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
