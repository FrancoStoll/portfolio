"use client";

import { TopMenu } from "./TopMenu";
import { HeroSection } from "./HeroSection";
import { PortfolioSection } from "./PortfolioSection";
import { TimeLine } from "./TimeLine";
import { Footer } from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 ">
      {/* Top Menu */}
      <TopMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Section */}

      <PortfolioSection />
      {/* Timeline Section */}
      <TimeLine />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
