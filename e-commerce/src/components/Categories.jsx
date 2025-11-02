import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedCategories() {
  // ---------------------------
  // CONFIG: edit titles, images, and groups
  // group: 'men' | 'women' | 'trending'
  // ---------------------------
  const tiles = [
    // --- MEN (first 4) ---
    {
      
      img: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/3cc45597-e378-4560-be80-bc5be39911e8/1761299015.jpeg",
      group: "men",
      promo: true,
    },
    {
      title: "Shirts",
      img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      group: "men",
    },
    {
      title: "Shoes",
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      group: "men",
    },
    {
      title: "Jeans",
      img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop",
      group: "men",
    },

    // --- WOMEN (next 4) ---
    {
      title: "Perfumes",
      img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      group: "women",
      
    },
    {
      title: "T-Shirts",
      img: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      group: "women",
    },
    {
      title: "Skirts",
      img: "https://media.istockphoto.com/id/1411357121/photo/traditional-bridal-wear-lehenga-clothes-for-indian-bride.webp?a=1&b=1&s=612x612&w=0&k=20&c=NgE1pLj1ouP-0A9_yNySTz2UDBPmmaY0hiy1e7Z2QtM=",
      group: "women",
      
    },
    {
      title: "Hills & Boots",
      img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      group: "women",
    },

    // --- TRENDING (rest) ---
    {
      title: "Sunglasses",
      img: "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      group: "trending",
    },
    {
      title: "Hoddies",
      img: "https://images.unsplash.com/photo-1578470507807-3fc541d5f544?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG92ZXJzaXplZCUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      group: "trending",
     
    },
     {
      title: "Oversized Tees",
      img: "https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      group: "trending",
    },
    {
      title: "Halloween Special",
      img: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFsbG93ZWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      group: "trending",
      
    },
  ];

  const routeForGroup = {
    men: "/men",
    women: "/women",
    trending: "/trending",
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-center text-lg md:text-xl font-extrabold tracking-wide">
          FEATURED CATEGORIES
        </h2>

        {/* GRID — 6 columns on large screens to match the look */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((t, i) => {
            const to = routeForGroup[t.group] ?? "/";

            return (
              <Link
                key={i}
                to={to}
                className="relative group overflow-hidden border border-neutral-200 bg-neutral-100"
              >
                {/* Keep the same card proportions */}
                <div className="aspect-[3/4] w-full">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Thin divider look (like tiles with gutters) */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

                {/* Promo styles vs normal label */}
             {t.promo ? (
  t.title ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white/85 backdrop-blur-[1px] px-4 py-2 rotate-[-2deg] shadow">
        <span className="text-black text-lg md:text-xl font-extrabold tracking-tight">
          {t.title.toUpperCase()}
        </span>
      </div>
    </div>
  ) : null
) : t.title ? (
  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
    <span className="rounded px-2 py-1 text-white text-sm md:text-base font-extrabold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
      {t.title.toUpperCase()}
    </span>
  </div>
) : null}

              </Link>
            );
          })}
        </div>
      </div>
    
    </section>
  );
}
