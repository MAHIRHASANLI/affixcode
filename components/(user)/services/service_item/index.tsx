import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import styles from "./index.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const ServicesItem = () => {
  return (
    <div className={styles["services"]}>
      <div className={styles["services-item"]}>
        <div className={styles["services-item-title"]}>
          <span>1</span>
          <h3>Saytların hazırlanması</h3>
        </div>
        <div className={styles["services-item-arrow"]}>
          <BsArrowRight />
        </div>
      </div>
      <div className={styles["services-item"]}>
        <div className={styles["services-item-title"]}>
          <span>2</span>
          <h3>Mobil tətbiqlərin hazırlanması</h3>
        </div>
        <div className={styles["services-item-arrow"]}>
          <BsArrowRight />
        </div>
      </div>
      <div className={styles["services-item"]}>
        <div className={styles["services-item-title"]}>
          <span>3</span>
          <h3>ERP sistemlərinin hazırlanması</h3>
        </div>
        <div className={styles["services-item-arrow"]}>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
