import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function ProductCard({ p }) {
  return (
    <Link
      to={`/p/${p.id}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <div className="text-gray-800 font-semibold truncate">{p.brand}</div>
        <div className="text-sm text-gray-600 truncate">{p.title}</div>

        <div className="mt-2 flex items-baseline gap-2">
          <div className="font-bold">₹{p.price}</div>
          <div className="text-gray-400 line-through text-sm">₹{p.mrp}</div>
          <div className="text-green-600 text-xs font-semibold">
            {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% OFF
          </div>
        </div>

        <div className="mt-1 text-xs text-emerald-600 font-semibold">
          Offer price ₹{Math.round(p.price * 0.82)}
        </div>
      </div>
    </Link>
  );
}
