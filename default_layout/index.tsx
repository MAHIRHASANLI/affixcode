import React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import HeaderSection from "@/sections/(user)/header";
import FooterSection from "@/sections/(user)/footer";

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
