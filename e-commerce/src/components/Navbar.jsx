import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag, Search } from "lucide-react";
import { useStore } from "../store/Store";

export default function Navbar() {
  const { state } = useStore();
  const cartCount = state.cart.reduce((a, c) => a + c.qty, 0);

  const navBase =
    "relative px-4 py-2 text-[13px] tracking-[.18em] font-semibold uppercase text-gray-800/90 hover:text-black transition";
  const navUnderline =
    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[6px] after:h-[3px] after:w-8 after:rounded-full after:bg-brand after:opacity-0 hover:after:opacity-100";
  const navActive =
    "text-brand after:opacity-100";

  const navClass = ({ isActive }) =>
    `${navBase} ${navUnderline} ${isActive ? navActive : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur border-b shadow-sm">
      <div className="container h-[64px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="select-none">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-brand">Trend</span>
            <span className="text-gray-900">Bay</span>
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center">
          <NavLink to="/women" className={navClass}>
            Women
          </NavLink>
          <NavLink to="/men" className={navClass}>
            Men
          </NavLink>
          <span className="relative">
            <NavLink to="/trending" className={navClass}>
              Trending
            </NavLink>
            {/* HOT badge */}
            <span className="absolute -top-2 right-2 text-[10px] font-bold text-amber-900 bg-amber-300 rounded px-1.5 py-[2px]">
              HOT
            </span>
          </span>
        </nav>

        {/* Right Side: Search + Icons */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden lg:flex items-stretch">
            <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white shadow-sm overflow-hidden">
              <div className="pl-3 text-gray-500">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search TrendBay"
                className="w-[280px] text-sm outline-none placeholder:text-gray-400 px-2 py-2 bg-transparent"
              />
             
            </div>
          </div>

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `relative p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-gray-50 transition ${
                isActive ? "text-brand" : "text-gray-800"
              }`
            }
            aria-label="Wishlist"
          >
            <Heart size={22} />
            {state.wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 min-w-4 px-1 text-[10px] rounded-full bg-brand text-white">
                {state.wishlist.length}
              </span>
            )}
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-gray-50 transition ${
                isActive ? "text-brand" : "text-gray-800"
              }`
            }
            aria-label="Cart"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 min-w-4 px-1 text-[10px] rounded-full bg-brand text-white">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
