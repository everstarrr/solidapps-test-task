import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './locales/ru.json'
import en from './locales/en.json'
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

const getUserLanguage = ()=>{
    const { initData } = retrieveLaunchParams()
    const tgLang = initData?.user?.languageCode;
    return tgLang && ["ru", "en"].includes(tgLang) ? tgLang : "en";
}

i18n
    .use(initReactI18next) // Подключаем React
    .init({
        defaultNS: "translation",
        debug: true,
        resources: { en: { translation: en }, ru: { translation: ru } },
        lng: getUserLanguage(),
        fallbackLng: "en", // Если язык не найден → английский
        interpolation: { escapeValue: false },
        detection: {
            order: ["querystring", "localStorage", "navigator"], // Порядок определения
            caches: ["localStorage"], // Запоминаем язык
        },
    });

export default i18n;