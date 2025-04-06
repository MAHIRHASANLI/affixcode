import DesktopVersion from "@/components/header/desktop";
import MobileVersion from "@/components/header/mobile";
import React from "react";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <header className="fluid">
      <nav className="container">
        {/*//! DESKTOP VERSIYA */}
        <DesktopVersion />
        {/*//! MOBILE VERSIYA */}
        <MobileVersion />
      </nav>
    </header>
  );
};

export default HeaderSection;
