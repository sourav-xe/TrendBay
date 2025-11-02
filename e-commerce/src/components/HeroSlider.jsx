import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661699817883-29ba5c39373b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1200",
    text: "Big Festive Sale – Up to 70% Off!",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200",
    text: "Hot Deals on Winter Wear",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200",
    text: "Casuals You’ll Live In",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  // ⏱️ Auto slide (change 3500 to adjust speed)
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  // 🎯 Slide movement
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
    }
  }, [idx]);

  return (
    // 📏 Width is like before: full width
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border">
      {/* Slide track */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-700 ease-out will-change-transform"
      >
        {slides.map((s, i) => (
          // 📐 One full slide visible
          <div key={i} className="min-w-full shrink-0 relative">
            {/* 🖼️ Keep same height as your original (400px) */}
            <img
              src={s.img}
              alt={s.text}
              className="w-full h-[400px] object-cover object-center"
            />
            {/* 🌫 Overlay */}
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-6">
                {s.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* ••• Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
