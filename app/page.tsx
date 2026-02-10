import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { WhyBuilding } from "@/components/landing/WhyBuilding";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Hero />
      <Problem />
      <Features />
      <WhyBuilding />
    </div>
  );
}
