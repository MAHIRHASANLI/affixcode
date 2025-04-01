import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
type Props = {
  children: React.ReactNode;
};

const ButtonTransparent = ({ children }: Props) => {
  return (
    <div>
      <Link href="/" className={styles.button}>
        <span className={styles["not-touched"]}>{children}</span>
        <span className={styles.touched}>{children}</span>
        <IoMdArrowForward />
      </Link>
    </div>
  );
};

export default ButtonTransparent;
