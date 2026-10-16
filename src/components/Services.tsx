import { useRef, useState } from "react";
import { Palette, Code, Smartphone, Sparkles } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const icons = [Palette, Code, Smartphone, Sparkles];

interface ServicesProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
}

const Services = ({ t }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center" style={{ transform: `translate3d(0, ${(1 - progress) * 44}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-muted-foreground">{t.services.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            {t.services.title1} <span className="text-gradient">{t.services.title2}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.services.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service: { title: string; description: string; features: string[] }, index: number) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={`${service.title}-${index}`}
                className={`group relative rounded-[2rem] border p-8 transition-all duration-700 md:p-10 ${hoveredIndex === index ? "border-white/25 bg-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.2)]" : "border-white/10 bg-white/[0.02]"}`}
                style={{
                  transform: `translate3d(0, ${(1 - progress) * (index * 14 + 20)}px, 0)`,
                  opacity: 0.2 + progress * 0.8,
                  transitionDelay: `${index * 120}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${hoveredIndex === index ? "bg-white text-black" : "bg-white/5 text-white"}`}>
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-4 font-display text-2xl md:text-3xl">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature: string) => (
                    <span key={feature} className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.25em] ${hoveredIndex === index ? "border-white/30 bg-white/10 text-white" : "border-white/10 bg-transparent text-muted-foreground"}`}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="absolute right-8 top-8 text-6xl font-display text-white/5">0{index + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
