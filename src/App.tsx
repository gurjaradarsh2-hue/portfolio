import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { Loader } from './components/layout/Loader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Use a class on body to hide default cursor when we have the custom one
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <footer className="py-8 text-center text-white/50 border-t border-white/10 mt-20 relative z-10">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
