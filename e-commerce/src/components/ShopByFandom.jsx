import React from "react";
// ✅ Import Link
import { Link } from "react-router-dom";
// ✅ Import the data-getter
import { getProductsFor } from "../data/products";

export default function ShopByFandom() {
  // ✅ This array now holds the data we just defined in products.js
  // It also includes the logos your component needs
  const fandoms = [
    {
      ...getProductsFor("fandom").find((p) => p.id === "fandom-slayer"),
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Kimetsu_no_Yaiba_logo.png",
    },
    {
      ...getProductsFor("fandom").find((p) => p.id === "fandom-onepiece"),
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/One_Piece_Logo.svg",
    },
    {
      ...getProductsFor("fandom").find((p) => p.id === "fandom-fantastic"),
      logo: "https://upload.wikimedia.org/wikipedia/en/8/85/Fantastic_Four_%282005_film%29_logo.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
        Shop by Fandom
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {fandoms.map((fandom) => (
          // ✅ Wrap the card with a Link component
          <Link
            key={fandom.id}
            to={`/p/${fandom.id}`} // This links to /p/fandom-slayer, etc.
            className="rounded-3xl overflow-hidden bg-gray-50 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* T-shirt Image */}
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={fandom.image} // Use 'image' field from products.js
                alt={fandom.title} // Use 'title' field
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center py-4 bg-white">
              <img
                src={fandom.logo}
                alt={`${fandom.brand} logo`}
                className="h-14 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}