import React from "react";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";

const FooterTop = () => {
  return (
    <div className="md:grid md:grid-cols-[1.2fr_1.5fr] text-white font-poppins font-normal ">
      <div>
        <h6 className="text-lg font-bold">Power up your inbox</h6>
        <p className="text-base font-normal mt-4">
          Be the first to grab exclusive discounts, premium tool drops, and
          stock updates.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between gap-x-2 mt-2 ">
          <input
            type="text"
            name="email"
            id="email"
            className=" w-[85%] bg-white  px-4 py-4 rounded-sm text-black outline-none"
            placeholder="Email"
          />

          <button className="bg-orange-400 rounded-sm font-semibold text-base p-4 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
