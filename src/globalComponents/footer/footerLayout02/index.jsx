
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const FooterLayout02 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 text-center text-white font-poppins font-semibold text-lg leading-7 md:text-xl">
      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("welcomeToOurWorld")}
      </p>

      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("getInTouch")}
      </p>

      <Link className="whitespace-normal text-white font-poppins font-semibold" to="/delivery-information">{t("deliveryInformation")}</Link>

      <p className="whitespace-normal text-white font-poppins font-semibold">
        {t("warranty")}
      </p>
    </div>
  );
};

export default FooterLayout02;
