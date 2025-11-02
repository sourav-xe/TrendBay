import React from "react";

export default function ShopByFandom() {
  const fandoms = [
    {
      id: 1,
      name: "Demon Slayer",
      tshirt:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/5/q/m-anime-7-black-ftx-original-imah4h9pyrgmhfrd.jpeg?q=70&crop=false",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Kimetsu_no_Yaiba_logo.png",
    },
    {
      id: 2,
      name: "One Piece",
      tshirt:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/v/l/j/m-anime-4-black-ftx-original-imah4h9pmxvqhhwc.jpeg?q=70&crop=false",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/One_Piece_Logo.svg",
    },
    {
      id: 3,
      name: "Fantastic Four",
      tshirt:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/4/9/m-anime-9-black-ftx-original-imah4h9pxgbyjdfg.jpeg?q=70&crop=false",
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
          <div
            key={fandom.id}
            className="rounded-3xl overflow-hidden bg-gray-50 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* T-shirt Image */}
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={fandom.tshirt}
                alt={fandom.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center py-4 bg-white">
              <img
                src={fandom.logo}
                alt={`${fandom.name} logo`}
                className="h-14 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
