import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BestAuthotsArray } from "helpers/filterArticles";
import { Autoplay, Navigation } from "swiper";
import Author from "./Author";
import SlideNextButton from "components/Common/SlideNextButton";
import SlidePrevButton from "components/Common/SlidePrevButton";

const BestAuthors: React.FC = () => {
  const swiperParams = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 2,
    modules: [Navigation, Autoplay],
  };

  return (
    <>
      <div className="p-4 rounded-xl font-[Chivo] bg-[#f4eeff] sticky">
        <h2 className="font-bold text-2xl mb-5">Best Authors</h2>
        <Swiper
          {...swiperParams}
          className="mb-4"
          breakpoints={{
            1023: { slidesPerView: 2 },
            767: { slidesPerView: 3 },
            319: { slidesPerView: 1 },
          }}
        >
          {BestAuthotsArray.map((item, index) => (
            <SwiperSlide key={index}>
              <Author name={item.name} img={item.img} />
            </SwiperSlide>
          ))}
          <div className="visible">
            <div className="absolute top-[43%] z-20 right-0">
              <SlideNextButton />
            </div>
            <div className="absolute top-[43%] z-20 left-0">
              <SlidePrevButton />
            </div>
          </div>
        </Swiper>
        <button className="w-full bg-[#A6B1E1] rounded font-[Chivo] text-white py-1.5 hover:bg-[#C0B6ED]">
          All Authors
        </button>
      </div>
    </>
  );
};

export default BestAuthors;
