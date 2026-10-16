import { useEffect, useState } from "react";
import DynamicNav from "@/components/DynamicNav";
import TerminalIntro from "@/components/TerminalIntro";
import CursorFollower from "@/components/CursorFollower";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { translations, type SupportedLocale } from "@/data/translations";

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("portfolio-theme");
  if (storedTheme) return storedTheme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getPreferredLocale = () => {
  const storedLocale = localStorage.getItem("portfolio-language") as SupportedLocale | null;
  if (storedLocale && translations[storedLocale]) return storedLocale;
  return "en";
};

const Index = () => {
  const [language, setLanguage] = useState<SupportedLocale>(getPreferredLocale);
  const [isDark, setIsDark] = useState(getPreferredTheme);
  const [activeSection, setActiveSection] = useState("home");
  const [isIntroVisible, setIsIntroVisible] = useState(() => !localStorage.getItem("portfolio-intro-seen"));

  const t = translations[language];

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const sections = ["home", "about", "work", "services", "contact"];

    const updateActiveSection = () => {
      let current = "home";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 180) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onStartPortfolio = () => {
    setIsIntroVisible(false);
    localStorage.setItem("portfolio-intro-seen", "true");
    setTimeout(() => handleNavigate("home"), 100);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorFollower />
      <DynamicNav
        activeSection={activeSection}
        language={language}
        isDark={isDark}
        navItems={navItems}
        onNavigate={handleNavigate}
        onToggleTheme={() => setIsDark((current) => !current)}
        onLanguageChange={setLanguage}
        t={t}
      />

      <TerminalIntro
        locale={language}
        visible={isIntroVisible}
        onStart={onStartPortfolio}
        onSkip={onStartPortfolio}
        t={t}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-80" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_25%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_18%)]" />
      </div>

      <div className="relative z-10">
        <Hero locale={language} t={t} onNavigate={handleNavigate} />
        <About locale={language} t={t} />
        <Marquee />
        <Work locale={language} t={t} />
        <Services locale={language} t={t} />
        <Contact locale={language} t={t} />
        <Footer locale={language} t={t} />
      </div>
    </main>
  );
};

export default Index;
