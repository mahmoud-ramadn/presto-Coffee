import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
// import LanguageToggle from "./LanguageToggle";
import logo from "@/assets/logo-presto.png";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between section-padding !py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <a href="#" className="flex items-center">
        <img src={logo} alt="Presto Coffee" className="h-10 w-auto" />
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-muted-foreground">
        <a href="#products" className="hover:text-primary transition-colors duration-300">{t("nav.seeds")}</a>
        <a href="#tea" className="hover:text-primary transition-colors duration-300">{t("nav.tea")}</a>
        <a href="#origin" className="hover:text-primary transition-colors duration-300">{t("nav.origin")}</a>
        <a href="#contact" className="hover:text-primary transition-colors duration-300">{t("nav.contact")}</a>
      </div>
      <div className="flex items-center gap-4">
        {/* <LanguageToggle /> */}
        <a
          href="#products"
          className="px-6 py-2.5 border border-primary text-primary text-xs tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {t("nav.shopNow")}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
