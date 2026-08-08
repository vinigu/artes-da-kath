import { SectionHeading } from "@/components/ui/section-heading";
import {
  Boxes,
  MessageSquareQuote,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    title: "A Ideia e o Orçamento",
    description:
      "Você compartilha sua inspiração e alinhamos formato, prazo e investimento para a encomenda.",
    Icon: MessageSquareQuote,
  },
  {
    title: "Escolha dos Materiais",
    description:
      "Selecionamos fios, tecidos e paleta de cores que melhor representam o estilo da sua peça.",
    Icon: Boxes,
  },
  {
    title: "Confecção com Amor",
    description:
      "Cada ponto é feito à mão com atenção aos detalhes para garantir acabamento autoral e delicado.",
    Icon: Sparkles,
  },
  {
    title: "Envio e Entrega",
    description:
      "Finalizamos com cuidado, embalamos com carinho e despachamos sua arte pronta para encantar.",
    Icon: PackageCheck,
  },
];

export function ProcessoCriativoSection() {
  return (
    <section
      id="processo-criativo"
      className="border-b border-[color:var(--brand-mauve)]/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.85),rgba(255,246,236,0.85))]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por Trás da Agulha"
          title="Nosso Processo Criativo"
          description="Da primeira conversa ao envio, cada etapa existe para transformar sua ideia em uma peça artesanal única e memorável."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex h-full flex-col rounded-3xl border border-[color:var(--brand-mauve)]/70 bg-white/85 p-6 shadow-[0_16px_45px_rgba(111,71,58,0.1)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-cream)] text-[color:var(--brand-rose)]">
                <step.Icon size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-rose)]">
                Etapa {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[color:var(--brand-brown)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
