export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-medium text-2xl tracking-tighter text-black">
          Poloteme
        </div>
        
        <div className="flex gap-6 text-sm text-neutral-500 font-medium tracking-wide uppercase">
          <a href="https://www.instagram.com/poloteme" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          <a href="https://open.spotify.com/intl-de/artist/4F5r2orq7hG6sgbNs5CdPT" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Spotify</a>
        </div>

        <div className="text-neutral-400 text-sm font-light text-center md:text-right">
          <p>hola@poloteme.com</p>
          <p className="mt-1">© {new Date().getFullYear()} Poloteme. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
