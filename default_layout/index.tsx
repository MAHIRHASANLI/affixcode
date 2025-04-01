import React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Montserrat } from "next/font/google";
import HeaderSection from "@/sections/header";
import FooterSection from "@/sections/footer";

const fonts = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "sans-serif"],
});

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={fonts.className}>
      <HeaderSection />
      <div className="container">{children}</div>
      <FooterSection />
    </div>
  );
};

export default DefaultLayout;
