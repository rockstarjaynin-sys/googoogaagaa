import { useEffect, useMemo, useRef, useState } from "react";
import { TerminalSquare, X, ArrowRight } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";

interface TerminalIntroProps {
  locale: SupportedLocale;
  onStart: () => void;
  onSkip: () => void;
  visible: boolean;
  t: TranslationDictionary;
}

const initialPrompt = "guest@amazingpro:~$";

const TerminalIntro = ({ locale, onStart, onSkip, visible, t }: TerminalIntroProps) => {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([t.terminal.ready]);
  const [isTyping, setIsTyping] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandMap = useMemo(
    () => ({
      help: t.terminal.help,
      about: t.terminal.about,
      projects: t.terminal.projects,
      skills: t.terminal.skills,
      contact: t.terminal.contact,
      clear: t.terminal.clear,
      start: t.terminal.startPortfolio,
      "./start-portfolio": t.terminal.startPortfolio,
    }),
    [t]
  );

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setIsTyping(false), 700);
    return () => window.clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  const appendOutput = (message: string) => {
    setLines((current) => [...current, `${initialPrompt} ${message}`]);
  };

  const handleCommand = (value: string) => {
    const command = value.trim();
    if (!command) {
      setLines((current) => [...current, `${initialPrompt}`]);
      return;
    }

    const output = commandMap[command as keyof typeof commandMap];

    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (command === "start" || command === "./start-portfolio") {
      setLines((current) => [...current, `${initialPrompt} ${command}`, t.terminal.startPortfolio]);
      window.setTimeout(() => onStart(), 500);
      return;
    }

    if (output) {
      setLines((current) => [...current, `${initialPrompt} ${command}`, output]);
    } else {
      setLines((current) => [...current, `${initialPrompt} ${command}`, t.terminal.unknown]);
    }

    setInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCommand(input);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10]/95 shadow-[0_40px_100px_rgba(0,0,0,0.72)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
              <TerminalSquare className="h-4 w-4 text-zinc-100" />
              {t.terminal.title}
            </div>
          </div>
          <button
            type="button"
            onClick={onSkip}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
            aria-label={t.accessibility.skipIntro}
          >
            {t.terminal.skip}
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="max-h-[440px] overflow-auto bg-[#0b0b0d] p-5 font-mono text-sm text-zinc-100">
          <div className="mb-3 text-zinc-300">{t.terminal.intro}</div>
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Access is locked. Type 'start' or './start-portfolio' to launch the website.</div>
          {lines.map((line, index) => (
            <div key={`${line}-${index}`} className="whitespace-pre-wrap break-words text-zinc-100">
              {line}
            </div>
          ))}

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-emerald-300">{t.terminal.prompt}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border-none bg-transparent text-zinc-100 outline-none placeholder:text-zinc-500"
              spellCheck={false}
              autoCapitalize="none"
              autoComplete="off"
              placeholder="Type 'start'"
              aria-label={t.terminal.title}
            />
            <span className={`h-4 w-2 rounded-sm bg-white ${isTyping ? "animate-pulse" : ""}`} />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            help | about | projects | skills | contact
          </div>
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            {t.terminal.start}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
