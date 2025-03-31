import React from "react";
import styles from "./index.module.css";
import ButtonTransparent from "@/utils/button_transparent";

const MainFeaturesList = () => {
  return (
    <div className={styles["features-list"]}>
      <div className={styles["features-list-title"]}>
        <span>1</span> <p>Responsiv Dizayn</p>
      </div>
      <div className={styles["features-list-title"]}>
        <span>2</span>
        <div className={styles["features-list-title-text"]}>
          <p>SEO Optimizasiya</p>
          <p>Axtarışlarda daha yüksək sıralama.</p>
        </div>
      </div>
      <div className={styles["features-list-title"]}>
        <span>3</span> <p>İstifadəçi Hesabları</p>
      </div>

      <div className={styles["features-list-button"]}>
        <ButtonTransparent>Daha çox</ButtonTransparent>
      </div>
    </div>
  );
};

export default MainFeaturesList;
