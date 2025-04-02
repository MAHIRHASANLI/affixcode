import type { Metadata } from "next";

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
  ],
  icons: {
    icon: "/images/logo-web.svg",
  },
  openGraph: {
    title: "AFFIX Code – Veb Sayt və ERP Sistemlərinin Hazırlanması",
    description:
      "AFFIX Code ilə biznesinizi onlayn inkişaf etdirin. Veb sayt, ERP və mobil tətbiqlərin hazırlanması.",
    url: "https://affixcode.az",
    siteName: "AFFIX Code",
    images: [
      {
        url: "https://affixcode.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "AFFIX Code Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFFIX Code – Veb Sayt və ERP Sistemləri",
    description:
      "Müasir və peşəkar İT həlləri ilə biznesinizi inkişaf etdirin.",
    images: ["https://affixcode.com/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
