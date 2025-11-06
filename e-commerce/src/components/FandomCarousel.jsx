import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function FandomCarousel() {
  // =======================
  // 🔧 EDIT HERE (sizes/look)
  // =======================
  const SETTINGS = {
    CARD_HEIGHT_PX: null,
    CARD_ASPECT: 5 / 6,
    CARD_SCALE: 1.0,
    BORDER_PX: 0,
    RADIUS_PX: 12,
    GAP_PX: 20,
    AUTOPLAY_MS: 1600,
    TRANSITION_MS: 450,
    PEEK: { for1: 0.18, for2: 0.24, for3: 0.30 },
    SHADOW: "0 6px 20px rgba(0,0,0,0.08)",
  };

  // ✅ items with matching product ids (fandom-1..9)
  const items = useMemo(
    () => [
      {
        id: 1,
        productId: "fandom-1",
        name: "Harry Potter",
        tshirt:
          "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Men-1757323393.jpg",
      },
      {
        id: 2,
        productId: "fandom-2",
        name: "Peanuts",
        tshirt:
          "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-men--2--1757581328.jpg",
      },
      {
        id: 3,
        productId: "fandom-3",
        name: "Naruto",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg",
      },
      {
        id: 4,
        productId: "fandom-4",
        name: "Marvel",
        tshirt:
          "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Superman-Men-1753194940.jpg",
      },
      {
        id: 5,
        productId: "fandom-5",
        name: "NASA",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-NASA-men-1738586659.jpg",
      },
      {
        id: 6,
        productId: "fandom-6",
        name: "Garfield",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-garfield-men-1738586652.jpg",
      },
      {
        id: 7,
        productId: "fandom-7",
        name: "Peanuts 2",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-peanuts-men-1738586855.jpg",
      },
      {
        id: 8,
        productId: "fandom-8",
        name: "DC",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-DC-men-1738586415.jpg",
      },
      {
        id: 9,
        productId: "fandom-9",
        name: "Harry Potter 2",
        tshirt: "https://images.bewakoof.com/uploads/grid/app/SC-HP-men-1738586657.jpg",
      },
    ],
    []
  );

  // clone edges for seamless loop
  const loopItems = useMemo(
    () => [...items.slice(-3), ...items, ...items.slice(0, 3)],
    [items]
  );

  const containerRef = useRef(null);
  const [index, setIndex] = useState(3); // start at first "real" item
  const [cardSize, setCardSize] = useState({ width: 0, gap: SETTINGS.GAP_PX });
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragging = useRef(false);
  const lastWheelTs = useRef(0);
  const wheelCooldownMs = 220;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const perView = w < 640 ? 1 : w < 1024 ? 2 : 3;
      const peek =
        perView >= 3
          ? SETTINGS.PEEK.for3
          : perView === 2
          ? SETTINGS.PEEK.for2
          : SETTINGS.PEEK.for1;

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
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
      setIsAnimating(true);
    }, SETTINGS.AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, SETTINGS.AUTOPLAY_MS]);

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

  const goPrev = () => {
    setIndex((i) => i - 1);
    setIsAnimating(true);
  };
  const goNext = () => {
    setIndex((i) => i + 1);
    setIsAnimating(true);
  };

  const onWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTs.current < wheelCooldownMs) return;
    lastWheelTs.current = now;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 0) goNext();
    if (delta < 0) goPrev();
  };

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
  const onPointerUp = () => {
    dragging.current = false;
  };

  const offset = -(index * (cardSize.width + cardSize.gap));

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
          <div
            ref={containerRef}
            className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
          >
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
                  <Link
                    to={`/product/${f.productId}`}
                    className="block w-full h-full"
                  >
                    <div
                      className="w-full overflow-hidden bg-white"
                      style={{
                        ...imageBoxStyle,
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
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
