import Category from "./category";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NavRightLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex min-w-0 flex-nowrap items-center justify-end gap-x-1 font-poppins text-center lg:gap-x-2 2xl:gap-x-2 3xl:gap-x-3 whitespace-nowrap">
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          <Link to="./">{t("start")}</Link>
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          <Link to="/weclome-to-our-world">{t("welcomeToOurWorld")}</Link>
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          <Link to="/expertise">{t("expertisePageTitle")}</Link>
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          <Category />
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          {t("consultingServices")}
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          {t("results")}
        </div>
        <div className="shrink-0">|</div>
        <div className="shrink-0 font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 whitespace-nowrap">
          <Link to="/get-in-touch">{t("getInTouch")}</Link>
        </div>
      </div>
    </>
  );
};

export default NavRightLayout;
