import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TOP_BANNER =
  "https://images.bewakoof.com/uploads/grid/app/dotw-banner---thin-strip-desktop---TBR--men--1--1761928828.jpg";

const BACKGROUND =
  "https://images.bewakoof.com/uploads/grid/app/dhol-worthy-deals-desktop-strip-1708769152.png";

const BOTTOM_PROMO =
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/31/u7DPeZgp_4b3fe83d47eb4f3d97fa6a71941ef1c6.jpg";

/* ===========================
   16 Featured Men Categories
   =========================== */
const featuredCats = [
  {
    title: "T-Shirts",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Sports Shoes",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Shirts",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Jeans",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Kurtas & Sets",
    line1: "50-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1727835523545-70ee992b5763?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a3VydGFzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Trousers",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Track Pants",
    line1: "UP TO 80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1711175017307-bbacf7c2ca13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },

  {
    title: "Innerwear",
    line1: "UP TO 70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1730309047747-c35880bf7b1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGlubmVyd2VhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Belts & Wallets",
    line1: "40-80% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Sunglasses & Frames",
    line1: "30-70% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bmdsYXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Hoodies",
    line1: "MIN. 60% OFF",
    line2: "Shop Now",
    img: "https://plus.unsplash.com/premium_photo-1670588892182-cd1d47097efd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Sweatshirts",
    line1: "MIN. 60% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1635892438808-e6dcf5f43b17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN3ZWF0c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Jackets",
    line1: "UP TO 60% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Blazers",
    line1: "UP TO 60% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Shorts",
    line1: "UP TO 60% OFF",
    line2: "Shop Now",
    img: "https://images.unsplash.com/photo-1612913334025-bedf136f8715?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNob3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

/* ===========================
   Horizontal carousel (same)
   =========================== */
const carouselItems = [
  {
    title: "Classic Precision",
    sub: "20–50% OFF",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Timeless Eyewear",
    sub: "MIN. 60% OFF",
    img: "https://images.unsplash.com/photo-1605464765759-55272601601e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGltZWxlc3MlMjBFeWV3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Haldi-Ready Kurtas",
    sub: "UNDER ₹799",
    img: "https://images.unsplash.com/photo-1727835523550-18478cacefa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S3VydGFzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Trendy Sherwanis",
    sub: "UP TO 70% OFF",
    img: "https://plus.unsplash.com/premium_photo-1711132425055-1c289c69b950?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hcnJpYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Handcrafted Bags",
    sub: "STARTING ₹1399",
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Mehandi Kurtas",
    sub: "UNDER ₹999",
    img: "https://images.unsplash.com/photo-1701365676249-9d7ab5022dec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Shackets",
    sub: "STARTING ₹799",
    img: "https://images.unsplash.com/photo-1654881710580-ac11d4c3ecba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Regal Kurta Sets",
    sub: "MIN. 60% OFF",
    img: "https://images.unsplash.com/photo-1744551358303-46edae8b374b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Denim Layer-Ups",
    sub: "MIN. 60% OFF",
    img: "https://plus.unsplash.com/premium_photo-1730828574105-4c84818751f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fERlbmltfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Jodhpuri Blazers",
    sub: "UP TO 60% OFF",
    img: "https://plus.unsplash.com/premium_photo-1695604461666-d0c16bc3381a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEJsYXplcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
];

/* ===========================
   NEW Lookbook Carousel
   =========================== */
const lookbookItems = [
  
   {
    titleTop: "OVERSIZED",
    titleBottom: "SHIRTS",
    img: "https://images.unsplash.com/photo-1694485338927-49564929019d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG92ZXJ6aWVkJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "EDGY  PLUS-SIZE",
    titleBottom: "T-SHIRTS",
    img: "https://images.unsplash.com/photo-1739001411231-4fc0f4140259?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG92ZXJ6aWVkJTIwdHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
   {
    titleTop: "EFFORTLESS",
    titleBottom: "SWEATSHIRTS",
    img: "https://plus.unsplash.com/premium_photo-1727967291564-aa94bd08cf46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U1dFQVRTSElSVFN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  
  {
    titleTop: "CHILL-PROOF",
    titleBottom: "WINDCHEATERS",
    img: "https://plus.unsplash.com/premium_photo-1759821701456-b6a2fb786fa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V0lORENIRUFURVJTfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
 
 
 
  {
    titleTop: "KOREAN",
    titleBottom: "PANTS",
    img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  
  {
    titleTop: "OVERSIZED",
    titleBottom: "HOODIES",
    img: "https://images.unsplash.com/photo-1704430705406-24fc29dfcccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "COMFY",
    titleBottom: "HOODIES",
    img: "https://images.unsplash.com/photo-1704430705052-dc2361906305?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    titleTop: "COZY",
    titleBottom: "Sweaters",
    img: "https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFN3ZWF0ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
   {
    titleTop: "PRINTED",
    titleBottom: "JOGGERS",
    img: "https://images.unsplash.com/photo-1628276148207-1579c992e651?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sk9HR0VSU3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export default function Men() {
  const dealsRef = useRef(null);
  const pausedRef = useRef(false); // ← hover/touch pause flag

  // Auto-scroll: Dhol-worthy Deals (continuous + hover/touch pause)
  useEffect(() => {
    const el = dealsRef.current;
    if (!el) return;

    let scrollPos = el.scrollLeft || 0;
    const speed = 1.2;
    let rafId;

    const loop = () => {
      if (!pausedRef.current) {
        scrollPos += speed;
        const half = el.scrollWidth / 2; // since we duplicate the list below
        if (scrollPos >= half) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // ===== Lookbook: 3 visible + 4th cut, loop seamlessly =====
  const [lbIndex, setLbIndex] = useState(0);
  const [isJump, setIsJump] = useState(false); // disable transition on index reset
  const LB_STEP = 26.5; // percent shift per card

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setLbIndex((p) => p + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // when we reach the cloned slide, snap back to 0 without anim
  useEffect(() => {
    if (lbIndex === lookbookItems.length) {
      const t = setTimeout(() => {
        setIsJump(true);
        requestAnimationFrame(() => {
          setLbIndex(0);
          requestAnimationFrame(() => setIsJump(false));
        });
      }, 700); // match duration below
      return () => clearTimeout(t);
    }
  }, [lbIndex]);

  // Build slides with a clone of the first one at the end
  const loopSlides = [...lookbookItems, lookbookItems[0]];

  return (
    <div className="bg-white">
      {/* ===== TOP FULL-WIDTH BANNER ===== */}
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        aria-label="Men Top Banner"
      >
        <img
          src={TOP_BANNER}
          alt="Designs of the Week - Men"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-b-2xl"
        />
      </section>

      {/* ===== CONTINUOUS CAROUSEL (Dhol-Worthy Deals) ===== */}
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center py-10"
        style={{ backgroundImage: `url(${BACKGROUND})` }}
      >
        <div
          ref={dealsRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          className="flex overflow-x-hidden whitespace-nowrap gap-4 md:gap-6"
        >
          {[...carouselItems, ...carouselItems].map((item, i) => (
            <div
              key={i}
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

      {/* ===== SMALLER HEIGHT FULL-WIDTH PROMO IMAGE ===== */}
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        aria-label="Men Bottom Promo"
      >
        <img
          src={BOTTOM_PROMO}
          alt="Men bottom promo"
          className="w-full h-[170px] sm:h-[190px] md:h-[220px] object-cover rounded-2xl"
        />
      </section>

      {/* ===== FEATURED CATEGORIES ===== */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10">
        <div className="mx-auto max-w-[1400px] px-3 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
            Featured Categories
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {featuredCats.map((c) => (
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

      {/* ===== heading BEFORE the last carousel ===== */}
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mt-2">
        Latest Collections
      </h2>

      {/* ===== LOOKBOOK: 3 visible + 4th cut, seamless loop ===== */}
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-8 md:py-10"
        aria-label="Men Lookbook"
      >
        {/* viewport */}
        <div className="overflow-hidden relative max-w-[1400px] px-2 md:px-4 mx-auto">
          {/* track */}
          <div
            className="flex ease-out"
            style={{
              transform: `translateX(-${lbIndex * LB_STEP}%)`,
              transition: isJump ? "none" : "transform 700ms ease-out",
            }}
          >
            {loopSlides.map((it, i) => (
              <div
                key={`look-${i}`}
                className="relative min-w-[30%] mr-6 rounded-3xl overflow-hidden shadow-lg"
                style={{ height: "560px" }}
              >
                <img
                  src={it.img}
                  alt={it.titleBottom}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* White inner frame */}
                <div className="pointer-events-none absolute inset-5 md:inset-6 rounded-2xl border-[6px] border-white"></div>

                {/* Heading inside frame (top-center) */}
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
        </div>
      </section>
    </div>
  );
}
