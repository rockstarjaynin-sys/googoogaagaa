import { useRef } from "react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

interface AboutProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
}

const About = ({ t }: AboutProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);

  const imageStyle = {
    transform: `translate3d(0, ${(1 - progress) * 70}px, 0) scale(${0.96 + progress * 0.08})`,
    opacity: 0.35 + progress * 0.65,
  };

  const copyStyle = {
    transform: `translate3d(0, ${(1 - progress) * 50}px, 0)`,
    opacity: 0.2 + progress * 0.8,
  };

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative" style={imageStyle}>
            <div className="story-surface relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_45%)]" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
              <div className="flex h-full items-center justify-center text-[10rem] font-display tracking-[-0.12em] text-white/10">GS</div>
            </div>

            <div className="glass-panel absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-[0_24px_50px_rgba(0,0,0,0.2)]">
              <p className="font-display text-3xl text-foreground">{t.about.stats[0].value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.about.badge}</p>
            </div>
          </div>

          <div className="transition-all duration-1000" style={copyStyle}>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">{t.about.eyebrow}</p>
            <h2 className="mb-7 text-4xl md:text-5xl lg:text-6xl">
              {t.about.title1}
              <span className="block text-gradient">{t.about.title2}</span>
            </h2>

            <div className="mb-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.about.stats.map((stat: { value: string; label: string }, index: number) => (
                <div key={`${stat.label}-${index}`} className="glass-panel rounded-2xl p-4">
                  <p className="font-display text-3xl text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
