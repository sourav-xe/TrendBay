import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsFor } from "../data/products";
import ProductCard from "../components/ProductCard";

const CATS = [
  "Dresses",
  "Shirts, Tops & Tunics",
  "Tshirts",
  "Jeans & Jeggings",
  "Trousers & Pants",
];

export default function Collection() {
  const { slug } = useParams();                 // e.g. casual, streetwear, formal...
  const all = useMemo(() => getProductsFor(slug), [slug]);

  // very light filter state (just like the left rail in your screenshots)
  const [selectedCats, setSelectedCats] = useState([]);
  const [gender, setGender] = useState(false);

  const toggleCat = (cat) =>
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const products = all.filter((p) => {
    if (gender && p.gender !== "Women") return false;
    if (selectedCats.length && !selectedCats.includes(p.category)) return false;
    return true;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
      {/* Page heading */}
      <div className="flex items-baseline justify-between mb-5">
        <h1 className="text-3xl md:text-4xl font-bold capitalize">
          {slug.replace("-", " ")}
        </h1>

        <div className="flex items-center gap-3 text-sm">
          <span className="hidden sm:block text-gray-600">
            {products.length} Items Found
          </span>
          <label className="text-gray-600">Sort by</label>
          <select className="border rounded-lg px-3 py-1.5">
            <option>Relevance</option>
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
            {/* Refine By */}
            <div className="border rounded-2xl overflow-hidden">
              <div className="px-4 py-3 font-bold border-b">Refine By</div>

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
                <div className="space-y-2">
                  {CATS.map((c) => {
                    const count = all.filter((p) => p.category === c).length;
                    return (
                      <label key={c} className="flex items-center gap-2 text-sm">
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
                <button className="mt-3 text-xs text-blue-600 font-semibold">
                  MORE
                </button>
              </div>

              {/* Price (dummy accordion look) */}
              <Accordion title="Price" />
              <Accordion title="Brands" />
              <Accordion title="Occasion" />
              <Accordion title="Discount" />
              <Accordion title="Colors" />
              <Accordion title="Size & Fit" />
              <Accordion title="Tags" />

              {/* More Filters footer */}
              <div className="px-4 py-4">
                <div className="font-bold">More Filters</div>
                <div className="text-xs text-gray-600 mb-2">
                  Please select upto 3 categories to view more filters
                </div>
                <button className="px-4 py-2 border rounded-lg text-sm font-semibold">
                  SELECT CATEGORY
                </button>
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

function Accordion({ title }) {
  return (
    <details className="px-4 py-3 border-b group" open={false}>
      <summary className="list-none cursor-pointer flex items-center justify-between">
        <span className="font-semibold">{title}</span>
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="pt-2 text-sm text-gray-500">
        (You can wire real filter options here later)
      </div>
    </details>
  );
}
