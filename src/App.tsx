import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import Approach from './components/sections/Approach';
import InAction from './components/sections/InAction';
import Services from './components/sections/Services';
import PersonalStory from './components/sections/PersonalStory';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';
import StickyContact from './components/layout/StickyContact';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-text-body bg-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <PersonalStory />
        <Approach />
        <InAction />
        <Services />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}
