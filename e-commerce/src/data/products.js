// src/data/products.js
// Simple mock catalog generator so every collection has items.
// You can later swap this with your API results.

const BRANDS = ["Shein", "Zara", "H&M", "Only", "Roadster"];

// ✅ OLD categories + NEW added ones
const CATEGORIES = [
  "Dresses",
  "Shirts, Tops & Tunics",
  "Tshirts",
  "Jeans & Jeggings",
  "Trousers & Pants",
  // 🔥 Added new categories (don’t remove old)
  "Shoes",
  "Hoodies",
  "Sunglasses",
  "Accessories",
  "Sneakers",
  "Caps",
  "Graphic Tees",
  "Joggers",
];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- SPECIAL PRODUCT SETS ---------- */
const COMMON_HIGHLIGHTS = {
  Design: "Graphic Print",
  Fit: "Regular Fit",
  Neck: "Round Neck",
  Material: "Cotton",
  Occasion: "All",
  "Sleeve Style": "Half Sleeve",
};

const COMMON_SIZES = ["S", "M", "L", "XL", "2XL"];

// ✅ ==========================================================
// ✅ YOUR 10 "NEW ARRIVAL" PRODUCTS
// ✅ ==========================================================
const FEATURED_PRODUCTS = [
  {
    id: "featured-1",
    slug: "featured",
    title: "Black Oversized Coat",
    brand: "Shein",
    category: "Dresses",
    price: 1599,
    mrp: 1999,
    image: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    colors: ["#e5732a", "#000000", "#6d6875"],
    rating: 4.4,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-2",
    slug: "featured",
    title: "Cream Bermuda Trase",
    brand: "Zara",
    category: "Tops",
    price: 899,
    mrp: 1299,
    image: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    colors: ["#4b4b4b", "#c4c4c4", "#1a1a1a"],
    rating: 4.1,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-3",
    slug: "featured",
    title: "Red Mars-Jacket",
    brand: "H&M",
    category: "Jackets",
    price: 2499,
    mrp: 3999,
    image: "https://images.unsplash.com/photo-1643622782660-30dedcd8d75a?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    colors: ["#f7b6b6", "#ffe0e0", "#000000"],
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-4",
    slug: "featured",
    title: "Lavender Raisy Jacket",
    brand: "Only",
    category: "Jackets",
    price: 1449,
    mrp: 2499,
    image: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    colors: ["#101820", "#2ecc71", "#dcdcdc"],
    rating: 4.2,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-5",
    slug: "featured",
    title: "Trendy Combo Tee",
    brand: "Roadster",
    category: "Tshirts",
    price: 699,
    mrp: 999,
    image: "https://images.unsplash.com/photo-1677759338040-7b51b3054852?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.0,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-6",
    slug: "featured",
    title: "Yellow black Combo Hoas",
    brand: "Shein",
    category: "Tshirts",
    price: 699,
    mrp: 999,
    image: "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.3,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-7",
    slug: "featured",
    title: "Black Cover hat agent",
    brand: "Zara",
    category: "Accessories",
    price: 699,
    mrp: 1199,
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8fDA%3Noteq=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.6,
    sizes: ["S", "M"],
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-8",
    slug: "featured",
    title: "Trendy Combo Tee",
    brand: "H&M",
    category: "Tshirts",
    price: 699,
    mrp: 999,
    image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3Noteq=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.0,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-9",
    slug: "featured",
    title: "Fluffy Jacket asolt",
    brand: "Only",
    category: "Jackets",
    price: 1299,
    mrp: 2599,
    image: "https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3Noteq=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.4,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-10",
    slug: "featured",
    title: "Crop top white fashion",
    brand: "Roadster",
    category: "Tops",
    price: 699,
    mrp: 899,
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3Noteq=60&w=600",
    colors: ["#ffffff", "#2e7d32", "#000000"],
    rating: 4.2,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
];

const FANDOM_PRODUCTS = [
  // ✅ ==========================================================
  // ✅ YOUR 3 "SHOP BY FANDOM" PRODUCTS
  // ✅ ==========================================================
  {
    id: "fandom-slayer",
    slug: "fandom",
    title: "Demon Slayer Tanjiro Tee",
    brand: "Demon Slayer",
    category: "Tshirts",
    price: 799,
    mrp: 1299,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/5/q/m-anime-7-black-ftx-original-imah4h9pyrgmhfrd.jpeg?q=70&crop=false",
    rating: 4.7,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-onepiece",
    slug: "fandom",
    title: "One Piece Zoro Tee",
    brand: "One Piece",
    category: "Tshirts",
    price: 799,
    mrp: 1299,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/v/l/j/m-anime-4-black-ftx-original-imah4h9pmxvqhhwc.jpeg?q=70&crop=false",
    rating: 4.8,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-fantastic",
    slug: "fandom",
    title: "Fantastic Four Tee",
    brand: "Marvel",
    category: "Tshirts",
    price: 799,
    mrp: 1299,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/4/9/m-anime-9-black-ftx-original-imah4h9pxgbyjdfg.jpeg?q=70&crop=false",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },

  // ✅ ==========================================================
  // ✅ YOUR OTHER FANDOM PRODUCTS
  // ✅ ==========================================================
  {
    id: "fandom-1",
    slug: "fandom",
    title: "Harry Potter Tee",
    brand: "Harry Potter",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image:
      "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Men-1757323393.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-2",
    slug: "fandom",
    title: "Peanuts Tee",
    brand: "Peanuts",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image:
      "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-men--2--1757581328.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-3",
    slug: "fandom",
    title: "Naruto Tee",
    brand: "Naruto",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-4",
    slug: "fandom",
    title: "Marvel Tee",
    brand: "Marvel",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image:
      "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Superman-Men-1753194940.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-5",
    slug: "fandom",
    title: "NASA Tee",
    brand: "NASA",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-NASA-men-1738586659.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-6",
    slug: "fandom",
    title: "Garfield Tee",
    brand: "Garfield",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-garfield-men-1738586652.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-7",
    slug: "fandom",
    title: "Peanuts 2 Tee",
    brand: "Peanuts",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-peanuts-men-1738586855.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-8",
    slug: "fandom",
    title: "DC Comics Tee",
    brand: "DC",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-DC-men-1738586415.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-9",
    slug: "fandom",
    title: "Harry Potter 2 Tee",
    brand: "Harry Potter",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-HP-men-1738586657.jpg",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
];

/* ---------- GENERIC COLLECTION GENERATOR ---------- */

export function makeProductsFor(slug) {
  if (slug === "featured") return FEATURED_PRODUCTS;
  if (slug === "fandom") return FANDOM_PRODUCTS;

  /* ✅ 100 IMAGE LINK ARRAY for you to paste your own */
  const CUSTOM_IMAGE_LINKS = [
    "https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://i.pinimg.com/originals/12/2e/34/122e34cbfc9db204583acf3886802127.jpg",
    "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1682095672918-234595db1df8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP0911_83dc2bbc-47b4-4f3a-a8a1-1554275db470.jpg?v=1705725249&width=3709",
    "https://images.unsplash.com/photo-1559127452-56b800eb2f23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1557022971-af40cfaf8f80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1535530705774-695729778c55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1708337889349-6164efa8eaaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1731589802397-6a1088d63630?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://i.pinimg.com/originals/df/a1/de/dfa1de6a46586afaa0439707f78c80ec.jpg",
    "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1589270216117-7972b3082c7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1687294575653-288f6105c4a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1623975561190-49d8eab816bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1642886512785-b5fee9faad7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1635205383325-aa3e6fb5ba55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://i.pinimg.com/originals/1b/2c/af/1b2caff74695c957cda1de7531563ff3.jpg",
    "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1682125610568-5b5b30ecc937?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1632149933606-fa45623682ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIyfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1708110921257-45d53d9d3b6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1708110768383-608e9fba949c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1576827471288-0a8f6d6c937b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYwfHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY4fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc2fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",

  ];

  /* ---------- GENERIC COLLECTION GENERATOR ---------- */

  return Array.from({ length: 100 }).map((_, i) => {
    const cat = CATEGORIES[i % CATEGORIES.length];
    const brand = BRANDS[i % BRANDS.length];
    const price = [449, 499, 549, 599, 649, 699, 749, 799, 899][i % 9];
    const mrp = price + [300, 350, 400, 450][i % 4];
    const img = CUSTOM_IMAGE_LINKS[i % CUSTOM_IMAGE_LINKS.length];

    return {
      id: `${slug}-${i + 1}`,
      slug,
      title: `${cap(slug)} ${cat.split("&")[0]} ${i + 1}`,
      brand,
      category: cat,
      gender: i % 2 === 0 ? "Women" : "Men", // 👈 keep balanced genders
      price,
      mrp,
      image: img,
      rating: 4 + (i % 10) / 10,
      sizes: COMMON_SIZES,
      keyHighlights: {
        Design: ["Graphic Print", "Solid", "Textured"][i % 3],
        Fit: ["Regular Fit", "Relaxed Fit", "Slim Fit"][i % 3],
        Neck: ["Round Neck", "V-Neck", "Collared"][i % 3],
        Material: ["Cotton", "Polyester", "Cotton Blend"][i % 3],
        Occasion: cap(slug).replace("-", " "),
        "Sleeve Style": ["Half Sleeve", "Full Sleeve", "Sleeveless"][i % 3],
      },
    };
  });
}

const cache = new Map();

export function getProductsFor(slug) {
  if (!cache.has(slug)) cache.set(slug, makeProductsFor(slug));
  return cache.get(slug);
  
}

export function getProductById(id) {
  const slug = id.split("-").slice(0, -1).join("-");
  // This will now find "fandom-slayer" because its slug is "fandom"
  return getProductsFor(slug).find((p) => p.id === id);
}