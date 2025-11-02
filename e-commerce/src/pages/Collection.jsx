import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * A themed collection landing page that shows 28 unique items
 * based on :slug (casual, streetwear, formal, athleisure, party, ethnic)
 * Images use unsplash dynamic endpoint with different `sig` values
 * so every tile is unique per theme.
 */

const THEMES = {
  casual: {
    title: "Casual Wear",
    subtitle: "Everyday comfy & easy outfits",
    query: "men,casual,fashion",
    chipColor: "bg-blue-50 text-blue-700",
  },
  streetwear: {
    title: "Streetwear",
    subtitle: "Graphic tees, cargos & oversized fits",
    query: "streetwear,hoodie,cargo,men",
    chipColor: "bg-emerald-50 text-emerald-700",
  },
  formal: {
    title: "Formal & Work",
    subtitle: "Tailored shirts, blazers & polished fits",
    query: "formal,work,blazer,shirt,men",
    chipColor: "bg-slate-50 text-slate-700",
  },
  athleisure: {
    title: "Athleisure",
    subtitle: "Move-ready layers & sporty silhouettes",
    query: "athleisure,activewear,track,men",
    chipColor: "bg-purple-50 text-purple-700",
  },
  party: {
    title: "Party Fits",
    subtitle: "Evening standout looks & smart glam",
    query: "party,evening,men,fashion",
    chipColor: "bg-rose-50 text-rose-700",
  },
  ethnic: {
    title: "Ethnic & Festive",
    subtitle: "Kurtas, Nehru jackets & festive sets",
    query: "indian,ethnic,kurta,men",
    chipColor: "bg-amber-50 text-amber-700",
  },
};

const COUNT = 28;

const makeItems = (query, title) =>
  Array.from({ length: COUNT }).map((_, i) => {
    const price = Math.floor(Math.random() * 1200) + 499; // 499–1699
    const id = `${title}-${i + 1}`;
    return {
      id,
      name: `${title} #${i + 1}`,
      price,
      img: `https://source.unsplash.com/600x800/?${encodeURIComponent(
        query
      )}&sig=${i + 3}`,
    };
  });

export default function Collection() {
  const { slug } = useParams();
  const theme = THEMES[slug] ?? THEMES.casual;

  const items = useMemo(
    () => makeItems(theme.query, theme.title),
    // eslint-disable-next-line
    [slug]
  );

  return (
    <div className="bg-white">
      {/* Breadcrumb / header */}
      <section className="container mx-auto px-6 pt-8">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="capitalize">{slug}</span>
        </nav>

        <div className="mt-3 flex items-end gap-4 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {theme.title}
          </h1>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.chipColor}`}
          >
            {items.length} styles
          </span>
        </div>
        <p className="text-gray-600 mt-2">{theme.subtitle}</p>

        {/* quick chips (just for UX flavour) */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["New", "Bestsellers", "Under ₹999", "Oversized", "Slim Fit"].map(
            (c) => (
              <span
                key={c}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
              >
                {c}
              </span>
            )
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {items.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-1">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-bold">₹{p.price}</span>
                  <button className="text-xs px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
