import React from "react";
import styles from "./index.module.css";

import ButtonColorces from "@/utils/button_colorces";

const MainFeaturesList = () => {
  return (
    <div className={styles["features-list"]}>
      <div className={styles["features-list-title"]}>
        <span>1</span> <h3>Responsiv Dizayn</h3>
      </div>
      <div className={styles["features-list-title"]}>
        <span>2</span>
        <div className={styles["features-list-title-text"]}>
          <h3>SEO Optimizasiya</h3>
          <p>Axtarışlarda daha yüksək sıralama.</p>
        </div>
      </div>
      <div className={styles["features-list-title"]}>
        <span>3</span> <h3>İstifadəçi Hesabları</h3>
      </div>

      <div className={styles["features-list-button"]}>
        <ButtonColorces>Daha çox</ButtonColorces>
      </div>
    </div>
  );
};

export default MainFeaturesList;
