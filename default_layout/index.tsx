import React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderSection from "@/sections/header";
import FooterSection from "@/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <HeaderSection />
      <div className="container">{children}</div>
      <FooterSection />
    </div>
  );
};

export default DefaultLayout;
