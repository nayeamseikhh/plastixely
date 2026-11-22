import { useTranslation } from "react-i18next";

const FooterText = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* For Desktop */}
      <div className="text-white leading-8 hidden md:block w-full">
        <p className="text-center text-xl font-open-sans">
          <i>
            {t("copyrightNotice")}
            <br />
            {t("registeredOfficeAddress")}
          </i>
        </p>

        <p className="text-center text-lg mt-8 font-open-sans">
          <i>
            {t("companyDescription")}
            <br />
            {t("manufacturerDisclaimer")}
            <br />
            {t("trademarkDisclaimer")}
          </i>
        </p>

        <p className="text-center text-sm font-open-sans mt-8">
          <i>
            {t("allRightsReserved")}
            <br />
            {t("companyRegistration")}
          </i>
        </p>

        <br />

        <p className="text-center text-lg font-open-sans">
          <i>
            <u className="text-2xl font-bold">{t("websiteBy")}</u>
            <br />
            <u className="font-semibold text-lg">
              {t("imageCopyrightNotice")}
            </u>
          </i>
        </p>
      </div>

      {/* For Mobile */}
      <div className="text-white leading-8 md:hidden">
        <p className="text-center text-xl font-open-sans">
          <i>
            {t("copyrightNotice")}
            <br />
            {t("registeredOfficeAddress")}
          </i>
        </p>

        <p className="text-center text-xl my-8 font-open-sans">
          <i>
            {t("companyDescription")}
            <br />
            {t("manufacturerDisclaimer")}
            <br />
            {t("trademarkDisclaimer")}
          </i>
        </p>

        <p className="text-center text-xl font-open-sans">
          <i>
            {t("allRightsReserved")}
            <br />
            {t("companyRegistration")}
          </i>
        </p>

        <p className="text-center text-lg font-open-sans">
          <i>
            <u>{t("websiteBy")}</u>
            <br />
            <u className="font-semibold text-xl">
              {t("imageCopyrightNotice")}
            </u>
          </i>
        </p>
      </div>
    </>
  );
};

export default FooterText;
