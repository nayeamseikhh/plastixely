import { useTranslation } from "react-i18next";

const NavLeftLayout = () => {
  const { i18n } = useTranslation();
  const localeMap = {
    en: "en-GB",
    fr: "fr-FR",
    de: "de-DE",
    el: "el-GR",
    es: "es-ES",
    tr: "tr-TR",
    pt: "pt-PT",
  };
  const language = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const locale = localeMap[language] || "en-GB";
  const date = new Date()
    .toLocaleDateString(locale, {
      timeZone: "Europe/London",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
  const time = new Date()
    .toLocaleTimeString(locale, {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();
  return (
    <>
      <div className="grid shrink-0 grid-cols-[auto_auto] md:gap-x-2 whitespace-nowrap">
        <p className=" font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {date}
        </p>
        <p className="  font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {time}
        </p>
      </div>
    </>
  );
};

export default NavLeftLayout;
