import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import type { TranslationDictionary } from "@/data/translations";

const name = "Gunin Singh";

const TypedName = () => {
  const [text, setText] = useState(name.slice(0, 1));
  const [index, setIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!isDeleting && index <= name.length) {
        setText(name.slice(0, index));
        setIndex((current) => current + 1);
      }

      if (!isDeleting && index > name.length) {
        setTimeout(() => setIsDeleting(true), 900);
      }

      if (isDeleting && index > 0) {
        setText(name.slice(0, index - 1));
        setIndex((current) => current - 1);
      }

      if (isDeleting && index === 0) {
        setIsDeleting(false);
        setIndex(1);
      }
    }, isDeleting ? 70 : 120);

    return () => window.clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap">
      <span>{text}</span>
      <span className="typed-caret" aria-hidden="true" />
    </span>
  );
};

const HomePage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const { t } = useOutletContext<{ t: TranslationDictionary }>();
  const homeCopy = t.home;

  return (
    <section ref={sectionRef} className="page-shell pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div style={{ transform: `translate3d(0, ${(1 - progress) * 60}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">{homeCopy.badge}</p>
            <h1 className="font-display text-5xl leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[7rem]">
              <span className="block text-muted-foreground">{homeCopy.titleA}</span>
              <span className="block text-foreground">{homeCopy.titleB}</span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xl font-medium text-white/80 sm:text-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Sparkles className="h-4 w-4" />
                <TypedName />
              </span>
            </div>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{homeCopy.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/gaming" className="hero-cta primary">
                <Play className="h-4 w-4" />
                {homeCopy.explore}
              </Link>
              <Link to="/web-creation" className="hero-cta secondary">
                {homeCopy.build}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {homeCopy.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" style={{ transform: `translate3d(0, ${(1 - progress) * 90}px, 0) scale(${0.98 + progress * 0.05})`, opacity: 0.2 + progress * 0.8 }}>
            <div className="content-surface min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(255,255,255,0.02)_42%,_transparent_70%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
              <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                <span>Signal</span>
                <span>Live</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Mode</p>
                  <p className="mt-4 font-display text-3xl leading-none text-white">Gameplay</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Focus</p>
                  <p className="mt-4 font-display text-3xl leading-none text-white">Web</p>
                </div>
                <div className="col-span-2 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    <span>Creative stack</span>
                    <span>Digital</span>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['Interface', 'Motion', 'Code', 'Playful systems', 'Cinematics'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
