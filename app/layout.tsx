import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import logo from "@/public/logo-web.svg";
const logo = "/logo-web.png";
export const metadata: Metadata = {
  title: "AFFIX Code | Ana səhifə",
  description:
    "AFFIX Code – Müasir veb saytların və ERP sistemlərinin hazırlanması. Biznesinizi onlayn inkişaf etdirmək üçün peşəkar İT həlləri təqdim edirik.",
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

// font-family: Gilroy, sans-serif;
const fonts = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
