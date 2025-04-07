import React from "react";

import { Metadata } from "next";
import AdminContainer from "@/container/(admin)/dashboard";

const logo = "/images/logo-web.png";
export const metadata: Metadata = {
  title: "affixcode | Dashboard",
  icons: {
    icon: logo,
  },
};

const DashboardPage: React.FC = () => {
  // useEffect(() => {
  //   isTokenExpired();
  // });
  return <AdminContainer />;
};

export default DashboardPage;
