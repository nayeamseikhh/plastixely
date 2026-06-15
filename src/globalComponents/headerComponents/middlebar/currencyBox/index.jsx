import usaFlag from "../../../../assets/svg/Flag/usa.png";
import ukFlag from "../../../../assets/svg/Flag/uk.svg";
import euFlag from "../../../../assets/svg/Flag/eu.png";
import { FaAngleDown } from "react-icons/fa";

const CurrencyBox = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex gap-x-3 h-10 w-full bg-white01 rounded-2xl items-center pl-5 cursor-pointer">
          {/* Pound Part */}
          <img className="h-5 w-8 rounded-xs" src={ukFlag} alt="ukFlag" />
          <p className="text-black01 font-poppins text-[14px]">
            Pound Sterling (£) - GBP
          </p>
          <div className="text-black01">
            <FaAngleDown />{" "}
          </div>

          {/* USD Part */}
          {/* <img className="h-5 w-8 rounded-xs" src={usaFlag} alt="usaFlag" />
          <p className="text-black01 font-poppins text-[14px]">
            United Stares Doller ($) - USD
          </p>
          <div className="text-black01">
            <FaAngleDown />
          </div> */}

          {/* <img className="h-5 w-8 rounded-xs" src={euFlag} alt="euFlag" />
          <p className="text-black01 font-poppins text-[14px]">
            Euro (€) - EUR
          </p>
          <div className="text-black01">
            <FaAngleDown />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CurrencyBox;
