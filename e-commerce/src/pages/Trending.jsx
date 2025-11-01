import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Trending() {
  const trending = products.filter(p => p.trending); // flag in data
  return (
    <section className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trending Now</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {trending.slice(0, 24).map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
