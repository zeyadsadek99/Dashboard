import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  //   locale: Cookies.get("DASHBOARD_LANG") || "en",
  //   fallbackLocale: Cookies.get("DASHBOARD_LANG") || "en",

  messages: {
    ar,
    en,
  },
});
