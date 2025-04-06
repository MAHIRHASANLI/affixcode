import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import image from "@/assets/images/login card img.png";
type Props = {};

const LoginCard = (props: Props) => {
  return (
    <div className={styles["login-card-wrapper"]}>
      <div className={styles["login-image"]}>
        <Image
          src={image}
          alt="login"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default LoginCard;
