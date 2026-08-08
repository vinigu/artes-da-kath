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
      "Trabalhos bordados com texturas marcantes e paleta suave. Cada peça e pensada para transmitir carinho, presenca e delicadeza.",
    items: [
      {
        id: "bordado-casal",
        title: "Colecao Casal",
        description:
          "Serie romantica em tons terrosos, com composicoes delicadas para decorar e presentear.",
        imageAlt: "Bordados da colecao casal com composicao romantica",
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
          "Pecas infantis personalizadas para quarto de bebe, com letras e detalhes suaves.",
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
        title: "Serie Paz em Linhas",
        description:
          "Composicoes leves com mensagem serena para ambientes de descanso e acolhimento.",
        imageAlt: "Bordados da serie Paz em Linhas com detalhes florais",
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
        title: "Colecao Pequeno Principe",
        description:
          "Inspiracao ludica e nostalgica com tracos cuidadosos e acabamento artesanal.",
        imageAlt: "Bordados inspirados no Pequeno Principe",
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
      "Amigurumis cuidadosamente modelados para encantar, com texturas confortaveis e detalhes divertidos.",
    items: [
      {
        id: "amigurumi-lembrancinhas",
        title: "Lembrancinhas",
        description:
          "Mini pecas para presentes afetivos e eventos especiais, com acabamento delicado.",
        imageAlt: "Lote de amigurumis lembrancinhas artesanais",
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
          "Pecas com maior presenca visual para decorar e criar pontos de destaque no ambiente.",
        imageAlt: "Colecao de amigurumis grandes para decoracao",
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
