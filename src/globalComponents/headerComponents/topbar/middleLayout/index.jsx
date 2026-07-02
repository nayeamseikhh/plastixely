// import React from "react";
import { MdLocalShipping } from "react-icons/md";

const TopMiddleLayout = () => {
  return (
    <>
      <div className="flex justify-center gap-x-2 my-2 text-center">
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
