import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import managerImg from "@/assets/manger-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const ManagerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current, { scale: 0.85, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });

      gsap.fromTo(textRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
      });

      // Animated name — letter by letter
      const nameEl = nameRef.current;
      if (nameEl) {
        const text = nameEl.textContent || "";
        nameEl.innerHTML = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          nameEl.appendChild(span);
        });

        gsap.fromTo(
          nameEl.children,
          { opacity: 0, y: 30, rotateX: -90 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.6, stagger: 0.04, ease: "back.out(1.7)",
            scrollTrigger: { trigger: nameEl, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isAr]);

  return (
    <section id="manager" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref={imageRef} className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
            <img
              src={managerImg}
              alt="محمد قدرى إمام"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>

        <div ref={textRef} className="text-center lg:text-start">
          <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
            {isAr ? "المدير التنفيذي" : "The Founder"}
          </p>
          <h2
            ref={nameRef}
            className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6"
            key={isAr ? "ar" : "en"}
          >
            محمد قدرى إمام
          </h2>
          <div className="divider-gold mb-8 mx-auto lg:mx-0" />
          <p className="text-muted-foreground font-body leading-relaxed mb-5">
            {isAr
              ? "محمد قدرى إمام هو المؤسس والمدير التنفيذي لبريستو كوفي. بدأ رحلته في عالم القهوة منذ أكثر من عشر سنوات، مدفوعاً بشغف عميق لاكتشاف أجود أنواع البذور من مختلف أنحاء العالم."
              : "Mohamed Qadry Imam is the founder and CEO of Presto Coffee. His journey in the coffee world began over a decade ago, driven by a deep passion for discovering the finest seeds from every corner of the globe."}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-5">
            {isAr
              ? "بفضل خبرته الواسعة وعلاقاته المباشرة مع المزارعين في إثيوبيا وكولومبيا والبرازيل وإندونيسيا، يضمن محمد أن كل بذرة تصل إلى عملائنا تحمل معها قصة أصالة وجودة استثنائية."
              : "With extensive expertise and direct relationships with farmers in Ethiopia, Colombia, Brazil, and Indonesia, Mohamed ensures that every seed reaching our customers carries a story of authenticity and exceptional quality."}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed italic">
            {isAr
              ? "\"رؤيتي هي أن يتذوق كل عميل القهوة كما ينبغي أن تكون — نقية، أصيلة، واستثنائية.\""
              : '"My vision is for every customer to taste coffee as it was meant to be — pure, authentic, and extraordinary."'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManagerSection;
