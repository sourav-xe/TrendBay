import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ShieldCheck,
  RotateCcw,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-gray-700 mt-20">
      {/* ===== TOP SECTION ===== */}
      <div className="max-w-[1300px] mx-auto px-6 py-14 grid md:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm">
            ONLINE SHOPPING
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Men</li>
            <li>Women</li>
            <li>Trending</li>
            <li>Kids</li>
            <li>Gift Cards</li>
            <li>Insider</li>
          </ul>

          <h3 className="font-bold text-gray-900 mt-6 mb-3 text-sm">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>TrendBay Global</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm">
            CUSTOMER POLICIES
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm">
            EXPERIENCE TRENDBAY ON MOBILE
          </h3>
          <div className="flex gap-3 mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-sm">KEEP IN TOUCH</h3>
          <div className="flex gap-4 text-gray-600">
            <Facebook className="cursor-pointer hover:text-pink-500" />
            <Twitter className="cursor-pointer hover:text-pink-500" />
            <Instagram className="cursor-pointer hover:text-pink-500" />
            <Youtube className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-6">
          <div className="flex gap-3 items-start">
            <ShieldCheck className="text-gray-800 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-gray-900">
                100% ORIGINAL guarantee
              </h4>
              <p className="text-sm">
                for all products sold on <span className="font-medium">TrendBay</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <RotateCcw className="text-gray-800 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-gray-900">Return within 14 days</h4>
              <p className="text-sm">
                of receiving your order hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== POPULAR SEARCHES ===== */}
      <div className="border-t border-gray-200 max-w-[1300px] mx-auto px-6 py-10">
        <h3 className="font-bold text-gray-900 text-sm mb-3">
          POPULAR SEARCHES
        </h3>
        <p className="text-sm text-gray-700 leading-7">
          T-Shirts | Shirts | Jeans | Co-ords | Jackets | Dresses | Kurtas |
          Skirts | Joggers | Chinos | Sarees | Ethnic Wear | Hoodies | Shorts |
          Activewear | Nightwear | Accessories | Bags | Watches | Shoes | Flats |
          Sweatshirts | Tops | Coats | Formals | Sunglasses | Beauty
        </p>
        <p className="mt-4 text-sm">
          In case of any concern,{" "}
          <a href="#" className="text-blue-700 underline">
            Contact Us
          </a>
        </p>
      </div>

      {/* ===== COPYRIGHT & ADDRESS ===== */}
      <div className="border-t border-gray-200 max-w-[1300px] mx-auto px-6 py-10">
        <p className="text-sm mb-4 text-gray-700">
          © {new Date().getFullYear()} TrendBay. All rights reserved.
        </p>

        <h3 className="font-bold text-gray-900 text-sm mb-2">
          REGISTERED OFFICE ADDRESS
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 text-sm">
          <div className="flex gap-2">
            <MapPin className="text-gray-700 mt-1" size={16} />
            <p>
              Buildings Alyssa, Begonia and Clover situated in Embassy Tech
              Village, Outer Ring Road, Devarabeesanahalli Village, Varthur
              Hobli, Bengaluru – 560103, India.
            </p>
          </div>
          <div className="flex gap-2">
            <Phone className="text-gray-700 mt-1" size={16} />
            <p>
              Telephone:{" "}
              <a href="tel:+91-80-61561999" className="text-blue-700">
                +91-80-61561999
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ===== ABOUT / SEO TEXT ===== */}
      <div className="border-t border-gray-200 max-w-[1300px] mx-auto px-6 py-12 space-y-8 text-sm text-gray-700 leading-7">
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">
            ONLINE SHOPPING MADE EASY AT TRENDBAY
          </h3>
          <p>
            TrendBay offers a seamless shopping experience for Men, Women, and
            Kids. Browse thousands of curated fashion items across categories
            such as western wear, ethnic wear, accessories, and more. Enjoy the
            comfort of shopping from home with TrendBay’s fast delivery and
            14-day easy returns.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">
            BEST ONLINE SHOPPING DESTINATION FOR FASHION LOVERS
          </h3>
          <p>
            Discover TrendBay’s latest drops every week! Explore categories like
            smart men’s clothing, trendy women’s apparel, and cool streetwear
            collections for GenZ. Get exclusive deals, combo offers, and limited
            edition collections at affordable prices.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">
            TRENDBAY INSIDER BENEFITS
          </h3>
          <p>
            Become a TrendBay Insider to access early sales, free delivery, and
            special rewards on your orders. Earn points with every purchase and
            redeem them for exclusive discounts and member-only launches.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">
            AFFORDABLE FASHION AT YOUR FINGERTIPS
          </h3>
          <p>
            Whether it’s casual wear, office looks, or festive outfits—TrendBay
            makes it easy to stay stylish without breaking the bank. Download
            our app for a smoother, personalized shopping experience today.
          </p>
        </div>
      </div>
    </footer>
  );
}
