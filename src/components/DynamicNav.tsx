import { Languages, MoonStar, SunMedium } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";

interface DynamicNavProps {
  currentPage: string;
  isExpanded: boolean;
  isTouch: boolean;
  language: SupportedLocale;
  themeMode: "dark" | "light" | "gradient";
  navItems: Array<{ path: string; label: string }>;
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
  onLanguageChange: (value: SupportedLocale) => void;
  onToggleExpand: () => void;
  onExpand: () => void;
  onCollapse: () => void;
  t: TranslationDictionary;
}

const DynamicNav = ({
  currentPage,
  isExpanded,
  isTouch,
  language,
  themeMode,
  navItems,
  onNavigate,
  onToggleTheme,
  onLanguageChange,
  onToggleExpand,
  onExpand,
  onCollapse,
  t,
}: DynamicNavProps) => {
  const handleInteraction = () => {
    if (isTouch) {
      onToggleExpand();
    }
  };

  const compactCurrentPage = currentPage.length > 10 ? `${currentPage.slice(0, 10).trim()}…` : currentPage;

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
      <div
        className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-full border border-zinc-200/70 bg-white/75 px-3 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.09)] backdrop-blur-2xl transition-[width,max-width,transform] duration-300 ease-out dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_40px_rgba(0,0,0,0.24)] ${isExpanded ? "w-[min(92vw,46rem)] max-w-[46rem]" : "w-[min(92vw,13rem)] max-w-[13rem]"}`}
        onMouseEnter={() => {
          if (!isTouch) onExpand();
        }}
        onMouseLeave={() => {
          if (!isTouch) onCollapse();
        }}
      >
        <button
          type="button"
          onClick={() => onNavigate("/")}
          className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-left transition hover:bg-white/5"
          aria-label="Gunin Singh home"
        >
          <span className="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">GS</span>
          <span className="hidden h-2 w-2 rounded-full bg-zinc-700/80 dark:bg-white/80 sm:block" />
        </button>

        {isExpanded ? (
          <nav className="flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`shrink-0 rounded-full px-3 py-2 text-sm transition ${
                  currentPage === item.label ? "bg-zinc-900 text-white dark:bg-white dark:text-black" : "text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        ) : (
          <div className="flex min-w-[7rem] items-center justify-center px-2 text-center text-[9px] font-medium uppercase tracking-[0.24em] text-zinc-700 sm:text-[10px] dark:text-zinc-200">
            <span className="truncate">{compactCurrentPage}</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <label className="sr-only">{t.language}</label>
            <select
              value={language}
              onChange={(event) => onLanguageChange(event.target.value as SupportedLocale)}
              className="appearance-none rounded-full border border-zinc-200/80 bg-white/90 px-3 py-2 pr-8 text-sm font-medium text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] outline-none ring-0 transition hover:border-zinc-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)] focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-black/20 dark:text-zinc-100 dark:hover:border-white/20"
              aria-label={t.accessibility.languageToggle}
            >
              {Object.entries({ en: "English", ne: "नेपाली", hi: "हिन्दी", zh: "中文" }).map(([code, label]) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
            <Languages className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 dark:text-zinc-300" />
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-900 shadow-[0_8px_24px_rgba(17,24,39,0.08)] transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-black/20 dark:text-zinc-100 dark:hover:border-white/20 dark:hover:bg-white/10"
            aria-label={t.accessibility.themeToggle}
          >
            {themeMode === "dark" ? <SunMedium className="h-4 w-4" /> : themeMode === "light" ? <MoonStar className="h-4 w-4" /> : <span className="text-[10px] font-semibold">A</span>}
          </button>
        </div>

        {isTouch && (
          <button
            type="button"
            onClick={handleInteraction}
            className="ml-1 rounded-full border border-zinc-200 bg-white/85 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-zinc-800 shadow-[0_8px_22px_rgba(17,24,39,0.08)] md:hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            {isExpanded ? "Close" : compactCurrentPage}
          </button>
        )}
      </div>
    </header>
  );
};

export default DynamicNav;
