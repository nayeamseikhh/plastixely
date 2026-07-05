import React from "react";

import getintouch_img from "../../../assets/images/getintouch_banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const GetInTouchBanner = () => {
  return (
    <>
      <div className="relative h-210 w-full overflow-hidden bg-black">
        <img
          className="h-full w-full object-fill absolute inset-0"
          src={getintouch_img}
          alt="Banner Tools Images"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col  text-center text-white px-4">
          <h1 className="text-4xl font-bold md:text-6xl font-poppins  pt-152">
            GET IN TOUCH
          </h1>
          <div className="flex items-center justify-center mt-10 text-xl font-poppins">
            <p >GET IN TOUCH   </p>
             <MdKeyboardDoubleArrowRight className="mx-5" />
             <a href="./">START</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchBanner;
