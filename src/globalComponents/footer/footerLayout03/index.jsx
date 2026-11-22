
import { useTranslation } from "react-i18next";

const FooterLayout03 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 text-center text-white font-poppins font-semibold text-lg leading-7 md:text-xl">
      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("privacyPolicy")}
      </p>

      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("termsAndConditions")}
      </p>

      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("returnsPolicy")}
      </p>

      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("cancellationPolicy")}
      </p>
    </div>
  );
};

export default FooterLayout03;
