import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Stecan from "@/assets/images.jpg"
import BreakCoffe from "@/assets/breakCoffe.avif";
import ALkbous from "@/assets/Al-kbous-Tea.jpg";


gsap.registerPlugin(ScrollTrigger);

const teaProducts = [
  {
    id:1,
    key: "العروسة",
    image:
      "https://cdn.scoopempire.com/wp-content/uploads/2021/07/8a573f26-1301-426e-a702-dae13de1528f_grande.jpg",
  },
  {
    id:2,
    key: "استكانة",
    image: Stecan,
  },
  { id:3, key: "الكبوس", image: ALkbous },
  { id:5, key: "breakCoffe", image: BreakCoffe },
];

const TeaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        swiperWrapperRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: swiperWrapperRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [i18n.language]);

  return (
    <section
      id="tea"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div ref={headingRef} className="text-center mb-16">
        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
          {t("tea.subtitle")}
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t("tea.title1")}{" "}
          <span className="italic text-gradient-gold">{t("tea.title2")}</span>
        </h2>
        <div className="divider-gold mx-auto mt-6" />
      </div>

      <div ref={swiperWrapperRef} className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={false}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="products-swiper"
        >
          {teaProducts.map((product) => (
            <SwiperSlide key={product?.id}>
              <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={t(`tea.${product.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-body mb-1">
                    {t(`tea.${product.key}.type`)}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {t(`${product.key}`)}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeaSection;
