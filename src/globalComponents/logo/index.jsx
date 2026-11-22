import logo from "../../assets/logo/plastixely_logo.png";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="./">
          <img
            src={logo}
            alt="Plastixely Logo"
            className="md:h-12 md:w-60 text-center h-7 w-38 "
          />
        </a>
        <p className="text-white md:mt-2 mt-1 text-center font-poppins md:text-[12px] text-[7px]">
          <i>" {t("brandTagline")} "</i>
        </p>
      </div>
    </>
  );
};

export default Logo;
