import ButtonColorful from "@/utils/button_colorful";
import TitleComponent from "@/utils/title_section";
import React from "react";

import styles from "./index.module.css";
const ServicesIntro = () => {
  return (
    <div>
      <div className={styles["services-intro-title"]}>
        <TitleComponent
          title="Bizim Xidmətlərimiz"
          description="İşinizi böyütmək və rəqəmsal dünyada güclü bir mövqe əldə etmək üçün peşəkar və innovativ həllər təklif edirik."
        />
      </div>
      <div className={styles["services-intro-button"]}>
        <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
      </div>
    </div>
  );
};

export default ServicesIntro;
