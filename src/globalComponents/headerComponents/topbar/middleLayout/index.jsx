// import React from "react";
import { MdLocalShipping } from "react-icons/md";

const TopMiddleLayout = () => {
  return (
    <>
      <div className="flex justify-center gap-x-2  items-center  font-poppins text-[11px] pt-4 md:pt-0 font-light text-white lg:text-[13px] xl:text-[16px] 2xl:text-[18px]">
        <div className=" text-lg md:text-xl  xl:text-2xl ">
          <MdLocalShipping color="orange" />
        </div>
        {/* <p className="cursor-pointer font-poppins">
          order is above £75 It will be free delivery
        </p> */}
      </div>
    </>
  );
};

export default TopMiddleLayout;
