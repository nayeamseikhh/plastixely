import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdHelp } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router";

const InfoCheckout = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="text-center cursor-pointer">
            <MdHelp className="mx-auto md:text-2xl" />
            <p className="text-[8px] md:text-[14px] mt-1 font-poppins">HELP</p>
          </div>

          <div className="text-center cursor-pointer">
            <Link to="/registration" onClick={() => setOpen(true)}>
              <CgProfile className="mx-auto md:text-2xl" />
              <p className="text-[8px] md:text-[14px] mt-1 font-poppins">
                SIGNUP
              </p>
            </Link>
          </div>

          <div className="text-center cursor-pointer">
            <div className="flex justify-center">
              <RiShoppingCartFill className=" md:text-2xl" />
              <div className="md:h-4 md:w-4 h-2 w-2 -ml-2 rounded-full bg-red-500 flex items-center justify-center ">
                <p className="text-white01 md:text-sm text-[10px] font-poppins">
                  0
                </p>
              </div>
            </div>
            <p className="text-[8px] md:text-[14px] mt-1 font-poppins">
              CHECKOUT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCheckout;
