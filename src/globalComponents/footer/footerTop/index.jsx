import { useTranslation } from "react-i18next";
// import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";

const FooterTop = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 items-end gap-4 text-white font-poppins font-normal md:grid-cols-[1.2fr_1.5fr] md:gap-8">
      <div>
        <h6 className="pt-4 text-center text-lg font-bold md:pt-0 md:text-left">
          {t("newsletterTitle")}
        </h6>

        <p className="my-4 text-center text-base font-normal md:my-0 md:mt-4 md:text-left">
          {t("newsletterDescription")}
        </p>
      </div>

      <div>
        <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 md:flex md:justify-end">
          <input
            type="text"
            name="email"
            id="email"
            className="w-full bg-white p-3 px-4 text-black outline-none border-none rounded-sm md:w-[85%] md:py-4"
            placeholder={t("emailPlaceholder")}
          />

          <button className="cursor-pointer whitespace-nowrap rounded-sm bg-orange-400 px-4 py-3 text-base font-semibold md:px-6 md:py-4">
            {t("signUp")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
