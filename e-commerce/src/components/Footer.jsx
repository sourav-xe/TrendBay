import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-3 text-white">About</h4>
          <p className="text-gray-400">
            TrendBay is a demo storefront built with React + Tailwind.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Customer Policies</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Keep in touch</h4>
          <p className="text-gray-400">Follow for more demos.</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} TrendBay
      </div>
    </footer>
  );
}
