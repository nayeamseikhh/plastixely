import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLangs: ["en", "fr", "de", "gr", "es", "tr"],
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
