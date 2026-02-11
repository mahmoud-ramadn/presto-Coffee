import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AddressSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="address"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
            {isAr ? "موقعنا" : "Find Us"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {isAr ? "زورونا" : "Visit"}{" "}
            <span className="italic text-gradient-gold">
              {isAr ? "اليوم" : "Our Shop"}
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">
              {isAr ? "العنوان" : "Address"}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {isAr
                ? "كفر سليمان البحري، دمياط، مصر"
                : "Kafr Sulayman Al Bahri, Dumyat, Egypt"}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">
              {isAr ? "ساعات العمل" : "Working Hours"}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {isAr ? "يومياً: ٩ صباحاً - ١١ مساءً" : "Daily: 9 AM - 11 PM"}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">
              {isAr ? "اتصل بنا" : "Call Us"}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed direction-ltr">
              +20 10 95160132
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.97285505119888!2d31.70845215216458!3d31.34336565291763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e10eab7cbd6b%3A0x4b41fe231963356!2z2KjYsdmK2LPYqtmIINmD2YjZgdmKIF8gUHJlc3RvIENvZmZlZQ!5e0!3m2!1sar!2seg!4v1770765672508!5m2!1sar!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
