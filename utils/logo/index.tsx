import Link from "next/link";
import React from "react";
import Image from "next/image";
import img from "@/assets/images/logo web.png";
import styles from "./index.module.css";

const LogoComponent: React.FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.images}>
        <Image src={img} fill alt="affix code" />
      </div>
      AFFIXCode
    </Link>
  );
};

export default LogoComponent;
