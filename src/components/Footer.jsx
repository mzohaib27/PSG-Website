import React from "react";
import { FooterLinks, NavbarSec } from "../constants";
import { Styles } from "../utils/Styles";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`${Styles.paddingX} pt-4 md:pt-12 w-full bg-black text-white  `}
    >
      <div className="lg:flex ">
        <div className="flex gap-4 pb-4 justify-start items-start">
          <img src={NavbarSec.logo} className="w-6 h-6" alt="logo" />
          <h1 className="text-xl font-semibold">
            <span className="text-greenHigh">PSG</span> Wealth
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:px-12 lg:px-16">
          {FooterLinks.map((items, i) => (
            <div className="pb-8">
              <h2 className="text-xl font-semibold pb-2">{items.heading}</h2>
              <h3>
                {items.linkss &&
                  items.linkss.map((linkItem, j) => (
                    <h3 key={j} className="py-1">
                      {linkItem.link}
                    </h3>
                  ))}
              </h3>
              <h1>{items.email}</h1>
              <h1>{items.phone}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 my-6 lg:my-0">
          <h1>Subscribe to our Newsletter</h1>
          <div className="rounded-xl relative">
            <input
              type="text"
              placeholder="Email Address"
              className="px-4 py-2 rounded-xl w-full"
            />
            <button className="absolute top-1 right-1 z-20 px-4 py-1 rounded-xl bg-green-400">
              Submit
            </button>
          </div>
          <p>
            Rest assured, your email address is only used for sending
            newsletters.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-400 md:flex md:justify-between px-4 md:px-0 py-2 space-y-2">
        <h1> &copy; PSG Wealth 2024 All Rights Reserved.</h1>
        <div className="flex gap-4">
          <FaFacebook className="w-6 h-6 text-white hover:text-greenHigh hover-eff" />
          <FaLinkedin className="w-6 h-6 text-white hover:text-greenHigh hover-eff" />
          <FaInstagram className="w-6 h-6 text-white hover:text-greenHigh hover-eff" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
