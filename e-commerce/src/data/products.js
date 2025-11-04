// Simple mock catalog generator so every collection has 30 distinct items.
// You can later swap this with your API results.



const BRANDS = ["Shein", "Zara", "H&M", "Only", "Roadster"];
const CATEGORIES = ["Dresses", "Shirts, Tops & Tunics", "Tshirts", "Jeans & Jeggings", "Trousers & Pants"];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function makeProductsFor(slug) {
  // 30 unique SKUs per collection slug
  return Array.from({ length: 30 }).map((_, i) => {
    const cat = CATEGORIES[i % CATEGORIES.length];
    const brand = BRANDS[i % BRANDS.length];
    const price = [449, 499, 549, 599, 649, 699, 749, 799, 899][i % 9];
    const mrp = price + [300, 350, 400, 450][i % 4];

    // Unsplash seed gives visually different images but stable URLs per id
    const img = `https://images.unsplash.com/photo-15${(10 + i) % 99}0${(i * 7) % 9}5${(i * 3) % 9}-?auto=format&fit=crop&w=1000&q=80&sig=${slug}-${i}`;

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
      rating: 4 + ((i % 10) / 10), // 4.0 – 4.9
      sizes: ["S", "M", "L", "XL", "2XL"],
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
