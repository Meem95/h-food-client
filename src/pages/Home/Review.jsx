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
        <h1 className="text-4xl text-center my-8 font-bold">
          What Our Customers Are Saying About Us
        </h1>
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
                        Help us improve our productivity
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “ Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-blue-500">
                        Mia Brown
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Marketing Manager at Stech
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
                      src={r2}
                      alt=""
                    />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <p className="text-5xl font-semibold text-blue-500 ">“</p>

                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                        Help us improve our productivity
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “ Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-blue-500">
                        Mia Brown
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Marketing Manager at Stech
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
                      src={r1}
                      alt=""
                    />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <p className="text-5xl font-semibold text-blue-500 ">“</p>

                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                        Help us improve our productivity
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “ Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-blue-500">
                        Mia Brown
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Marketing Manager at Stech
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
