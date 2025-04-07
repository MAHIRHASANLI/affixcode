import ButtonColorful from "@/utils/button_colorful";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import LogoComponent from "@/utils/logo";
type Props = {};

const DesktopVersion = (props: Props) => {
  return (
    <div className={styles["desktop-nav-wrapper"]}>
      <div className={styles["desktop-logo"]}>
        <LogoComponent href="/" />
      </div>
      <div className={styles["desktop-menu"]}>
        <ul className={styles["desktop-links"]}>
          <li>
            <Link href="/">Haqqımızda</Link>{" "}
          </li>
          <li>
            <Link href="/#services">Xidmətlər</Link>{" "}
          </li>
          <li>
            <Link href="/#project">Layihələr</Link>{" "}
          </li>
          <li>
            <Link href="/#blog">Blog</Link>{" "}
          </li>
        </ul>
        <div className={styles["desktop-nav-btn"]}>
          <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
        </div>
      </div>
    </div>
  );
};

export default DesktopVersion;
