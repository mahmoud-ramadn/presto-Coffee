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
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      overlayRef.current,
      { scaleX: 1 },
      { scaleX: 0, duration: 1.4, ease: "power4.inOut" },
    )
      .fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0,
      )
      .fromTo(
        headingRef.current,
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6",
      )
      .fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4",
      );

    // Floating animations for decorative elements
    gsap.to(floatingRef1.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(floatingRef2.current, {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });
    gsap.to(floatingRef3.current, {
      y: -25,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/60" />

      {/* Reveal Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background origin-right z-10"
      />

      {/* Floating Decorative Elements */}
      <div
        ref={floatingRef1}
        className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-primary/5 blur-3xl z-0"
      />
      <div
        ref={floatingRef2}
        className="absolute bottom-1/3 right-[15%] w-40 h-40 rounded-full bg-gold/10 blur-3xl z-0"
      />
      <div
        ref={floatingRef3}
        className="absolute top-1/2 right-[8%] w-36 h-36 rounded-full bg-primary/8 blur-3xl z-0"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        {/* Badge/Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] mb-6"
        >
          {t("hero.title1")}
          <br />
          <span className="relative inline-block">
            <span className="text-gradient-gold italic">
              {t("hero.title2")}
            </span>
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10"
                stroke="url(#gold-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gold-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p
          ref={subRef}
          className="font-body text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#origin"
            className="group px-10 py-4 border-2 border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase relative overflow-hidden transition-all duration-300 hover:border-primary backdrop-blur-sm bg-background/30"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              {t("hero.cta2")}
            </span>
            <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>

        {/* Stats or Features */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mt-16 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">✓</span>
            </div>
            <span className="text-muted-foreground font-body">
              Premium Quality
            </span>
          </div>
          <div className="w-px h-8 bg-foreground/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">✓</span>
            </div>
            <span className="text-muted-foreground font-body">
              100% Organic
            </span>
          </div>
          <div className="w-px h-8 bg-foreground/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">✓</span>
            </div>
            <span className="text-muted-foreground font-body">
              Direct Source
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-body">
          {t("hero.scroll")}
        </span>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
