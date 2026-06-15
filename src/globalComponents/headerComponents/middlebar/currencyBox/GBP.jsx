import ukFlag from "../../../../assets/svg/Flag/uk.svg";
import { FaAngleDown } from "react-icons/fa";

const GBP = () => {
  return (
    <>
      <div className="mt-5 ">
        <div className=" h-10 w-full rounded-2xl items-center pl-2 cursor-pointer bg-transparent">
          <div className="flex gap-x-3">
            <img className="h-5 w-8 rounded-xs" src={ukFlag} alt="ukFlag" />
            <p className="text-black01 font-poppins text-[14px] ">
              Pound Sterling (£) - GBP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GBP;
