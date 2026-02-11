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
  const badgeRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const decorRef1 = useRef<HTMLDivElement>(null);
  const decorRef2 = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance with scale and rotation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.7, opacity: 0, rotateY: -15 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Text content
      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Quote animation
      gsap.fromTo(
        quoteRef.current,
        { x: isAr ? 50 : -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Decorative elements floating
      gsap.to(decorRef1.current, {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(decorRef2.current, {
        y: -15,
        rotation: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
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
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: nameEl,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isAr]);

  return (
    <section
      id="manager"
      ref={sectionRef}
      className="relative section-padding bg-gradient-to-br from-secondary/20 via-background to-secondary/30 overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div
        ref={decorRef1}
        className="absolute top-20 left-[5%] w-40 h-40 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        ref={decorRef2}
        className="absolute bottom-20 right-[8%] w-56 h-56 rounded-full bg-gold/8 blur-3xl"
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Column */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-1">
          <div ref={imageRef} className="relative group">
            {/* Badge/Label */}
            <div
              ref={badgeRef}
              className="absolute -top-4 -right-4 z-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg"
            >
              <div className="text-center">
                <div className="text-white font-display text-xl font-bold">
                  10+
                </div>
                <div className="text-white/90 font-body text-[8px] tracking-wider uppercase">
                  Years
                </div>
              </div>
            </div>

            {/* Main image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border border-gold/10" />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-primary/20 transition-shadow duration-500">
                <img
                  src={managerImg}
                  alt="محمد قدرى إمام"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Geometric accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-primary/30 rounded-bl-3xl" />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div
          ref={textRef}
          className="text-center lg:text-start order-2 lg:order-2"
        >
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-primary font-body text-xs tracking-[0.25em] uppercase">
              {isAr ? "المدير التنفيذي" : "The Founder & CEO"}
            </p>
          </div>

          {/* Name */}
          <h2
            ref={nameRef}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4 leading-tight"
            key={isAr ? "ar" : "en"}
          >
            محمد قدرى إمام
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground font-body text-sm md:text-base mb-8 italic">
            {isAr
              ? "رائد في مجال بذور القهوة الفاخرة"
              : "Pioneer in Premium Coffee Seeds"}
          </p>

          <div className="divider-gold mb-10 mx-auto lg:mx-0" />

          {/* Bio paragraphs */}
          <div className="space-y-5 mb-10">
            <p className="text-foreground/80 font-body leading-relaxed text-base md:text-lg">
              {isAr
                ? "محمد قدرى إمام هو المؤسس والمدير التنفيذي لبريستو كوفي. بدأ رحلته في عالم القهوة منذ أكثر من عشر سنوات، مدفوعاً بشغف عميق لاكتشاف أجود أنواع البذور من مختلف أنحاء العالم."
                : "Mohamed Qadry Imam is the founder and CEO of Presto Coffee. His journey in the coffee world began over a decade ago, driven by a deep passion for discovering the finest seeds from every corner of the globe."}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              {isAr
                ? "بفضل خبرته الواسعة وعلاقاته المباشرة مع المزارعين في إثيوبيا وكولومبيا والبرازيل وإندونيسيا، يضمن محمد أن كل بذرة تصل إلى عملائنا تحمل معها قصة أصالة وجودة استثنائية."
                : "With extensive expertise and direct relationships with farmers in Ethiopia, Colombia, Brazil, and Indonesia, Mohamed ensures that every seed reaching our customers carries a story of authenticity and exceptional quality."}
            </p>
          </div>

          {/* Quote block */}
          <div
            ref={quoteRef}
            className="relative pl-6 border-l-4 border-gradient-gold py-4 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg"
          >
            <svg
              className="absolute top-2 left-2 w-8 h-8 text-primary/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-foreground font-body leading-relaxed italic text-lg relative z-10">
              {isAr
                ? '"رؤيتي هي أن يتذوق كل عميل القهوة كما ينبغي أن تكون — نقية، أصيلة، واستثنائية."'
                : '"My vision is for every customer to taste coffee as it was meant to be — pure, authentic, and extraordinary."'}
            </p>
          </div>

          {/* Credentials/Stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-sm font-body text-muted-foreground">
                {isAr ? "شريك مباشر" : "Direct Partner"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-sm font-body text-muted-foreground">
                {isAr ? "خبير قهوة معتمد" : "Certified Expert"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-sm font-body text-muted-foreground">
                {isAr ? "رائد الصناعة" : "Industry Pioneer"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerSection;
