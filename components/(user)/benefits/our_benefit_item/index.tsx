import React from "react";
import styles from "./index.module.css";
type Props = {
  benefit: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
};

const OurBenefitItem = ({ benefit }: Props) => {
  return (
    <div className={styles["our-benefit-item"]}>
      <div className={styles.icon}>{benefit.icon}</div>
      <div className={styles.title}>
        <h4>{benefit.title}</h4>
      </div>
      <div className={styles.description}>
        <p>{benefit.description}</p>
      </div>
    </div>
  );
};

export default OurBenefitItem;
