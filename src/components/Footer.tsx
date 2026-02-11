import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-presto.png";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="section-padding !py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Presto Coffee" className="h-10 w-auto" />
        </a>
        <div className="flex items-center gap-8 text-muted-foreground text-sm font-body">
          <a href="#products" className="hover:text-primary transition-colors">{t("nav.seeds")}</a>
          <a href="#tea" className="hover:text-primary transition-colors">{t("nav.tea")}</a>
          <a href="#origin" className="hover:text-primary transition-colors">{t("nav.origin")}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t("nav.contact")}</a>
        </div>
        <p className="text-muted-foreground text-xs font-body">{t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
