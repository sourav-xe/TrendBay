import React from "react";
import { useStore } from "../store/Store";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useStore();

  const totalMrp = cart.reduce((sum, item) => sum + item.mrp * item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = totalMrp - totalPrice;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Bag ({cart.length})</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 border rounded-2xl p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.brand}</h2>
                  <p className="text-gray-600">{item.title}</p>

                  {/* ✅ Show selected size */}
                  {item.selectedSize && (
                    <p className="text-sm text-gray-500 mt-1">
                      Size: <span className="font-medium">{item.selectedSize}</span>
                    </p>
                  )}

                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-xl font-semibold">₹{item.price}</p>
                    <p className="text-gray-400 line-through text-sm">₹{item.mrp}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm">Qty</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREMENT_QTY", id: item.id })
                      }
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREMENT_QTY", id: item.id })
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                      }
                      className="text-red-500 ml-6 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{totalMrp}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition">
              Checkout (demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
