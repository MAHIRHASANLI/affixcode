import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./index.module.css";

type Props = {
  title: string;
};

const OurAdvantagesItem = ({ title }: Props) => {
  return (
    <div className={styles["our-advantage-item"]}>
      <div className={styles.icon}>
        <FaCheck />
      </div>
      <div className={styles.title}>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default OurAdvantagesItem;
