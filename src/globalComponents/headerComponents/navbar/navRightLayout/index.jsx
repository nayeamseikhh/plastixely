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
          <Link to="/weclome-to-our-world">WELCOME TO OUR WORLD</Link>
        </div>
        <div>|</div>
        <div className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300">
          <Link to="/expertise">OUR EXPERTISE</Link>
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
          <Link to="/get-in-touch">GET IN TOUCH</Link>
        </div>
      </div>
    </>
  );
};

export default NavRightLayout;
