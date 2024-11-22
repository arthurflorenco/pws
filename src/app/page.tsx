'use client'
import React, { useState, useEffect, useRef } from 'react';
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Profs } from "@/components/Profs";
import { Promotion } from "@/components/Promotion";
import { Testimonials } from "@/components/Testimonials";
import { Transition } from '@/components/ui/Transition';
import Menu from '@/components/Menu';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(true);
  const transitionRef = useRef(null);

  useEffect(() => {
    const loadPageData = async () => {
      // Simula o carregamento de dados
      await new Promise(resolve => {
        setTimeout(resolve, 6100); // Tempo de carregamento simulado
      });
      setLoading(false);
      setShowTransition(false); // Esconde a animação após o carregamento
    };

    loadPageData();
  }, []);
  return (
    <div>
      {showTransition && <Transition ref={transitionRef} />}
      {!loading && !showTransition && (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-neutral-800 to-black overflow-hidden">
          <Menu />
          <Hero />
          <About />
          <Plans />
          <Promotion />
          <Profs />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>)}
    </div>
  );
}
