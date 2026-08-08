export type PublicImagePath = `/${string}`;

export type PortfolioCategoryId = "bordados" | "amigurumis";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  images: readonly [PublicImagePath, ...PublicImagePath[]];
};

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  summary: string;
  items: readonly PortfolioItem[];
};

export type PortfolioCatalog = Record<PortfolioCategoryId, PortfolioCategory>;

export const heroFeaturedImage: PublicImagePath =
  "/portfolio/bordados/pequno-principe/bordado-pequeno-principe-2.png";

export const portfolioCatalog: PortfolioCatalog = {
  bordados: {
    id: "bordados",
    label: "Bordados",
    summary:
      "Trabalhos bordados com texturas marcantes e paleta suave. Cada peça é pensada para transmitir carinho, presença e delicadeza.",
    items: [
      {
        id: "bordado-casal",
        title: "Coleção Casal",
        description:
          "Série romântica em tons terrosos, com composições delicadas para decorar e presentear.",
        imageAlt: "Bordados da coleção Casal com composição romântica",
        images: [
          "/portfolio/bordados/casal/bordado-casal-1.png",
          "/portfolio/bordados/casal/bordado-casal-2.png",
          "/portfolio/bordados/casal/bordado-casal-3.jpg",
          "/portfolio/bordados/casal/bordado-casal-4.png",
          "/portfolio/bordados/casal/bordado-casal-5.jpg",
        ],
      },
      {
        id: "bordado-isaac",
        title: "Linha Isaac",
        description:
          "Peças infantis personalizadas para quarto de bebê, com letras e detalhes suaves.",
        imageAlt: "Bordados infantis personalizados da linha Isaac",
        images: [
          "/portfolio/bordados/isaac/bordado-isaac-1.png",
          "/portfolio/bordados/isaac/bordado-isaac-2.png",
          "/portfolio/bordados/isaac/bordado-isaac-3.png",
          "/portfolio/bordados/isaac/bordado-isaac-4.png",
        ],
      },
      {
        id: "bordado-paz",
        title: "Série Paz em Linhas",
        description:
          "Composições leves com mensagem serena para ambientes de descanso e acolhimento.",
        imageAlt: "Bordados da série Paz em Linhas com detalhes florais",
        images: [
          "/portfolio/bordados/paz/bordado-paz-1.png",
          "/portfolio/bordados/paz/bordado-paz-2.png",
          "/portfolio/bordados/paz/bordado-paz-3.png",
          "/portfolio/bordados/paz/bordado-paz-4.png",
          "/portfolio/bordados/paz/bordado-paz-5.png",
        ],
      },
      {
        id: "bordado-pequeno-principe",
        title: "Coleção Pequeno Príncipe",
        description:
          "Inspiração lúdica e nostálgica, com traços cuidadosos e acabamento artesanal.",
        imageAlt: "Bordados inspirados no Pequeno Príncipe",
        images: [
          "/portfolio/bordados/pequno-principe/bordado-pequeno-principe-1.png",
          "/portfolio/bordados/pequno-principe/bordado-pequeno-principe-2.png",
          "/portfolio/bordados/pequno-principe/bordado-pequeno-principe-3.png",
          "/portfolio/bordados/pequno-principe/bordado-pequeno-principe-4.png",
        ],
      },
    ],
  },
  amigurumis: {
    id: "amigurumis",
    label: "Amigurumis",
    summary:
      "Amigurumis cuidadosamente modelados para encantar, com texturas confortáveis e detalhes divertidos.",
    items: [
      {
        id: "amigurumi-lembrancinhas",
        title: "Lembrancinhas",
        description:
          "Mini peças para presentes afetivos e eventos especiais, com acabamento delicado.",
        imageAlt: "Lote de amigurumis para lembrancinhas artesanais",
        images: [
          "/portfolio/amigurumis/lembrancinha/amigurumi-1.png",
          "/portfolio/amigurumis/lembrancinha/amigurumi-2.jpg",
          "/portfolio/amigurumis/lembrancinha/amigurumi-3.png",
          "/portfolio/amigurumis/lembrancinha/amigurumi-4.png",
          "/portfolio/amigurumis/lembrancinha/amigurumi-5.jpg",
          "/portfolio/amigurumis/lembrancinha/amigurumi-6.png",
        ],
      },
      {
        id: "amigurumi-grandes",
        title: "Tamanho Grande",
        description:
          "Peças com maior presença visual para decorar e criar pontos de destaque no ambiente.",
        imageAlt: "Coleção de amigurumis grandes para decoração",
        images: [
          "/portfolio/amigurumis/grandes/amigurumi-1.png",
          "/portfolio/amigurumis/grandes/amigurumi-2.png",
          "/portfolio/amigurumis/grandes/amigurumi-3.png",
          "/portfolio/amigurumis/grandes/amigurumi-4.png",
          "/portfolio/amigurumis/grandes/amigurumi-5.png",
          "/portfolio/amigurumis/grandes/amigurumi-6.png",
          "/portfolio/amigurumis/grandes/amigurumi-7.png",
          "/portfolio/amigurumis/grandes/amigurumi-8.png",
          "/portfolio/amigurumis/grandes/amigurumi-9.png",
          "/portfolio/amigurumis/grandes/amigurumi-10.png",
        ],
      },
    ],
  },
};
