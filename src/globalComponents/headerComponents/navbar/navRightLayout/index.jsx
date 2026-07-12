import React from "react";
import Container from "../../../Container";
import Category from "./category";
import { Link } from "react-router";

const NavRightLayout = () => {
  return (
    <>
      <div className="flex gap-x-5 font-poppins text-center items-center">
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px] ">
          <Link to="./"> START</Link>
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          WELCOME TO OUR WORLD
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          OUR EXPERTISE
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          <Category />
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          CONSULTING SERVICES
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          THE RESULTS
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 text-[16px]">
          <Link to="/get_in_touch">GET IN TOUCH</Link>
        </div>
      </div>
    </>
  );
};

export default NavRightLayout;
