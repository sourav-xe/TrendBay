// src/pages/Shop.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getProductsFor } from "../data/products";
import ProductCard from "../components/ProductCard";

// Simple data for the extra sections (visual only – no filtering logic needed)
const PRICE_FILTERS = [
  { id: "p1", label: "Below ₹500" },
  { id: "p2", label: "₹500-1000" },
  { id: "p3", label: "₹1001-1500" },
];

const BRAND_FILTERS = [{ id: "b1", label: "Shein (104)" }];

const OCCASION_FILTERS = [
  { id: "o1", label: "CASUAL (53)" },
  { id: "o2", label: "PARTY (32)" },
  { id: "o3", label: "BOLD (5)" },
  { id: "o4", label: "CUTE (5)" },
  { id: "o5", label: "Casual (3)" },
];

const DISCOUNT_FILTERS = [
  { id: "d1", label: "0-20% (100)" },
  { id: "d2", label: "21-30% (4)" },
];

const COLOR_FILTERS = [
  { id: "c1", label: "Beige (3)", dotClass: "bg-yellow-100" },
  { id: "c2", label: "Black (44)", dotClass: "bg-black" },
  { id: "c3", label: "Blue (6)", dotClass: "bg-blue-500" },
  { id: "c4", label: "Brown (4)", dotClass: "bg-amber-800" },
  { id: "c5", label: "Cream (1)", dotClass: "bg-yellow-50" },
];

const SIZE_FILTERS = [
  { id: "s1", label: "XS (57)" },
  { id: "s2", label: "S (66)" },
  { id: "s3", label: "M (71)" },
  { id: "s4", label: "L (67)" },
  { id: "s5", label: "XL (54)" },
];

// Small accordion component for the left side
function FilterSection({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 text-sm font-semibold"
      >
        <span>{title}</span>
        <span className="text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="pb-3 space-y-2 text-sm">{children}</div>}
    </div>
  );
}

export default function Shop() {
  const { slug } = useParams(); // /collection/:slug (casual, streetwear, etc.)
  const { search } = useLocation();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("reco");
  const [gender, setGender] = useState("All"); // "All" | "Women" | "Men"
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [showAllCats, setShowAllCats] = useState(false);

  // Products for this collection
  const products = useMemo(
    () => getProductsFor(slug || "casual"),
    [slug]
  );

  // Read ?q= from URL (optional)
  useEffect(() => {
    const params = new URLSearchParams(search);
    const q = params.get("q");
    if (q) setQuery(q);
  }, [search]);

  // Distinct categories from products
  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );
  const visibleCategories = showAllCats
    ? allCategories
    : allCategories.slice(0, 5);

  // Counts for gender + categories
  const genderCounts = useMemo(() => {
    const base = { Women: 0, Men: 0 };
    products.forEach((p) => {
      if (p.gender === "Women") base.Women += 1;
      if (p.gender === "Men") base.Men += 1;
    });
    return base;
  }, [products]);

  const categoryCounts = useMemo(() => {
    const map = {};
    products.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [products]);

  // Toggle category checkboxes
  const toggleCategory = (name) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  // Main filtered + sorted products
  const data = useMemo(() => {
    let list = [...products];

    // gender filter
    if (gender !== "All") {
      list = list.filter((p) => p.gender === gender);
    }

    // category filter
    if (selectedCats.size > 0) {
      list = list.filter((p) => selectedCats.has(p.category));
    }

    // text search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        (p.title + p.brand + p.color + (p.tags?.join(",") || ""))
          .toLowerCase()
          .includes(q)
      );
    }

    // sort
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, gender, selectedCats, query, sort]);

  const title =
    slug && slug.length
      ? slug.charAt(0).toUpperCase() + slug.slice(1)
      : "Shop";

  return (
    <section className="container py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">{title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT FILTER COLUMN (scrolls with page, no sticky) */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="rounded-3xl border shadow-sm px-4 py-4">
            <p className="text-sm font-semibold mb-2">Refine By</p>

            {/* Gender */}
            <FilterSection title="Gender" defaultOpen>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={gender === "Women"}
                  onChange={() =>
                    setGender((g) => (g === "Women" ? "All" : "Women"))
                  }
                />
                <span>Women ({genderCounts.Women})</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={gender === "Men"}
                  onChange={() =>
                    setGender((g) => (g === "Men" ? "All" : "Men"))
                  }
                />
                <span>Men ({genderCounts.Men})</span>
              </label>
            </FilterSection>

            {/* Category with MORE button */}
            <FilterSection title="Category" defaultOpen>
              {visibleCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectedCats.has(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className="flex-1">{cat}</span>
                  <span className="text-xs text-gray-500">
                    ({categoryCounts[cat] || 0})
                  </span>
                </label>
              ))}
              {allCategories.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllCats((v) => !v)}
                  className="mt-1 text-xs font-semibold text-blue-600"
                >
                  {showAllCats ? "LESS" : "MORE"}
                </button>
              )}
            </FilterSection>

            {/* Price */}
            <FilterSection title="Price">
              {PRICE_FILTERS.map((p) => (
                <label key={p.id} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{p.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Brands */}
            <FilterSection title="Brands">
              {BRAND_FILTERS.map((b) => (
                <label key={b.id} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{b.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Occasion */}
            <FilterSection title="Occasion">
              {OCCASION_FILTERS.map((o) => (
                <label key={o.id} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{o.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Discount */}
            <FilterSection title="Discount">
              {DISCOUNT_FILTERS.map((d) => (
                <label key={d.id} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{d.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Colors */}
            <FilterSection title="Colors">
              {COLOR_FILTERS.map((c) => (
                <label key={c.id} className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full border ${c.dotClass}`}
                  />
                  <span className="flex-1">{c.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Size & Fit */}
            <FilterSection title="Size & Fit">
              {SIZE_FILTERS.map((s) => (
                <label key={s.id} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{s.label}</span>
                </label>
              ))}
            </FilterSection>

            {/* Tags */}
            <FilterSection title="Tags">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>New</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Best Seller</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Trending</span>
              </label>
            </FilterSection>

            {/* NOTE: “More Filters” section intentionally removed as you asked */}
          </div>
        </aside>

        {/* RIGHT: PRODUCTS GRID + SEARCH / SORT */}
        <main className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="text-sm text-gray-600">
              {data.length} items found
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search within results"
                className="w-full md:w-64 border rounded-lg px-3 py-2 text-sm"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="reco">Recommended</option>
                <option value="rating">Rating</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          {data.length === 0 && (
            <p className="text-center text-gray-500 mt-16">
              No products match your filters.
            </p>
          )}
        </main>
      </div>
    </section>
  );
}
