import React from "react";
import Container from "../../../Container";
import Category from "./category";
import { Link } from "react-router";

const NavRightLayout = () => {
  return (
    <>
      <div className="flex gap-x-5 font-poppins">
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
         <Link to="./"> START</Link>
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          WELCOME TO OUR WORLD
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          OUR EXPERTISE
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          <Category />
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          CONSULTING SERVICES
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          THE RESULTS
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
          <Link to="/get_in_touch">GET IN TOUCH</Link>
        </div>
      </div>
    </>
  );
};

export default NavRightLayout;
