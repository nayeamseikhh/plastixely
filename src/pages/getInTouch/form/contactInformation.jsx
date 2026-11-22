import { useTranslation } from "react-i18next";

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h4 className="text-[25px] font-semibold font-poppins">
          {t("contactToday")}
        </h4>

        <div className="my-5">
          <h6 className="font-semibold text-[20px]">{t("salesTeam")}:</h6>
        </div>

        <div>
          <h6 className="font-semibold text-[20px]">{t("homepageUrl")}:</h6>
          <a
            className="text-blue-700 font-semibold"
            href="https://www.plastixely.com/"
          >
            https://www.plastixely.com/
          </a>
        </div>

        <div className="my-5">
          <h6 className="font-semibold text-[20px]">{t("emailUs")}:</h6>
          <a
            className="text-blue-700 font-semibold"
            href="mailto:Info@plastixely.com"
          >
            Info@plastixely.com
          </a>
        </div>

       <div>
          <h6 className="font-semibold text-[20px]">{t("whatsApp")}:</h6>

          <a
            href="https://wa.me/447741003192"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:underline"
          >
            +44 7741 003192
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
