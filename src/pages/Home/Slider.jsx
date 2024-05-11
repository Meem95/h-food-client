import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="">
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="bg-[url('https://i.ibb.co/0tjqW90/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-M190a-GVfc-Gljd.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Food is symbolic of love when words are inadequate.
            </h1>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/0tjqW90/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-M190a-GVfc-Gljd.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Food is symbolic of love when words are inadequate.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/kKdh8X9/best-biryani-in-pune-lead.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Food is our common ground, a universal experience
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/dgj138F/pexels-catscoming-1907228-2.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Food is maybe the only universal thing that really has the power to bring everyone together.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/qC7b2Bs/pexels-chanwalrus-958546.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            One cannot think well, love well, sleep well, if one has not dined well.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
 
    </div>
  );
};

export default Slider;
