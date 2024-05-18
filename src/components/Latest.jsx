import React from "react";
import { LatestContent } from "../constants";
import { Styles } from "../utils/Styles";

const Latest = () => {
  return (
    <div
      className={`${Styles.paddingX} ${Styles.paddingY} flex flex-col justify-start items-start`}
    >
      <h1>{LatestContent.heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {LatestContent.cards.map((item, i) => (
          <div
            key={i}
            className="rounded-xl flex flex-col border border-gray-300 mt-8 shadow-sm shadow-greenHigh"
          >
            <div className="relative">
              <div className="absolute top-4 left-4 px-6 py-2 rounded-lg bg-indigo-950 text-white items-center justify-center">
                {item.icontext}
              </div>
              <img
                src={item.image}
                alt="image"
                className="rounded-t-xl w-full h-64"
              />
            </div>
            <div className="flex flex-col space-y-4 px-6 py-4">
              <div className="flex gap-2">
                <h1>{item.name}</h1>
                <ul>
                  <li>{item.time}</li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-semibold underline">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
