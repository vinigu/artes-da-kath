import { shopeeStoreLink } from "@/content/portfolio";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsShop, BsWhatsapp } from "react-icons/bs";

const footerLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#ideias", label: "Ideias" },
  { href: "#processo-criativo", label: "Processo" },
  { href: "#shopee", label: "Shopee" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: BsInstagram,
  },
  {
    href: "https://wa.me/5511977725980?text=Olá!%20Quero%20criar%20minha%20arte%20personalizada.",
    label: "WhatsApp",
    Icon: BsWhatsapp,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    Icon: BsFacebook,
  },
  {
    href: shopeeStoreLink,
    label: "Shopee",
    Icon: BsShop,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand-mauve)]/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[color:var(--brand-mauve)]/70 bg-white/90 p-1.5 shadow-sm sm:h-14 sm:w-14">
            <Image
              src="/logos/logo-minimalista.png"
              alt="Logo Artes da Kath - Rodapé"
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-[color:var(--brand-brown)]">
              Artes da Kath
            </p>
            <p className="mt-1 text-sm text-zinc-600">Bordados & Amigurumis</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-mauve)]/70 bg-[color:var(--brand-cream)] px-3 py-1.5 text-xs text-[color:var(--brand-brown)]">
              <Image
                src="/logos/logo-site.png"
                alt="Selo da marca"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              Feito com carinho no Brasil
            </div>
          </div>
        </div>

        <div>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            © {new Date().getFullYear()} Artes da Kath. Todos os direitos
            reservados.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <nav
            aria-label="Links rápidos do rodapé"
            className="flex flex-wrap gap-4"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--brand-brown)] transition-colors hover:text-[color:var(--brand-rose)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${item.label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-mauve)]/70 bg-white/80 text-zinc-600 transition-all duration-300 hover:border-[color:var(--brand-rose)] hover:text-[color:var(--brand-rose)]"
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
