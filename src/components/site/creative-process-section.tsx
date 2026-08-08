import { SectionHeading } from "@/components/ui/section-heading";
import { Clock3, Gift, HandHeart, Sparkles, WandSparkles } from "lucide-react";

const creativeSteps = [
  {
    title: "Escolha dos Fios e Materiais",
    description:
      "Selecionamos com cuidado fios, tecidos e paleta de cores para refletir a personalidade da peça e a história de quem vai recebê-la.",
    Icon: WandSparkles,
  },
  {
    title: "Tempo de Dedicação Artesanal",
    description:
      "Cada bordado e amigurumi é construído no ritmo do feito à mão: ponto a ponto, com paciência e atenção total aos detalhes.",
    Icon: Clock3,
  },
  {
    title: "Acabamento Manual Exclusivo",
    description:
      "A finalização é minuciosa para garantir textura, durabilidade e identidade, tornando cada criação única e cheia de afeto.",
    Icon: Sparkles,
  },
  {
    title: "Envio com Carinho",
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
        <SectionHeading
          eyebrow="Processo Criativo"
          title="100% artesanal, do primeiro fio ao envio"
          description="Cada peça nasce com intenção: unimos técnica, tempo e sensibilidade para transformar ideias em bordados e amigurumis exclusivos."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {creativeSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex h-full flex-col rounded-3xl border border-[color:var(--brand-mauve)]/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(111,71,58,0.1)]"
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

        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-mauve)]/70 bg-white/85 px-4 py-2 text-sm text-zinc-700">
          <HandHeart size={16} className="text-[color:var(--brand-rose)]" />
          Cada criação é autoral e pode ser personalizada para a sua história.
        </p>
      </div>
    </section>
  );
}
