import React from "react";
import exclusive from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offers w-[85%] h-[70vh] flex m-auto px-[90px] mb-[150px] mt-[200px]">
      <div className="offers-left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[60px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[60px] font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] py-[7px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-semibold mt-[30px]">
          Cheak Now
        </button>
      </div>

      <div className="offers-right flex items-end">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offer;
