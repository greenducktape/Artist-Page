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

function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  useEffect(() => {
    if (isQuoteFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isQuoteFormOpen]);

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
      <Footer />
      
      {isQuoteFormOpen && (
        <QuoteForm 
          isOpen={isQuoteFormOpen} 
          onClose={() => setIsQuoteFormOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
