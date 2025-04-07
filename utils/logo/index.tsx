import Link from "next/link";
import React from "react";
import Image from "next/image";
import img from "@/assets/images/logo web.png";
import styles from "./index.module.css";

interface LogoProps {
  href: string;
}

const LogoComponent: React.FC<LogoProps> = ({ href }) => {
  return (
    <Link href={href} className={styles.logo}>
      <div className={styles.images}>
        <Image
          src={img}
          fill
          alt="affix code"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      affixcode
    </Link>
  );
};

export default LogoComponent;
