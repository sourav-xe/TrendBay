// src/data/customProducts.js
// This file is ONLY for your new 70-card collections (e.g., Powerpuff Girls Collection)

const BRANDS = ["Shein", "Zara", "H&M", "Only", "Roadster"];
const CATEGORIES = [
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

const COMMON_HIGHLIGHTS = {
  Design: "Graphic Print",
  Fit: "Regular Fit",
  Material: "Cotton",
  Occasion: "All",
  "Sleeve Style": "Half Sleeve",
};

const COMMON_SIZES = ["S", "M", "L", "XL", "2XL"];

// 🖼️ Paste your 70 custom image URLs here:
const CUSTOM_IMAGES = [
  "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "PASTE_YOUR_IMAGE_LINK_2",
  "PASTE_YOUR_IMAGE_LINK_3",
  "PASTE_YOUR_IMAGE_LINK_4",
  "PASTE_YOUR_IMAGE_LINK_5",
  "PASTE_YOUR_IMAGE_LINK_6",
  "PASTE_YOUR_IMAGE_LINK_7",
  "PASTE_YOUR_IMAGE_LINK_8",
  "PASTE_YOUR_IMAGE_LINK_9",
  "PASTE_YOUR_IMAGE_LINK_10",
  "PASTE_YOUR_IMAGE_LINK_11",
  "PASTE_YOUR_IMAGE_LINK_12",
  "PASTE_YOUR_IMAGE_LINK_13",
  "PASTE_YOUR_IMAGE_LINK_14",
  "PASTE_YOUR_IMAGE_LINK_15",
  "PASTE_YOUR_IMAGE_LINK_16",
  "PASTE_YOUR_IMAGE_LINK_17",
  "PASTE_YOUR_IMAGE_LINK_18",
  "PASTE_YOUR_IMAGE_LINK_19",
  "PASTE_YOUR_IMAGE_LINK_20",
  "PASTE_YOUR_IMAGE_LINK_21",
  "PASTE_YOUR_IMAGE_LINK_22",
  "PASTE_YOUR_IMAGE_LINK_23",
  "PASTE_YOUR_IMAGE_LINK_24",
  "PASTE_YOUR_IMAGE_LINK_25",
  "PASTE_YOUR_IMAGE_LINK_26",
  "PASTE_YOUR_IMAGE_LINK_27",
  "PASTE_YOUR_IMAGE_LINK_28",
  "PASTE_YOUR_IMAGE_LINK_29",
  "PASTE_YOUR_IMAGE_LINK_30",
  "PASTE_YOUR_IMAGE_LINK_31",
  "PASTE_YOUR_IMAGE_LINK_32",
  "PASTE_YOUR_IMAGE_LINK_33",
  "PASTE_YOUR_IMAGE_LINK_34",
  "PASTE_YOUR_IMAGE_LINK_35",
  "PASTE_YOUR_IMAGE_LINK_36",
  "PASTE_YOUR_IMAGE_LINK_37",
  "PASTE_YOUR_IMAGE_LINK_38",
  "PASTE_YOUR_IMAGE_LINK_39",
  "PASTE_YOUR_IMAGE_LINK_40",
  "PASTE_YOUR_IMAGE_LINK_41",
  "PASTE_YOUR_IMAGE_LINK_42",
  "PASTE_YOUR_IMAGE_LINK_43",
  "PASTE_YOUR_IMAGE_LINK_44",
  "PASTE_YOUR_IMAGE_LINK_45",
  "PASTE_YOUR_IMAGE_LINK_46",
  "PASTE_YOUR_IMAGE_LINK_47",
  "PASTE_YOUR_IMAGE_LINK_48",
  "PASTE_YOUR_IMAGE_LINK_49",
  "PASTE_YOUR_IMAGE_LINK_50",
  "PASTE_YOUR_IMAGE_LINK_51",
  "PASTE_YOUR_IMAGE_LINK_52",
  "PASTE_YOUR_IMAGE_LINK_53",
  "PASTE_YOUR_IMAGE_LINK_54",
  "PASTE_YOUR_IMAGE_LINK_55",
  "PASTE_YOUR_IMAGE_LINK_56",
  "PASTE_YOUR_IMAGE_LINK_57",
  "PASTE_YOUR_IMAGE_LINK_58",
  "PASTE_YOUR_IMAGE_LINK_59",
  "PASTE_YOUR_IMAGE_LINK_60",
  "PASTE_YOUR_IMAGE_LINK_61",
  "PASTE_YOUR_IMAGE_LINK_62",
  "PASTE_YOUR_IMAGE_LINK_63",
  "PASTE_YOUR_IMAGE_LINK_64",
  "PASTE_YOUR_IMAGE_LINK_65",
  "PASTE_YOUR_IMAGE_LINK_66",
  "PASTE_YOUR_IMAGE_LINK_67",
  "PASTE_YOUR_IMAGE_LINK_68",
  "PASTE_YOUR_IMAGE_LINK_69",
  "PASTE_YOUR_IMAGE_LINK_70",
];

export function makeCustomProductsFor(slug) {
  const GENDERS = ["Men", "Women"];

  return Array.from({ length: 70 }).map((_, i) => {
    const gender = GENDERS[i % 2];
    const category = CATEGORIES[i % CATEGORIES.length];
    const brand = BRANDS[i % BRANDS.length];
    const price = [299, 399, 449, 499, 549, 599, 649, 699, 799][i % 9];
    const mrp = price + [250, 300, 350, 400][i % 4];
    const image = CUSTOM_IMAGES[i % CUSTOM_IMAGES.length];

    return {
      id: `${slug}-${i + 1}`,
      slug,
      title: `${cap(slug)} ${category} ${i + 1}`,
      brand,
      category,
      gender,
      price,
      mrp,
      image,
      rating: 4 + (i % 10) / 10,
      sizes: COMMON_SIZES,
      keyHighlights: COMMON_HIGHLIGHTS,
    };
  });
}

const cache = new Map();

export function getCustomProductsFor(slug) {
  if (!cache.has(slug)) cache.set(slug, makeCustomProductsFor(slug));
  return cache.get(slug);
}

export function getCustomProductById(id) {
  const slug = id.split("-").slice(0, -1).join("-");
  return getCustomProductsFor(slug).find((p) => p.id === id);
}
