import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1520975698519-59c38f02e3f6?auto=format&fit=crop&w=1600&q=80",
    text: "Big Festive Sale – Up to 70% Off!",
  },
  {
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1600&q=80",
    text: "Hot Deals on Winter Wear",
  },
  {
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    text: "Casuals You’ll Live In",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.style.transform = `translateX(-${idx * 100}%)`;
  }, [idx]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border">
      <div ref={ref} className="flex transition-transform duration-700 ease-out" style={{ width: `${slides.length * 100}%` }}>
        {slides.map((s, i) => (
          <div key={i} className="w-full shrink-0 relative">
            <img src={s.img} alt={s.text} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-6">{s.text}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
