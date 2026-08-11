import { CtaButton } from "@/components/ui/cta-button";
import { contactWhatsAppLink, highlights } from "@/content/portfolio";
import { heroFeaturedImage } from "@/content/portfolioData";
import { HeartHandshake, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="border-b border-[color:var(--brand-mauve)]/70 bg-[linear-gradient(135deg,rgba(255,246,236,0.95),rgba(255,255,255,0.95))]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--brand-rose)]">
              Artes da Kath
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[color:var(--brand-brown)] sm:text-5xl">
              Peças artesanais com história, carinho e identidade.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600">
              Cada bordado e amigurumi nasce para transformar emoção em uma obra
              única, feita à mão com dedicação.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <CtaButton
              href={contactWhatsAppLink}
              label="Crie sua arte personalizada"
              ariaLabel="Conversar sobre sua arte personalizada pelo WhatsApp"
            />
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-mauve)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-brown)] transition-colors hover:border-[color:var(--brand-rose)] hover:text-[color:var(--brand-rose)]"
            >
              Ver portfólio
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const iconMap = {
                "Feito à mão": Palette,
                "Peças personalizadas": Sparkles,
                "Atendimento acolhedor": HeartHandshake,
              } as const;
              const Icon = iconMap[item.title as keyof typeof iconMap];

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[color:var(--brand-mauve)]/70 bg-white/70 p-4 shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-full bg-[color:var(--brand-cream)] p-2 text-[color:var(--brand-rose)]">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-sm font-semibold text-[color:var(--brand-brown)]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[color:var(--brand-mauve)] bg-[color:var(--brand-cream)] shadow-[0_25px_60px_rgba(111,71,58,0.12)]">
          <Image
            src={heroFeaturedImage}
            alt="Bordado artístico da coleção Pequeno Príncipe"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
