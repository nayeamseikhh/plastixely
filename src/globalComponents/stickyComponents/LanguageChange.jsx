import { Select } from "antd";
import { useTranslation } from "react-i18next";
import "../../service/i18n";

const LanguageChange = () => {
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const languageChangeOptiion = [
    {
      value: "English",
      language: "en",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="flag"
            className="w-10 h-7 font-semibold object-cover rounded-xs "
          />
          <span className="hidden md:block ">English</span>
          <span className=" md:hidden  ">EN</span>
        </div>
      ),
    },

    {
      value: "French",
      language: "fr",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/fr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">French</span>
          <span className="  md:hidden ">FR</span>
        </div>
      ),
    },

    {
      value: "German",
      language: "de",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/de.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">German</span>
          <span className="  md:hidden ">DE</span>
        </div>
      ),
    },

    {
      value: "Greek",
      language: "el",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/gr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">Greek</span>
          <span className="  md:hidden ">EL</span>
        </div>
      ),
    },

    {
      value: "Spanish",
      language: "es",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/es.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">Spanish</span>
          <span className=" md:hidden  ">ES</span>
        </div>
      ),
    },

    {
      value: "Portuguese",
      language: "pt",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/pt.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">Portuguese</span>
          <span className=" md:hidden ">PT</span>
        </div>
      ),
    },
    {
      value: "Turkey",
      language: "tr",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/tr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span className="hidden md:block ">Turkish</span>
          <span className=" md:hidden ">TR</span>
        </div>
      ),
    },
  ];

  const handleLanguageChange = (value) => {
    const findLanguage = languageChangeOptiion.find(
      (language) => language.value === value,
    );
    if (findLanguage) {
      i18n.changeLanguage(findLanguage.language || "en");
    }
  };

  return (
    <>
      <div className="fixed md:left-40 md:top-200 top-150 -translate-y-1/2 z-50">
        <div className="rounded-xl shadow flex items-center gap-x-4 font-semibold">
          <div>
            <Select
              value={
                languageChangeOptiion.find(
                  (language) => language.language === currentLanguage,
                )?.value || languageChangeOptiion[0].value
              }
              style={{ width: 120 }}
              onChange={handleLanguageChange}
              options={languageChangeOptiion}
              popupAlign="top"
              classNames={{
                root: "custom-language",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageChange;
