import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Clickable hero slides. Each slide links to /collection/:slug
 * No external libs. Simple auto-play with pause on hover.
 */

// ✅ Added a 'linkCat' to each slide
const SLIDES = [
  {
    slug: "casual",
    title: "Casual Wear",
    subtitle: "Everyday comfy fits",
    img: "https://plus.unsplash.com/premium_photo-1661699817883-29ba5c39373b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1200",
    linkCat: "Tshirts",
  },
  {
    slug: "streetwear",
    title: "Streetwear",
    subtitle: "Graphic tees, cargos, oversized",
    img: "https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200",
    linkCat: "Graphic Tees",
  },
  {
    slug: "formal",
    title: "Formal & Work",
    subtitle: "Tailored, crisp & clean",
    img: "https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200",
    linkCat: "Shirts, Tops & Tunics",
  },
  {
    slug: "athleisure",
    title: "Athleisure",
    subtitle: "Move-ready layers",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    linkCat: "Joggers",
  },
  {
    slug: "party",
    title: "Party Fits",
    subtitle: "Stand-out evening looks",
    img: "https://plus.unsplash.com/premium_photo-1683121266311-04c92a01f5e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    linkCat: "Dresses",
  },
  {
    slug: "ethnic",
    title: "Ethnic & Festive",
    subtitle: "Kurtas, sarees, lehengas",
    img: "https://media.istockphoto.com/id/1560030949/photo/happy-young-indian-couple-with-shopping-bags-in-hand-looking-camera-concept-of-festival.webp?a=1&b=1&s=612x612&w=0&k=20&c=-2LUyv2tpXxfyWgcGr-9xwkpny9UTPiYSd_-ScQiKHo=",
    linkCat: "Dresses", // Links to Dresses category
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const len = SLIDES.length;

  const go = (i) => setIndex((prev) => (prev + i + len) % len);
  const goTo = (i) => setIndex(((i % len) + len) % len);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = setTimeout(() => go(1), 4500);
  };

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div
      className="relative w-full h-[360px] md:h-[430px] rounded-3xl overflow-hidden shadow-xl"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* Slides */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((s) => (
          <Link
            key={s.slug}
            // ✅ UPDATED LINK: Now includes the category
            to={`/collection/${s.slug}?cat=${encodeURIComponent(s.linkCat)}`}
            className="relative min-w-full h-full"
          >
            <img
              src={s.img}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white drop-shadow-lg">
              <h3 className="text-3xl md:text-4xl font-extrabold">{s.title}</h3>
              <p className="opacity-90 md:text-lg">{s.subtitle}</p>
              <span className="inline-block mt-3 px-5 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-semibold hover:bg-white transition">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow hidden md:block"
        aria-label="Prev"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow hidden md:block"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}