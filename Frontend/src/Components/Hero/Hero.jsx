import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import landing from "../Assets/landing.png"

const Hero = () => {
  return (
    <div className="hero h-[100vh] flex bg-white">
      <div className="hero-left flex-1 flex flex-col gap-[20px] pl-[150px] mt-20 leading-[1.1]">
        <h1 className="text-6xl font-semibold text-[#292828]">New Arrivals Only</h1>

        <div className="mt-5 text-4xl">
          <h3>From our store to your door </h3>
        </div>

        <div className="text-4xl">
          <p>Big deals, endless happiness!</p>
        </div>

        <div className="text-4xl">
          <p>Discover what makes you unique</p>
        </div>

        <button className="mt-5 text-xl bg-[#292828] w-fit text-white px-10 py-4">Latest Collection </button>
      </div>

      <div className="hero-right flex-1 flex items-center justify-center">
        <img className="h-[550px]" src={landing} alt="" />
      </div>
    </div>
  );
};

export default Hero;
