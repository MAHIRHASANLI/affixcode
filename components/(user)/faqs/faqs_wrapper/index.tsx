import React from "react";
import styles from "./index.module.css";
import FaqItem from "../faq_item";
type Props = {};

const FaqWrapper = (props: Props) => {
  const faqs = [
    {
      question: "Sizinlə necə əlaqə saxlaya bilərəm?",
    },
    {
      question: "Mənim layihəm nə qədər vaxt alacaq?",
    },
    {
      question: "Ödəniş üsulları nədir?",
    },
    {
      question: "Saytın dizaynı mənim istəyimə uyğun olacaqmı?",
    },
    {
      question: "Dizaynı öz istəyimə uyğunlaşdıra bilərəm?",
    },
  ];
  return (
    <div className={styles["faq-wrapper"]}>
      <div className={styles["faq-header"]}>
        <h3>FAQ’S</h3>
      </div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} />
      ))}
    </div>
  );
};

export default FaqWrapper;
