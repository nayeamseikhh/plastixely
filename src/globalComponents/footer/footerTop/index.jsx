import React from "react";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";

const FooterTop = () => {
  return (
    <div className="md:grid md:grid-cols-[1.2fr_1.5fr] text-white font-poppins font-normal ">
      <div>
        <h6 className="text-lg font-bold text-center md:text-start pt-4 md:pt-0 ">
          Power up your inbox
        </h6>
        <p className="text-base font-normal md:mt-4 my-4 md:my-0 text-center md:text-start ">
          Be the first to grab exclusive discounts, premium tool drops, and
          stock updates.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-[3fr_1fr] md:flex items-center justify-between gap-x-2 mt-2 ">
          <input
            type="text"
            name="email"
            id="email"
            className=" w-[95%] md:w-[85%] bg-white  p-2 px-4 md:py-4 rounded-sm text-black outline-none border-none"
            placeholder="Email"
          />

          <button className="bg-orange-400 rounded-sm font-semibold text-base p-2 lg:p-4  cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
