import React from "react";
import TopBar from "./topbar";
import MiddleBar from "./middlebar";
import Navbar from "./navbar";

const HearderComponents = () => {
  return (
    <>
      <div className="bg-black01 text-white01">
        <TopBar />
        <MiddleBar />
        <Navbar />
      </div>
    </>
  );
};

export default HearderComponents;
