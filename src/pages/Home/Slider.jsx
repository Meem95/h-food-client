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
        <SwiperSlide>  <div className="bg-[url('https://i.ibb.co/ysBXTvt/b29ec054-adami3-school-children-in-pakistan-sitting-down-to-eat-their-lu-60f45fa7-3231-49a0-b78f-3b9.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-3xl text-3xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Empowering Communities: Join Our Food Sharing Network!
            </h1>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/ynMzDBm/charity-prepper-scaled.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-black md:text-3xl text-3xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Together for Change: Food Sharing Revolutionized!
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/ypDgHJS/Donate-Money-For-Food-In-India-To-Special-Charity-Programs.png')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-3xl text-3xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            From Waste to Wonder: Explore Our Surplus Reduction Platform!
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/F4MCY1S/1000-F-345226922-d6-JXx-Ypfu3-BMDi-Lo-NH468-Vp-UXehs1n-RU.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-black md:text-3xl text-3xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Ending Hunger: Our Mission with Food Sharing and Surplus Reduction
            </h1>
          </div>
        </SwiperSlide>
       
      </Swiper>
 
    </div>
  );
};

export default Slider;
