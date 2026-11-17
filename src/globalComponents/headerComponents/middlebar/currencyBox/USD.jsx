import usaFlag from "../../../../assets/svg/Flag/usa.png";
import { FaAngleDown } from "react-icons/fa";

const USD = () => {
  return (
    <>
      <div>
        <div className=" h-10 w-full rounded-2xl items-center pl-2 cursor-pointer bg-transparent">
          <div className="flex gap-x-3 items-center gap-3 h-10 px-2 cursor-pointer ">
            <img className="h-5 w-8 rounded-xs" src={usaFlag} alt="usaFlag" />
            <p className="text-black01 font-poppins text-[14px] ">
              United Stares Doller ($) - USD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default USD;
