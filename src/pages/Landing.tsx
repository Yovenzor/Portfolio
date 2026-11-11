import { useEffect } from "react";
import { useLocation } from "react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { InterestsMarquee } from "@/components/InterestsMarquee";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Objectives } from "@/components/sections/Objectives";
import { Contact } from "@/components/sections/Contact";
import { useT } from "@/i18n";

/**
 * The portfolio itself: a single scrolling page from hero to contact.
 * Arriving with a hash (e.g. from a project page) scrolls to that section
 * once the sections are mounted.
 */
export default function Landing() {
  const t = useT();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60]"
      >
        {t.nav.skipToContent}
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <About />
        <InterestsMarquee />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <SoftSkills />
        <Objectives />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
