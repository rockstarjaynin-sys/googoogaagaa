import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import type { TranslationDictionary } from "@/data/translations";

const AboutPage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const { t } = useOutletContext<{ t: TranslationDictionary }>();
  const aboutCopy = t.about;

  return (
    <section ref={sectionRef} className="page-shell pb-24 pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="content-surface rounded-[2rem] p-8 md:p-12" style={{ transform: `translate3d(0, ${(1 - progress) * 70}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">{aboutCopy.eyebrow}</p>
          <h2 className="mb-8 max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.06em] sm:text-6xl">
            {aboutCopy.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">{aboutCopy.body1}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">{aboutCopy.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
