import { SectionHeading } from "@/components/ui/section-heading";
import { Clock3, Gift, HandHeart, Sparkles, WandSparkles } from "lucide-react";

const creativeSteps = [
  {
    title: "A ideia encontra os fios",
    description:
      "Selecionamos com cuidado fios, tecidos e paleta de cores para refletir a personalidade da peça e a história de quem vai recebê-la.",
    Icon: WandSparkles,
  },
  {
    title: "Tempo de dedicação real",
    description:
      "Cada bordado e amigurumi é construído no ritmo do feito à mão: ponto a ponto, com paciência e atenção total aos detalhes.",
    Icon: Clock3,
  },
  {
    title: "Acabamento manual exclusivo",
    description:
      "A finalização é minuciosa para garantir textura, durabilidade e identidade, tornando cada criação única e cheia de afeto.",
    Icon: Sparkles,
  },
  {
    title: "Envio com carinho",
    description:
      "Antes de chegar até você, a peça passa por revisão final e é preparada com cuidado especial para encantar desde a abertura.",
    Icon: Gift,
  },
] as const;

export function CreativeProcessSection() {
  return (
    <section
      id="processo-criativo"
      className="border-b border-[color:var(--brand-mauve)]/70 bg-[radial-gradient(circle_at_top_right,rgba(201,111,111,0.12),transparent_42%),linear-gradient(165deg,rgba(255,246,236,0.88),rgba(255,255,255,0.96))]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article className="relative overflow-hidden rounded-[2rem] border border-[color:var(--brand-mauve)]/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(255,246,236,0.92))] p-8 shadow-[0_24px_60px_rgba(111,71,58,0.12)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[color:var(--brand-rose)]/10 blur-2xl" />
            <div className="relative space-y-5">
              <SectionHeading
                eyebrow="Processo Criativo"
                title="Uma peça nasce em camadas de cuidado"
                description="Cada criação passa por escuta, escolha de materiais, execução artesanal e revisão final para chegar até você com alma e presença."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--brand-mauve)]/70 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-rose)]">
                    Feito à mão
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Cada ponto leva tempo, atenção e intenção.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--brand-mauve)]/70 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-rose)]">
                    Exclusividade
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Nenhuma peça sai igual à outra.
                  </p>
                </div>
              </div>

              <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-mauve)]/70 bg-white/80 px-4 py-2 text-sm text-zinc-700">
                <HandHeart
                  size={16}
                  className="text-[color:var(--brand-rose)]"
                />
                A criação pode ser adaptada à sua história.
              </p>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {creativeSteps.map((step, index) => (
              <article
                key={step.title}
                className={`relative flex h-full flex-col rounded-3xl border border-[color:var(--brand-mauve)]/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(111,71,58,0.1)] ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-cream)] text-[color:var(--brand-rose)]">
                  <step.Icon size={22} />
                </div>

                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--brand-mauve)]/70 bg-[color:var(--brand-cream)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-brown)]">
                  Etapa {index + 1}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-[color:var(--brand-brown)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
