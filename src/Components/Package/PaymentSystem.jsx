import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useVentures from "../../Hook/useVentures";
import { Link } from "react-router-dom";

const PaymentSystem = () => {
  const [ventures] = useVentures();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-10 ">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-gray-700 font-bold my-10">
           Our Other Ventures
        </h2>

        <Slider {...settings} className="mx-auto px-3 container">
          {ventures?.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group p-10 w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default PaymentSystem;
