import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { WhyBuilding } from "@/components/landing/WhyBuilding";
import { WhoThisIsFor } from "@/components/landing/WhoThisIsFor";
import { WhatHappensNext } from "@/components/landing/WhatHappensNext";
import { CallToAction } from "@/components/landing/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Hero />
      <Problem />
      <Features />
      <WhyBuilding />
      <WhoThisIsFor />
      <WhatHappensNext />
      <CallToAction />
    </div>
  );
}
