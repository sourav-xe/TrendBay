import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProductsFor } from "../data/products";
import { useLocation } from "react-router-dom";
import { getCustomProductsFor } from "../data/customProducts";

const OCCASIONS = ["FUN", "CASUAL", "SPORTY", "CUTE", "TRENDY"];
const SIZE_VARIANTS = [
  ["S", "M", "L"],
  ["M", "L", "XL"],
  ["L", "XL", "2XL"],
  ["S", "M"],
  ["M", "L"],
];

const PRICE_BUCKETS = [
  { id: "0-500", label: "Below ₹500", min: 0, max: 500 },
  { id: "500-1000", label: "₹500-1000", min: 500, max: 1000 },
  { id: "1000-1500", label: "₹1001-1500", min: 1000, max: 1500 },
  { id: "1500-2000", label: "₹1501-2000", min: 1500, max: 2000 },
];

const CATEGORY_OPTIONS = [
  "Shoes",
  "Hoodies",
  "Sunglasses",
  "Accessories",
  "Sneakers",
  "Caps",
  "Graphic Tees",
  "Joggers",
];

const SIZE_OPTIONS = ["S", "M", "L", "XL", "2XL"];

export default function PowerpuffShop() {
  const { search } = useLocation();
  const [gender, setGender] = useState("All");
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [priceBucket, setPriceBucket] = useState(null);
  const [selectedOccasions, setSelectedOccasions] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState(new Set());
  const [sort, setSort] = useState("reco");

  // 🧠 Generate 70 unique products
  const baseProducts = useMemo(() => getProductsFor("powerpuff"), []);

  const products = useMemo(() => {
    const items = [];
    for (let i = 0; i < 70; i++) {
      const g = i % 2 === 0 ? "Women" : "Men";
      const category = CATEGORY_OPTIONS[i % CATEGORY_OPTIONS.length];
      const occasion = OCCASIONS[i % OCCASIONS.length];
      const sizes = SIZE_VARIANTS[i % SIZE_VARIANTS.length];
      const mrp = 500 + (i * 20);
      const price = mrp - Math.floor(Math.random() * 250);
      const discountPercent = Math.round(((mrp - price) / mrp) * 100);

      items.push({
        id: `powerpuff-${i}`,
        name: `${category} ${i + 1}`,
        brand: ["H&M", "Zara", "Only", "Shein"][i % 4],
        price,
        mrp,
        discountPercent,
        gender: g,
        occasion,
        category,
        sizes,
        img: `https://source.unsplash.com/800x1000/?${category},fashion,clothes&sig=${i}`, // random unique img per product
      });
    }
    return items;
  }, []);

  // Filtering logic
  const filtered = useMemo(() => {
    let list = products.slice();

    list = list.filter((p) => {
      if (gender !== "All" && gender && p.gender && p.gender !== gender)
        return false;

      if (
        selectedCategories.size &&
        !selectedCategories.has(p.category)
      )
        return false;

      if (priceBucket) {
        const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket);
        if (bucket) {
          if (p.price < bucket.min || p.price > bucket.max) return false;
        }
      }

      if (selectedOccasions.size && p.occasion) {
        if (!selectedOccasions.has(p.occasion)) return false;
      }

      if (selectedSizes.size && Array.isArray(p.sizes)) {
        const hasSize = p.sizes.some((s) => selectedSizes.has(s));
        if (!hasSize) return false;
      }

      return true;
    });

    if (sort === "low") list.sort((a, b) => a.price - b.price);
    else if (sort === "high") list.sort((a, b) => b.price - a.price);
    else if (sort === "discount")
      list.sort((a, b) => b.discountPercent - a.discountPercent);

    return list;
  }, [products, gender, selectedCategories, priceBucket, selectedOccasions, selectedSizes, sort]);

  const toggleInSet = (set, value) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
            Powerpuff Girls Collection
          </h1>
          <p className="text-sm text-gray-500">
            {filtered.length} items found
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="reco">Recommended</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      {/* Layout */}
      <div className="flex gap-6">
        {/* Left Filters */}
        <aside className="w-64 flex-shrink-0 bg-white border rounded-2xl shadow-sm">
          <div className="px-5 py-4 border-b">
            <h2 className="font-semibold text-gray-800">Refine By</h2>
          </div>

          {/* Gender */}
          <div className="px-5 py-4 border-b">
            <h3 className="font-semibold mb-2 text-sm">Gender</h3>
            {["All", "Women", "Men"].map((g) => (
              <label key={g} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === g}
                  onChange={() => setGender(g)}
                />
                {g}
              </label>
            ))}
          </div>

          {/* Category */}
          <details open className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold">
              Category
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {CATEGORY_OPTIONS.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.has(cat)}
                    onChange={() =>
                      setSelectedCategories((prev) => toggleInSet(prev, cat))
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          </details>

          {/* Price */}
          <details open className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold">
              Price
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {PRICE_BUCKETS.map((b) => (
                <label key={b.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    checked={priceBucket === b.id}
                    onChange={() =>
                      setPriceBucket((prev) => (prev === b.id ? null : b.id))
                    }
                  />
                  {b.label}
                </label>
              ))}
            </div>
          </details>

          {/* Occasion */}
          <details className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold">
              Occasion
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {OCCASIONS.map((occ) => (
                <label key={occ} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedOccasions.has(occ)}
                    onChange={() =>
                      setSelectedOccasions((prev) => toggleInSet(prev, occ))
                    }
                  />
                  {occ}
                </label>
              ))}
            </div>
          </details>

          {/* Size */}
          <details>
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold">
              Size & Fit
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {SIZE_OPTIONS.map((s) => (
                <label key={s} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedSizes.has(s)}
                    onChange={() =>
                      setSelectedSizes((prev) => toggleInSet(prev, s))
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
          </details>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No products match your filters.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
