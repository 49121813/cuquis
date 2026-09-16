import React from 'react';
import { LangProvider } from './i18n.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import FlavorOfMonth from './components/FlavorOfMonth.jsx';
import Flavors from './components/Flavors.jsx';
import Cajas from './components/Cajas.jsx';
import Nosotras from './components/Nosotras.jsx';
import Reviews from './components/Reviews.jsx';
import Pedir from './components/Pedir.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <LangProvider>
      <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
        <Header />
        <Hero />
        <Marquee />
        <FlavorOfMonth flavorOfMonth="Pistacho" />
        <Flavors />
        <Cajas />
        <Nosotras />
        <Reviews />
        <Pedir />
        <Footer />
      </div>
    </LangProvider>
  );
}
