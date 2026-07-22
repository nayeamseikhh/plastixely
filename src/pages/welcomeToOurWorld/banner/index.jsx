import React from "react";
import { useTranslation } from "react-i18next";
import welcomeBanner from "../../../assets/images/WelcomeBanner.jpeg";

const WelcomeToOurWorldBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative md:h-230 md:w-full overflow-hidden bg-black">
        <img
          className="h-full w-full md:object-fill absolute inset-0"
          src={welcomeBanner}
          alt="Welcome to our world Banner Images"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col  text-center text-white px-4">
          <h1 className="text-xl font-bold md:text-6xl font-poppins pt-55  md:pt-180">
            WELCOME TO OUR WORLD
          </h1>
          {/* <div className="flex items-center justify-center my-4 md:my-0 md:mt-10 text-sm md:text-xl font-poppins">
            <p>{t("getInTouch")}</p>
            <MdKeyboardDoubleArrowRight className="mx-5" />
            <a href="./">{t("start")}</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WelcomeToOurWorldBanner;
