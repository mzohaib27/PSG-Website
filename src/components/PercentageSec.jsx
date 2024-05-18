import React from "react";
import { PercentageSection, Extenstion } from "../constants";
import { Styles } from "../utils/Styles";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BiSolidExtension } from "react-icons/bi";

const PercentageSec = () => {
  return (
    <div>
      <div className={`md:flex  ${Styles.paddingX} ${Styles.paddingY}`}>
        <div className="flex flex-col gap-4 justify-start items-start md:w-1/2 md:py-12">
          <h1 className={`${Styles.heading} font-bold`}>
            {PercentageSection.heading}
          </h1>
          <p className={`${Styles.text}`}>{PercentageSection.text}</p>
          <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green-400">
            <RiDiscountPercentFill className="w-8 h-8" />
            <h1 className="text-base md:text-xl font-bold">
              {PercentageSection.button}
            </h1>
          </button>
        </div>
        <div className="flex justify-center items-center my-12 md:my-0 md:w-1/2">
          <img src={PercentageSection.image} alt="" className="" />
        </div>
      </div>
      {/* Cards */}
      <div
        className={`${Styles.paddingX} ${Styles.paddingY} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 `}
      >
        {PercentageSection.cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-center items-center rounded-xl bg-green-200 py-4 px-8 m-6 lg:m-6"
          >
            <div>
              <img src={card.iamge} alt="" className="w-72 h-52 rounded-xl" />
            </div>
            <h1 className={`${Styles.text}`}>
              up to{" "}
              <span className="text-4xl font-semibold">${card.offer}</span>{" "}
              cashback
            </h1>
            <button className="flex gap-2">
              <h1 className="text-xl font-semibold underline">
                {card.button1}
              </h1>
              <HiMiniArrowTopRightOnSquare className="w-6 h-6" />
            </button>
            <button className="bg-black text-white rounded-lg w-full py-2 text-lg">
              {card.button2}
            </button>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      <div
        className={`${Styles.paddingX} ${Styles.paddingY} flex items-center justify-center relative extension-bg`}
      >
        <div className="gradient w-full h-full"></div>
        <div className={`rounded-lg w-full h-full lg:flex  z-20`}>
          <div className="lg:w-1/2"></div>
          <div className="flex flex-col justify-end  lg:w-1/2 space-y-4 text-white">
            <h1>{Extenstion.smallText}</h1>
            <h1 className={`${Styles.heading} text-greenHigh font-bold`}>
              {Extenstion.heading}
            </h1>
            <p>{Extenstion.text}</p>
            <div>
              <button className="flex items-center justify-center gap-4 px-6 py-2 rounded-lg bg-green-200 text-black">
                <BiSolidExtension className="w-6 h-6" />
                <h1 className="text-base md:text-lg font-semibold">
                  {Extenstion.button}
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageSec;
