import React from "react";

const NewsLetter = () => {
  return (
    <div className="news-letter w-[85%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] gap-[30px] pt-[100px]">
      <h1 className="text-[#454545] text-[45px] font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px]">
        Subscribe Our Newsletter and Stay Updated
      </p>

      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px]  border-[1px] border-solid">
        <input
          className="w-[500px] ml-[30px] border-none outline-none text-[16px]"
          type="email"
          placeholder="Your Email id"
          name=""
          id=""
        />
        <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
