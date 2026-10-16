import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

interface HeroProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
  onNavigate: (id: string) => void;
}

const Hero = ({ t, onNavigate }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const motionStyle = {
    transform: `translate3d(0, ${(1 - progress) * 42}px, 0) scale(${0.96 + progress * 0.08})`,
    opacity: 0.2 + progress * 0.8,
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.09),_transparent_38%)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "110px 110px" }} />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center" style={motionStyle}>
        <div className={`mb-6 overflow-hidden transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.42em] text-muted-foreground">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="mb-8 overflow-hidden">
          <h1 className={`font-display text-5xl leading-none sm:text-7xl md:text-8xl lg:text-[9rem] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transition: "all 1s ease 0.2s" }}>
            <span className="block">{t.hero.title1}</span>
            <span className="block text-gradient">{t.hero.title2}</span>
          </h1>
        </div>

        <div className={`mx-auto mb-12 max-w-2xl transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "400ms" }}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "600ms" }}>
          <button
            type="button"
            onClick={() => onNavigate("work")}
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition hover:scale-[1.02]"
          >
            <span className="relative z-10">{t.hero.primary}</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="rounded-full border border-border bg-transparent px-8 py-3.5 text-sm font-medium text-foreground transition hover:border-white/30 hover:bg-white/5"
          >
            <span className="flex items-center gap-2">
              {t.hero.secondary}
              <span aria-hidden="true">→</span>
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onNavigate("about")}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        aria-label={t.accessibility.scrollHint}
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          <span>{t.hero.scroll}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
