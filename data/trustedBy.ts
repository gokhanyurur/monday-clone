export type Brand = {
  title?: string;
  logo?: string;
};

export interface trustedByCompanies {
  desktopBrands: Brand[];
  mobileBrands: Brand[];
}

export const trustedBy: trustedByCompanies = {
  desktopBrands: [
    {
      title: "Hulu",
      logo: "hulu.png",
    },
    {
      title: "BD",
      logo: "bd.png",
    },
    {
      title: "Canva",
      logo: "canva.png",
    },
    {
      title: "NHL",
      logo: "nhl.png",
    },
    {
      title: "Coca Cola",
      logo: "coca-cola.png",
    },
    {
      title: "HubSpot",
      logo: "hubspot.png",
    },
    {
      title: "EA",
      logo: "ea.png",
    },
    {
      title: "NBCUniversal",
      logo: "nbc-universal.png",
    },
    {
      title: "Universal Music Group",
      logo: "universal-music-group.png",
    },
  ],
  mobileBrands: [
    {
      title: "BBC Studios",
      logo: "bbc-studios.png",
    },
    {
      title: "Universal Music Group",
      logo: "universal-music-group.png",
    },
    {
      title: "Adobe",
      logo: "adobe.png",
    },
    {
      title: "Coca Cola",
      logo: "coca-cola.png",
    },
    {
      title: "NBC",
      logo: "nbc.png",
    },
  ],
};
