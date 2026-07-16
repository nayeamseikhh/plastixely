import React from "react";
import expertise_banner from "../../../assets/images/expertise_banner.jpeg";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ExpertiseBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="expertise">
        <div className="relative md:h-210 md:w-full overflow-hidden bg-black">
          <img
            className="h-full w-full md:object-fill absolute inset-0"
            src={expertise_banner}
            alt="Expertise Images"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full flex-col  text-center text-white px-4">
            <h1 className="text-xl font-bold md:text-6xl font-poppins pt-55  md:pt-155">
              OUR EXPERTISE
            </h1>
            <div className="flex items-center justify-center my-4 md:my-0 md:mt-10 text-sm md:text-xl font-poppins">
              <p>OUR EXPERTISE</p>
              <MdKeyboardDoubleArrowRight className="mx-5" />
              <a href="./">{t("start")}</a>
            </div>
          </div>
        </div>

        {/* <div>
          <p className="py-140 text-4xl text-white font-bold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            est.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default ExpertiseBanner;
