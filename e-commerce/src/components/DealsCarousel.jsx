import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal multi-card carousel (1/2/3 per view) with:
 * - auto play (4s), pause on hover
 * - arrows + dots
 * - no external libraries
 */
const deals = [
  {
    img: "https://images.unsplash.com/photo-1548445929-2f4b9b7a8dfd?auto=format&fit=crop&w=1600&q=80",
    titleTop: "THE CARGO",
    titleBottom: "CULTURE",
    tag: "Use: CARGOS100 • Flat ₹100 OFF",
    align: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    titleTop: "all new",
    titleBottom: "Shirts",
    tag: "Drip-Coded Shirts",
    align: "center",
  },
  {
    img: "https://images.unsplash.com/photo-1592875206024-c2fafca205b2?auto=format&fit=crop&w=1600&q=80",
    titleTop: "THE BOHO",
    titleBottom: "REVIVAL",
    tag: "Designs of the Week",
    align: "right",
  },
  // add a few more so it feels rich
  {
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1600&q=80",
    titleTop: "WINTER",
    titleBottom: "JACKETS",
    tag: "Buy 2, Save More",
    align: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1600&q=80",
    titleTop: "CO-ORD",
    titleBottom: "SETS",
    tag: "Lounge in Style",
    align: "center",
  },
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    titleTop: "DENIM",
    titleBottom: "DAYS",
    tag: "Jeans From ₹999",
    align: "right",
  },
];

export default function DealsCarousel() {
  const scroller = useRef(null);
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);

  // compute pages (groups) based on perView
  const pages = useMemo(() => Math.ceil(deals.length / perView), [perView]);

  // responsive items per view
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      if (!hover && pages > 0) {
        setPage(p => (p + 1) % pages);
      }
    }, 4000);
    return () => clearInterval(id);
  }, [hover, pages]);

  // scroll to page
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: page * width, behavior: "smooth" });
  }, [page]);

  const go = (n) => setPage((n + pages) % pages);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* viewport */}
      <div
        ref={scroller}
        className="overflow-x-hidden scroll-smooth"
      >
        {/* track: use snap to keep cards aligned */}
        <div className="flex gap-6 snap-x snap-mandatory">
          {deals.map((d, i) => (
            <div
              key={i}
              className="
                snap-start
                min-w-[90%]
                sm:min-w-[48%]
                lg:min-w-[32%]
                rounded-2xl overflow-hidden shadow-lg border
                relative group
              "
            >
              <img
                src={d.img}
                alt={d.titleBottom}
                className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
              <div className={`absolute inset-0 p-4 md:p-6 flex ${d.align === "left" ? "items-end" : d.align === "right" ? "items-end justify-end text-right" : "items-end justify-center text-center"}`}>
                <div className="text-white drop-shadow-[0_4px_18px_rgba(0,0,0,.6)]">
                  <div className="uppercase tracking-[.2em] text-xs md:text-sm opacity-80">{d.tag}</div>
                  <div className="leading-none font-extrabold text-2xl md:text-4xl">{d.titleTop}</div>
                  <div className="leading-none font-extrabold text-2xl md:text-4xl">{d.titleBottom}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={() => go(page - 1)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow hover:scale-105 items-center justify-center"
        aria-label="Prev"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(page + 1)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow hover:scale-105 items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === page ? "bg-gray-900" : "bg-gray-300"}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
