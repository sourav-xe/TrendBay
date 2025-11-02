import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ===========================
   Banners / backgrounds
   =========================== */
const TOP_BANNER =
  "https://img.freepik.com/premium-psd/horizontal-banner-template-design-online-shopping-fashion-sale_797457-3.jpg?w=1480";

const BACKGROUND =
  "https://images.bewakoof.com/uploads/grid/app/dhol-worthy-deals-desktop-strip-1708769152.png";

/* ✅ Promo image after carousel */
const PROMO_AFTER_CAROUSEL =
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/31/u7DPeZgp_4b3fe83d47eb4f3d97fa6a71941ef1c6.jpg";

/* ===========================
   Dhol-worthy style carousel cards (women)
   =========================== */
const dealsWomen = [
  {
    title: "Closed Toe Footwear",
    sub: "MIN. 75% OFF",
    img: "https://images.unsplash.com/photo-1670938258821-2956d4ce9c9b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Boho-Fusion Dresses",
    sub: "STARTING ₹399",
    img: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Ear Chains",
    sub: "STARTING ₹199",
    img: "https://images.unsplash.com/photo-1699894717166-2ddfd929c996?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Tailored Trend Jackets",
    sub: "UP TO 40% OFF",
    img: "https://plus.unsplash.com/premium_photo-1760140029865-208524a94bb9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Weightless Foundation",
    sub: "UNDER ₹599",
    img: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Knitted Dresses",
    sub: "STARTING ₹299",
    img: "https://images.unsplash.com/photo-1761979534905-c98ab2e4d786?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Timeless Tradition",
    sub: "MIN. 80% OFF",
    img: "https://plus.unsplash.com/premium_photo-1726804830059-948c01cda413?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Texture Play",
    sub: "UP TO 60% OFF",
    img: "https://images.unsplash.com/photo-1753718946012-4e6b2510e249?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Denim Dresses",
    sub: "STARTING ₹399",
    img: "https://images.unsplash.com/photo-1601036559620-3a83dfdead09?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Tank Tops",
    sub: "STARTING ₹199",
    img: "https://images.unsplash.com/photo-1605154734020-7ff44e0f4732?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

/* ===========================
   Shop by Category – 15 cards (women)
   =========================== */
const featuredWomen = [
  {
    title: "Dresses",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1753192103616-53e7e0ef83e6?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Kurtas & Sets",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1655288828238-21d86ec971c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Sarees",
    line1: "UP TO 70% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1691030256084-c2aeec79fe19?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Tops & Tees",
    line1: "UP TO 60% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1603217192097-13c306522271?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Jeans",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1689371953420-b6981e43fa38?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Footwear",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Handbags & Bags",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1751522925876-79bfeae6fbfb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Watches",
    line1: "UP TO 70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1657159810382-226b58af626f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Jewellery",
    line1: "UP TO 80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1631965004544-1762fc696476?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Beauty & Makeup",
    line1: "UP TO 70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Ethnic Wear",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Lingerie & Sleepwear",
    line1: "UP TO 60% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1661370004918-38ecf3b50c47?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Sunglasses",
    line1: "UP TO 70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1732139637237-a781abbd198c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Home Furnishings",
    line1: "40-70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1600210491188-be549f084855?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Kids Wear",
    line1: "40-70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1601925240970-98447486fcdb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

/* ===========================
   Latest Collections (lookbook)
   =========================== */
const lookbookWomen = [
  {
    titleTop: "OVERSIZED",
    titleBottom: "SHIRTS",
    img: "https://plus.unsplash.com/premium_photo-1689575248589-3944a725bda3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "EDGY  PLUS-SIZE",
    titleBottom: "T-SHIRTS",
    img: "https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "EFFORTLESS",
    titleBottom: "SWEATSHIRTS",
    img: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "CHILL-PROOF",
    titleBottom: "WINDCHEATERS",
    img: "https://images.unsplash.com/photo-1542925581-8db3deffbebb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "KOREAN",
    titleBottom: "PANTS",
    img: "https://images.unsplash.com/photo-1636283025607-edd0980a2729?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "OVERSIZED",
    titleBottom: "HOODIES",
    img: "https://images.unsplash.com/photo-1618333258404-f509733839c4?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "COMFY",
    titleBottom: "HOODIES",
    img: "https://images.unsplash.com/photo-1622736000556-cbc2ab91f00f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "COZY",
    titleBottom: "Sweaters",
    img: "https://plus.unsplash.com/premium_photo-1673757100765-5735ad708306?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "PRINTED",
    titleBottom: "JOGGERS",
    img: "https://images.unsplash.com/photo-1520183464745-e1bb2567c599?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

export default function Women() {
  const dealsRef = useRef(null);
  const pausedDealsRef = useRef(false); // ← pause flag for deals
  const lookRef = useRef(null);
  const [pausedLook, setPausedLook] = useState(false); // ← pause flag for lookbook

  /* ========= Continuous scroll for deals carousel (with hover/touch pause) ========= */
  useEffect(() => {
    const el = dealsRef.current;
    if (!el) return;

    let x = el.scrollLeft || 0;
    const speed = 1.2;
    let rafId;

    const tick = () => {
      if (!pausedDealsRef.current) {
        x += speed;
        const half = el.scrollWidth / 2; // we duplicate the array
        if (x >= half) x = 0;
        el.scrollLeft = x;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ========= Step-by-step carousel for latest collections (with hover pause) ========= */
  useEffect(() => {
    const el = lookRef.current;
    if (!el) return;

    const GAP = 24; // matches gap-6 (1.5rem)
    const getStep = () => {
      const first = el.children[0];
      if (!first) return 420 + GAP;
      const w = first.getBoundingClientRect().width;
      return Math.round(w + GAP);
    };

    let step = getStep();
    const handleResize = () => (step = getStep());
    window.addEventListener("resize", handleResize);

    let id;
    const start = () => {
      if (id) return;
      id = setInterval(() => {
        const half = el.scrollWidth / 2;
        el.scrollBy({ left: step, behavior: "smooth" });
        if (el.scrollLeft + step >= half) {
          setTimeout(() => {
            el.scrollLeft = 0;
          }, 420);
        }
      }, 1500);
    };
    const stop = () => {
      clearInterval(id);
      id = undefined;
    };

    if (!pausedLook) start();
    else stop();

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
    };
  }, [pausedLook]);

  return (
    <div className="bg-white">
      {/* ===== TOP FULL-WIDTH BANNER ===== */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <img
          src={TOP_BANNER}
          alt="Fashion Sale – Women"
          className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-cover rounded-b-2xl shadow-lg"
        />
      </section>

      {/* ===== DHOL-WORTHY STYLE CAROUSEL (with gap + hover pause) ===== */}
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center py-10"
        style={{ backgroundImage: `url(${BACKGROUND})` }}
      >
        <div
          ref={dealsRef}
          onMouseEnter={() => (pausedDealsRef.current = true)}
          onMouseLeave={() => (pausedDealsRef.current = false)}
          onTouchStart={() => (pausedDealsRef.current = true)}
          onTouchEnd={() => (pausedDealsRef.current = false)}
          className="flex overflow-x-hidden whitespace-nowrap gap-4 md:gap-6"
        >
          {[...dealsWomen, ...dealsWomen].map((item, i) => (
            <div
              key={`wd-${i}`}
              className="relative flex-shrink-0 overflow-hidden rounded-3xl shadow-lg"
              style={{ width: "270px" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[360px] object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute left-4 right-4 bottom-4">
                <div className="rounded-2xl bg-black/90 text-white px-4 py-3 text-center backdrop-blur-sm">
                  <div className="text-lg md:text-xl font-extrabold leading-tight">
                    {item.title}
                  </div>
                  <div className="text-sm opacity-90">{item.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROMO IMAGE AFTER CAROUSEL ===== */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <img
          src={PROMO_AFTER_CAROUSEL}
          alt="Latest offer"
          className="w-full h-[170px] sm:h-[190px] md:h-[220px] object-cover rounded-2xl"
        />
      </section>

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10">
        <div className="mx-auto max-w-[1400px] px-3 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {featuredWomen.map((c) => (
              <Link
                key={c.title}
                to={`/shop?cat=${encodeURIComponent(c.title)}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-4 text-center">
                  <div className="text-base md:text-lg font-bold">{c.title}</div>
                  <div className="text-rose-600 font-extrabold text-lg md:text-xl leading-tight">
                    {c.line1}
                  </div>
                  <div className="text-gray-700 text-xs md:text-sm tracking-wide">
                    {c.line2}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST COLLECTIONS – STEP-BY-STEP CAROUSEL (with gap + hover pause) ===== */}
      <h2 className="text-center text-xl md:text-2xl font-extrabold -mt-2">
        Latest Collections
      </h2>
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-8">
        <div
          ref={lookRef}
          onMouseEnter={() => setPausedLook(true)}
          onMouseLeave={() => setPausedLook(false)}
          className="flex overflow-x-hidden whitespace-nowrap gap-6 px-4 md:px-6"
        >
          {[...lookbookWomen, ...lookbookWomen].map((it, i) => (
            <div
              key={`lookw-${i}`}
              className="relative flex-shrink-0 rounded-3xl overflow-hidden"
              style={{ width: "420px", height: "540px" }}
            >
              <img
                src={it.img}
                alt={it.titleBottom}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-5 rounded-2xl border-[6px] border-white"></div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-white drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]">
                <div className="text-xs md:text-sm tracking-[.25em] font-semibold">
                  {it.titleTop}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold leading-none tracking-wide">
                  {it.titleBottom}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
