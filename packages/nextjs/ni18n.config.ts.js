import themeConfig from "./theme.config";
import path from "path";

const supportedLngs = ["en", "bd"];

export const ni18nConfig = {
  fallbackLng: [themeConfig.locale || "en"],
  supportedLngs,
  ns: ["translation"],
  react: { useSuspense: false },
  backend: {
    loadPath: path.resolve(`/locales/{{lng}}.json`),
  },
};
