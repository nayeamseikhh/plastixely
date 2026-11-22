import euFlag from "../../../../assets/svg/Flag/eu.png";
import { useTranslation } from "react-i18next";

const EUR = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className=" h-10 w-full rounded-2xl items-center pl-2 cursor-pointer bg-transparent">
          <div className="flex gap-x-3 items-center gap-3 h-10 px-2 cursor-pointer ">
            <img className="h-5 w-8 rounded-xs" src={euFlag} alt="euFlag" />
            <p className="text-black01 font-poppins text-[14px]">
              {t("euroCurrency")} (€) - EUR
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EUR;
