import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useStore } from "../store/Store";
import { Star, ShoppingBag } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { dispatch } = useStore();
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return <p className="text-center py-10 text-gray-500">Product not found.</p>;
  }

  const handleAddToBag = () => {
    if (!selectedSize) return alert("Please select a size before adding!");

    const cartItem = {
      ...product,
      selectedSize,
      uniqueId: `${product.id}-${selectedSize}`, // ensures unique item per size
    };

    dispatch({ type: "ADD_TO_CART", item: cartItem });
  };

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT IMAGE */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{product.brand}</h2>
          <p className="text-lg text-gray-600 mt-1">{product.title}</p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-gray-400 line-through text-lg">₹{product.mrp}</span>
            <span className="text-green-600 text-lg font-semibold">{discountPercent}% OFF</span>
          </div>

          <div className="mt-3 bg-blue-50 text-blue-700 text-sm px-3 py-2 rounded-lg inline-block">
            This product is eligible for FREE SHIPPING
          </div>

          {/* SIZE SELECTION */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Select Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO BAG BUTTON */}
          <button
            onClick={handleAddToBag}
            className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <ShoppingBag size={20} />
            ADD TO BAG
          </button>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              {product.rating.toFixed(1)} | 500+
            </span>
          </div>

          {/* KEY HIGHLIGHTS */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-3">Key Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {Object.entries(product.keyHighlights).map(([key, val]) => (
                <div
                  key={key}
                  className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-gray-600">{key}</span>
                  <span className="font-semibold text-gray-800">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
