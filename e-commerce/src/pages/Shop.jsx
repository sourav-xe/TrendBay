import React, { useMemo, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProductsFor } from "../data/products";
import ProductCard from "../components/ProductCard";

// Synthetic meta so that all filters always have matching products
const OCCASIONS = ["CASUAL", "PARTY", "BOLD", "CUTE"];
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
];

const DISCOUNT_BUCKETS = [
  { id: "0-20", label: "0-20% OFF", min: 0, max: 20 },
  { id: "21-30", label: "21-30% OFF", min: 21, max: 30 },
  { id: "31-40", label: "31-40% OFF", min: 31, max: 40 },
  { id: "41-60", label: "41-60% OFF", min: 41, max: 60 },
];

const SIZE_OPTIONS = ["S", "M", "L", "XL", "2XL"];

const CATEGORY_ORDER = [
  "Dresses",
  "Shirts, Tops & Tunics",
  "Tshirts",
  "Jeans & Jeggings",
  "Trousers & Pants",
];

function titleFromSlug(slug) {
  if (!slug) return "All Products";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export default function Shop() {
  const { slug } = useParams(); // /collection/:slug
  const { search } = useLocation();

  // "All" is now default gender
  const [gender, setGender] = useState("All");

  // Category set is empty = treat as "All categories"
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const [priceBucket, setPriceBucket] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [selectedOccasions, setSelectedOccasions] = useState(new Set());
  const [selectedDiscounts, setSelectedDiscounts] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState(new Set());
  const [sort, setSort] = useState("reco");

  // base products for this collection
  const baseProducts = useMemo(
    () => getProductsFor(slug || "all"),
    [slug]
  );

  // Make sure query params can pre-set some filters (e.g. ?cat=Dresses)
  useEffect(() => {
    const params = new URLSearchParams(search);
    const cat = params.get("cat");
    if (cat && CATEGORY_ORDER.includes(cat)) {
      setSelectedCategories(new Set([cat])); // this automatically turns "All" OFF
    }
  }, [search]);

  // Enrich products with synthetic gender / occasion / sizes / discount%
  const products = useMemo(() => {
    return baseProducts.map((p, index) => {
      const g = index % 2 === 0 ? "Women" : "Men";
      const occasion = OCCASIONS[index % OCCASIONS.length];
      const sizes = SIZE_VARIANTS[index % SIZE_VARIANTS.length];

      let discountPercent = p.discountPercent;
      if (discountPercent == null && p.mrp && p.price) {
        discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);
      }

      return {
        ...p,
        gender: g,
        occasion,
        sizes,
        discountPercent,
      };
    });
  }, [baseProducts]);

  const allBrands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

  const womenCount = useMemo(
    () => products.filter((p) => p.gender === "Women").length,
    [products]
  );
  const menCount = useMemo(
    () => products.filter((p) => p.gender === "Men").length,
    [products]
  );
  const totalCount = products.length;

  const categories = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.category).filter(Boolean))
      ).sort((a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)),
    [products]
  );

  // Filtering
  const filtered = useMemo(() => {
    let list = products.slice();

    list = list.filter((p) => {
      // gender (skip filter when "All")
      if (gender !== "All" && gender && p.gender && p.gender !== gender) {
        return false;
      }

      // category
      if (
        selectedCategories.size && // if size === 0 we treat as "All categories"
        !selectedCategories.has(p.category)
      ) {
        return false;
      }

      // price
      if (priceBucket) {
        const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket);
        if (bucket) {
          if (p.price < bucket.min || p.price > bucket.max) return false;
        }
      }

      // brands
      if (
        selectedBrands.size &&
        p.brand &&
        !selectedBrands.has(p.brand)
      ) {
        return false;
      }

      // occasion (only filter if product has an occasion)
      if (
        selectedOccasions.size &&
        p.occasion &&
        !selectedOccasions.has(p.occasion)
      ) {
        return false;
      }

      // discount (only filter if we have discountPercent)
      if (selectedDiscounts.size && p.discountPercent != null) {
        const bucketId = DISCOUNT_BUCKETS.find(
          (b) =>
            p.discountPercent >= b.min && p.discountPercent <= b.max
        )?.id;
        if (bucketId && !selectedDiscounts.has(bucketId)) {
          return false;
        }
      }

      // size & fit (only filter if product has sizes)
      if (selectedSizes.size && Array.isArray(p.sizes)) {
        const hasSize = p.sizes.some((s) => selectedSizes.has(s));
        if (!hasSize) return false;
      }

      return true;
    });

    // sorting
    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === "discount") {
      list.sort(
        (a, b) => (b.discountPercent || 0) - (a.discountPercent || 0)
      );
    }

    return list;
  }, [
    products,
    gender,
    selectedCategories,
    priceBucket,
    selectedBrands,
    selectedOccasions,
    selectedDiscounts,
    selectedSizes,
    sort,
  ]);

  const toggleInSet = (set, value) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {titleFromSlug(slug)}
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

      {/* layout: filters + grid */}
      <div className="flex gap-6">
        {/* LEFT FILTERS */}
        <aside className="w-64 flex-shrink-0 bg-white border rounded-2xl shadow-sm">
          <div className="px-5 py-4 border-b">
            <h2 className="font-semibold text-gray-800">Refine By</h2>
          </div>

          {/* Gender */}
          <div className="px-5 py-4 border-b">
            <h3 className="font-semibold mb-2 text-sm">Gender</h3>
            <label className="flex items-center gap-2 text-sm mb-1">
              <input
                type="radio"
                name="gender"
                checked={gender === "All"}
                onChange={() => setGender("All")}
              />
              All ({totalCount})
            </label>
            <label className="flex items-center gap-2 text-sm mb-1">
              <input
                type="radio"
                name="gender"
                checked={gender === "Women"}
                onChange={() => setGender("Women")}
              />
              Women ({womenCount})
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="gender"
                checked={gender === "Men"}
                onChange={() => setGender("Men")}
              />
              Men ({menCount})
            </label>
          </div>

          {/* Category */}
          <details open className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Category</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {/* ALL toggle */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.size === 0}
                  onChange={() =>
                    setSelectedCategories((prev) =>
                      prev.size === 0 ? new Set(categories) : new Set()
                    )
                  }
                />
                All
              </label>

              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedCategories.size === 0 ||
                      selectedCategories.has(cat)
                    }
                    onChange={() =>
                      setSelectedCategories((prev) => {
                        // if we were in "All" mode (empty), start from all cats
                        const base =
                          prev.size === 0 ? new Set(categories) : new Set(prev);
                        if (base.has(cat)) base.delete(cat);
                        else base.add(cat);
                        return base;
                      })
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          </details>

          {/* Price */}
          <details open className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Price</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {PRICE_BUCKETS.map((b) => (
                <label key={b.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    checked={priceBucket === b.id}
                    onChange={() =>
                      setPriceBucket((prev) =>
                        prev === b.id ? null : b.id
                      )
                    }
                  />
                  {b.label}
                </label>
              ))}
            </div>
          </details>

          {/* Brands */}
          <details className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Brands</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm max-h-40 overflow-y-auto">
              {allBrands.map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.has(b)}
                    onChange={() =>
                      setSelectedBrands((prev) => toggleInSet(prev, b))
                    }
                  />
                  {b}
                </label>
              ))}
            </div>
          </details>

          {/* Occasion */}
          <details className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Occasion</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {OCCASIONS.map((occ) => (
                <label key={occ} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedOccasions.has(occ)}
                    onChange={() =>
                      setSelectedOccasions((prev) =>
                        toggleInSet(prev, occ)
                      )
                    }
                  />
                  {occ.charAt(0) + occ.slice(1).toLowerCase()}
                </label>
              ))}
            </div>
          </details>

          {/* Discount */}
          <details className="border-b">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Discount</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {DISCOUNT_BUCKETS.map((b) => (
                <label key={b.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.has(b.id)}
                    onChange={() =>
                      setSelectedDiscounts((prev) =>
                        toggleInSet(prev, b.id)
                      )
                    }
                  />
                  {b.label}
                </label>
              ))}
            </div>
          </details>

          {/* Size & Fit */}
          <details className="">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold flex justify-between items-center">
              <span>Size &amp; Fit</span>
            </summary>
            <div className="px-5 pb-4 space-y-1 text-sm">
              {SIZE_OPTIONS.map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedSizes.has(size)}
                    onChange={() =>
                      setSelectedSizes((prev) =>
                        toggleInSet(prev, size)
                      )
                    }
                  />
                  {size}
                </label>
              ))}
            </div>
          </details>

          {/* Tags section intentionally omitted */}
        </aside>

        {/* RIGHT GRID */}
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
