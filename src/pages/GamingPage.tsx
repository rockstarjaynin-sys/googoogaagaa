import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import type { TranslationDictionary } from "@/data/translations";

const gamingPillars = [
  { label: "Observation", text: "Every game teaches rhythm, feedback, and intention." },
  { label: "Systems", text: "I love the logic behind polished interactive worlds." },
  { label: "Flow", text: "Responsive movement and smooth pacing shape the best experiences." },
  { label: "Craft", text: "The best digital spaces are made with feel, not just function." },
];

const platformLinks = [
  { label: "YouTube", handle: "@Amazingpro245", url: "https://youtube.com/@Amazingpro245" },
  { label: "Steam", handle: "ThegamerAmazingpro", url: "https://steamcommunity.com/id/ThegamerAmazingpro/" },
  { label: "Roblox", handle: "Amazingprohac", url: "https://www.roblox.com/users/2868683169/profile" },
];

const GamingPage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const { t } = useOutletContext<{ t: TranslationDictionary }>();
  const gamingCopy = t.gaming;

  return (
    <section ref={sectionRef} className="page-shell pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14" style={{ transform: `translate3d(0, ${(1 - progress) * 50}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">{gamingCopy.eyebrow}</p>
          <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {gamingCopy.title}
          </h2>
        </div>

        <div className="mb-8 mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_24px_60px_rgba(0,0,0,0.28)]" style={{ transform: `translate3d(0, ${(1 - progress) * 70}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>{gamingCopy.montage}</span>
            <span>{gamingCopy.montageLabel}</span>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <video
              className="aspect-video w-full object-cover"
              src="/1015(3).mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3" style={{ transform: `translate3d(0, ${(1 - progress) * 40}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          {[
            { label: gamingCopy.statGames, value: gamingCopy.statGamesValue },
            { label: gamingCopy.statSpeed, value: gamingCopy.statSpeedValue },
            { label: gamingCopy.statStyle, value: gamingCopy.statStyleValue },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{item.label}</div>
              <div className="mt-4 font-display text-3xl text-white">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-2" style={{ transform: `translate3d(0, ${(1 - progress) * 55}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          {["/image.png", "/image copy.png"].map((src, index) => (
            <div key={src} className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                <span>{gamingCopy.gallery}</span>
                <span>{index + 1}</span>
              </div>
              <img src={src} alt="Game library cover" className="h-[260px] w-full object-cover md:h-[330px]" />
            </div>
          ))}
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="content-surface rounded-[2rem] p-6 md:p-8" style={{ transform: `translate3d(0, ${(1 - progress) * 80}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span>{gamingCopy.loop}</span>
              <span>{gamingCopy.live}</span>
            </div>
            <div className="space-y-5">
              {gamingCopy.loopLines.map((line) => (
                <div key={line} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-lg text-white/80 md:text-xl">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="content-surface rounded-[2rem] p-6 md:p-8" style={{ transform: `translate3d(0, ${(1 - progress) * 120}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <div className="mb-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{gamingCopy.gives}</div>
            <div className="space-y-4">
              {gamingPillars.map((pillar) => (
                <div key={pillar.label} className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
                  <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    <span>{pillar.label}</span>
                    <ArrowDownRight className="h-4 w-4" />
                  </div>
                  <p className="text-base text-white/80">{pillar.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Gaming sharpened my instinct for composition, timing, and clarity. It taught me to read pressure, adapt quickly, and keep the experience feeling smooth even when the pace is intense.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8" style={{ transform: `translate3d(0, ${(1 - progress) * 40}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
          <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            <span>{gamingCopy.profiles}</span>
            <span>{gamingCopy.social}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {gamingCopy.profilesList.map((platform) => (
              <a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/20 hover:bg-white/5"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{platform.label}</div>
                <div className="mt-4 font-display text-2xl text-white">{platform.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingPage;
