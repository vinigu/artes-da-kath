const DEFAULT_SITE_URL = "https://artesdakath.com.br";

function normalizeSiteUrl(rawUrl?: string): string {
  const value = rawUrl?.trim();

  if (!value) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const parsed = new URL(withProtocol);
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL,
);

export const siteName = "Artes da Kath";

export const defaultSeoDescription =
  "Bordados e amigurumis personalizados feitos à mão com carinho, identidade e acabamento artesanal.";

export const defaultSeoKeywords = [
  "Artes da Kath",
  "bordado personalizado",
  "amigurumi artesanal",
  "artesanato personalizado",
  "presentes personalizados",
  "bordado feito a mao",
] as const;

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, siteUrl).toString();
}
