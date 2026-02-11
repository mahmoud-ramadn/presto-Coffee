import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoffeeBeanSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 80" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="40" rx="22" ry="36" opacity="0.9" />
    <path d="M30 6 C26 20, 26 60, 30 74" stroke="hsl(20,14%,8%)" strokeWidth="2.5" fill="none" />
  </svg>
);

const seeds = [
  { id: 1, left: "5%", top: "8%", size: "w-8", rotate: 25, speed: 1.2 },
  { id: 2, left: "92%", top: "12%", size: "w-6", rotate: -40, speed: 0.8 },
  { id: 3, left: "15%", top: "25%", size: "w-10", rotate: 60, speed: 1.5 },
  { id: 4, left: "88%", top: "30%", size: "w-7", rotate: -15, speed: 1.0 },
  { id: 5, left: "3%", top: "42%", size: "w-5", rotate: 80, speed: 1.3 },
  { id: 6, left: "95%", top: "48%", size: "w-9", rotate: -55, speed: 0.9 },
  { id: 7, left: "8%", top: "58%", size: "w-6", rotate: 35, speed: 1.4 },
  { id: 8, left: "90%", top: "65%", size: "w-8", rotate: -70, speed: 1.1 },
  { id: 9, left: "12%", top: "78%", size: "w-7", rotate: 45, speed: 0.7 },
  { id: 10, left: "93%", top: "85%", size: "w-5", rotate: -30, speed: 1.6 },
];

const ScrollingSeeds = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const seedRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      seedRefs.current.forEach((el, i) => {
        if (!el) return;
        const seed = seeds[i];
        const yDistance = seed.speed * 600;
        const rotateAmount = seed.rotate * 3;

        gsap.fromTo(
          el,
          { y: 0, rotation: seed.rotate, scale: 0.7, opacity: 0.15 },
          {
            y: -yDistance,
            rotation: seed.rotate + rotateAmount,
            scale: 1,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {seeds.map((seed, i) => (
        <div
          key={seed.id}
          ref={(el) => { seedRefs.current[i] = el; }}
          className={`absolute ${seed.size} text-primary/20`}
          style={{ left: seed.left, top: seed.top }}
        >
          <CoffeeBeanSVG />
        </div>
      ))}
    </div>
  );
};

export default ScrollingSeeds;
