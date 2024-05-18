import React from "react";
import { HeroSec } from "../constants";
import { Styles } from "../utils/Styles";
import { PiShootingStarFill } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";

const NumberSec = () => {
  return (
    <div className={`${Styles.paddingX} ${Styles.paddingY} relative `}>
      <div
        className={`flex flex-col w-[90%] justify-center items-center rounded-lg bg-gray-100 py-6 mx-auto lg:transform lg:-translate-y-[50%]`}
      >
        <h1 className="pb-6">As Seen in</h1>
        <div className="md:flex md:justify-between w-full  md:px-16">
          {HeroSec.logos.map((item, i) => (
            <div
              key={i}
              className="w-32 h-24 my-4 mx-auto rounded-lg flex justify-center items-center"
            >
              <img
                src={item.logo}
                className="items-center bg-cover my-4 rounded-lg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:flex lg:gap-4 items-center lg:justify-between px-4 lg:px-12">
        <div className="flex gap-12 mt-4 rounded-lg bg-green-400 justify-center items-center px-6 py-4">
          <div>
            <h1 className="text-4xl font-bold">4500+</h1>
            <p>User Rewarded</p>
          </div>
          <div>
            <PiShootingStarFill className="w-12 h-12" />
          </div>
        </div>
        <div className="flex gap-12 mt-4 rounded-lg bg-green-400 justify-center items-center px-6 py-4">
          <div>
            <h1 className="text-4xl font-bold">$3000+</h1>
            <p>Rewarded Earned</p>
          </div>
          <div>
            <GiWallet className="w-12 h-12" />
          </div>
        </div>
        <div className="flex gap-12 mt-4 rounded-lg bg-green-400 justify-center items-center px-6 py-4">
          <div>
            <h1 className="text-4xl font-bold">4500+</h1>
            <p>Rebates</p>
          </div>
          <div>
            <RiDiscountPercentFill className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSec;
