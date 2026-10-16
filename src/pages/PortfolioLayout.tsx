import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CursorFollower from "@/components/CursorFollower";
import DynamicNav from "@/components/DynamicNav";
import TerminalIntro from "@/components/TerminalIntro";
import { translations, type SupportedLocale } from "@/data/translations";

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("portfolio-theme");
  if (storedTheme === "dark" || storedTheme === "light" || storedTheme === "gradient") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getPreferredLocale = () => {
  const storedLocale = localStorage.getItem("portfolio-language") as SupportedLocale | null;
  if (storedLocale && translations[storedLocale]) return storedLocale;
  return "en";
};

const PortfolioLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<SupportedLocale>(getPreferredLocale);
  const [themeMode, setThemeMode] = useState<"dark" | "light" | "gradient">(getPreferredTheme as () => "dark" | "light" | "gradient");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const t = translations[language];
  const navItems = useMemo(
    () => [
      { path: "/", label: t.nav.home },
      { path: "/gaming", label: t.nav.gaming },
      { path: "/web-creation", label: t.nav.web },
      { path: "/about", label: t.nav.about },
      { path: "/contact", label: t.nav.contact },
    ],
    [t]
  );
  const currentPage = useMemo(
    () => navItems.find((item) => item.path === location.pathname)?.label ?? t.nav.home,
    [location.pathname, navItems, t.nav.home]
  );

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
    document.documentElement.style.colorScheme = themeMode === "dark" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", themeMode);
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const updateTouch = () => setIsTouch(media.matches);
    updateTouch();
    media.addEventListener?.("change", updateTouch);
    return () => media.removeEventListener?.("change", updateTouch);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsExpanded(false);
  };

  const handleIntroComplete = () => {
    setIsIntroVisible(false);
    localStorage.setItem("portfolio-intro-seen", "true");
  };

  useEffect(() => {
    localStorage.setItem("portfolio-intro-seen", "false");
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CursorFollower />

      <DynamicNav
        currentPage={currentPage}
        isExpanded={isExpanded}
        isTouch={isTouch}
        themeMode={themeMode}
        language={language}
        navItems={navItems}
        onNavigate={handleNavigate}
        onToggleTheme={() =>
          setThemeMode((current) => (current === "dark" ? "light" : current === "light" ? "gradient" : "dark"))
        }
        onLanguageChange={setLanguage}
        onToggleExpand={() => setIsExpanded((current) => !current)}
        onExpand={() => setIsExpanded(true)}
        onCollapse={() => setIsExpanded(false)}
        t={t}
      />

      <TerminalIntro
        locale={language}
        visible={isIntroVisible}
        onStart={handleIntroComplete}
        onSkip={handleIntroComplete}
        t={t}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="scanlines" />
      </div>

      <main className="relative z-10">
        <Outlet context={{ language, t }} />
      </main>
    </div>
  );
};

export default PortfolioLayout;
