'use client'
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { NavDesk } from "@/components/NavDesk";
import { NavMobile } from "@/components/NavMobile";
import { Plans } from "@/components/Plans";
import { Promotion } from "@/components/Promotion";
import { Text } from "@/components/Text";

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center bg-black overflow-hidden">
     <NavDesk />
    <NavMobile />
    <Hero />
    <Promotion />
    <Plans />
    <Text />
    <FAQ />
  </div>
  );
}
