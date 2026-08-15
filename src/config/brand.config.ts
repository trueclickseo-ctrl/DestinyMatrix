// Brand Configuration for Souliography
export interface BrandConfig {
  name: string;
  codename: string;
  domain: string;
  tagline: string;
  taglineOptions: string[];
  logo: {
    wordmark: string;
    symbol: string;
    favicon: string;
    ogDefaultImage: string;
  };
}

export const brandConfig: BrandConfig = {
  name: "Souliography",
  codename: "DestinyMatrix",
  domain: "souliography.com",
  tagline: "Mapping the Architecture of Your Soul",
  taglineOptions: [
    "Mapping the Architecture of Your Soul",
    "Your Blueprint to Self-Discovery",
    "Unveiling the Patterns of Being",
    "The Complete Universal Self-Discovery Platform",
    "Decode Your Destiny. Express Your Soul.",
  ],
  logo: {
    wordmark: "Souliography",
    symbol: "✨",
    favicon: "/favicon.svg",
    horizontal: "/logo-horizontal.svg",
    ogDefaultImage: "/og-souliography.png",
  },
};
