import React, { useMemo, useState, useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("reco");
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const cat = params.get("cat");
    const q = params.get("q");
    if (cat) setCategory(cat);
    if (q)   setQuery(q);
  }, [search]);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const data = useMemo(() => {
    let list = products.filter(p =>
      (category === "All" || p.category === category) &&
      (p.title + p.brand + p.color + (p.tags?.join(",") || ""))
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [query, category, sort]);

  return (
    <section className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Shop</h1>

        <div className="flex flex-wrap items-center gap-3">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search clothing..." className="w-64 border rounded-lg px-3 py-2" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded-lg px-3 py-2">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded-lg px-3 py-2">
            <option value="reco">Recommended</option>
            <option value="rating">Rating</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {data.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      {data.length === 0 && (
        <p className="text-center text-gray-500 mt-16">No products match your filters.</p>
      )}
    </section>
  );
}
