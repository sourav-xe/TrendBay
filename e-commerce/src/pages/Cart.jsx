import React from "react";
import { useStore } from "../store/Store";

export default function Cart() {
  const { state, dispatch } = useStore();
  const total = state.cart.reduce((a, c) => a + c.price * c.qty, 0);
  const mrpTotal = state.cart.reduce((a, c) => a + c.mrp * c.qty, 0);
  const discount = mrpTotal - total;

  return (
    <section className="container py-8 grid lg:grid-cols-[2fr,1fr] gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Shopping Bag ({state.cart.length})</h1>

        <div className="space-y-4">
          {state.cart.map(i => (
            <div key={i.id} className="flex gap-4 p-3 border rounded-xl">
              <img src={i.image} alt={i.title} className="w-28 h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-semibold">{i.brand}</h3>
                <p className="text-sm text-gray-600">{i.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold">₹{i.price}</span>
                  <span className="text-xs line-through text-gray-400">₹{i.mrp}</span>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm">Qty</span>
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        dispatch({ type: i.qty === 1 ? "REMOVE_FROM_CART" : "DECREMENT_QTY", id: i.id })
                      }
                      className="h-8 w-8 flex items-center justify-center"
                      aria-label="decrease"
                    >
                      –
                    </button>
                    <div className="h-8 w-10 flex items-center justify-center text-sm font-semibold">
                      {i.qty}
                    </div>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT_QTY", id: i.id })}
                      className="h-8 w-8 flex items-center justify-center"
                      aria-label="increase"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: i.id })}
                    className="ml-auto text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {state.cart.length === 0 && (
            <p className="text-gray-500">Your bag is empty. Add items from the sections above.</p>
          )}
        </div>
      </div>

      <aside className="h-fit p-5 border rounded-2xl sticky top-24">
        <h2 className="font-semibold mb-3">Price Details</h2>
        <div className="flex justify-between text-sm py-1">
          <span>Total MRP</span>
          <span>₹{mrpTotal}</span>
        </div>
        <div className="flex justify-between text-sm py-1">
          <span>Discount</span>
          <span className="text-green-600">-₹{discount}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-3 mt-2">
          <span>Total</span><span>₹{total}</span>
        </div>
        <button className="btn btn-primary w-full mt-4">Checkout (demo)</button>
      </aside>
    </section>
  );
}
