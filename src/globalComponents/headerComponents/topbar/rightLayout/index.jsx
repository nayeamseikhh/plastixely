import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopRightLayout = () => {
  return (
    <>
      <div className="flex gap-x-5 my-2 items-end justify-end">
        <FaFacebook size={22} className="cursor-pointer" />
        <FaInstagram size={22} className="cursor-pointer" />
        <FaLinkedin size={22} className="cursor-pointer" />
      </div>
    </>
  );
};

export default TopRightLayout;
