import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 bg-gray-50">
        <p className="text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-xs mt-2 text-gray-500">Crafted with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;