import { LegalDocType } from './LegalModal';

export default function Footer({ onOpenLegal }: { onOpenLegal: (type: LegalDocType) => void }) {
  return (
    <footer className="bg-white py-14 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
        <div className="w-32 md:w-40 opacity-90 hover:opacity-100 transition-opacity">
          <img 
            src="https://raw.githubusercontent.com/greenducktape/Polo-Branding/main/Poloteme%20Word%20Logo.svg"
            alt="Poloteme"
            className="w-full h-auto"
          />
        </div>
        
        <div className="flex gap-8 text-sm text-neutral-500 font-medium tracking-wider uppercase">
          <a href="https://www.instagram.com/poloteme" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          <a href="https://open.spotify.com/intl-de/artist/4F5r2orq7hG6sgbNs5CdPT" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Spotify</a>
        </div>

        <div className="text-neutral-400 text-sm font-light text-center md:text-right">
          <p className="text-black font-medium mb-3">daniel@lizardo.co</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 mb-3">
             <button onClick={() => onOpenLegal('privacidad')} className="hover:text-black transition-colors focus:outline-none focus:underline">Política de Privacidad</button>
             <span className="text-neutral-200 hidden sm:inline">|</span>
             <button onClick={() => onOpenLegal('legal')} className="hover:text-black transition-colors focus:outline-none focus:underline">Aviso Legal</button>
             <span className="text-neutral-200 hidden sm:inline">|</span>
             <button onClick={() => onOpenLegal('cookies')} className="hover:text-black transition-colors focus:outline-none focus:underline">Cookies</button>
          </div>
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Poloteme. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
