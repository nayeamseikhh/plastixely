import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"; //just comment this line and default english for every reload
import i18next from "i18next";

i18next

  .use(Backend)
  .use(LanguageDetector) //just comment this line and default english for every reload
  .use(initReactI18next)
  .init({
    supportedLangs: ["en", "fr", "de", "el", "es", "tr"],
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
