import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import r1 from "../../assets/images/r1.png";
import r2 from "../../assets/images/r2.png";

const Review = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">What Our Customers Are Saying  <span className="text-lime-600">About Us</span></h1>
      </div>
      <div className="my-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
              <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                  <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img
                      className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                      src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <p className="text-5xl font-semibold text-blue-500 ">“</p>

                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                      Amazing Dining Experience
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “ The food at H-Food exceeded my expectations! Every dish was bursting with flavor, and the presentation was impeccable. I particularly enjoyed the freshness of the ingredients and the attention to detail in every bite. It was truly a memorable dining experience that I can't wait to repeat. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-lime-600">
                      Sarah Johnson
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                      Food Critic
                      </p>
                    </div>
                  </div>
                </div>
              </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                  <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img
                      className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                      src="https://i.ibb.co/sqmQSq9/close-up-face-hungry-young-man-enjoying-sniffing-slice-pizza-eating-delicious-food-white-isolated-ba.jpg"
                      alt=""
                    />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <p className="text-5xl font-semibold text-blue-500 ">“</p>

                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                      Delicious and Satisfying
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                      “   I recently had the pleasure of dining at H-Food, and I must say, it was a delightful experience. The food was not only delicious but also incredibly satisfying. From appetizers to desserts, each dish was carefully crafted to perfection. The ambiance added to the overall enjoyment of the meal, making it a dining experience I won't soon forget. ”
 
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-lime-600">
                      Michael Lee
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                      Food Enthusiast
                      </p>
                    </div>
                  </div>
                </div>
              </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                  <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img
                      className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                      src="https://i.ibb.co/RvdYqrX/istockphoto-1405734772-612x612.jpg"
                      alt=""
                    />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <p className="text-5xl font-semibold text-blue-500 ">“</p>

                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                      A Culinary Delight
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “ H-Food truly impressed me with their culinary skills. The food was a delightful blend of flavors and textures that left me craving for more. The attention to detail in every dish was evident, and it's clear that the chefs put their heart and soul into their creations. I highly recommend H-Food to anyone looking for a culinary delight that tantalizes the taste buds. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-lime-600">
                      Emily Thompson
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                      Restaurant Critic
                      </p>
                    </div>
                  </div>
                </div>
              </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
