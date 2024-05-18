import React from "react";
import { Styles } from "../utils/Styles";
import { ReviewSec } from "../constants";
import { MdStars, MdStarRate } from "react-icons/md";

const Review = () => {
  return (
    <div
      className={`${Styles.padding} lg:flex lg:flex-col space-y-4 items-center justify-center bg-greenHigh`}
    >
      <h1
        className={`${Styles.heading} font-bold py-4 text-center shadow-lg shadow-white`}
      >
        {ReviewSec.heading}
      </h1>

      <div className="lg:flex lg:gap-4 px-6 lg:px-24">
        {ReviewSec.cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg p-8 bg-white space-y-2 mt-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <MdStars className="w-4 h-4 text-greenHigh" />
                <MdStars className="w-4 h-4 text-greenHigh" />
                <MdStars className="w-4 h-4 text-greenHigh" />
                <MdStars className="w-4 h-4 text-greenHigh" />
                <MdStars className="w-4 h-4 text-greenHigh" />
              </div>
              <div className="flex gap-4">
                <MdStarRate className="w-4 h-4 text-greenHigh" />
                <h1>TrustPilot</h1>
              </div>
            </div>
            <h1 className={`text-3xl font-semibold`}>{card.headingText}</h1>
            <p className={`text-base `}>{card.review}</p>
            <div className="pt-4">
              <h1 className="text-xl font-semibold">{card.name}</h1>
              <p className="text-lg font-thin">{card.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
