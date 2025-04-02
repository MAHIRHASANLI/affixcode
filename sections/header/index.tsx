import DesktopVersion from "@/components/header/desktop";
import React from "react";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <header className="fluid">
      <nav className="container">
        {/*//! DESKTOP VERSIYA */}
        <DesktopVersion />
        {/*//! MOBILE VERSIYA */}
      </nav>
    </header>
  );
};

export default HeaderSection;
