import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import products from "../data/products";

const StoreContext = createContext();

const initial = {
  products,
  cart: [],
  wishlist: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };

    case "ADD_TO_CART": {
      const exists = state.cart.find(i => i.id === action.item.id);
      const cart = exists
        ? state.cart.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.cart, { ...action.item, qty: 1 }];
      return { ...state, cart };
    }

    case "INCREMENT_QTY":
      return {
        ...state,
        cart: state.cart.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i),
      };

    case "DECREMENT_QTY": {
      const next = state.cart
        .map(i => i.id === action.id ? { ...i, qty: i.qty - 1 } : i)
        .filter(i => i.qty > 0);
      return { ...state, cart: next };
    }

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(i => i.id !== action.id) };

    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.map(i => i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i),
      };

    case "ADD_WISHLIST":
      return state.wishlist.some(i => i.id === action.item.id)
        ? state
        : { ...state, wishlist: [...state.wishlist, action.item] };

    case "REMOVE_WISHLIST":
      return { ...state, wishlist: state.wishlist.filter(i => i.id !== action.id) };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    const saved = localStorage.getItem("ec_store");
    if (saved) dispatch({ type: "HYDRATE", payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "ec_store",
      JSON.stringify({ cart: state.cart, wishlist: state.wishlist, products: state.products })
    );
  }, [state.cart, state.wishlist, state.products]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
