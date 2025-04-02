import React from "react";
import styles from "./index.module.css";
import TitleComponent from "@/utils/title_section";
import Link from "next/link";
type Props = {};

const NavigationHighlight = (props: Props) => {
  return (
    <div className={styles["highlight-grid"]}>
      <div>
        <TitleComponent
          title="Veb və ERP həllərimizlə rəqəmsal dönüşümə keçin!"
          description=""
        />
      </div>
      <nav className={styles["links-container"]}>
        <div>
          {" "}
          <div className={styles.title}>
            <p>AFFIXCode</p>
          </div>
          <ul className={styles["links-wrapper"]}>
            <li>
              <Link href="">Haqqımızda</Link>
            </li>
            <li>
              <Link href="">Xidmətlər</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Əlaqə</Link>
            </li>
          </ul>
        </div>

        <div className={styles["services-wrapper"]}>
          <div className={styles.title}>
            <p>XİDMƏTLƏR</p>
          </div>
          <ul className={styles["links-wrapper"]}>
            <li>
              <Link href="/">Vebsaytların hazırlanması</Link>
            </li>
            <li>
              <Link href="/">Mobİl tətbİqlərİn hazırlanması</Link>
            </li>
            <li>
              <Link href="/">ERP sİstemlərİnİn hazırlanması</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationHighlight;
