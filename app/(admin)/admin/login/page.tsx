import LoginContainer from "@/container/(admin)/login";
import React from "react";

import { Metadata } from "next";

const logo = "/images/logo-web.png";
export const metadata: Metadata = {
  title: "affixcode | Login",
  icons: {
    icon: logo,
  },
};

const LoginPage: React.FC = () => {
  return <LoginContainer />;
};

export default LoginPage;
