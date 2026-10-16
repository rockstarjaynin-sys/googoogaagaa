import { useRef, useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import type { SupportedLocale, TranslationDictionary } from "@/data/translations";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

interface ContactProps {
  locale: SupportedLocale;
  t: TranslationDictionary;
}

const Contact = ({ t }: ContactProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert(t.contact.validation.name);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert(t.contact.validation.email);
      return;
    }

    if (!formData.message.trim()) {
      alert(t.contact.validation.message);
      return;
    }

    window.alert("Thanks for your message. I’ll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="transition-all duration-1000" style={{ transform: `translate3d(0, ${(1 - progress) * 80}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-muted-foreground">{t.contact.eyebrow}</p>
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              {t.contact.title1}
              <span className="block text-gradient">{t.contact.title2}</span>
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p>

            <div className="mb-10 space-y-6">
              <a href="mailto:rockstarjaynin@gmail.com" className="group flex items-center gap-4 text-foreground transition hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="hover-underline">{t.contact.emailLabel}</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span>{t.contact.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {t.contact.social.map((link: string) => (
                <a key={link} href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-muted-foreground transition hover:border-white/25 hover:text-white">
                  {link}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="transition-all duration-1000" style={{ transform: `translate3d(0, ${(1 - progress) * 60}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm md:p-10">
              <div className="space-y-8">
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">{t.contact.form.name}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-white/40"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">{t.contact.form.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-white/40"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">{t.contact.form.message}</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-white/40"
                    required
                  />
                </div>

                <button type="submit" aria-label={t.accessibility.contactSubmit} className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-[1.01]">
                  <span>{t.contact.form.submit}</span>
                  <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
