import ukFlag from "../../../../assets/svg/Flag/uk.svg";
import { useTranslation } from "react-i18next";

const GBP = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className=" h-10 w-full rounded-2xl items-center pl-2  bg-transparent">
          <div className="flex gap-x-3 items-center gap-3 h-10 px-2 cursor-pointer ">
            <img className="h-5 w-8 rounded-xs" src={ukFlag} alt="ukFlag" />
            <p className="text-black01 font-poppins text-[14px] ">
              {t("poundSterling")} (£) - GBP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GBP;
