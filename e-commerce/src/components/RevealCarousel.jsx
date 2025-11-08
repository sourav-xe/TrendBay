import React, { useEffect, useRef, useState } from "react";
// ✅ Import Link
import { Link } from "react-router-dom";

/** =============================================
 * REVEAL CAROUSEL
 * - 10 images
 * - Big banner on top
 * - Thumbnail chips below (show next/coming)
 * - Slides 1-by-1 automatically
 * - Click a chip to jump
 * TailwindCSS-based; no external libs.
 * ============================================= */

// ✅ NOW 10 SLIDES
const slides = [
  {
    title: "#Red Fiesta Vibes",
    img: "https://i.pinimg.com/originals/31/9e/b0/319eb02c277f934cb91d0948e9ba1d62.jpg",
  },
  {
    title: "#Serve Party",
    img: "https://indiater.com/wp-content/uploads/2019/10/free-modern-fashion-cover-banner-design-psd-template.jpg",
  },
  {
    title: "#Puffy Pants",
    img: "https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg",
  },
  {
    title: "#Elegant Casual",
    img: "https://thedigital.agency/wp-content/uploads/2019/04/BlackFriday_StoreWF.jpg",
  },
  {
    title: "#Glimmer Baby",
    img: "https://marketplace.canva.com/EAFT4iBtkRY/1/0/800w/canva-beige-brown-minimalist-casual-style-banner-landscape-nCTDUarPDJo.jpg",
  },
  {
    title: "#Powdered Rose",
    img: "http://graphicgoogle.com/wp-content/uploads/2017/10/Facebook-Fashion-Big-Sale-Banner.jpg",
  },
  {
    title: "#Mint Green Fits",
    img: "https://tse1.mm.bing.net/th/id/OIP.B0ysQHUWF0uzpm6XkfptsQHaD3?pid=Api&P=0&h=180",
  },
  {
    title: "#Swirl Heat",
    img: "https://i.pinimg.com/originals/a0/04/7c/a0047c6fbe7355ce655176da3b4cba5e.jpg",
  },
  // ✅ ADDED 2 NEW SLIDES
  {
    title: "#Neon Pop",
    img: "https://s3.envato.com/files/211924554/BEE-1741-Mens%20Fashion%20Banners_01_Preview4.jpg",
  },
  {
    title: "#Street Ready",
    img: "https://i.pinimg.com/originals/ec/6c/5a/ec6c5ab94ee1ee6c3a2a4fb9d56843e2.jpg",
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

  const handleArrowClick = (e, dir) => {
    // Stop the Link from navigating when clicking the arrow
    e.preventDefault();
    e.stopPropagation();
    go(dir);
  }

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-6 md:py-8"
      aria-label="Resort Ready Carousel"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        {/* ✅ Big Banner - WRAPPED IN LINK */}
        <Link
          to={`/shop?cat=${encodeURIComponent("Dresses")}`}
          className="relative block rounded-3xl overflow-hidden h-[400px] md:h-[520px]"
        >
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
                // ✅ Added onClick handler to prevent link navigation
                onClick={(e) => handleArrowClick(e, "next")}
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
              // ✅ Added onClick handler to prevent link navigation
              onClick={(e) => handleArrowClick(e, "prev")}
              className="w-10 h-10 rounded-full bg-white/90 text-gray-900 grid place-items-center shadow"
              aria-label="Previous"
            >
              ‹
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-3">
            <button
              // ✅ Added onClick handler to prevent link navigation
              onClick={(e) => handleArrowClick(e, "next")}
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
                    // ✅ Added onClick handler to prevent link navigation
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIndex(i);
                    }}
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
        </Link> {/* ✅ Link wrapper closes here */}

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