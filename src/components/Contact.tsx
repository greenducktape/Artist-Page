import { motion } from 'motion/react';
import { Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-40 px-6 bg-neutral-50 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-10 leading-tight tracking-tight text-black">
            ¿Tienes un proyecto<br/>en mente?
          </h2>
          
          <div className="text-xl md:text-2xl text-neutral-500 space-y-8 font-light mb-16 leading-relaxed">
            <p>
              Da igual si tienes una maqueta a medias, una idea suelta o una canción que necesita el último empujón para sonar profesional. 
            </p>
            <p>
              Cuéntamelo y vemos cómo darle forma juntos.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="mailto:hola@poloteme.com" className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-black hover:bg-neutral-100 hover:scale-110 transition-all duration-300 shadow-sm text-sm">
              <span className="sr-only">Email</span>
              <Send size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/poloteme" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-black hover:bg-neutral-100 hover:scale-110 transition-all duration-300 shadow-sm text-sm">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://open.spotify.com/intl-de/artist/4F5r2orq7hG6sgbNs5CdPT" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-black hover:bg-neutral-100 hover:scale-110 transition-all duration-300 shadow-sm text-sm">
              <span className="sr-only">Spotify</span>
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                 <circle cx="12" cy="12" r="10"></circle>
                 <path d="M8 11.5c2.5-1 5.5-1 8 0"></path>
                 <path d="M8.5 14.5c2-1 4-1 6 0"></path>
                 <path d="M7.5 8.5c3-1.5 7-1.5 10 0"></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-neutral-500 uppercase tracking-wider">Nombre</label>
              <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                required
                className="w-full bg-white border-b border-neutral-200 px-0 py-3 text-black text-lg focus:outline-none focus:border-black transition-colors rounded-none placeholder-neutral-300"
                placeholder="Tu nombre artístico o real"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-500 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full bg-white border-b border-neutral-200 px-0 py-3 text-black text-lg focus:outline-none focus:border-black transition-colors rounded-none placeholder-neutral-300"
                placeholder="hola@tucorreo.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tipo-proyecto" className="block text-sm font-medium text-neutral-500 uppercase tracking-wider">Tipo de proyecto</label>
              <select 
                id="tipo-proyecto" 
                name="tipo_proyecto"
                className="w-full bg-white border-b border-neutral-200 px-0 py-3 text-black text-lg focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
              >
                <option value="produccion">Producción Musical</option>
                <option value="mezcla">Mezcla / Mastering</option>
                <option value="colaboracion">Colaboración Vocal / Topline</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-500 uppercase tracking-wider">Mensaje</label>
              <textarea 
                name="mensaje" 
                id="mensaje" 
                rows={4}
                required
                className="w-full bg-white border-b border-neutral-200 px-0 py-3 text-black text-lg focus:outline-none focus:border-black transition-colors resize-none rounded-none placeholder-neutral-300"
                placeholder="Cuéntame sobre tu proyecto, estilo, referencias..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white font-medium text-lg py-5 rounded-full hover:bg-neutral-800 transition-all flex justify-center items-center gap-3 group mt-4 shadow-lg shadow-black/10"
            >
              Enviar mensaje
              <Send size={20} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-xs text-center text-neutral-400 font-light mt-4">Al enviar, serás redirigido para confirmar.</p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
