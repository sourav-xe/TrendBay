import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection"; // ← add import
import ProductDetail from "./pages/ProductDetail";
import DealPage from "./pages/DealPage";


// NEW
import Women from "./pages/Women";
import Men from "./pages/Men";
import Trending from "./pages/Trending";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/trending" element={<Trending />} />
          {/* Keep these pages available */}
            {/* when user clicks Casual / Streetwear / etc from HeroSlider */}
            <Route path="/collection/:slug" element={<Shop />} />
           {/* optional generic /shop */}
          <Route path="/shop" element={<Shop />} />

           {/* product detail page you already use */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/collection/:slug" element={<Collection />} />
          <Route path="/p/:id" element={<ProductDetail />} />
          <Route path="/deal/:slug" element={<DealPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
