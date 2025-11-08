import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HoverSwapShowcase() {
  const items = [
    {
      label: "SNEAKERS",
      left: "https://baccabucci.com/cdn/shop/files/hod_1.jpg?v=1759306136&width=360",
      right: "https://baccabucci.com/cdn/shop/files/ppf.jpg?v=1759306169&width=360",
      // collection slug + category filter
      to: `/collection/sneakers?cat=${encodeURIComponent("Sneakers")}`,
    },
    {
      label: "ACTIVE SHOES",
      left: "https://images.unsplash.com/photo-1565604085891-f0edf1b179f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      right: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0cyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      to: `/collection/active-shoes?cat=${encodeURIComponent("Shoes")}`,
    },
    {
      label: "ADVENTURE",
      left: "https://baccabucci.com/cdn/shop/files/DSC01974-Edit.webp?v=1734506157&width=535",
      right: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      to: `/collection/adventure?cat=${encodeURIComponent("Caps")}`,
    },
    {
      label: "BELTS & WALLETS",
      left: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      to: `/collection/accessories?cat=${encodeURIComponent("Accessories")}`,
    },
    {
      label: "OVERSIZED T-SHIRTS",
      left: "https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      right: "https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3ZlcnNpemVkJTIwdHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      to: `/collection/oversized-tees?cat=${encodeURIComponent("Tshirts")}`,
    },
  ];

  const [active, setActive] = useState(0); // default selected row

  const LeftWrap = items[active].to ? Link : "div";
  const RightWrap = items[active].to ? Link : "div";

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* LEFT IMAGE */}
          <LeftWrap
            to={items[active].to || ""}
            className="relative overflow-hidden rounded-3xl h-[360px] md:h-[480px] shadow"
          >
            {/* cross-fade stack */}
            {items.map((it, i) => (
              <img
                key={`L-${i}`}
                src={it.left}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </LeftWrap>

          {/* CENTER TEXT LIST */}
          <ul className="flex flex-col items-center gap-3 md:gap-4">
            {items.map((it, i) => {
              const selected = i === active;
              const LabelTag = it.to ? Link : "button";
              return (
                <li key={it.label} className="w-full flex justify-center">
                  <LabelTag
                    to={it.to || undefined}
                    className={`group text-center tracking-wide transition-all duration-300 text-xl md:text-3xl focus:outline-none ${
                      selected ? "scale-105" : "hover:scale-105"
                    }`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={selected ? "true" : "false"}
                  >
                    <span
                      className={`
                        transition-all duration-300
                        ${
                          selected
                            ? "text-[#FFD700] font-extrabold"
                            : "text-black hover:text-[#FFD700]"
                        }
                      `}
                    >
                      {it.label}
                    </span>
                  </LabelTag>
                </li>
              );
            })}
          </ul>

          {/* RIGHT IMAGE */}
          <RightWrap
            to={items[active].to || ""}
            className="relative overflow-hidden rounded-3xl h-[360px] md:h-[480px] shadow"
          >
            {items.map((it, i) => (
              <img
                key={`R-${i}`}
                src={it.right}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </RightWrap>
        </div>
      </div>
    </section>
  );
}
