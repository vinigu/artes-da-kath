import { CtaButton } from "@/components/ui/cta-button";
import { contactWhatsAppLink } from "@/content/portfolio";
import { MessageCircleMore } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        className="rounded-[2rem] border border-[color:var(--brand-mauve)] px-8 py-12 text-white shadow-[0_24px_60px_rgba(111,71,58,0.16)] sm:px-10 lg:px-12"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-brown), var(--brand-rose))",
        }}
      >
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-cream)]">
            Fale conosco
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos criar algo especial para você?
          </h2>
          <p className="text-lg leading-8 text-zinc-100">
            Entre em contato para conversar sobre uma peça personalizada, uma
            ideia especial ou uma cotação rápida.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <CtaButton
              href={contactWhatsAppLink}
              label="Conversar no WhatsApp"
              ariaLabel="Falar com a Artes da Kath no WhatsApp"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-zinc-100">
              <MessageCircleMore size={16} />
              Resposta rápida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
