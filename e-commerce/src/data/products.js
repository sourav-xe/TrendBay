// Simple mock catalog generator so every collection has items.
// You can later swap this with your API results.

const BRANDS = ["Shein", "Zara", "H&M", "Only", "Roadster"];
const CATEGORIES = [
  "Dresses",
  "Shirts, Tops & Tunics",
  "Tshirts",
  "Jeans & Jeggings",
  "Trousers & Pants",
];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- SPECIAL PRODUCT SETS ----------
   These are used by:
   - FeaturedProducts (slug: "featured")
   - FandomCarousel  (slug: "fandom")
   so that clicking those cards can open the same
   product detail page layout with working Add to Bag.
------------------------------------------ */

const COMMON_HIGHLIGHTS = {
  Design: "Graphic Print",
  Fit: "Regular Fit",
  Neck: "Round Neck",
  Material: "Cotton",
  Occasion: "All",
  "Sleeve Style": "Half Sleeve",
};

const COMMON_SIZES = ["S", "M", "L", "XL", "2XL"];

const FEATURED_PRODUCTS = [
  {
    id: "featured-1",
    slug: "featured",
    title: "Black Oversized Coat",
    brand: "Shein",
    category: "Dresses",
    gender: "Women",
    price: 1599,
    mrp: 1999,
    image:
      "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.4,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-2",
    slug: "featured",
    title: "Cream Bermuda Trase",
    brand: "Zara",
    category: "Trousers & Pants",
    gender: "Women",
    price: 899,
    mrp: 1499,
    image:
      "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.2,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-3",
    slug: "featured",
    title: "Red Mars-Jacket",
    brand: "H&M",
    category: "Dresses",
    gender: "Women",
    price: 2499,
    mrp: 2999,
    image:
      "https://images.unsplash.com/photo-1643622782660-30dedcd8d75a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.5,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-4",
    slug: "featured",
    title: "Lavender Raisy Jacket",
    brand: "Only",
    category: "Dresses",
    gender: "Women",
    price: 1449,
    mrp: 1999,
    image:
      "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.1,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-5",
    slug: "featured",
    title: "Trendy Combo Tee",
    brand: "Roadster",
    category: "Tshirts",
    gender: "Women",
    price: 699,
    mrp: 1199,
    image:
      "https://images.unsplash.com/photo-1677759338040-7b51b3054852?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.3,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-6",
    slug: "featured",
    title: "Yellow black Combo Hoas",
    brand: "Shein",
    category: "Dresses",
    gender: "Women",
    price: 699,
    mrp: 1299,
    image:
      "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.0,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-7",
    slug: "featured",
    title: "Black Cover hat agent",
    brand: "Zara",
    category: "Dresses",
    gender: "Women",
    price: 699,
    mrp: 1299,
    image:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.2,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-8",
    slug: "featured",
    title: "Trendy Combo Tee 2",
    brand: "H&M",
    category: "Tshirts",
    gender: "Women",
    price: 699,
    mrp: 1199,
    image:
      "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.1,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-9",
    slug: "featured",
    title: "Fluffy Jacket asolt",
    brand: "Only",
    category: "Dresses",
    gender: "Women",
    price: 1299,
    mrp: 1899,
    image:
      "https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.4,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "featured-10",
    slug: "featured",
    title: "Crop top white fashion",
    brand: "Roadster",
    category: "Tshirts",
    gender: "Women",
    price: 699,
    mrp: 1299,
    image:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.2,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
];

const FANDOM_PRODUCTS = [
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
    mrp: 999,
    image:
      "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-men--2--1757581328.jpg",
    rating: 4.3,
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
    price: 499,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg",
    rating: 4.4,
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
    price: 499,
    mrp: 1099,
    image:
      "https://images.bewakoof.com/uploads/grid/app/500x600-Fandom-Tile-Superman-Men-1753194940.jpg",
    rating: 4.4,
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
    mrp: 999,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-NASA-men-1738586659.jpg",
    rating: 4.2,
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
    mrp: 999,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-garfield-men-1738586652.jpg",
    rating: 4.1,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-7",
    slug: "fandom",
    title: "Peanuts Tee 2",
    brand: "Peanuts",
    category: "Tshirts",
    gender: "Men",
    price: 449,
    mrp: 999,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-peanuts-men-1738586855.jpg",
    rating: 4.0,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-8",
    slug: "fandom",
    title: "DC Tee",
    brand: "DC",
    category: "Tshirts",
    gender: "Men",
    price: 499,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-DC-men-1738586415.jpg",
    rating: 4.3,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
  {
    id: "fandom-9",
    slug: "fandom",
    title: "Harry Potter Tee 2",
    brand: "Harry Potter",
    category: "Tshirts",
    gender: "Men",
    price: 499,
    mrp: 1099,
    image: "https://images.bewakoof.com/uploads/grid/app/SC-HP-men-1738586657.jpg",
    rating: 4.4,
    sizes: COMMON_SIZES,
    keyHighlights: COMMON_HIGHLIGHTS,
  },
];

/* ---------- GENERIC COLLECTION GENERATOR ---------- */

export function makeProductsFor(slug) {
  // special slugs first
  if (slug === "featured") return FEATURED_PRODUCTS;
  if (slug === "fandom") return FANDOM_PRODUCTS;

  // 30 synthetic SKUs per generic collection slug
  return Array.from({ length: 30 }).map((_, i) => {
    const cat = CATEGORIES[i % CATEGORIES.length];
    const brand = BRANDS[i % BRANDS.length];
    const price = [449, 499, 549, 599, 649, 699, 749, 799, 899][i % 9];
    const mrp = price + [300, 350, 400, 450][i % 4];

    // Unsplash seed gives visually different images
    const img = `https://images.unsplash.com/photo-15${(10 + i) % 99}0${
      (i * 7) % 9
    }5${(i * 3) % 9}-?auto=format&fit=crop&w=1000&q=80&sig=${slug}-${i}`;

    return {
      id: `${slug}-${i + 1}`,
      slug,
      title: `${cap(slug)} ${cat.split("&")[0]} ${i + 1}`,
      brand,
      category: cat,
      gender: "Women",
      price,
      mrp,
      image: img,
      rating: 4 + (i % 10) / 10, // 4.0 – 4.9
      sizes: COMMON_SIZES,
      keyHighlights: {
        Design: ["Graphic Print", "Solid", "Textured"][(i * 5) % 3],
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
  // id format: `${slug}-${index}`
  const slug = id.split("-").slice(0, -1).join("-");
  return getProductsFor(slug).find((p) => p.id === id);
}
