import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type SpotifyMedia = {
  id: string;
  type: 'album' | 'track';
  role: 'artista' | 'productor';
};

const spotifyMediaList: SpotifyMedia[] = [
  // Productor
  { id: "1DnQiHRa2XnfwIf8qVl5C1", type: "track", role: "productor" },
  { id: "7EKna9ScIWUSDno6IndZc3", type: "track", role: "productor" },
  { id: "2CWuM4cATLtRBXRugupfOQ", type: "track", role: "productor" },
  
  // Artista
  { id: "1RsbsJcHda84VhGeXDdN4s", type: "album", role: "artista" },
  { id: "2eGtS5jOLBIsD2NsjduL91", type: "album", role: "artista" },
  { id: "6SycY2VGueepXoC704ba62", type: "album", role: "artista" },
  { id: "1SWFRBlh2GZcT5zOGJPQWb", type: "album", role: "artista" },
  { id: "1HdURTrKS75caQ9dxPiURy", type: "album", role: "artista" },
  { id: "6jEZy32sEOQPy6CMkz3luf", type: "album", role: "artista" },
  { id: "0rysdg7KwrJPPltUjACMQY", type: "album", role: "artista" },
  { id: "6FNU2FbW1pQLpIye6CgWTA", type: "album", role: "artista" },
  { id: "7JzOQ5pXmHgnbE7Bs5MSlH", type: "album", role: "artista" },
  { id: "1g7bT8ygVFD3EqVGYtvzZD", type: "album", role: "artista" },
  { id: "46CEAQj1TlLAz7HnKG5u1z", type: "album", role: "artista" },
  { id: "73yzW87QksYt0VvsZ9cZVO", type: "album", role: "artista" },
  { id: "6Xl6xXdOuni6hAUXw4PIfL", type: "album", role: "artista" },
  { id: "3vfoyztw5xGyN6946qWQQe", type: "album", role: "artista" },
  { id: "2JJ02Ub2qslIkmBOIKUkVu", type: "album", role: "artista" },
  { id: "7CIY0UFK1PxlU3h1XWTw8a", type: "album", role: "artista" },
  { id: "2UlHbhBgB2VN8hviUQ8OGJ", type: "album", role: "artista" },
  { id: "1VQzOLyv5rNr21HuYdSnqF", type: "album", role: "artista" },
  { id: "393s5FdMczE5vNbWbBST1h", type: "album", role: "artista" },
  { id: "7Je96mevhyXZMDmmsZ7kx8", type: "album", role: "artista" },
  { id: "1tAXtG5sOMYIFbQ06KSyjZ", type: "album", role: "artista" },
  { id: "2VbyYcTPlJZdSqArbfLNfd", type: "album", role: "artista" },
  { id: "67ll8KP9aKaTR7Nc3vQTrZ", type: "album", role: "artista" },
  { id: "5VLG3dTPPeq873UyWxpcUA", type: "album", role: "artista" },
  { id: "2zTz8uDSrIUKGKA8bzjqlo", type: "album", role: "artista" },
  { id: "6NWtBYBbqHY1mCrw1tQNup", type: "album", role: "artista" },
  { id: "5qwAPYeD00X0GKADN75ohb", type: "album", role: "artista" },
  { id: "6ZDs0qVeCdadZcsEugMAwU", type: "album", role: "artista" },
  { id: "26ycjlXkdtLZEmuzuhraad", type: "album", role: "artista" },
  { id: "14C67N4hGhSb0A8xPcFQOk", type: "album", role: "artista" },
  { id: "5iyHPsD0eppZKEqNvHlUH9", type: "album", role: "artista" },
  { id: "6LF1ouRLUWMStTrOALLwiT", type: "album", role: "artista" }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'todos' | 'artista' | 'productor'>('todos');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredMedia = spotifyMediaList.filter(item => 
    filter === 'todos' ? true : item.role === filter
  );

  const displayedMedia = filteredMedia.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredMedia.length));
  };

  const handleFilterChange = (newFilter: 'todos' | 'artista' | 'productor') => {
    setFilter(newFilter);
    setVisibleCount(8); // Reset count on filter view change
  };

  return (
    <section id="escucha" className="py-24 md:py-32 px-6 bg-neutral-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-medium mb-4 tracking-tight text-black"
            >
              Escucha mi trabajo
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-neutral-500 font-light"
            >
              Cierra los ojos y dale al play.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex space-x-1 bg-white p-1.5 rounded-full border border-neutral-200 shadow-sm"
          >
            {['todos', 'artista', 'productor'].map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  filter === f 
                    ? 'bg-black text-white shadow-md' 
                    : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedMedia.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id + item.role}
                className="w-full bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <iframe
                  style={{ borderRadius: '24px' }}
                  src={`https://open.spotify.com/embed/${item.type}/${item.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify embed ${index}`}
                  className="w-full"
                ></iframe>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredMedia.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <button
              onClick={loadMore}
              className="px-10 py-4 bg-white border border-neutral-200 text-black rounded-full font-medium text-lg hover:bg-neutral-50 transition-all shadow-sm hover:shadow-md"
            >
              Cargar más proyectos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
