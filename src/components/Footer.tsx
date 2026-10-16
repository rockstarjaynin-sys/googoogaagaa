import type { SupportedLocale, TranslationDictionary } from "@/data/translations";

interface FooterProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
}

const Footer = ({ t }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="font-display text-2xl font-semibold tracking-tight text-foreground">GS<span className="text-muted-foreground">.</span></div>

        <div className="text-center text-sm text-muted-foreground">
          <span>© {currentYear} </span>
          <span className="text-foreground">{t.footer.credit}</span>
          <span> · {t.footer.right}</span>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white"
        >
          <span className="hover-underline">{t.footer.back}</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
