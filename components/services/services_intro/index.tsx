import ButtonColorful from "@/utils/button_colorful";
import TitleComponent from "@/utils/title_section";
import React from "react";

const ServicesIntro = () => {
  return (
    <div>
      <div style={{ width: "90%" }}>
        <TitleComponent
          title="Bizim Xidmətlərimiz"
          description="İşinizi böyütmək və rəqəmsal dünyada güclü bir mövqe əldə etmək üçün peşəkar və innovativ həllər təklif edirik."
        />
      </div>
      <div>
        <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
      </div>
    </div>
  );
};

export default ServicesIntro;
