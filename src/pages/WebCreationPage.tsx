import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { Code2, LayoutTemplate, MousePointer2 } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import type { TranslationDictionary } from "@/data/translations";

const creationModes = [
  {
    icon: LayoutTemplate,
    title: "Interface systems",
    text: "Clean, intentional layouts that guide people naturally through the story.",
  },
  {
    icon: Code2,
    title: "Interactive builds",
    text: "Responsive experiences shaped with thoughtful front-end logic and motion.",
  },
  {
    icon: MousePointer2,
    title: "Conversion-focused design",
    text: "Every interaction is designed to feel clear, reliable, and memorable.",
  },
];

const WebCreationPage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const { t } = useOutletContext<{ t: TranslationDictionary }>();
  const webCopy = t.web;

  return (
    <section ref={sectionRef} className="page-shell pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-right" style={{ transform: `translate3d(0, ${(1 - progress) * 60}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">{webCopy.eyebrow}</p>
          <h2 className="font-display text-4xl leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {webCopy.title}
          </h2>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3" style={{ transform: `translate3d(0, ${(1 - progress) * 30}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          {[
            { headline: webCopy.strategy, info: webCopy.strategyText },
            { headline: webCopy.build, info: webCopy.buildText },
            { headline: webCopy.launch, info: webCopy.launchText },
          ].map((item) => (
            <div key={item.headline} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{item.headline}</div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 text-left text-base leading-relaxed text-muted-foreground" style={{ transform: `translate3d(0, ${(1 - progress) * 20}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          {webCopy.intro}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {webCopy.modes.map((item, index) => {
            const Icon = creationModes[index].icon;

            return (
              <div
                key={item.title}
                className="content-surface rounded-[2rem] p-6"
                style={{
                  transform: `translate3d(0, ${(1 - progress) * (index * 42 + 80)}px, 0)`,
                  opacity: 0.2 + progress * 0.8,
                }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">0{index + 1}</p>
                <h3 className="mt-5 font-display text-3xl text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebCreationPage;
