import HomeContainer from "@/container/(user)/home";
import { Metadata } from "next";

const logo = "/images/logo-web.png";
export const metadata: Metadata = {
  metadataBase: new URL("https://affixcode.az"),
  title: "affixcode | Ana səhifə",
  description:
    "affixcode – Müasir veb saytların və ERP sistemlərinin hazırlanması. Biznesinizi onlayn inkişaf etdirmək üçün peşəkar İT həlləri təqdim edirik.",
  keywords: [
    "veb sayt hazırlanması",
    "ERP sistemləri",
    "mobil tətbiq",
    "web development",
    "AFFIX Code",
    "affix code",
    "affixcode",
    "affix",
  ],
  icons: {
    icon: logo, // logo-ya tam URL əlavə edin
  },

  openGraph: {
    title: "AFFIX Code – Veb Sayt və ERP Sistemlərinin Hazırlanması",
    description:
      "AFFIX Code ilə biznesinizi onlayn inkişaf etdirin. Veb sayt, ERP və mobil tətbiqlərin hazırlanması.",
    url: "https://affixcode.az",
    siteName: "AFFIX Code",
    images: [
      {
        url: logo, // logo-ya tam URL əlavə edin
        width: 1200,
        height: 630,
        alt: "AFFIX Code",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFFIX Code – Veb Sayt və ERP Sistemləri",
    description:
      "Müasir və peşəkar İT həlləri ilə biznesinizi inkişaf etdirin.",
    images: [logo], // logo-ya tam URL əlavə edin
  },
};

const HomePage: React.FC = () => {
  return <HomeContainer />;
};

export default HomePage;
