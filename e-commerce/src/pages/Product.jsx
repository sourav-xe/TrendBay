import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useStore } from "../store/Store";

export default function Product() {
  const { id } = useParams();
  const { dispatch } = useStore();
  const p = products.find(x => x.id === id);

  if (!p) return <div className="container py-10">Product not found.</div>;

  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

  return (
    <section className="container py-8 grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden border bg-gray-50">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{p.brand}</h1>
        <p className="text-gray-700">{p.title}</p>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-semibold">₹{p.price}</span>
          <span className="text-sm line-through text-gray-400">₹{p.mrp}</span>
          <span className="badge text-brand bg-pink-50">{discount}% OFF</span>
        </div>

        <div className="mt-5">
          <h4 className="font-semibold mb-2">Select Size</h4>
          <div className="flex flex-wrap gap-2">
            {p.sizes.map(s => (
              <button key={s} className="btn btn-outline px-3 py-1">{s}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={() => dispatch({ type: "ADD_TO_CART", item: p })} className="btn btn-primary">
            Add to cart
          </button>
          <button onClick={() => dispatch({ type: "ADD_WISHLIST", item: p })} className="btn btn-outline">
            Wishlist
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600">{p.description}</p>
      </div>
    </section>
  );
}
