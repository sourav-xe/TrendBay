import React from "react";
import { useStore } from "../store/Store";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { state } = useStore();
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist ({state.wishlist.length})</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {state.wishlist.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
      {state.wishlist.length === 0 && (
        <p className="text-gray-500">No items in wishlist yet.</p>
      )}
    </section>
  );
}
