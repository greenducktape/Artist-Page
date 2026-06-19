import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export type LegalDocType = 'privacidad' | 'legal' | 'cookies' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

const legalContent: Record<string, { title: string; body: React.ReactNode }> = {
  privacidad: {
    title: 'Política de Privacidad',
    body: (
      <div className="space-y-6 text-neutral-600 font-light text-sm md:text-base leading-relaxed">
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios sobre el tratamiento de sus datos personales en esta página web.
        </p>
        
        <h3 className="text-black font-medium text-lg mt-8 mb-4">1. Identidad del Titular y Responsable del Tratamiento</h3>
        <p>El responsable del tratamiento de los datos recabados a través de este sitio web es Daniel Izardo (en adelante, Poloteme), correo electrónico de contacto: daniel@lizardo.co.</p>
        
        <h3 className="text-black font-medium text-lg mt-8 mb-4">2. Finalidad del Tratamiento</h3>
        <p>
          Los datos personales proporcionados a través del formulario de contacto o correo electrónico serán utilizados única y exclusivamente para:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gestionar las peticiones, presupuestos y consultas enviadas.</li>
          <li>Establecer comunicación comercial y técnica sobre los servicios de producción y mezcla solicitados.</li>
          <li>Dar cumplimiento a las obligaciones legales aplicables.</li>
        </ul>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">3. Base Legitimadora</h3>
        <p>
          La base legal para el tratamiento de sus datos es el consentimiento explícito prestado al momento de envío del formulario, así como, en su caso, la ejecución de un contrato o medidas precontractuales al solicitar presupuestos y servicios.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">4. Conservación y Cesión de Datos</h3>
        <p>
          Los datos se conservarán el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados y determinar posibles responsabilidades legales. No se cederán datos a terceros salvo obligación legal, debiendo contar siempre con el consentimiento previo del usuario para cualquier otro fin.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">5. Derechos del Usuario</h3>
        <p>
          El usuario puede ejercer en cualquier momento los derechos de Acceso, Rectificación, Supresión, Limitación, Portabilidad y Oposición enviando un correo a daniel@lizardo.co.
        </p>
      </div>
    )
  },
  legal: {
    title: 'Aviso Legal',
    body: (
      <div className="space-y-6 text-neutral-600 font-light text-sm md:text-base leading-relaxed">
        <p>
          El presente Aviso Legal regula el acceso, navegación y uso de la página web (en adelante, el "Sitio Web").
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">1. Información General</h3>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este Sitio Web es titularidad de Daniel Izardo (Poloteme). Email de contacto: daniel@lizardo.co.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">2. Uso del Sitio Web</h3>
        <p>
          El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web y de sus contenidos. Queda terminantemente prohibido su uso para fines ilícitos, perjudiciales para el titular o terceros, o que puedan dañar o impedir el normal funcionamiento del sitio.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">3. Propiedad Intelectual e Industrial</h3>
        <p>
          Todos los derechos de propiedad intelectual e industrial del Sitio Web (textos, imágenes, diseños, audios, logotipos, etc.) son propiedad del titular o, en su caso, cuenta con las licencias correspondientes. Queda prohibida la reproducción, distribución o comunicación pública de cualquier elemento de este sitio sin autorización expresa previa.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">4. Responsabilidad</h3>
        <p>
          El titular no garantiza la inexistencia de errores en el acceso al Sitio Web ni en su contenido, ni que este se encuentre siempre actualizado, si bien se llevarán a cabo los máximos esfuerzos para evitarlos, subsanarlos o actualizarlos. El titular no se hace responsable de las opiniones expresadas en enlaces externos o plataformas mostradas (como Spotify).
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">5. Ley Aplicable y Jurisdicción</h3>
        <p>
          Este Aviso Legal se regirá por la normativa española vigente. Cualquier controversia será sometida a los Juzgados y Tribunales competentes para su resolución.
        </p>
      </div>
    )
  },
  cookies: {
    title: 'Política de Cookies',
    body: (
      <div className="space-y-6 text-neutral-600 font-light text-sm md:text-base leading-relaxed">
        <p>
          Este canal digital utiliza cookies e integraciones de terceros. A continuación, le detallamos qué son las cookies, cuáles utiliza este sitio web y cómo puede gestionarlas.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">1. ¿Qué son las Cookies?</h3>
        <p>
          Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">2. Cookies utilizadas en este sitio</h3>
        <p>
          Siguiendo las directrices de la Agencia Española de Protección de Datos detallamos el uso de cookies en el sitio:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies técnicas y funcionales:</strong> Necesarias para el correcto funcionamiento del entorno. No recogen información personal.</li>
          <li><strong>Cookies de terceros:</strong> Este sitio web incrusta reproductores multimedia (por ejemplo, Spotify API). Estas plataformas pueden establecer sus propias cookies en su navegador conforme a sus políticas particulares cuando se interactúa con dichos módulos.</li>
        </ul>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">3. Desactivación o eliminación de cookies</h3>
        <p>
          En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté utilizando (Chrome, Safari, Firefox, Edge, etc.). Consulte la ayuda o el manual de su navegador para la configuración.
        </p>

        <h3 className="text-black font-medium text-lg mt-8 mb-4">4. Notas adicionales</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Ni este sitio web ni sus representantes legales se hacen responsables del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros (como Spotify) mencionados en esta política.</li>
          <li>Si tiene dudas o consultas puede comunicarse a daniel@lizardo.co.</li>
        </ul>
      </div>
    )
  }
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;
  const doc = legalContent[type];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-neutral-200 shadow-2xl rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-neutral-100 shrink-0">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-black tracking-tight">{doc.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full transition-colors flex items-center justify-center"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10 overflow-y-auto">
            <div className="max-w-3xl mx-auto">
              {doc.body}
            </div>
            
            <div className="mt-12 text-center text-xs text-neutral-400 font-light">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
