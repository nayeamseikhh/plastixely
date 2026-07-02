import React from "react";
import logo from "../../assets/logo/plastixely_logo.png";

const Logo = () => {
  return (
    <>
      <div>
        <a href="./">
          <img src={logo} alt="Plastixely Logo" className="md:h-12 md:w-60 md:my-5 h-8 w-40 " />
        </a>
      </div>
    </>
  );
};

export default Logo;
