import React from "react";
import { OfferSec } from "../constants";
import { Styles } from "../utils/Styles";
import { BsCreditCardFill } from "react-icons/bs";
import { CardSec } from "../constants";

const OfferSection = () => {
  return (
    <div className={`${Styles.paddingX} ${Styles.paddingY} bg-[#defae6]`}>
      <div className={` md:flex px-8 py-4`}>
        <div className="md:w-1/2 flex flex-col items-start justify-center">
          <h1 className={`${Styles.heading}`}>{OfferSec.heading}</h1>
          <p className={`${Styles.text} py-4 md:pr-12`}>{OfferSec.text}</p>
          <button className="flex gap-4 bg-green-400 items-center justify-center py-2 px-4 rounded-lg w-full md:w-64 my-4">
            <BsCreditCardFill className="w-6 h-6" />
            <h1>Explore Credit Card</h1>
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={OfferSec.offerImage} alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:items-center lg:justify-center md:gap-2 lg:gap-4">
        {CardSec.map((item, i) => (
          <div
            className={`flex flex-col space-y-2 rounded-xl bg-white p-4 my-4`}
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="rounded-lg bg-cover w-[20rem] h-[13rem] md:w-[30rem] md:h-[18rem] "
              />
            </div>
            <h1 className={`${Styles.text} font-bold`}>{item.heading}</h1>
            <p className={`flex gap-4 text-xs md:text-base`}>
              {item.cardinfo.map((info, i) => (
                <div>
                  <h1 className="font-semibold text-xs md:text-base">
                    {info.title}
                  </h1>
                  <p>{info.status}</p>
                </div>
              ))}
            </p>
            <div className="flex gap-4">
              <h1>{item.title2}</h1>
              <h1>{item.title3}</h1>
            </div>
            <div className="md:flex md:gap-4 w-full ">
              <button className="flex items-center justify-center rounded-lg bg-black text-white px-6 py-2 my-2 w-full">
                Apply Now
              </button>
              <button className="flex items-center justify-center rounded-lg bg-black text-white px-6 py-2 my-2 w-full">
                Details & Rewards
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
