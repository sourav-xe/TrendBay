import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FandomCarousel() {
  // =======================
  // 🔧 EDIT HERE (sizes/look)
  // =======================
  const SETTINGS = {
    CARD_HEIGHT_PX: null, // <-- Set to null to use aspect ratio
    CARD_ASPECT: 5 / 6,   // <-- Match the image aspect ratio (500x600)
    CARD_SCALE: 1.0,      // <-- Use full calculated width
    BORDER_PX: 0,         // <-- Border removed
    RADIUS_PX: 12,        // <-- Reduced radius, closer to screenshot
    GAP_PX: 20,           // <-- Reduced gap, closer to screenshot
    AUTOPLAY_MS: 1600,
    TRANSITION_MS: 450,
    PEEK: { for1: 0.18, for2: 0.24, for3: 0.30 },
    SHADOW: "0 6px 20px rgba(0,0,0,0.08)",
  };

  // ✅ de-duped + https for first image
  const items = useMemo(
    () => [
      { id: "hp", name: "Harry Potter", tshirt: "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Men-1757323393.jpg" },
      { id: "peanuts", name: "Peanuts", tshirt: "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-men--2--1757581328.jpg" },
      { id: "naruto", name: "Naruto", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg" },
      { id: "marvel", name: "Marvel", tshirt: "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Superman-Men-1753194940.jpg" },
      { id: "nasa", name: "NASA", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-NASA-men-1738586659.jpg" },
      { id: "garfield", name: "Garfield", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-garfield-men-1738586652.jpg" },
      { id: "peanuts2", name: "Peanuts 2", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-peanuts-men-1738586855.jpg" },
      { id: "dc", name: "DC", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-DC-men-1738586415.jpg" },
      { id: "hp2", name: "Harry Potter 2", tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-HP-men-1738586657.jpg" }, // kept only once
    ],
    []
  );

  // clone edges for seamless loop (needed for wrap on scroll/drag/arrows)
  const loopItems = useMemo(
    () => [...items.slice(-3), ...items, ...items.slice(0, 3)],
    [items]
  );

  const containerRef = useRef(null);
  const [index, setIndex] = useState(3); // start at first "real" item
  const [cardSize, setCardSize] = useState({ width: 0, gap: SETTINGS.GAP_PX });
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // drag/scroll helpers
  const dragStartX = useRef(0);
  const dragging = useRef(false);
  const lastWheelTs = useRef(0);
  const wheelCooldownMs = 220; // throttle wheel→slide

  // compute card width so 3 full + peek are visible
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const perView = w < 640 ? 1 : w < 1024 ? 2 : 3;
      const peek =
        perView >= 3 ? SETTINGS.PEEK.for3 : perView === 2 ? SETTINGS.PEEK.for2 : SETTINGS.PEEK.for1;

      const gap = SETTINGS.GAP_PX;
      const el = containerRef.current;
      if (!el) return;

      const visibleGaps = perView - 1;
      const baseWidth = (el.clientWidth - gap * visibleGaps) / (perView + peek);
      const cw = baseWidth * SETTINGS.CARD_SCALE;
      setCardSize({ width: cw, gap });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []); // Note: SETTINGS are constant, so no need to add them as dependencies

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
      setIsAnimating(true);
    }, SETTINGS.AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, SETTINGS.AUTOPLAY_MS]);

  // seamless wrap after motion completes
  useEffect(() => {
    const total = loopItems.length;
    if (index <= 2) {
      const t = index + items.length;
      const to = setTimeout(() => {
        setIsAnimating(false);
        setIndex(t);
      }, Math.min(SETTINGS.TRANSITION_MS, 400));
      return () => clearTimeout(to);
    }
    if (index >= total - 3 - 1) {
      const t = index - items.length;
      const to = setTimeout(() => {
        setIsAnimating(false);
        setIndex(t);
      }, Math.min(SETTINGS.TRANSITION_MS, 400));
      return () => clearTimeout(to);
    }
    if (!isAnimating) {
      const id = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [index, items.length, loopItems.length, isAnimating, SETTINGS.TRANSITION_MS]);

  const goPrev = () => { setIndex((i) => i - 1); setIsAnimating(true); };
  const goNext = () => { setIndex((i) => i + 1); setIsAnimating(true); };

  // wheel → slide (wraps because we use index)
  const onWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTs.current < wheelCooldownMs) return;
    lastWheelTs.current = now;

    // prefer horizontal delta, fallback to vertical
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 0) goNext();
    if (delta < 0) goPrev();
  };

  // drag/swipe support
  const onPointerDown = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const dx = x - dragStartX.current;
    const threshold = Math.max(40, cardSize.width * 0.08);
    if (dx > threshold) {
      dragging.current = false;
      goPrev();
    } else if (dx < -threshold) {
      dragging.current = false;
      goNext();
    }
  };
  const onPointerUp = () => { dragging.current = false; };

  const offset = -(index * (cardSize.width + cardSize.gap));

  // IMAGE CARD size
  const imageBoxStyle = SETTINGS.CARD_HEIGHT_PX
    ? { height: SETTINGS.CARD_HEIGHT_PX, borderRadius: SETTINGS.RADIUS_PX }
    : { aspectRatio: SETTINGS.CARD_ASPECT, borderRadius: SETTINGS.RADIUS_PX };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto py-8 px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Shop by Fandom
        </h2>

        <div
          className="relative group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 text-white w-10 h-10 grid place-items-center opacity-0 group-hover:opacity-100 transition"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 text-white w-10 h-10 grid place-items-center opacity-0 group-hover:opacity-100 transition"
          >
            ›
          </button>

          {/* viewport */}
          <div ref={containerRef} className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
            {/* track */}
            <div
              className="flex items-stretch will-change-transform"
              style={{
                gap: `${cardSize.gap}px`,
                transform: `translateX(${offset}px)`,
                transition: isAnimating
                  ? `transform ${SETTINGS.TRANSITION_MS}ms ease`
                  : "none",
              }}
            >
              {loopItems.map((f, idx) => (
                <div
                  key={`${f.id}-${idx}`}
                  className="shrink-0 bg-transparent"
                  style={{ width: `${cardSize.width}px` }}
                >
                  {/* IMAGE TILE */}
                  <div
                    className="w-full overflow-hidden bg-white"
                    style={{
                      ...imageBoxStyle,
                      // border: `${SETTINGS.BORDER_PX}px solid black`, // <-- REMOVED
                      boxShadow: SETTINGS.SHADOW,
                    }}
                  >
                    <img
                      src={f.tshirt}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tweak notes:
          - Autoplay on/off: set isPaused default or wrap handlers.
          - Wheel sensitivity: wheelCooldownMs.
          - Drag swipe threshold: based on card width (0.08).
        */}
      </div>
    </section>
  );
}