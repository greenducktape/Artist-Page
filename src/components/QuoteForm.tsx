import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, X, CheckCircle2 } from 'lucide-react';

type StepProps = {
  data: any;
  updateData: (fields: any) => void;
  nextStep: () => void;
  prevStep: () => void;
};

function Step1({ data, updateData, nextStep }: StepProps) {
  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 text-black leading-tight">
        1. ¿Cuál es tu nombre<br/>o nombre artístico?
      </h2>
      <input
        type="text"
        autoFocus
        value={data.nombre}
        onChange={(e) => updateData({ nombre: e.target.value })}
        onKeyDown={(e) => e.key === 'Enter' && data.nombre && nextStep()}
        placeholder="Escribe tu respuesta aquí..."
        className="text-2xl md:text-4xl font-light text-black placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-black outline-none py-4 transition-colors mb-12"
      />
      <div className="flex gap-4 items-center mt-auto md:mt-12">
        <button
          onClick={nextStep}
          disabled={!data.nombre}
          className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Ok <ArrowRight size={20} />
        </button>
        <span className="text-sm text-neutral-400 font-light hidden md:inline">Presiona Enter ↵</span>
      </div>
    </div>
  );
}

function Step2({ data, updateData, nextStep, prevStep }: StepProps) {
  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 text-black leading-tight">
        2. Genial, {data.nombre}.<br/>¿A qué email te respondemos?
      </h2>
      <input
        type="email"
        autoFocus
        value={data.email}
        onChange={(e) => updateData({ email: e.target.value })}
        onKeyDown={(e) => e.key === 'Enter' && data.email && nextStep()}
        placeholder="ejemplo@correo.com"
        className="text-2xl md:text-4xl font-light text-black placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-black outline-none py-4 transition-colors mb-12"
      />
      <div className="flex gap-4 items-center mt-auto md:mt-12">
        <button
          onClick={prevStep}
          className="p-4 bg-neutral-100 text-black rounded-full hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextStep}
          disabled={!data.email || !data.email.includes('@')}
          className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Ok <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step3({ data, updateData, nextStep, prevStep }: StepProps) {
  const options = [
    "Mezcla y Mastering",
    "Producción Completa",
    "Mastering Individual",
    "Otra cosa"
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-5xl font-display font-medium mb-12 text-black leading-tight">
        3. ¿En qué servicio estás interesado?
      </h2>
      <div className="flex flex-col gap-4">
        {options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => {
              updateData({ servicio: opt });
              setTimeout(nextStep, 300);
            }}
            className={`text-left px-8 py-5 border ${
              data.servicio === opt ? 'border-black bg-black text-white' : 'border-neutral-200 hover:border-black hover:bg-neutral-50 text-black'
            } rounded-2xl text-xl font-medium transition-all flex items-center justify-between`}
          >
            <span>{String.fromCharCode(65 + i)}. {opt}</span>
            {data.servicio === opt && <CheckCircle2 size={24} />}
          </button>
        ))}
      </div>
      <div className="flex gap-4 items-center mt-12">
        <button
          onClick={prevStep}
          className="p-4 bg-neutral-100 text-black rounded-full hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}

function Step4({ data, updateData, nextStep, prevStep }: StepProps) {
  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 text-black leading-tight">
        4. Cuéntame sobre tu proyecto.
      </h2>
      <p className="text-lg text-neutral-500 font-light mb-8">
        Género musical, referencias, estado actual, plazos...
      </p>
      <textarea
        autoFocus
        value={data.detalles}
        onChange={(e) => updateData({ detalles: e.target.value })}
        placeholder="Tengo una maqueta grabada a voz y guitarra de un tema indie pop..."
        className="w-full text-xl md:text-2xl font-light text-black placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-black outline-none py-4 transition-colors min-h-[150px] resize-none mb-12"
      />
      <div className="flex gap-4 items-center mt-auto md:mt-12">
        <button
          onClick={prevStep}
          className="p-4 bg-neutral-100 text-black rounded-full hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextStep}
          disabled={!data.detalles}
          className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Último paso <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step5({ data, updateData, prevStep, submitForm, isSubmitting }: any) {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 text-black leading-tight">
        5. Algún enlace (opcional)
      </h2>
      <p className="text-lg text-neutral-500 font-light mb-8">
        Demo en Drive, link de Spotify de referencias...
      </p>
      <input
        type="url"
        autoFocus
        value={data.link}
        onChange={(e) => updateData({ link: e.target.value })}
        onKeyDown={(e) => !isSubmitting && accepted && e.key === 'Enter' && submitForm()}
        placeholder="https://..."
        className="w-full text-xl md:text-2xl font-light text-black placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-black outline-none py-4 transition-colors mb-12"
        disabled={isSubmitting}
      />
      
      <div className="flex items-start gap-4 mb-12">
        <input 
          type="checkbox" 
          id="terms_quote" 
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1 shrink-0 w-5 h-5 border border-neutral-300 rounded focus:ring-black cursor-pointer accent-black"
          disabled={isSubmitting}
        />
        <label htmlFor="terms_quote" className="text-sm md:text-base text-neutral-500 font-light cursor-pointer">
          He leído y acepto la <a href="#privacidad" target="_blank" className="underline hover:text-black transition-colors" onClick={(e) => e.stopPropagation()}>Política de Privacidad</a> para el tratamiento de mis datos personales.
        </label>
      </div>

      <div className="flex gap-4 items-center mt-auto md:mt-12">
        <button
          onClick={prevStep}
          disabled={isSubmitting}
          className="p-4 bg-neutral-100 text-black rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={submitForm}
          disabled={isSubmitting || !accepted}
          className="flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-colors shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </button>
      </div>
    </div>
  );
}

function SuccessStep({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <CheckCircle2 size={80} className="text-black mb-8 mx-auto" strokeWidth={1} />
      </motion.div>
      <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 text-black">
        Mensaje enviado
      </h2>
      <p className="text-xl text-neutral-500 font-light max-w-lg mb-12">
        He recibido tu información. Me pondré en contacto contigo lo antes posible para hablar sobre tu proyecto.
      </p>
      <button
        onClick={onClose}
        className="px-10 py-4 border border-black text-black rounded-full font-medium hover:bg-neutral-50 transition-colors"
      >
        Volver a la web
      </button>
    </div>
  );
}

export default function QuoteForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    detalles: '',
    link: ''
  });

  if (!isOpen) return null;

  const updateData = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "7aeef351-58be-412e-9469-dc146508d1f9",
          subject: `Nuevo Presupuesto de ${formData.nombre} - ${formData.servicio}`,
          from_name: formData.nombre,
          name: formData.nombre,
          email: formData.email,
          service: formData.servicio,
          message: formData.detalles,
          link: formData.link
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentProgress = ((step - 1) / 4) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '10%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '10%' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-y-auto"
      >
        {/* Header / Progress Bar */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
          <button 
            onClick={onClose}
            className="p-3 text-black hover:bg-neutral-100 rounded-full transition-colors flex items-center justify-center"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          {!submitted && (
            <div className="flex-grow max-w-xs mx-auto h-1 bg-neutral-100 rounded-full overflow-hidden absolute left-1/2 -translate-x-1/2">
              <div 
                className="h-full bg-black transition-all duration-500 ease-out"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="w-full max-w-3xl px-6 py-20 min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                {step === 1 && <Step1 data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 2 && <Step2 data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Step3 data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 4 && <Step4 data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 5 && <Step5 data={formData} updateData={updateData} prevStep={prevStep} submitForm={submitForm} isSubmitting={isSubmitting} />}
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow"
              >
                <SuccessStep onClose={onClose} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
