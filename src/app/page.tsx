'use client'
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavDesk } from "@/components/NavDesk";
import { NavMobile } from "@/components/NavMobile";
import { Plans } from "@/components/Plans";
import { Profs } from "@/components/Profs";
import { Promotion } from "@/components/Promotion";
import { Testimonials } from "@/components/Testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


export default function Home() {
  return (

    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-neutral-800 to-black overflow-hidden">
      <NavDesk />
      <NavMobile />
      <Hero />
      <Promotion />
      <Plans />
      <Profs />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
