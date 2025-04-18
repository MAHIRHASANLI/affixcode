import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

type Props = {};

const FooterLegalNotice = (props: Props) => {
  return (
    <div className={styles["legal-notice"]}>
      <p>@2025 affixcode</p>
      <p>All rights are reserved</p>
      <p>
        Powered by <Link href="/">AFFIXCODE</Link>
      </p>
    </div>
  );
};

export default FooterLegalNotice;
