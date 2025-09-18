import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Plus from "../../common/icon";

const Feedback = () => {
  const reviews = [
    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },
    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },

    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },
    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },
    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },

    {
      stars: <Plus />,
      name: "Happy Customer",
      description:
        "Excellent quality products and timely delivery. The power banks and chargers are reliable and long-lasting.",
    },
  ];
  return (
    <section className="bg-[#F6F6F6]">
      <div className="container lg:pt-[120px] pt-[80px]">
    
        <h3 className="font-poppins lg:text-[42px] text-[38px] font-bold text-center pb-[24px]">
   Customers <span className="text-[#6022EA]">Feedback & Reviews</span>
</h3>
        <h6 className="font-poppins font-medium text-center mx-auto text-gray-600 lg:w-[60%] ">
          Hear what our amazing customers have to say about their experience
          with our products and services. Their trust inspires us to keep
          delivering excellence.
        </h6>

        <div className=" pb-[82px]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            allowTouchMove={false}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((rev, i) => (
              <SwiperSlide key={i} className="pt-20" data-aos="fade-right">
                <div className=" border-[#DDDDDD] bg-white border-[1px] border-solid rounded-[10px]  p-[25px] ">
                  {rev.stars}
                  <h6 className="font-poppins font-normal leading-[24px] py-3 text-[#0B132A] ">
                    “I like it because I like to travel far and still can
                    connect with high speed.”.
                  </h6>
                  <h5 className=" font-poppins text-[18px] font-medium leading-[30px] ">
                    {rev.name}
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
