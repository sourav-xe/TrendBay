import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useStore } from "../store/Store";

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const { dispatch } = useStore();
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 text-xl">
        Product not found.
      </div>
    );
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = () => {
    // ✅ Add unique key for product+size combo
    const sizedItem = { ...product, id: `${product.id}-${selectedSize}`, selectedSize };
    dispatch({ type: "ADD_TO_CART", item: sizedItem });
  };

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full max-h-[520px] object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.brand}</h1>
          <p className="text-lg text-gray-600">{product.title}</p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold text-gray-900">
              ₹{product.price}
            </p>
            <p className="text-gray-500 line-through">₹{product.mrp}</p>
            <p className="text-green-600 font-medium">{discount}% OFF</p>
          </div>

          {/* Free Shipping */}
          <p className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm">
            This product is eligible for FREE SHIPPING
          </p>

          {/* Size Selection */}
          <div className="mt-2">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <button
            onClick={handleAddToCart}
            className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all w-40"
          >
            ADD TO BAG
          </button>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {product.rating.toFixed(1)} | 500+
            </span>
          </div>

          {/* Key Highlights */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Key Highlights</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(product.keyHighlights).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 px-3 py-2 rounded-md flex justify-between text-sm"
                >
                  <span className="font-medium text-gray-600">{key}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
