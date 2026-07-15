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
            className="md:h-12 md:w-60  h-8 w-40 text-start"
          />
        </a>
        <p className="text-white mt-2 text-center font-poppins text-[12px]">
          <i>" Our difference is our distinctiveness "</i>
        </p>
      </div>
    </>
  );
};

export default Logo;
