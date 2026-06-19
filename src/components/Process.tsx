import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Brief",
    description: "Me escribes con referencias y lo que buscas. Cuanto más claro el target, mejor.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Thinking%20Poloteme%20Icon%20Face.svg"
  },
  {
    num: "02",
    title: "Propuesta",
    description: "Presupuesto cerrado, alcance y fecha de entrega. Lo que acordamos es lo que pagas.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Star%20Icon.svg"
  },
  {
    num: "03",
    title: "Producción",
    description: "Trabajo el tema con revisiones pautadas. Notas claras, vueltas rápidas.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Speaker%201%20icon.svg"
  },
  {
    num: "04",
    title: "Entrega",
    description: "Track final + stems si los necesitas, listo para distribuir.",
    iconUrl: "https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Wav%20Wave%202.svg"
  }
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-50 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-tight text-black"
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-500 font-light"
          >
            Sin letra pequeña. Cuatro pasos y a publicar.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-16 relative">
          {/* Subtle grid lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-neutral-100 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full bg-neutral-100 hidden md:block"></div>
          
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur p-8 md:p-12 rounded-[2.5rem] relative group border border-transparent hover:border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/30 transition-all duration-500"
              >
                <div className="absolute -top-6 -left-2 font-display text-7xl font-bold text-neutral-50 select-none group-hover:text-neutral-100 transition-colors duration-500 -z-10">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-neutral-100 p-3 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-300">
                    <img src={step.iconUrl} alt={step.title} className="w-full h-full object-contain filter" />
                  </div>
                  <h3 className="text-3xl font-display font-medium mb-4 text-black tracking-tight">{step.title}</h3>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
