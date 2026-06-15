import React from "react";
import banner_images from "../../../assets/Images/banner01.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative h-210 w-full overflow-hidden bg-black">
        <img
          className="h-full w-full object-fill absolute inset-0"
          src={banner_images}
          alt="Banner Tools Images"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col  mt-5 text-center text-white px-4">
          <h1 className="text-4xl font-bold md:text-6xl">
            Premium Auto Parts And Power Tools Worldwide
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover high-quality automotive parts, motorcycle accessories, and
            powerful <br /> tools designed for performance, durability, and
            reliability, delivered worldwide <br /> at competitive prices with
            fast and secure shipping.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
