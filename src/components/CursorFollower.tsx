import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const updateTouch = () => setIsTouch(media.matches);
    updateTouch();
    media.addEventListener?.("change", updateTouch);

    const handleMove = (event: MouseEvent) => {
      setTarget({ x: event.clientX, y: event.clientY });
    };

    const handleOver = (event: Event) => {
      const element = event.target as HTMLElement | null;
      const interactive = !!element?.closest("a, button, input, textarea, select, [role='button']");
      setActive(interactive);
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", () => setActive(false));

    let animationFrame = 0;
    const render = () => {
      setPosition((current) => ({
        x: current.x + (target.x - current.x) * 0.16,
        y: current.y + (target.y - current.y) * 0.16,
      }));
      animationFrame = window.requestAnimationFrame(render);
    };

    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", () => setActive(false));
      media.removeEventListener?.("change", updateTouch);
    };
  }, [target.x, target.y]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      <div
        className={`absolute rounded-full border border-white/80 bg-white/10 transition-[transform,opacity,width,height] duration-200 ${active ? "h-12 w-12 opacity-80" : "h-5 w-5 opacity-60"}`}
        style={{
          transform: `translate(${position.x - (active ? 24 : 10)}px, ${position.y - (active ? 24 : 10)}px)`,
          boxShadow: "0 0 25px rgba(255,255,255,0.2)",
        }}
      />
      <div
        className={`absolute rounded-full bg-white/80 transition-[transform,opacity,width,height] duration-150 ${active ? "h-2 w-2 opacity-90" : "h-1.5 w-1.5 opacity-70"}`}
        style={{ transform: `translate(${position.x - 3}px, ${position.y - 3}px)` }}
      />
    </div>
  );
};

export default CursorFollower;
