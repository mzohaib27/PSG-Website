import React from "react";
import { Styles } from "../utils/Styles";
import { HeroSec } from "../constants";
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";

const HeroSection = () => {
  return (
    <>
      <div
        className={`bg-[#defae6]  lg:flex lg:justify-center lg:items-center ${Styles.paddingX} ${Styles.paddingY}`}
      >
        <div className={`flex flex-col ${Styles.paddingX} py-4`}>
          <p className={`${Styles.text}`}>
            {HeroSec.smalltext}
            <span className="text-[#0bff03]">150,000+</span> Users
          </p>
          <h1 className="text-2xl md:text-6xl font-bold">
            Take Control Of Your Finances With{" "}
            <span className="text-green-600 shadow-lg shadow-greenHigh px-4 rounded-lg">
              PSG
            </span>{" "}
            Wealth
          </h1>
          <p className={`py-6 pr-24`}>{HeroSec.text}</p>
          <div className="md:flex md:space-x-4 grid grid-cols-1 gap-2">
            <button className="flexCenter w-full rounded-lg bg-green-400 px-6 py-2 space-x-4">
              <BsCreditCardFill className="w-6 h-6" />
              <h1 className="font-bold">{HeroSec.btn1}</h1>
            </button>
            <button className="flexCenter w-full rounded-lg bg-[#0f0d34] text-green-400 px-6 py-2 space-x-4">
              <AiOutlinePercentage className="w-6 h-6" />
              <h1 className="font-bold">{HeroSec.btn2}</h1>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src={HeroSec.heroImage}
            alt="Hero-bg"
            className="rounded-full h-[15rem] w-[15rem] lg:h-full lg:w-full "
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
