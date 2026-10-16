import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

interface WorkProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
}

const Work = ({ t }: WorkProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center" style={{ transform: `translate3d(0, ${(1 - progress) * 40}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-muted-foreground">{t.work.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            {t.work.title1} <span className="text-gradient">{t.work.title2}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {t.work.projects.map((project: { title: string; category: string; description: string; year: string }, index: number) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative"
              style={{
                transform: `translate3d(0, ${(1 - progress) * (index * 18 + 18)}px, 0)`,
                opacity: 0.2 + progress * 0.8,
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`relative flex flex-col items-start justify-between gap-4 rounded-[1.8rem] border p-6 md:flex-row md:items-center md:p-8 ${hoveredProject === index ? "border-white/25 bg-white/5" : "border-white/10 bg-transparent"}`}>
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className={`font-display text-2xl md:text-4xl ${hoveredProject === index ? "text-white" : "text-foreground"}`}>
                    {project.title}
                  </h3>
                  <p className={`mt-3 max-w-xl text-muted-foreground transition-all duration-500 ${hoveredProject === index ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
                    {project.description}
                  </p>
                </div>

                <div className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 ${hoveredProject === index ? "scale-110 border-white/40 bg-white text-black" : "border-white/15 bg-transparent text-muted-foreground"}`}>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" style={{ transform: `translate3d(0, ${(1 - progress) * 28}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <button type="button" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground">
            <span className="hover-underline">{t.work.viewAll}</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
