"use client";
import React from "react";
import css from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "@/assets/images/news 1.jpg";
import img2 from "@/assets/images/news 2.jpg";
import img3 from "@/assets/images/news 3.jpg";

import "swiper/css";
import "swiper/css/navigation";

const NewsSlider: React.FC = () => {
  const news = [
    {
      id: 1,
      image: img1,
      title: "Rəqəmsal Dünyada Brend Yaradılması: Dizaynın Rolu",
      description: "Unikal və peşəkar həllər, Brendinə dəyər qatan veb dizayn!",
    },
    {
      id: 2,
      image: img2,
      title: "Rəqəmsal Transformasiyanın Biznesə Təsiri: Yenilikçi Yanaşmalar",
      description:
        "Rəqəmsal transformasiya, müasir biznes mühitində rəqabət üstünlüyü yaratmaq üçün vacibdir.",
    },
    {
      id: 3,
      image: img3,
      title:
        "İstifadəçi Təcrübəsinin Əhəmiyyəti: Effektiv UI/UX Dizaynının Rolu",
      description:
        "UI/UX dizaynı, istifadəçilərin məhsul və ya xidmətlə olan təcrübələrini müəyyən edir.",
    },
    {
      id: 4,
      image: img1,
      title: "Rəqəmsal Dünyada Brend Yaradılması: Dizaynın Rolu",
      description: "Unikal və peşəkar həllər, Brendinə dəyər qatan veb dizayn!",
    },
    {
      id: 5,
      image: img2,
      title: "Rəqəmsal Transformasiyanın Biznesə Təsiri: Yenilikçi Yanaşmalar",
      description:
        "Rəqəmsal transformasiya, müasir biznes mühitində rəqabət üstünlüyü yaratmaq üçün vacibdir.",
    },
    {
      id: 6,
      image: img3,
      title:
        "İstifadəçi Təcrübəsinin Əhəmiyyəti: Effektiv UI/UX Dizaynının Rolu",
      description:
        "UI/UX dizaynı, istifadəçilərin məhsul və ya xidmətlə olan təcrübələrini müəyyən edir.",
    },
  ];
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        850: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
        1550: {
          slidesPerView: 5,
        },
      }}
      speed={2000}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 10000 }}
      id="news"
      className="mySwiper"
    >
      {news.map(({ image, title, description }, index) => (
        <SwiperSlide key={index} className={css[`slider-${index}`]}>
          <Link href="">
            <div className={css.slider}>
              <div className={css.images}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={css.content}>
                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSlider;
