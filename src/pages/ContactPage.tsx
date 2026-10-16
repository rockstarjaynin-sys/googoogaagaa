import { FormEvent, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowRight, Mail, Send } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import type { TranslationDictionary } from "@/data/translations";

const ContactPage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { t } = useOutletContext<{ t: TranslationDictionary }>();
  const contactCopy = t.contact;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:rockstarjaynin@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={sectionRef} className="page-shell pb-24 pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="content-surface rounded-[2rem] p-8" style={{ transform: `translate3d(0, ${(1 - progress) * 80}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">{contactCopy.eyebrow}</p>
            <h2 className="font-display text-4xl leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              {contactCopy.title}
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground">
              <a href="mailto:rockstarjaynin@gmail.com" className="flex items-center gap-3 text-lg text-foreground transition hover:text-white">
                <Mail className="h-5 w-5" />
                rockstarjaynin@gmail.com
              </a>
              <p className="max-w-md leading-relaxed">{contactCopy.info}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="content-surface rounded-[2rem] p-8" style={{ transform: `translate3d(0, ${(1 - progress) * 110}px, 0)`, opacity: 0.2 + progress * 0.8 }}>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{contactCopy.name}</label>
                <input
                  aria-label={contactCopy.placeholderName}
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-white/30"
                  placeholder={contactCopy.placeholderName}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{contactCopy.email}</label>
                <input
                  aria-label={contactCopy.email}
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-white/30"
                  placeholder={contactCopy.placeholderEmail}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{contactCopy.message}</label>
                <textarea
                  aria-label={contactCopy.message}
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-white/30"
                  placeholder={contactCopy.placeholderMessage}
                  required
                />
              </div>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:translate-x-0.5">
                {contactCopy.send}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
