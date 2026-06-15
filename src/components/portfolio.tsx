"use client";

import { TopMenu } from "./TopMenu";
import { HeroSection } from "./HeroSection";
import { Skills } from "./Skills";
import { PortfolioSection } from "./PortfolioSection";
import { TimeLine } from "./TimeLine";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <TopMenu />
      <main>
        <HeroSection />
        <Skills />
        <PortfolioSection />
        <TimeLine />
      </main>
      <Footer />
    </div>
  );
}
