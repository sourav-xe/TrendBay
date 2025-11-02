import React from "react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Black Oversized Coat",
      price: 1599,
      img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      colors: ["#e5732a", "#000000", "#6d6875"],
    },
    {
      id: 2,
      name: "Cream Bermuda Trase",
      price: 899,
      img: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      colors: ["#4b4b4b", "#c4c4c4", "#1a1a1a"],
    },
    {
      id: 3,
      name: "Red  Mars-Jacket ",
      price: 2499,
      img: "https://images.unsplash.com/photo-1643622782660-30dedcd8d75a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      colors: ["#f7b6b6", "#ffe0e0", "#000000"],
    },
    {
      id: 4,
      name: "Lavender Raisy Jacket",
      price: 1449,
      img: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      colors: ["#101820", "#2ecc71", "#dcdcdc"],
    },
    {
      id: 5,
      name: "Trendy Combo Tee",
      price: 699,
      img: "https://images.unsplash.com/photo-1677759338040-7b51b3054852?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      colors: ["#ffffff", "#2e7d32", "#000000"],
    },
  ];

 return (
  <>
    {/* Product Section */}
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

    {/* ✅ Trendy banner section */}
    <section className="w-full mt-12">
      <img
        src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/jpeg-optimizer_sc_widget_banner_updated.jpg"
        alt="trendy banner"
        className="w-full object-cover rounded-2xl shadow-md"
      />
    </section>

    
  </>
);

}
