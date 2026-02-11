import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "Presto Coffee",
      nav: {
        seeds: "Seeds",
        tea: "Tea",
        origin: "Origin",
        contact: "Contact",
        shopNow: "Shop Now",
      },
      hero: {
        subtitle: "Premium Coffee Seeds",
        title1: "From Seed",
        title2: "to Soul",
        description:
          "Discover the world's finest single-origin coffee seeds, hand-selected from legendary plantations across the globe.",
        cta1: "Explore Seeds",
        cta2: "Our Story",
        scroll: "Scroll",
      },
      products: {
        subtitle: "Our Collection",
        title1: "Select Your",
        title2: "Seeds",
        ethiopian: {
          name: "Ethiopian Yirgacheffe",
          origin: "Ethiopia",
          flavor: "Floral · Citrus · Honey",
        },
        colombian: {
          name: "Colombian Supremo",
          origin: "Colombia",
          flavor: "Caramel · Nutty · Balanced",
        },
        brazilian: {
          name: "Brazilian Santos",
          origin: "Brazil",
          flavor: "Chocolate · Smooth · Sweet",
        },
        sumatra: {
          name: "Sumatra Mandheling",
          origin: "Indonesia",
          flavor: "Earthy · Herbal · Bold",
        },
        addToCart: "Add to Cart",
      },
      tea: {
        subtitle: "Tea Collection",
        title1: "Premium",
        title2: "Tea Packets",
        green: {
          name: "Green Tea",
          type: "Classic",
          flavor: "Fresh · Grassy · Light",
        },
        chamomile: {
          name: "Chamomile",
          type: "Herbal",
          flavor: "Floral · Calming · Sweet",
        },
        earlGrey: {
          name: "Earl Grey",
          type: "Black Tea",
          flavor: "Bergamot · Bold · Aromatic",
        },
        jasmine: {
          name: "Jasmine Tea",
          type: "Scented",
          flavor: "Fragrant · Delicate · Smooth",
        },
        addToCart: "Add to Cart",
      },
      origin: {
        subtitle: "Our Story",
        title1: "Rooted in",
        title2: "Tradition",
        p1: "At Presto Coffee, we travel to the world's most renowned coffee-growing regions to source seeds of unmatched quality. Each variety is hand-picked at peak ripeness and dried using time-honored methods passed down through generations.",
        p2: "From the misty highlands of Ethiopia to the volcanic slopes of Sumatra, every seed tells a story of terroir, craftsmanship, and passion. We believe that extraordinary coffee begins long before the brew — it begins with the seed.",
        origins: "Origins",
        seedsSold: "Seeds Sold",
        organic: "Organic",
      },
      cta: {
        subtitle: "Stay Connected",
        title1: "Join the",
        title2: "Presto",
        title3: "Family",
        description:
          "Subscribe for early access to new arrivals, exclusive discounts, and brewing guides delivered to your inbox.",
        placeholder: "your@email.com",
        button: "Subscribe",
      },
      footer: {
        rights: "© 2026 Presto Coffee. All rights reserved.",
      },
    },
  },
  ar: {
    translation: {
      brand: "بريستو كوفي",
      nav: {
        seeds: "البذور",
        tea: "الشاي",
        origin: "الأصل",
        contact: "تواصل",
        shopNow: "تسوق الآن",
      },
      hero: {
        subtitle: "بذور قهوة فاخرة",
        title1: "من البذرة",
        title2: "إلى الروح",
        description:
          "اكتشف أجود بذور القهوة أحادية المصدر، مختارة يدوياً من أشهر المزارع حول العالم.",
        cta1: "استكشف البذور",
        cta2: "قصتنا",
        scroll: "مرر",
      },
      products: {
        subtitle: "مجموعتنا",
        title1: "اختر",
        title2: "بذورك",
        ethiopian: {
          name: "يرغاتشيف الإثيوبي",
          origin: "إثيوبيا",
          flavor: "زهري · حمضيات · عسل",
        },
        colombian: {
          name: "سوبريمو الكولومبي",
          origin: "كولومبيا",
          flavor: "كراميل · مكسرات · متوازن",
        },
        brazilian: {
          name: "سانتوس البرازيلي",
          origin: "البرازيل",
          flavor: "شوكولاتة · ناعم · حلو",
        },
        sumatra: {
          name: "ماندلينج سومطرة",
          origin: "إندونيسيا",
          flavor: "ترابي · عشبي · غني",
        },
        addToCart: "أضف للسلة",
      },
      tea: {
        subtitle: "مجموعة الشاي",
        title1: "شاي",
        title2: "فاخر",
        green: {
          name: "شاي أخضر",
          type: "كلاسيكي",
          flavor: "منعش · عشبي · خفيف",
        },
        chamomile: {
          name: "بابونج",
          type: "أعشاب",
          flavor: "زهري · مهدئ · حلو",
        },
        earlGrey: {
          name: "إيرل غراي",
          type: "شاي أسود",
          flavor: "برغموت · غني · عطري",
        },
        jasmine: {
          name: "شاي الياسمين",
          type: "معطر",
          flavor: "عطري · رقيق · ناعم",
        },
        addToCart: "أضف للسلة",
      },
      origin: {
        subtitle: "قصتنا",
        title1: "متجذرون في",
        title2: "التقاليد",
        p1: "في بريستو كوفي، نسافر إلى أشهر مناطق زراعة القهوة في العالم للحصول على بذور ذات جودة لا مثيل لها. يتم قطف كل صنف يدوياً في ذروة نضجه وتجفيفه بأساليب عريقة توارثتها الأجيال.",
        p2: "من مرتفعات إثيوبيا الضبابية إلى منحدرات سومطرة البركانية، تحكي كل بذرة قصة التربة والحرفية والشغف. نؤمن بأن القهوة الاستثنائية تبدأ قبل التخمير بوقت طويل — تبدأ بالبذرة.",
        origins: "مصادر",
        seedsSold: "بذور مباعة",
        organic: "عضوي",
      },
      cta: {
        subtitle: "ابقَ على تواصل",
        title1: "انضم إلى",
        title2: "عائلة",
        title3: "بريستو",
        description:
          "اشترك للحصول على وصول مبكر للمنتجات الجديدة وخصومات حصرية وأدلة التخمير.",
        placeholder: "بريدك@الإلكتروني.com",
        button: "اشترك",
      },
      footer: {
        rights: "© 2026 بريستو كوفي. جميع الحقوق محفوظة.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
