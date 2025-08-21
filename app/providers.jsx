"use client";

import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "../translations/en.json";
import mn from "../translations/mn.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      mn: { translation: mn },
    },
    lng: "mn",
    fallbackLng: "mn",
    interpolation: { escapeValue: false },
  });
}

export default function Providers({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}


