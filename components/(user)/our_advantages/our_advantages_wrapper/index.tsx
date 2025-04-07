import TitleComponent from "@/utils/title_section";
import React from "react";
import OurAdvantagesItem from "../our_advantages_item";

type Props = {};

const OurAdvantagesWrapper = (props: Props) => {
  const data = [
    {
      title:
        "Hər müştəriyə fərdi yanaşırıq və onların ehtiyaclarına uyğun həllər təklif edirik.",
    },
    {
      title: "Mobil dostu və yüksək performanslı vebsaytlar təqdim edirik.",
    },
    {
      title: "SEO optimizasiyası ilə daha yüksək görünürlük əldə edirsiniz.",
    },
    {
      title: "Yüksək keyfiyyətli dizaynlarla işinizi mükəmməl təqdim edirik.",
    },
    {
      title: "Tez və güclü texniki dəstək xidmətimizlə daima yanınızdayıq.",
    },
  ];
  return (
    <div>
      <div>
        <TitleComponent title="Niyə biz ?" description="" />
      </div>
      <div style={{ marginTop: "40px" }}>
        {data.map(({ title }, index) => (
          <OurAdvantagesItem key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default OurAdvantagesWrapper;
