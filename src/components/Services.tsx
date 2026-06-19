import { motion } from 'motion/react';

const services = [
  {
    title: "Producción",
    description: "Desarrollo del tema desde la idea o la maqueta: arreglos, programación, instrumentación real y dirección artística. Cojo lo que tienes y lo llevo a algo con identidad y estructura de single.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Guitar%20icon.svg",
    cta: "Quiero producir un tema",
    value: "produccion"
  },
  {
    title: "Mezcla y mastering",
    description: "Mezcla con criterio: balance, profundidad y pegada, traducción en todos los sistemas. Master competitivo en loudness y tono, entregado para DSP. Si quieres referencias o un loudness target concreto, lo respeto.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Compressor%20icon.svg",
    cta: "Necesito mezcla/mastering",
    value: "mezcla"
  },
  {
    title: "Voz y composición",
    description: "Topline, coros, armonías y featuring. Voz grabada y editada limpia, o escritura desde cero si el tema lo pide.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Smile%20Poloteme%20Icon%20Face.svg",
    cta: "Quiero colaborar",
    value: "colaboracion"
  }
];

export default function Services({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="que-hago" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-tight text-black"
          >
            Qué Hago
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto font-light"
          >
            Tres formas de trabajar contigo. Elige la que necesites.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-10 rounded-[2.5rem] hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 group flex flex-col h-full border border-neutral-100 relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300 shadow-sm p-3 relative z-10 text-black">
                  <img src={service.iconUrl} alt={service.title} className="w-full h-full object-contain filter transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-black tracking-tight">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-lg mb-10 flex-grow font-light">
                  {service.description}
                </p>
                <button 
                  onClick={onOpenForm}
                  className="inline-flex items-center text-sm font-medium text-black group/btn mt-auto w-max uppercase tracking-wider text-left relative z-10"
                >
                  <span className="border-b border-black/20 group-hover/btn:border-black transition-colors pb-1">
                    {service.cta}
                  </span>
                  <span className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
