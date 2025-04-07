import MessageContainer from "@/container/(admin)/message";
import { Metadata } from "next";
import React from "react";

const logo = "/images/logo-web.png";
export const metadata: Metadata = {
  title: "affixcode | Message",
  icons: {
    icon: logo,
  },
};

const PessagePage: React.FC = () => {
  return <MessageContainer />;
};

export default PessagePage;
