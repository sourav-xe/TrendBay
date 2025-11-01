import React, { useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Men() {
  const [q, setQ] = useState("");
  const data = useMemo(() => {
    const list = products.filter(p => p.category === "Men");
    return q
      ? list.filter(p =>
          (p.title + p.brand + (p.tags?.join(",") || "")).toLowerCase().includes(q.toLowerCase()))
      : list;
  }, [q]);

  return (
    <section className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Men</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search t-shirts, shirts, jackets..."
          className="w-72 border rounded-lg px-3 py-2"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {data.slice(0, 20).map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
