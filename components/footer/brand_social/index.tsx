import React from "react";
import styles from "./index.module.css";
import ButtonSocial from "@/utils/button_social";
import LogoComponent from "@/utils/logo";
type Props = {};

const BrandSocial = (props: Props) => {
  const socials = [
    {
      link: "https://www.instagram.com/affixcode",
      text: "İnstagram",
    },
    {
      link: "https://www.linkedin.com/in/mahir-hasanli-002413273/",
      text: "Linkedn",
    },
    {
      link: "https://wa.me/+994777113121",
      text: "WhatsApp",
    },
  ];
  return (
    <div className={styles["brand-socials"]}>
      <div>
        <LogoComponent />
      </div>
      <div className={styles["socials-wrapper"]}>
        {socials.map(({ link, text }, index) => (
          <ButtonSocial key={index} link={link} text={text} />
        ))}
      </div>
    </div>
  );
};

export default BrandSocial;
