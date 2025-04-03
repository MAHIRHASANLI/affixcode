import React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import HeaderSection from "@/sections/header";
import FooterSection from "@/sections/footer";

type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection />
      <main className="container">{children}</main>
      <FooterSection />
    </>
  );
};

export default DefaultLayout;
