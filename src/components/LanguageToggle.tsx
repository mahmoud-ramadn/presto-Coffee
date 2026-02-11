import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggle = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-3 py-1.5 border border-border rounded text-xs tracking-widest uppercase font-body text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
      aria-label="Toggle language"
    >
      <span className={isArabic ? "text-muted-foreground" : "text-primary font-semibold"}>EN</span>
      <span className="text-border">|</span>
      <span className={isArabic ? "text-primary font-semibold" : "text-muted-foreground"}>عربي</span>
    </button>
  );
};

export default LanguageToggle;
