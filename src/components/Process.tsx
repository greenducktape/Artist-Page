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
    <section className="py-24 md:py-40 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-50 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 tracking-tight text-black"
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-500 font-light"
          >
            Sin letra pequeña. Cuatro pasos y a publicar.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line through the middle (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content Half */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center`}
                  >
                    <div className={`w-20 h-20 bg-neutral-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-neutral-100 p-4 transform hover:scale-110 hover:rotate-6 transition-all duration-300 mx-auto ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                      <img src={step.iconUrl} alt={step.title} className="w-full h-full object-contain filter" />
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                      {isEven ? (
                        <>
                          <h3 className="text-3xl lg:text-4xl font-display font-medium text-black tracking-tight">{step.title}</h3>
                          <span className="text-2xl lg:text-3xl font-display text-neutral-300">/ {step.num}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl lg:text-3xl font-display text-neutral-300">{step.num} /</span>
                          <h3 className="text-3xl lg:text-4xl font-display font-medium text-black tracking-tight">{step.title}</h3>
                        </>
                      )}
                    </div>
                    <p className="text-neutral-500 text-lg lg:text-xl font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2 relative">
                    {/* Node on the line */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm ${isEven ? '-left-2' : '-right-2'}`}
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
