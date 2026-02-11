import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ethiopianImg from "@/assets/coffee-ethiopian.jpg";
import colombianImg from "@/assets/coffee-colombian.jpg";
import brazilianImg from "@/assets/coffee-brazilian.jpg";
import sumatraImg from "@/assets/coffee-sumatra.jpg";

gsap.registerPlugin(ScrollTrigger);

const productKeys = [
  { key: "ethiopian", image: ethiopianImg, price: "$24.00" },
  { key: "colombian", image: colombianImg, price: "$22.00" },
  { key: "brazilian", image: brazilianImg, price: "$20.00" },
  { key: "sumatra", image: sumatraImg, price: "$26.00" },
  { key: "ethiopian", image: ethiopianImg, price: "$24.00" },
  { key: "colombian", image: colombianImg, price: "$22.00" },
  { key: "brazilian", image: brazilianImg, price: "$20.00" },
  { key: "sumatra", image: sumatraImg, price: "$26.00" },
];

const ProductsSection = () => {
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
  }, []); // ← Empty dependency array - run only once on mount

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div ref={headingRef} className="text-center mb-16">
        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
          {t("products.subtitle")}
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t("products.title1")}{" "}
          <span className="italic text-gradient-gold">
            {t("products.title2")}
          </span>
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="products-swiper"
        >
          {productKeys.map((product) => (
            <SwiperSlide key={product.key}>
              <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={t(`products.${product.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-body mb-1">
                    {t(`products.${product.key}.origin`)}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {t(`products.${product.key}.name`)}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">
                    {t(`products.${product.key}.flavor`)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSection;
