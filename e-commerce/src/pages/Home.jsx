import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import FullWidthDeals from "../components/FullWidthDeals";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      {/* Top hero with slider */}
      <section className="bg-gradient-to-r from-pink-50 to-white border-b py-10">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fashion that <span className="text-brand">fits</span> your vibe.
            </h1>
            <p className="mt-4 text-gray-600">
              Discover curated looks for Women and Men.
            </p>
            <Link to="/women" className="btn btn-primary mt-6">
              Shop Women
            </Link>
          </div>
          <HeroSlider />
        </div>
      </section>

      {/* Full-width promo carousel */}
      <section className="py-8">
        <FullWidthDeals />
      </section>

      {/* 5 product cards to purchase */}
      <FeaturedProducts />
    </>
  );
}
