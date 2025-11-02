import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import FullWidthDeals from "../components/FullWidthDeals";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import BannerSlider from "../components/BannerSlider";
import DoubleCateg from "../components/DoubleCateg";

export default function Home() {
  return (
    <>
{/* Top hero with slider */}
<section className="bg-gradient-to-r from-rose-50 via-white to-pink-50 border-b py-16 md:py-20">
  <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
    {/* Text Content */}
    <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
        Redefine your <span className="text-pink-600">style</span> this season.
      </h1>

      <p className="text-lg text-gray-600 max-w-md leading-relaxed">
        Explore trend-forward collections crafted for your everyday confidence.  
        From streetwear to sophistication find pieces that move with you.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        {/* Main CTA */}
        <Link
          to="/women"
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Shop Women
        </Link>

        {/* Secondary CTA */}
       <Link
  to="/men"
  className="relative px-8 py-3 border-2 border-blue-500 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 group"
>
  {/* Background animation */}
  <span className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

  {/* Text (stays above animation) */}
  <span className="relative z-10 group-hover:text-white">Shop Men</span>
</Link>

      </div>
    </div>

    {/* Right Side Slider */}
    <HeroSlider />
   
  </div>
</section>



      {/* Full-width promo carousel */}
      <section className="py-8">
        <FullWidthDeals />
      </section>

      {/* 5 product cards to purchase */}
      <FeaturedProducts />

      <Categories/>
      <BannerSlider  />
      <DoubleCateg/>
    </>
  );
}
