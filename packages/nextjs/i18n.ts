import bd from "./public/locales/bd.json";
import en from "./public/locales/en.json";
import Cookies from "universal-cookie";

const langObj: any = { en, bd };

const getLang = () => {
  let lang = null;
  if (typeof window !== "undefined") {
    const universalCookies = new Cookies(null, { path: "/" });
    lang = universalCookies.get("i18nextLng");
  }
  return lang || "en"; // Default to 'en' if no language is set
};

export const getTranslation = () => {
  const lang = getLang();
  const data: any = langObj[lang || "en"];

  const t = (key: string) => {
    return data[key] ? data[key] : key;
  };

  const initLocale = (themeLocale: string) => {
    const lang = getLang();
    i18n.changeLanguage(lang || themeLocale);
  };

  const i18n = {
    language: lang,
    changeLanguage: (lang: string) => {
      const universalCookies = new Cookies(null, { path: "/" });
      universalCookies.set("i18nextLng", lang);
    },
  };

  return { t, i18n, initLocale };
};
