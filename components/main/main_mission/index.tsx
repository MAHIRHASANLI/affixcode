import React from "react";
import styles from "./index.module.css";
import ButtonColorces from "@/utils/button_colorces";
import Image from "next/image";

import img1 from "@/assets/images/main-sect-img1.webp";
import img2 from "@/assets/images/main-sect-img2.webp";

const MissionStatement = () => {
  return (
    <div>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            fill
            src={img1}
            alt="affix code"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.image}>
          <Image
            fill
            src={img2}
            alt="affix code"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles["mission-content"]}>
        <p>
          Bizim komandamız ideyanı gerçəyə çevirmək, funksional həllər yaratmaq
          üçün buradadır!
        </p>
      </div>
      <div>
        <ButtonColorces>Daha çox</ButtonColorces>
      </div>
    </div>
  );
};

export default MissionStatement;
