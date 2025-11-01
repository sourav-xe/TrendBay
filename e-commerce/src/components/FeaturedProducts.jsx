import React from "react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Caramel Oversized Tee",
      price: 599,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3f9a?auto=format&fit=crop&w=800&q=80",
      colors: ["#e5732a", "#000000", "#6d6875"],
    },
    {
      id: 2,
      name: "Grey Introvert Tee",
      price: 599,
      img: "https://images.unsplash.com/photo-1520974722053-5b86b7891f67?auto=format&fit=crop&w=800&q=80",
      colors: ["#4b4b4b", "#c4c4c4", "#1a1a1a"],
    },
    {
      id: 3,
      name: "Pink Off-Road Tee",
      price: 499,
      img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
      colors: ["#f7b6b6", "#ffe0e0", "#000000"],
    },
    {
      id: 4,
      name: "Find Your Peace Tee",
      price: 449,
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
      colors: ["#101820", "#2ecc71", "#dcdcdc"],
    },
    {
      id: 5,
      name: "Into The Wild Tee",
      price: 449,
      img: "https://images.unsplash.com/photo-1618354691620-22025db94cb3?auto=format&fit=crop&w=800&q=80",
      colors: ["#ffffff", "#2e7d32", "#000000"],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-14">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          New <span className="text-brand">Arrivals</span>
        </h2>

        {/* Product row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  NEW
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-700 font-medium text-sm mt-1">
                  ₹{item.price}
                </p>

                {/* Color Options */}
                <div className="flex justify-center gap-2 mt-3">
                  {item.colors.map((clr, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: clr }}
                    ></span>
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
