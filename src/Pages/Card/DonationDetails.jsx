import { useState } from "react";
import swal from "sweetalert";

const DonationDetails = ({ card }) => {
  const { id, picture, title, description, price, text_button_bg_color } =
    card || {};

  const handleAddToDonations = () => {
    const addedDonationArray = [];
    const dontationItems = JSON.parse(localStorage.getItem("donations"));

    if (!dontationItems) {
      addedDonationArray.push(card);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Good Job!", "Donation Added Successfully!", "success");
    } else {
      const isExits = dontationItems?.find((card) => card.id === id);
      if (!isExits) {
        addedDonationArray.push(...dontationItems, card);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Good Job!", "Donation Added Successfully!", "success");
      } else {
        swal("Already Donated", "no duplicate", "error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-76 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-full w-full object-cover" />

          <div className="relative">
          <button
            onClick={handleAddToDonations}
            className="absolute z-10 bottom-5 left-28 p-4 text-[#FFF] text-sm font-semibold rounded"
            style={{ background: text_button_bg_color }}
          >
            Donate: ${price}
          </button>
          <div className="absolute bottom-2 left-0 w-full h-16 bg-black opacity-30"></div>
          </div>

        </div>
        <div className="p-6">
          <p className="mt-2 block text-4xl text-[#0B0B0B] font-bold leading-normal antialiased p-[2px] mb-2">
            {title}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base text-[gray] font-normal leading-relaxed antialiased">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
