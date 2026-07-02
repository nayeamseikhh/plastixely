import React from "react";
import TopBar from "./topbar";
import MiddleBar from "./middlebar";
import Navbar from "./navbar";
import MobileNavbar from "../mobileNavbar";

const HearderComponents = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className=  "flex  justify-between bg-black01 text-white01  md:block lg:gap-x-5 ">
        <TopBar />
        <MiddleBar />
        <Navbar />
      </div>
      </div>
      <div className="md:hidden ">
        <MobileNavbar />
      </div>
    </>
  );
};

export default HearderComponents;
