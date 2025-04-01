import React from "react";
import styles from "./index.module.css";
import OurBenefitItem from "../our_benefit_item";
import { TbSettingsFilled } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
type Props = {};

const OurBenefits = (props: Props) => {
  const benefits = [
    {
      icon: <TbSettingsFilled />,
      title: "Fərdiləşdirilmiş Həllər",
      description: "Hər müştəri üçün unikal və ehtiyaca uyğun dizaynlar",
    },
    {
      icon: <CiMobile2 />,
      title: "Mobil Uyğun Dizayn",
      description: "Saytınız hər cihazda mükəmməl işləyəcək",
    },
    {
      icon: <TbSettingsFilled />,
      title: "SEO Dostu",
      description: "Saytınızın axtarış motorlarında üst sıralarda yer alması",
    },
    {
      icon: <TbSettingsFilled />,
      title: "Yüksək Performans",
      description: "Sürətli yüklənmə və etibarlı performans",
    },
  ];
  return (
    <div className={styles["ourbenefits-grid"]}>
      {benefits.map((benefit, index) => (
        <div key={index} className={styles["ourbenefits-grid-item"]}>
          <OurBenefitItem benefit={benefit} />
        </div>
      ))}
    </div>
  );
};

export default OurBenefits;
