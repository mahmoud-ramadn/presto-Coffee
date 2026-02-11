import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LanguageToggle from "./LanguageToggle";
import logo from "@/assets/logo-presto.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    )
      .fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.6",
      )
      .fromTo(
        linksRef.current?.children || [],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        "-=0.4",
      );

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Active section detection
    const sections = ["products", "tea", "origin", "contact"];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navLinks = [
    { href: "#products", label: t("nav.seeds"), id: "products" },
    { href: "#tea", label: t("nav.tea"), id: "tea" },
    { href: "#origin", label: t("nav.origin"), id: "origin" },
    { href: "#contact", label: t("nav.contact"), id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between section-padding transition-all duration-500 ${
          isScrolled
            ? "!py-3 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5"
            : "!py-5 bg-background/80 backdrop-blur-md border-b border-border/30"
        }`}
      >
        {/* Logo */}
        <a ref={logoRef} href="#" className="flex items-center group">
          <img
            src={logo}
            alt="Presto Coffee"
            className={`w-auto transition-all duration-500 ${isScrolled ? "h-8" : "h-10"} group-hover:scale-105`}
          />
        </a>

        {/* Desktop Navigation */}
        <div
          ref={linksRef}
          className="hidden lg:flex items-center gap-10 font-body text-sm tracking-widest uppercase text-muted-foreground"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative group transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-gold transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* <LanguageToggle /> */}
          <a
            href="#products"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 border-2 border-primary text-primary text-xs tracking-widest uppercase font-body group relative overflow-hidden transition-all duration-300 hover:text-primary-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("nav.shopNow")}
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 delay-100 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMobileMenu}
              className={`font-body text-2xl tracking-widest uppercase text-muted-foreground hover:text-primary transition-all duration-300 ${
                activeSection === link.id ? "text-primary scale-110" : ""
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={closeMobileMenu}
            className="mt-8 px-10 py-4 border-2 border-primary text-primary text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {t("nav.shopNow")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
