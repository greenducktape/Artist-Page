import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      href="https://wa.me/34600000000" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-2xl z-50 hover:scale-110 active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-neutral-100 shadow-lg">
        ¡Hablemos directo!
      </span>
    </motion.a>
  );
}
