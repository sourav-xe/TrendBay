import React, { useMemo, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProductsFor } from "../data/products";
import ProductCard from "../components/ProductCard";

const CATS = [
  "Shoes",
  "Hoodies",
  "Sunglasses",
  "Accessories",
  "Sneakers",
  "Caps",
  "Graphic Tees",
  "Joggers",
  "Dresses",
  "Shirts, Tops & Tunics",
  "Tshirts",
  "Jeans & Jeggings",
  "Trousers & Pants",
];

export default function Collection() {
  const { slug } = useParams();
  const location = useLocation();

  // ✅ Detect category from URL query
  const queryParams = new URLSearchParams(location.search);
 const defaultCategory = queryParams.get("cat");


  const all = useMemo(() => getProductsFor(slug), [slug]);

  // ✅ Initialize filter states
  const [selectedCats, setSelectedCats] = useState([]);
  const [gender, setGender] = useState(false);

  // ✅ On mount or URL change, preselect from query param
  useEffect(() => {
    if (defaultCategory && CATS.includes(defaultCategory)) {
      setSelectedCats([defaultCategory]);
    } else {
      setSelectedCats([]);
    }
  }, [defaultCategory]);

  const toggleCat = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCats([]);
    setGender(false);
  };

  const products = all.filter((p) => {
    if (gender && p.gender !== "Women") return false;
    if (selectedCats.length && !selectedCats.includes(p.category)) return false;
    return true;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
      {/* Page Heading */}
      <div className="flex items-baseline justify-between mb-5">
        <h1 className="text-3xl md:text-4xl font-bold capitalize">
          {slug.replace("-", " ")}
        </h1>

        <div className="flex items-center gap-3 text-sm">
          <span className="hidden sm:block text-gray-600">
            {products.length} items found
          </span>
          <label className="text-gray-600">Sort by</label>
          <select className="border rounded-lg px-3 py-1.5">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT FILTER RAIL */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="border rounded-2xl overflow-hidden">
              {/* Refine By */}
              <div className="px-4 py-3 font-bold border-b flex justify-between items-center">
                <span>Refine By</span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-blue-600 font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              </div>

              {/* Gender */}
              <div className="px-4 py-3 border-b">
                <div className="font-semibold mb-2">Gender</div>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={gender}
                    onChange={(e) => setGender(e.target.checked)}
                  />
                  Women ({all.length})
                </label>
              </div>

              {/* Category */}
              <div className="px-4 py-3 border-b">
                <div className="font-semibold mb-2">Category</div>
                <div className="space-y-2 max-h-[350px] overflow-y-auto">
                  {CATS.map((c) => {
                    const count = all.filter((p) => p.category === c).length;
                    return (
                      <label
                        key={c}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="accent-black"
                          checked={selectedCats.includes(c)}
                          onChange={() => toggleCat(c)}
                        />
                        <span className="flex-1">{c}</span>
                        <span className="text-gray-500">({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
