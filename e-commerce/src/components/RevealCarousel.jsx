import React, { useEffect, useRef, useState } from "react";

/** =============================================
 *  REVEAL CAROUSEL
 *  - 8 images
 *  - Big banner on top
 *  - Thumbnail chips below (show next/coming)
 *  - Slides 1-by-1 automatically
 *  - Click a chip to jump
 *  TailwindCSS-based; no external libs.
 *  ============================================= */

const slides = [
  {
    title: "#Red Fiesta Vibes",
    img: "https://images.unsplash.com/photo-1539118142631-4b56d2f0b2f3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Serve Party",
    img: "https://images.unsplash.com/photo-1520974722074-5f77d8de6a3f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Puffy Pants",
    img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Elegant Casual",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Glimmer Baby",
    img: "https://images.unsplash.com/photo-1548544144-8f9a2c0f0b06?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Powdered Rose",
    img: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Mint Green Fits",
    img: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "#Swirl Heat",
    img: "https://images.unsplash.com/photo-1592878904946-371b0f7d44a0?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function RevealCarousel() {
  const [index, setIndex] = useState(0);
  const chipsRef = useRef(null);

  // auto-advance one-by-one
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // keep active chip nicely in view
  useEffect(() => {
    const el = chipsRef.current;
    if (!el) return;
    const chip = el.querySelector(`[data-chip="${index}"]`);
    if (!chip) return;

    const cRect = chip.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    // if chip is going out of view on either side, scroll a bit
    if (cRect.left < eRect.left + 24) {
      el.scrollBy({ left: cRect.left - eRect.left - 24, behavior: "smooth" });
    } else if (cRect.right > eRect.right - 24) {
      el.scrollBy({ left: cRect.right - eRect.right + 24, behavior: "smooth" });
    }
  }, [index]);

  const go = (dir) => {
    setIndex((i) => {
      if (dir === "next") return (i + 1) % slides.length;
      return (i - 1 + slides.length) % slides.length;
    });
  };

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-6 md:py-8"
      aria-label="Resort Ready Carousel"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        {/* Big Banner */}
        <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[420px]">
          {/* cross-fade images */}
          {slides.map((s, i) => (
            <img
              key={s.title + i}
              src={s.img}
              alt={s.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}

          {/* gradient + heading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="absolute left-6 md:left-10 top-8 z-10">
            <div className="flex items-center gap-3">
              <h3 className="text-white text-[34px] md:text-[54px] font-extrabold tracking-tight">
                #Resort Ready
              </h3>
              <button
                onClick={() => go("next")}
                className="grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 text-gray-900"
                aria-label="Next"
              >
                ➜
              </button>
            </div>
            <p className="text-white/90 text-base md:text-xl mt-1">
              Vacay fits that don’t quit
            </p>
          </div>

          {/* left/right arrows (desktop) */}
          <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-3">
            <button
              onClick={() => go("prev")}
              className="w-10 h-10 rounded-full bg-white/90 text-gray-900 grid place-items-center shadow"
              aria-label="Previous"
            >
              ‹
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-3">
            <button
              onClick={() => go("next")}
              className="w-10 h-10 rounded-full bg-white/90 text-gray-900 grid place-items-center shadow"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* THUMBNAIL CHIPS */}
          <div className="absolute left-0 right-0 bottom-3 md:bottom-4 px-3 md:px-6">
            <div
              ref={chipsRef}
              className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar"
            >
              {slides.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.title}
                    data-chip={i}
                    onClick={() => setIndex(i)}
                    className={`relative shrink-0 rounded-2xl p-1 md:p-[6px] transition-all ${
                      active
                        ? "bg-white/90 shadow ring-2 ring-white/90"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    style={{ width: 120, height: 120 }}
                    aria-label={s.title}
                    title={s.title}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Caption */}
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] md:text-xs font-semibold text-white drop-shadow">
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* mobile controls */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          <button
            onClick={() => go("prev")}
            className="px-4 py-2 rounded-full border border-gray-300"
          >
            Prev
          </button>
          <button
            onClick={() => go("next")}
            className="px-4 py-2 rounded-full border border-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
