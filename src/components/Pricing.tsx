import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Mezcla y Mastering",
    description: "Para producciones ya cerradas que necesitan el acabado.",
    price: "350 €",
    features: [
      "Edición, fase y limpieza de stems",
      "Balance, dinámica, EQ y efectos",
      "Master optimizado para DSP",
      "Entrega en WAV (24-bit) y MP3"
    ],
    revisions: "2 rondas de revisión"
  },
  {
    name: "Producción completa",
    description: "De la maqueta a la masterizada.",
    price: "950 €",
    features: [
      "Instrumental y arreglos",
      "Trabajo de estructura",
      "Mezcla y mastering incluidos"
    ],
    revisions: "3 en prod · 2 en mezcla",
    highlight: true
  },
  {
    name: "Mastering",
    description: "Para mezclas que necesitan loudness y cohesión tonal.",
    price: "60 €",
    features: [
      "Compresión, EQ tonal",
      "Limitación",
      "WAV optimizado para streaming"
    ],
    revisions: "1 ronda de revisión"
  }
];

export default function Pricing({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="tarifas" className="py-24 md:py-40 px-6 bg-neutral-50 relative border-t border-neutral-200 overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-full h-full md:w-3/4 md:h-3/4 bg-white rounded-bl-full opacity-50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 text-black tracking-tight"
          >
            Precios
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-light text-neutral-500 mb-2">Todo en remoto.</p>
            <p className="text-neutral-400 font-light text-lg">
              Me pasas los stems de la sesión y te devuelvo un track para romperla. Sin pisar estudio.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col p-8 md:p-10 rounded-[2.5rem] relative group ${
                pkg.highlight 
                  ? 'bg-neutral-900 text-white shadow-2xl shadow-neutral-900/20 lg:scale-105 z-10' 
                  : 'bg-white text-black shadow-lg shadow-neutral-200/50 hover:shadow-xl hover:-translate-y-1'
              } transition-all duration-500`}
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 tracking-tight">{pkg.name}</h3>
                <p className={`text-base font-light ${pkg.highlight ? 'text-neutral-400' : 'text-neutral-500'} min-h-[3rem]`}>
                  {pkg.description}
                </p>
              </div>
              
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl md:text-6xl font-display font-medium tracking-tighter">{pkg.price}</span>
                <span className={`text-base ml-2 font-light ${pkg.highlight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  / canción
                </span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.highlight ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                      <Check size={12} strokeWidth={3} className={pkg.highlight ? 'text-white' : 'text-black'} />
                    </div>
                    <span className={`text-base font-light leading-snug ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`mt-auto pt-6 border-t ${pkg.highlight ? 'border-neutral-800' : 'border-neutral-100'} flex justify-between items-center`}>
                <span className={`text-sm font-medium uppercase tracking-wider ${pkg.highlight ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  Revisiones
                </span>
                <p className={`text-sm font-medium ${pkg.highlight ? 'text-white' : 'text-black'}`}>
                  {pkg.revisions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="mt-20 md:mt-28 text-center"
        >
          <button 
            onClick={onOpenForm}
            className="group relative px-10 py-5 bg-black text-white rounded-full font-medium text-lg overflow-hidden transition-all shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              Empezar tu proyecto
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
