import { motion } from 'motion/react';
import { Music, Sliders, Mic2 } from 'lucide-react';

const services = [
  {
    title: "Producción musical",
    description: "Llevo tu maqueta a un tema terminado. Composición, arreglos, instrumentación y dirección artística.",
    icon: Music,
    cta: "Quiero producir un tema",
    value: "produccion"
  },
  {
    title: "Mezcla y Mastering",
    description: "Hago que tu canción suene profesional y lista para todas las plataformas, con la potencia y claridad que necesita.",
    icon: Sliders,
    cta: "Necesito mezcla/mastering",
    value: "mezcla"
  },
  {
    title: "Voz y composición",
    description: "Pongo voz (topline), escribo melodías o colaboro como artista invitado (featuring) en tu proyecto.",
    icon: Mic2,
    cta: "Quiero colaborar",
    value: "colaboracion"
  }
];

export default function Services() {
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
            El corazón de mis servicios. Todo lo que necesitas para que tu proyecto suene increíble.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-10 rounded-[2.5rem] hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 group flex flex-col h-full border border-neutral-100"
              >
                <div className="w-16 h-16 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center mb-8 text-black group-hover:scale-105 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-black tracking-tight">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-lg mb-10 flex-grow font-light">
                  {service.description}
                </p>
                <a 
                  href={`#contacto?tipo=${service.value}`}
                  className="inline-flex items-center text-sm font-medium text-black group/btn mt-auto w-max uppercase tracking-wider"
                  onClick={() => {
                    const select = document.getElementById('tipo-proyecto') as HTMLSelectElement;
                    if(select) select.value = service.value;
                  }}
                >
                  <span className="border-b border-black/20 group-hover/btn:border-black transition-colors pb-1">
                    {service.cta}
                  </span>
                  <span className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
