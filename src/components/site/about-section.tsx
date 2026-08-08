import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-[color:var(--brand-mauve)]/70 bg-white/70"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[color:var(--brand-mauve)] bg-[color:var(--brand-cream)]">
          <Image
            src="/logos/logo-ambientado.png"
            alt="Identidade visual da Artes da Kath em ambiente artesanal"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />

          <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--brand-mauve)] bg-white/90 p-2 shadow-sm">
            <Image
              src="/logos/logo-site.png"
              alt="Selo Artes da Kath"
              width={52}
              height={52}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <SectionHeading
            eyebrow="Sobre"
            title="A história por trás das artes"
            description="O projeto nasceu do amor pela arte manual, da vontade de criar peças únicas e de transformar sentimentos em detalhes que encantam."
          />
          <p className="text-lg leading-8 text-zinc-600">
            A Artes da Kath surgiu do encontro entre sensibilidade e tecnica.
            Cada encomenda e desenvolvida com escuta atenta, escolha cuidadosa
            de materiais e acabamento minucioso para traduzir historias em
            pecas autorais, afetuosas e cheias de personalidade.
          </p>
        </div>
      </div>
    </section>
  );
}
