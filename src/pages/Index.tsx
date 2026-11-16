import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Honors from "@/components/Honors";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <Experience />
        <Honors />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
