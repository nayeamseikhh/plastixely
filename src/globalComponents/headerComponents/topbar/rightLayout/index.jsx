import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopRightLayout = () => {
  return (
    <>
      <div className="flex md:gap-x-5 md:my-2 items-center md:justify-end justify-center gap-x-2 p-4 md:p-0">
        <FaFacebook size={22} className="cursor-pointer" />
        <FaInstagram size={22} className="cursor-pointer" />
        <FaLinkedin size={22} className="cursor-pointer" />
      </div>
    </>
  );
};

export default TopRightLayout;
