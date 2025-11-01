import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, Minus, Plus } from "lucide-react";
import { useStore } from "../store/Store";

export default function ProductCard({ p }) {
  const { dispatch, state } = useStore();
  const wished = state.wishlist.some(i => i.id === p.id);
  const inCart = state.cart.find(i => i.id === p.id);
  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

  return (
    <div className="bg-white rounded-xl border hover:shadow-card transition overflow-hidden">
      <Link to={`/product/${p.id}`} className="block aspect-[4/5] bg-gray-50">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
      </Link>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold line-clamp-1">{p.brand}</h3>
            <p className="text-sm text-gray-600 line-clamp-1">{p.title}</p>
          </div>
          <button
            onClick={() =>
              dispatch({ type: wished ? "REMOVE_WISHLIST" : "ADD_WISHLIST", id: p.id, item: p })
            }
            className={`p-2 rounded-md ${wished ? "text-brand" : "text-gray-700 hover:bg-gray-100"}`}
            aria-label="wishlist"
          >
            <Heart size={18} fill={wished ? "#ff3f6c" : "none"} />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold">₹{p.price}</span>
          <span className="text-xs line-through text-gray-400">₹{p.mrp}</span>
          <span className="badge text-brand bg-pink-50">{discount}% OFF</span>
        </div>

        <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
          <Star size={14} className="text-yellow-500" />
          {p.rating} • Best seller
        </div>

        {!inCart ? (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", item: p })}
            className="btn btn-primary w-full mt-3"
          >
            Add to cart
          </button>
        ) : (
          <div className="mt-3 w-full flex items-center justify-between border rounded-xl">
            <button
              onClick={() => dispatch({ type: "DECREMENT_QTY", id: p.id })}
              className="h-10 w-12 flex items-center justify-center"
              aria-label="decrease"
            >
              <Minus size={18} />
            </button>
            <div className="text-sm font-semibold">{inCart.qty}</div>
            <button
              onClick={() => dispatch({ type: "INCREMENT_QTY", id: p.id })}
              className="h-10 w-12 flex items-center justify-center"
              aria-label="increase"
            >
              <Plus size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
