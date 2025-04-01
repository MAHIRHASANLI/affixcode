import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
type Props = {
  children: React.ReactNode;
};

const ButtonColorces = ({ children }: Props) => {
  return (
    <div>
      <Link href="/" className={styles.button}>
        <span className={styles["not-touched"]}>{children}</span>
        <span className={styles.touched}>{children}</span>
        <BsArrowRight />
      </Link>
    </div>
  );
};

export default ButtonColorces;
