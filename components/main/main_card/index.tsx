import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import image1 from "@/assets/images/main card.jpg";

const MainCard = () => {
  return (
    <div className={styles["main-card"]}>
      <Image
        fill
        alt="Unikal və peşəkar həllər, Brendinə dəyər qatan veb dizayn!"
        src={image1}
        className={styles["main-card-image-bigg"]}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        alt="Unikal və peşəkar həllər, Brendinə dəyər qatan veb dizayn!"
        src={image1}
        className={styles["main-card-image-small"]}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles["main-card-text"]}>
        <p>Unikal və peşəkar həllər, Brendinə dəyər qatan veb dizayn!</p>
      </div>
    </div>
  );
};

export default MainCard;
