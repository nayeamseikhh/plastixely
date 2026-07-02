// import React from "react";
import { MdLocalShipping } from "react-icons/md";

const TopMiddleLayout = () => {
  return (
    <>
      <div className="flex justify-center gap-x-2 md:my-2 items-center md:ml-14  font-poppins text-[16px] md:text-base font-light text-white">
        <div>
          <MdLocalShipping size={20} color="orange" />
        </div>
        <p className="cursor-pointer font-poppins">
         order is above £75 It will be free delivery
        </p>
      </div>
    </>
  );
};

export default TopMiddleLayout;
