import React from "react";
import styles from "./index.module.css";
import BenefitsTitle from "@/components/benefits/benefits_title";
import OurBenefits from "@/components/benefits/our_benefits";
type Props = {};

const BenefitsSection = (props: Props) => {
  return (
    <section className="section">
      <div className={styles["benefits-grid"]}>
        <div className={styles["benefits-grid-item"]}>
          <BenefitsTitle />
        </div>
        <div className={styles["benefits-grid-item"]}>
          <OurBenefits />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
