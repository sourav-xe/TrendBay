import React, { useEffect, useRef, useState } from "react";
import RevealCarousel from "../components/RevealCarousel.jsx";


/** =========================================
 *  TREND SPILL — Straight From Fashion Week
 *  (3 cards visible, 4th slightly cut; slides 1-by-1)
 *  Put this section first on your Trending page.
 *  TailwindCSS styles, no external libs.
 *  ========================================= */
const trendCards = [
  {
    title: "All Things Sheer",
    subtitle: "A Delicate Mess",
    img: "https://images.unsplash.com/photo-1544745782-d7d4d1f0ecb7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Corset Energy",
    subtitle: "Snatched & Unmatched",
    img: "https://images.unsplash.com/photo-1520975940460-4c7e3dfe8ab1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Satin Sheen",
    subtitle: "Soft but Savage",
    img: "https://images.unsplash.com/photo-1520974735194-5f77d8de6a3f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Metallic Mood",
    subtitle: "Future-Ready Shine",
    img: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Power Shoulders",
    subtitle: "Runway Authority",
    img: "https://images.unsplash.com/photo-1548544144-8f9a2c0f0b06?q=80&w=1600&auto=format&fit=crop",
  },
];

function TrendSpill() {
  const railRef = useRef(null);
  const [step, setStep] = useState(0);

  // Compute the step size (card width + gap) responsively
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const computeStep = () => {
      const first = el.children?.[0];
      if (!first) return;
      const w = first.getBoundingClientRect().width;
      // gap-6 -> 24px between items
      setStep(Math.round(w + 24));
    };
    computeStep();
    window.addEventListener("resize", computeStep);
    return () => window.removeEventListener("resize", computeStep);
  }, []);

  // Auto-advance one-by-one
  useEffect(() => {
    const el = railRef.current;
    if (!el || !step) return;
    const half = el.scrollWidth / 2;
    const id = setInterval(() => {
      // one-step smooth scroll
      el.scrollBy({ left: step, behavior: "smooth" });
      // loop seamlessly when we reach the midpoint of duplicated items
      if (el.scrollLeft + step >= half) {
        setTimeout(() => {
          el.scrollLeft = 0;
        }, 420);
      }
    }, 2600);
    return () => clearInterval(id);
  }, [step]);

  const go = (dir) => {
    const el = railRef.current;
    if (!el || !step) return;
    const half = el.scrollWidth / 2;
    const delta = dir === "next" ? step : -step;
    el.scrollBy({ left: delta, behavior: "smooth" });
    if (dir === "next" && el.scrollLeft + step >= half) {
      setTimeout(() => {
        el.scrollLeft = 0;
      }, 420);
    }
    if (dir === "prev" && el.scrollLeft <= 0) {
      // jump to midpoint mirror to allow smooth left move
      el.scrollLeft = half;
    }
  };

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-6 md:py-8"
      aria-label="Trend Spill"
    >
      {/* Heading */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-[40px] font-extrabold leading-tight">
              <span className="tracking-tight">Trend Spill</span>{" "}
              <span className="italic font-serif text-gray-900">
                : Straight From Fashion Week
              </span>
            </h2>
          </div>
          {/* Simple chevrons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => go("prev")}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 grid place-items-center"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => go("next")}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 grid place-items-center"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Rail: show 3 full cards + 4th a bit cut */}
      <div className="mx-auto max-w-[1400px] px-2 md:px-4">
        <div
          ref={railRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-6 md:gap-6"
          // Start slightly scrolled to get the "cut 4th" feel on small screens too
          style={{ scrollBehavior: "smooth" }}
        >
          {[...trendCards, ...trendCards].map((card, idx) => (
            <article
              key={`trend-${idx}`}
              className="relative flex-shrink-0 rounded-3xl overflow-hidden shadow-md"
              // width responsive: big cards like screenshot
              style={{
                width: "520px", // desktop card width
                height: "680px",
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Bottom label like screenshot */}
              <div className="absolute left-5 right-5 bottom-5">
                <div className="rounded-2xl bg-black/85 text-white px-6 py-4 text-center backdrop-blur-sm">
                  <div className="text-[26px] md:text-[28px] font-extrabold leading-tight">
                    {card.title}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {card.subtitle}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile arrows (optional) */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          <button
            onClick={() => go("prev")}
            className="px-4 py-2 rounded-full border border-gray-300"
            aria-label="Previous"
          >
            Prev
          </button>
          <button
            onClick={() => go("next")}
            className="px-4 py-2 rounded-full border border-gray-300"
            aria-label="Next"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Trending() {
  return (
    <div className="bg-white">
      {/* Put this section FIRST on the page */}
      <TrendSpill />
      <RevealCarousel />

      {/* (Optional) rest of your trending page content below... */}
    </div>
  );
}
