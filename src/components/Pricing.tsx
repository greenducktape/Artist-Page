import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Mezcla y Mastering",
    description: "Para temas ya grabados y producidos que necesitan el pulido final.",
    price: "350 €",
    features: [
      "Limpieza y alineación de las pistas",
      "Dinámica, ecualización y efectos",
      "Mastering optimizado para Spotify, Apple Music y demás",
      "Entrega en WAV (24-bit/48kHz) y MP3"
    ],
    revisions: "Incluye 2 rondas de revisión"
  },
  {
    name: "Producción completa",
    description: "De la maqueta o la idea acústica a la canción final.",
    price: "950 €",
    features: [
      "Instrumental y arreglos (beats, sintes, bajos, lo que pida el tema)",
      "Asesoría en la estructura",
      "Mezcla y mastering incluidos"
    ],
    revisions: "Incluye 3 rondas en producción y 2 en mezcla",
    highlight: true
  },
  {
    name: "Mastering individual",
    description: "Para mezclas que ya suenan bien y solo les falta volumen y presencia comercial.",
    price: "60 €",
    features: [
      "Compresión, ecualización tonal y limitación",
      "Entrega en WAV optimizado para streaming"
    ],
    revisions: "Incluye 1 ronda de revisión"
  }
];

export default function Pricing({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="tarifas" className="py-24 md:py-32 px-6 bg-white relative border-y border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 text-black"
          >
            Precios
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl font-display italic text-neutral-800">
              Producción, mezcla y mastering en remoto
            </p>
            <p className="text-neutral-500 font-light leading-relaxed">
              Tú grabas en tu espacio y a tu ritmo. Me mandas los stems por correo y yo te devuelvo un track listo para distribuir. Todo a distancia, sin que tengas que pisar un estudio.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col p-10 rounded-[2rem] border ${
                pkg.highlight 
                  ? 'border-black bg-black text-white shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'border-neutral-200 bg-white text-black hover:border-neutral-300'
              } transition-all duration-300`}
            >
              <h3 className="text-2xl font-display font-medium mb-3">{pkg.name}</h3>
              <p className={`text-sm mb-8 flex-grow font-light ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-500'}`}>
                {pkg.description}
              </p>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-medium">{pkg.price}</span>
                <span className={`text-sm ml-2 ${pkg.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  / canción
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={20} strokeWidth={1.5} className={`shrink-0 mt-0.5 ${pkg.highlight ? 'text-white' : 'text-black'}`} />
                    <span className={`text-sm font-light ${pkg.highlight ? 'text-white' : 'text-neutral-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`mt-auto pt-6 border-t ${pkg.highlight ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <p className={`text-sm font-medium ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {pkg.revisions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button 
            onClick={onOpenForm}
            className="px-12 py-5 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest"
          >
            Empezar tu proyecto
          </button>
          <p className="mt-6 text-sm text-neutral-400 font-light">
            Rondas extra: 40–50 € por ronda adicional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
