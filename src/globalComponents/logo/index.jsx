import React from "react";
import logo from "../../assets/logo/plastixely_logo.png";

const Logo = () => {
  return (
    <>
      <div>
        <a href="./">
          <img src={logo} alt="Plastixely Logo" className="h-12 w-60 my-5" />
        </a>
      </div>
    </>
  );
};

export default Logo;
