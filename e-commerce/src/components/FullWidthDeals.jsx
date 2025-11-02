import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Full-bleed (edge-to-edge) promo carousel:
 * - Fills entire screen width
 * - Shows 1/2/3 cards per view (mobile/tablet/desktop)
 * - Auto-plays every 4s (pauses on hover)
 * - Smooth slide by pages (groups)
 * - No external libraries
 */

const deals = [
  {
    img: "https://images.unsplash.com/photo-1649109670237-31fcefbac2b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    overline: "USE CODE: CARGOS100 • FLAT ₹100 OFF",
    titleTop: "THE CARGO",
    titleBottom: "CULTURE",
    align: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    overline: "DRIP-CODED SHIRTS",
    titleTop: "All TIME",
    titleBottom: " FAVOURITES",
    align: "left",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1715876234545-88509db72eb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    overline: "DESIGNS OF THE WEEK",
    titleTop: "THE BOHO",
    titleBottom: "REVIVAL",
    align: "right",
  },
  {
    img: "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    overline: "WINTER SPECIALS",
    titleTop: "SWEATERS",
    titleBottom: "& JACKETS",
    align: "left",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1715876268461-7d85ee7b1452?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    overline: "CO-ORD COLLECTION",
    titleTop: "COMFY",
    titleBottom: "CO-ORDS",
    align: "center",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    overline: "DENIM DAYS",
    titleTop: "JEANS",
    titleBottom: "UNDER ₹999",
    align: "right",
  },
];

export default function FullWidthDeals() {
  const viewportRef = useRef(null);
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);

  // Decide how many cards per page
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

  // Chunk into pages
  const pagesData = useMemo(() => {
    const arr = [];
    for (let i = 0; i < deals.length; i += perView) {
      arr.push(deals.slice(i, i + perView));
    }
    return arr;
  }, [perView]);

  // Auto play
  useEffect(() => {
    const id = setInterval(() => {
      if (!hover && pagesData.length > 0) {
        setPage((p) => (p + 1) % pagesData.length);
      }
    }, 2000);
    return () => clearInterval(id);
  }, [hover, pagesData.length]);

  // Slide to page
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: page * width, behavior: "smooth" });
  }, [page]);

  const go = (n) => setPage((n + pagesData.length) % pagesData.length);

  return (
    // Full-bleed wrapper (escapes container constraints)
    <div
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        {/* Track: each page = 100vw */}
        <div
          className="flex"
          style={{ width: `${pagesData.length * 100}vw` }}
        >
          {pagesData.map((pageItems, i) => (
            <div key={i} className="w-screen px-4 sm:px-6 lg:px-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((d, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="relative rounded-3xl overflow-hidden shadow-xl border bg-gray-100"
                  >
                    <img
                      src={d.img}
                      alt={d.titleBottom}
                      className="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div
                      className={`absolute inset-0 p-6 sm:p-8 flex items-end ${
                        d.align === "left"
                          ? "justify-start text-left"
                          : d.align === "right"
                          ? "justify-end text-right"
                          : "justify-center text-center"
                      }`}
                    >
                      <div className="text-white drop-shadow-[0_6px_22px_rgba(0,0,0,.7)]">
                        <div className="uppercase tracking-[.25em] text-xs sm:text-sm opacity-80">
                          {d.overline}
                        </div>
                        <div className="leading-none font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                          {d.titleTop}
                        </div>
                        <div className="leading-none font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                          {d.titleBottom}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows (desktop) */}
      <button
        onClick={() => go(page - 1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow hover:scale-105 items-center justify-center"
        aria-label="Prev"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => go(page + 1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow hover:scale-105 items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {pagesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === page ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
