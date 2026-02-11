import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import heroBg from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(overlayRef.current, { scaleX: 1 }, { scaleX: 0, duration: 1.4, ease: "power4.inOut" })
      .fromTo(headingRef.current, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-background/70" />
      <div ref={overlayRef} className="absolute inset-0 bg-background origin-right z-10" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-6">
          {t("hero.subtitle")}
        </p>
        <h1 ref={headingRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
          {t("hero.title1")}
          <br />
          <span className="text-gradient-gold italic">{t("hero.title2")}</span>
        </h1>
        <p ref={subRef} className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          {t("hero.description")}
        </p>
        <div ref={ctaRef} className="flex items-center justify-center gap-4">
          <a href="#products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300">
            {t("hero.cta1")}
          </a>
          <a href="#origin" className="px-8 py-3.5 border border-foreground/30 text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300">
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-body">{t("hero.scroll")}</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
