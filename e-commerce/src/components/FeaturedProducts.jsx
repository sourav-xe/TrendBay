import React from "react";
// ✅ Import Link from react-router-dom
import { Link } from "react-router-dom";
// ✅ Import the product data from your "database"
import { getProductsFor } from "../data/products";

export default function FeaturedProducts() {
  // ✅ Use the imported data
  const products = getProductsFor("featured");

  return (
    <>
      {/* Product Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-14">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
            New <span className="text-brand">Arrivals</span>
          </h2>

          {/* Product row (This is your original UI) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((item) => (
              <Link
                key={item.id}
                to={`/p/${item.id}`} // This link is correct
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative group">
                  <img
                    src={item.image} // 'img' changed to 'image' to match data
                    alt={item.title} // 'name' changed to 'title' to match data
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full font-medium">
                    NEW
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MODIFIED SECTION: Trendy banner is now a Link ✅ */}
      <section className="w-full mt-12">
        <Link 
          to={`/shop?cat=${encodeURIComponent("Shirts, Tops & Tunics")}`}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/jpeg-optimizer_sc_widget_banner_updated.jpg"
            alt="trendy banner"
            className="w-full object-cover rounded-2xl shadow-md"
          />
        </Link>
      </section>
    </>
  );
}