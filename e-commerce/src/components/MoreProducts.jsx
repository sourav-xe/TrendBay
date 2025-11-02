// src/components/MoreProducts.jsx
import React from "react";

const products = [
  { id: 101, name: "Classic Denim Jacket", price: 1899, img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop", colors: ["#0f172a","#64748b","#e2e8f0"] },
  { id: 102, name: "Linen Blend Shirt",   price: 1199, img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop", colors: ["#fafaf9","#1f2937","#94a3b8"] },
  { id: 103, name: "Athleisure Joggers",  price: 1499, img: "https://images.unsplash.com/photo-1549082984-b9b7f3ad9a89?q=80&w=1200&auto=format&fit=crop", colors: ["#111827","#9ca3af","#6b7280"] },
  { id: 104, name: "Urban Sneakers",      price: 2599, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop", colors: ["#111111","#ef4444","#f59e0b"] },
  { id: 105, name: "Ribbed Knit Tee",     price: 799,  img: "https://images.unsplash.com/photo-1520974735194-5f37d2a1b2b0?q=80&w=1200&auto=format&fit=crop", colors: ["#111111","#f3f4f6","#a1a1aa"] },

  { id: 106, name: "Oversized Hoodie",    price: 1699, img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop", colors: ["#0f172a","#4b5563","#f3f4f6"] },
  { id: 107, name: "Chino Trousers",      price: 1399, img: "https://images.unsplash.com/photo-1520975922203-b6a72a1e3333?q=80&w=1200&auto=format&fit=crop", colors: ["#1f2937","#d1d5db","#b45309"] },
  { id: 108, name: "Puffer Jacket",       price: 2999, img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop", colors: ["#111827","#dc2626","#9ca3af"] },
  { id: 109, name: "Casual Polo",         price: 999,  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop", colors: ["#111827","#f59e0b","#22c55e"] },
  { id: 110, name: "Everyday Tee Pack",   price: 1299, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop", colors: ["#000000","#6b7280","#f3f4f6"] },
];

export default function MoreProducts() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8">
          Handpicked <span className="text-pink-600">Picks</span>
        </h2>

        {/* 2 rows × 5 = 10 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  NEW
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-gray-700 font-medium text-sm mt-1">₹{p.price}</p>

                {/* Colors */}
                <div className="flex justify-center gap-2 mt-3">
                  {p.colors.map((clr, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: clr }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
