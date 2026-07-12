import React from "react";
import Container from "../../../Container";
import Category from "./category";
import { Link } from "react-router";

const NavRightLayout = () => {
  return (
    <>
      <div className="flex  gap-x-1 2xl:gap-x-2 3xl:gap-x-3 lg:gap-x-2   font-poppins text-center items-center justify-between">
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          <Link to="./"> START</Link>
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          WELCOME TO OUR WORLD
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          OUR EXPERTISE
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          <Category />
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          CONSULTING SERVICES
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          THE RESULTS
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          <Link to="/get_in_touch">GET IN TOUCH</Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-between gap-x-1  lg:gap-x-2 xl:gap-x-2 font-poppins text-center">
        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          <Link to="/">START</Link>
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          WELCOME TO OUR WORLD
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          OUR EXPERTISE
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          <Category />
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          CONSULTING SERVICES
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          THE RESULTS
        </div>

        <div className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          |
        </div>

        <div className="cursor-pointer hover:text-orange01 transition-colors duration-300 text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]">
          <Link to="/get_in_touch">GET IN TOUCH</Link>
        </div>
      </div> */}
    </>
  );
};

export default NavRightLayout;
