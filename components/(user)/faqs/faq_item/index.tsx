import React from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";
type Props = {
  question: string;
};

const FaqItem = ({ question }: Props) => {
  return (
    <div className={styles["faq-item"]}>
      <h6>{question}</h6>
      <FaPlus />
    </div>
  );
};

export default FaqItem;
