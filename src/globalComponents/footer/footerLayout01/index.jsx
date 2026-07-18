import React from "react";
import logo from "../../../assets/logo/plastixely_logo.png";

const FooterLayout01 = () => {
  return (
    <div className="  md:-mt-1 h-full w-full object-cover">
      <a href="./">
        <img src={logo} alt="Logo" />
      </a>
      <p className="text-white my-6 md:mt-2 text-center font-poppins text-[17px]">
        <i>" Our difference is our distinctiveness "</i>
      </p>
    </div>
  );
};

export default FooterLayout01;
