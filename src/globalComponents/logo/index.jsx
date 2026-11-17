import React from "react";
import logo from "../../assets/logo/plastixely_logo.png";

const Logo = () => {
  return (
    <>
      <div>
        <a href="./">
          <img
            src={logo}
            alt="Plastixely Logo"
            className="md:h-12 md:w-60 text-center h-7 w-38 "
          />
        </a>
        <p className="text-white md:mt-2 mt-1 text-center font-poppins md:text-[12px] text-[7px]">
          <i>" Our difference is our distinctiveness "</i>
        </p>
      </div>
    </>
  );
};

export default Logo;
