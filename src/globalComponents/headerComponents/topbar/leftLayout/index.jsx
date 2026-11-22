import { useTranslation } from "react-i18next";

const TopLeftLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center md:justify-start gap-x-2 lg:gap-x-4 md:my-2 font-poppins text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] font-light text-white">
        <p>29 {t("daysLabel")}</p>
        <p>09 {t("hoursLabel")}</p>
        <p>03 {t("minutesLabel")}</p>
        <p>20 {t("secondsLabel")}</p>
      </div>
    </>
  );
};

export default TopLeftLayout;
