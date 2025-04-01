import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import image1 from "@/assets/images/main card.jpg";

const MainCard = () => {
  return (
    <div className={styles["main-card"]}>
      <Image
        fill
        alt="main-card"
        src={image1}
        className={styles["main-card-image-bigg"]}
      />
      <Image
        alt="main-card"
        src={image1}
        className={styles["main-card-image-small"]}
      />
    </div>
  );
};

export default MainCard;
