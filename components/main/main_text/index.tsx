import React from "react";
import styles from "./index.module.css";

const MainText = () => {
  return (
    <div className={styles["main-text"]}>
      <h1 className={styles["text-title"]}>
        Biznesiniz <span className={styles["text-bold"]}>Üçün</span> Mükəmməl
        Veb Sayt
      </h1>
    </div>
  );
};

export default MainText;
