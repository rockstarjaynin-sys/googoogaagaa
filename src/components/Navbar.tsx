import { useState, useEffect } from "react";
import { Globe2, Moon, SunMedium } from "lucide-react";
import { translations, type SupportedLanguage } from "@/i18n/translations";

type NavbarProps = {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};

const Navbar = ({ theme, setTheme, language, setLanguage }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["home", "about", "work", "services", "contact"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 180) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
      <div className="container topbar-shell">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="brand-mark"
          aria-label="Go to home"
        >
          GS<span>.</span>
        </button>

        <nav className="topbar-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar-controls">
          <label className="lang-picker" aria-label={t.nav.language}>
            <Globe2 size={15} />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as SupportedLanguage)}
              aria-label={t.nav.language}
            >
              <option value="en">EN</option>
              <option value="ne">ने</option>
              <option value="hi">हिं</option>
              <option value="zh">中文</option>
            </select>
          </label>

          <button
            type="button"
            className="theme-toggle"
            aria-label={t.nav.theme}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunMedium size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="cta-pill"
            onClick={() => scrollToSection("contact")}
          >
            {t.nav.letsTalk}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
