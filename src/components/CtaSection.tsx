import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { y: 60, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-secondary/30">
      <div ref={contentRef} className="max-w-3xl mx-auto text-center bg-card border border-border rounded-lg p-12 md:p-16">
        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">{t("cta.subtitle")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          {t("cta.title1")} <span className="italic text-gradient-gold">{t("cta.title2")}</span> {t("cta.title3")}
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">{t("cta.description")}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t("cta.placeholder")}
            className="flex-1 px-5 py-3 bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
          />
          <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 whitespace-nowrap">
            {t("cta.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;
