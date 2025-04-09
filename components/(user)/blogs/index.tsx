"use client";
import React from "react";
import css from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "@/assets/images/news 1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { getAllBlogRequests } from "@/api/blog_requests";

const NewsSlider: React.FC = () => {
  const [news, setNews] = React.useState<any>([]);
  React.useEffect(() => {
    getAllBlogRequests().then((res) => setNews(res));
  }, []);

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
      {news?.map(
        ({ imageUrl, title, description, _id }: any, index: number) => (
          <SwiperSlide key={index} className={css[`slider-${index}`]}>
            <Link href={`/blog/${_id}`} target="_blank">
              <div className={css.slider}>
                <div className={css.images}>
                  <Image
                    src={img1}
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
        )
      )}
    </Swiper>
  );
};

export default NewsSlider;
