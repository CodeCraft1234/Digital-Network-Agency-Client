import { useState } from "react";
import { Link } from "react-router-dom";

const DonationDetail = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = card || {};

 

  return (
    <div
      className="flex justify-center items-center mx-5 my-5 md:mx-10"
      style={{ background: card_bg_color }}
    >
      <div className="relative w-full flex flex-row max-w-[48rem] rounded-xl  bg-clip-border shadow-md">
        <div className="relative m-0 w-full overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <button
            className="mb-4 block text-white text-base font-semibold leading-relaxed tracking-normal  antialiased"
            style={{backgroundColor: card_bg_color, color:text_button_bg_color}}
          >
            {category}
          </button>
          <h4 className="mb-2 block text-[#0B0B0B] text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h4>
          <p
            className="mb-8 block text-base font-semibold leading-relaxed antialiased"
            style={{ color: text_button_bg_color }}
          >
            ${price}
          </p>
          <Link to={`/card/${id}`}>
            <button
              className="flex items-center gap-2 rounded-lg py-3 px-3 text-[#FFF] text-center"
              type="button"
              style={{ backgroundColor: text_button_bg_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
