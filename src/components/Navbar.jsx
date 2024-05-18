import React from "react";
import { NavbarSec } from "../constants";
import { Styles } from "../utils/Styles";
import { MdOutlineKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import { BiSolidDollarCircle, BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className={`flexBetween ${Styles.paddingX} py-2 `}>
        <div className="flexCenter space-x-2">
          <img src={NavbarSec.logo} className="h-8 w-8" alt="logo" />
          <h1 className={`text-lg md:text-2xl font-bold`}>
            <span className="text-green-400">PSG</span> Wealth
          </h1>
          <div className="hidden lg:flex lg:justify-center lg:items-center text-lg space-x-2 pl-8">
            <h1>Savings</h1>
            <p className="px-2  bg-green-300 rounded-full">Soon</p>
          </div>
        </div>

        <div className="flexCenter space-x-4">
          <button className="hidden md:flex md:justify-center md:items-center space-x-2">
            <h1>Credit Cards</h1>
            <MdOutlineKeyboardArrowDown className="h-5 w-5" />
          </button>
          <button className="hidden md:flex md:justify-center md:items-center space-x-2">
            <h1>Rebates & Rewards</h1>
            <MdOutlineKeyboardArrowDown className="h-5 w-5" />
          </button>
          <button className="hidden xl:flex xl:justify-center xl:items-center space-x-2 rounded-lg bg-gradient-to-r from-gray-200 to-[#0bff03] px-2 py-1">
            <BiSolidDollarCircle className="w-5 h-5" />
            <h1>Refer and Earn 25%</h1>
          </button>
        </div>
        <div className="flexCenter space-x-6">
          <MdOutlineSearch className="w-6 h-6" />
          <div className="rounded-full px-2 py-2 bg-[#0bff03]">
            <BiSolidUser className="w-6 h-6" />
          </div>
          <p className="hidden md:flex">$0</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
