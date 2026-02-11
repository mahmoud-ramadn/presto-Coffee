import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import originImg from "@/assets/coffee-origin.jpg";

gsap.registerPlugin(ScrollTrigger);

const OriginSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        textRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Counter animations
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          // Animate first counter (12+)
          gsap.to(
            { val: 0 },
            {
              val: 12,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCount1(Math.ceil(this.targets()[0].val));
              },
            },
          );

          // Animate second counter (50K+)
          gsap.to(
            { val: 0 },
            {
              val: 50,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCount2(Math.ceil(this.targets()[0].val));
              },
            },
          );

          // Animate third counter (100%)
          gsap.to(
            { val: 0 },
            {
              val: 100,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCount3(Math.ceil(this.targets()[0].val));
              },
            },
          );
        },
        once: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="origin"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref={imageRef} className="relative overflow-hidden rounded-lg">
          <img
            src={originImg}
            alt="Coffee plantation"
            className="w-full h-[400px] lg:h-[550px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
        <div ref={textRef}>
          <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
            {t("origin.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t("origin.title1")}
            <br />
            <span className="italic text-gradient-gold">
              {t("origin.title2")}
            </span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            {t("origin.p1")}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            {t("origin.p2")}
          </p>
          <div ref={statsRef} className="flex gap-12">
            <div>
              <span className="font-display text-3xl font-bold text-primary">
                {count1}+
              </span>
              <p className="text-muted-foreground text-sm font-body mt-1">
                {t("origin.origins")}
              </p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-primary">
                {count2}K+
              </span>
              <p className="text-muted-foreground text-sm font-body mt-1">
                {t("origin.seedsSold")}
              </p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-primary">
                {count3}%
              </span>
              <p className="text-muted-foreground text-sm font-body mt-1">
                {t("origin.organic")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
