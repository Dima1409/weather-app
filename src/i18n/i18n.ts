import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "../locales/en/translation.json";
import uaTranslation from "../locales/ua/translation.json";
const defaultLanguage = localStorage.getItem("weather-lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
