import DesktopVersion from "@/components/(user)/header/desktop";
import MobileVersion from "@/components/(user)/header/mobile";
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
