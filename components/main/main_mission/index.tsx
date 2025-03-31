import React from "react";
import styles from "./index.module.css";
import ButtonTransparent from "@/utils/button_transparent";
import Image from "next/image";

import img1 from "@/assets/images/main-sect-img1.webp";
import img2 from "@/assets/images/main-sect-img2.webp";

const MissionStatement = () => {
  return (
    <div>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image fill src={img1} alt="" />
        </div>
        <div className={styles.image}>
          <Image fill src={img2} alt="" />
        </div>
      </div>
      <div className={styles["mission-content"]}>
        <p>
          Bizim komandamız ideyanı gerçəyə çevirmək, funksional həllər yaratmaq
          üçün buradadır!
        </p>
      </div>
      <div>
        <ButtonTransparent>Daha çox</ButtonTransparent>
      </div>
    </div>
  );
};

export default MissionStatement;
