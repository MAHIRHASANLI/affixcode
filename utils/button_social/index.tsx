import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { MdArrowOutward } from "react-icons/md";
type Props = {
  link: string;
  text: string;
};

const ButtonSocial = ({ link, text }: Props) => {
  return (
    <Link href={link} className={styles.button} target="_blank">
      {text} <MdArrowOutward />
    </Link>
  );
};

export default ButtonSocial;
