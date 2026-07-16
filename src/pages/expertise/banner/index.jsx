import React from "react";
import expertise_banner from "../../../assets/images/expertise_banner.jpeg";

const ExpertiseBanner = () => {
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
        </div>
        <div>
          <p className="py-140 text-4xl text-white font-bold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            est.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpertiseBanner;
