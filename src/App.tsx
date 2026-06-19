import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import LegalModal, { LegalDocType } from './components/LegalModal';

function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType>(null);

  useEffect(() => {
    if (isQuoteFormOpen || activeLegalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isQuoteFormOpen, activeLegalModal]);

  const openForm = () => setIsQuoteFormOpen(true);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-neutral-200 selection:text-black">
      <Hero onOpenForm={openForm} />
      <About />
      <Portfolio />
      <Services onOpenForm={openForm} />
      <Pricing onOpenForm={openForm} />
      <Process />
      <Contact onOpenForm={openForm} />
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />
      
      {isQuoteFormOpen && (
        <QuoteForm 
          isOpen={isQuoteFormOpen} 
          onClose={() => setIsQuoteFormOpen(false)} 
          onOpenLegal={(type: LegalDocType) => setActiveLegalModal(type)}
        />
      )}

      {activeLegalModal && (
        <LegalModal 
          type={activeLegalModal} 
          onClose={() => setActiveLegalModal(null)} 
        />
      )}
    </div>
  );
}

export default App;
