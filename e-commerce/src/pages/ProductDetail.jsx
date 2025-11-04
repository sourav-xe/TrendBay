import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();       // e.g. casual-12
  const product = useMemo(() => getProductById(id), [id]);
  const [size, setSize] = useState("M");

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* BIG IMAGE */}
        <div className="rounded-2xl overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <div className="text-2xl md:text-3xl font-extrabold">
            {product.brand}
          </div>
          <div className="text-gray-600">{product.title}</div>

          <div className="mt-4 flex items-baseline gap-3">
            <div className="text-2xl font-extrabold">₹{product.price}</div>
            <div className="text-gray-400 line-through">₹{product.mrp}</div>
            <div className="text-green-600 font-semibold">
              {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
            </div>
            <div className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
              ⭐ {product.rating.toFixed(1)} | 500+
            </div>
          </div>

          <div className="mt-4 bg-blue-50 text-blue-800 text-sm px-3 py-2 rounded-lg">
            This product is eligible for FREE SHIPPING
          </div>

          {/* SIZE SELECTOR */}
          <div className="mt-6">
            <div className="font-bold mb-2">Select Size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    size === s ? "bg-gray-900 text-white" : "bg-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 w-full md:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl">
            ADD TO BAG
          </button>

          {/* HIGHLIGHTS */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {Object.entries(product.keyHighlights).map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
                >
                  <div className="text-gray-500">{k}</div>
                  <div className="font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
