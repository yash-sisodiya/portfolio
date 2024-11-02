import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarField from './components/StarField';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <StarField />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50">
        <p className="text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
          Crafted with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
