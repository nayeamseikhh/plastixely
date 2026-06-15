import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdHelp } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";

const InfoCheckout = () => {
  return (
    <>
      <div className="grid grid-cols-3 mx-auto items-center gap-x-2   ">
        <div className="text-center cursor-pointer">
          <MdHelp className="mx-auto" size={25} />
          <p className="text-[14px] mt-1 font-poppins">HELP</p>
        </div>

        <div className="text-center cursor-pointer">
          <CgProfile className="mx-auto" size={25} />
          <p className="text-[14px] mt-1 font-poppins">SIGN IN</p>
        </div>

        <div className="text-center cursor-pointer">
          <div className="flex justify-center">
            <RiShoppingCartFill size={25} />
            <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center ">
              <p className="text-white01 text-sm font-poppins">0</p>
            </div>
          </div>
          <p className="text-[14px] mt-1 font-poppins">CHECKOUT</p>
        </div>
      </div>
    </>
  );
};

export default InfoCheckout;
