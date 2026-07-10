import React from "react";

import getintouch_img from "../../../assets/images/getintouch_banner.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const GetInTouchBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative md:h-210 md:w-full overflow-hidden bg-black">
        <img
          className="h-full w-full md:object-fill absolute inset-0"
          src={getintouch_img}
          alt="Banner Tools Images"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col  text-center text-white px-4">
          <h1 className="text-xl font-bold md:text-6xl font-poppins pt-55  md:pt-152">
            {t("GET_IN_TOUCH")}
          </h1>
          <div className="flex items-center justify-center my-4 md:my-0 md:mt-10 text-sm md:text-xl font-poppins">
            <p>GET IN TOUCH </p>
            <MdKeyboardDoubleArrowRight className="mx-5" />
            <a href="./">START</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchBanner;
