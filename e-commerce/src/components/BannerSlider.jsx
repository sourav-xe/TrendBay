import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BANNERS = [
  { img: "https://baccabucci.com/cdn/shop/files/Gourmet_banner_1_ff3.jpg?v=1761885450", to: "/new-arrivals" },
  { img: "https://baccabucci.com/cdn/shop/files/web_banner_1.jpg?v=1758347846", to: "/men" },
  { img: "https://baccabucci.com/cdn/shop/files/PPG_banner_1.png?v=1760417417", to: "/women" },
];


export default function BottomBannerSlider({
  height = "h-[clamp(220px,30vw,500px)]", // responsive banner height
  interval = 1000, // auto change every 2.5s
}) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const count = BANNERS.length;

  // Auto-play loop
  useEffect(() => {
    timer.current = setInterval(() => {
      setIdx((p) => (p + 1) % count);
    }, interval);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="w-screen overflow-hidden bg-black">
      <div className={`relative w-screen overflow-hidden ${height}`}>
        {/* Slides (cross-fade) */}
        {BANNERS.map((b, i) => {
          const active = i === idx;
          const Slide = b.to ? Link : "div";
          const slideProps = b.to ? { to: b.to } : {};
          return (
            <Slide
              key={i}
              {...slideProps}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={b.img}
                alt={`banner-${i + 1}`}
                className="w-screen h-full object-cover object-center"
                loading="lazy"
              />
            </Slide>
          );
        })}

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
