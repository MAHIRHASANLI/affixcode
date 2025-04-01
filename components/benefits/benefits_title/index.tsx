import ButtonColorful from "@/utils/button_colorful";
import TitleComponent from "@/utils/title_section";
import React from "react";
import styes from "./index.module.css";
type Props = {};

const BenefitsTitle = (props: Props) => {
  return (
    <div>
      <div>
        <TitleComponent
          title="Üstünlüklərimiz"
          description="Yüksək keyfiyyət, sürətli nəticələr və müştəri məmnuniyyəti bizim əsas prioritetlərimizdir. Bizimlə hər layihə uğurla nəticələnir. Təcrübə, innovasiya və mükəmməlliklə hər zaman ön planda oluruq. Hər bir layihə bizim üçün xüsusi və fərdidir."
        />
      </div>
      <div className={styes["button-container"]}>
        <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
      </div>
    </div>
  );
};

export default BenefitsTitle;
