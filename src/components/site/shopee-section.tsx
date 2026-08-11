import { CtaButton } from "@/components/ui/cta-button";
import { shopeeStoreLink } from "@/content/portfolio";
import { ShieldCheck, ShoppingBag } from "lucide-react";

export function ShopeeSection() {
  return (
    <section
      id="shopee"
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      aria-label="Comprar peças prontas na Shopee"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--brand-mauve)]/80 bg-[linear-gradient(140deg,#fff7ef_0%,#ffffff_55%,#fff1e5_100%)] px-8 py-12 shadow-[0_24px_60px_rgba(111,71,58,0.12)] sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#f97316]/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-[#fb923c]/10 blur-2xl" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#fb923c]/40 bg-[#fff0e2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a3412]">
            <ShoppingBag size={14} />
            Loja Oficial na Shopee
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--brand-brown)] sm:text-4xl">
            Prefere levar uma peça pronta com compra segura?
          </h2>

          <p className="text-lg leading-8 text-zinc-700">
            Além das peças personalizadas, você também pode adquirir criações
            prontas da Artes da Kath na Shopee, com pagamento protegido,
            acompanhamento do pedido e toda a praticidade da plataforma.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <CtaButton
              href={shopeeStoreLink}
              label="Visitar loja na Shopee"
              ariaLabel="Abrir loja oficial da Artes da Kath na Shopee"
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-[#fdba74]/50 bg-white/80 px-4 py-2 text-sm text-[#9a3412]">
              <ShieldCheck size={16} />
              Compra segura pela plataforma
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
