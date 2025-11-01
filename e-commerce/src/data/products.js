const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

export default [
  // ===== MEN (15) =====
  { id:"m-tee-01", title:"Cotton Crew T-Shirt", brand:"StreetLit", price:549, mrp:999, rating:4.2, category:"Men", sizes:["S","M","L","XL"], color:"Black", image:U("photo-1516822003754-cca485356ecb"), tags:["t-shirt","casual"], trending:true },
  { id:"m-tee-02", title:"Polo Neck Tee", brand:"UrbanAce", price:699, mrp:1299, rating:4.1, category:"Men", sizes:["S","M","L","XL"], color:"Navy", image:U("photo-1512436991641-6745cdb1723f"), tags:["t-shirt","polo"] },
  { id:"m-shirt-01", title:"Slim Fit Shirt", brand:"NorthBay", price:899, mrp:1599, rating:4.3, category:"Men", sizes:["S","M","L","XL"], color:"Blue", image:U("photo-1520975732078-3b1c8c68a5ce"), tags:["shirt","formal"], trending:true },
  { id:"m-shirt-02", title:"Linen Casual Shirt", brand:"Breeze", price:1099, mrp:1899, rating:4.4, category:"Men", sizes:["S","M","L","XL"], color:"White", image:U("photo-1520975698519-59c38f02e3f6"), tags:["shirt","summer"] },
  { id:"m-jeans-01", title:"Stretch Denim Jeans", brand:"DeepIndigo", price:1299, mrp:2499, rating:4.4, category:"Men", sizes:["30","32","34","36"], color:"Navy", image:U("photo-1512436991641-6745cdb1723f"), tags:["jeans","denim"] },
  { id:"m-jeans-02", title:"Light Wash Jeans", brand:"DenimCo", price:1399, mrp:2699, rating:4.2, category:"Men", sizes:["30","32","34","36"], color:"Light Blue", image:U("photo-1520974722053-5b86b7891f67"), tags:["jeans","denim"] },
  { id:"m-jacket-01", title:"Puffer Jacket", brand:"Wintr", price:2199, mrp:3999, rating:4.5, category:"Men", sizes:["M","L","XL"], color:"Olive", image:U("photo-1519744792095-2f2205e87b6f"), tags:["jacket","winter"], trending:true },
  { id:"m-jacket-02", title:"Denim Jacket", brand:"Retro", price:1799, mrp:3299, rating:4.3, category:"Men", sizes:["M","L","XL"], color:"Blue", image:U("photo-1518552718887-9d44ccf0b2c5"), tags:["jacket","denim"] },
  { id:"m-hood-01", title:"Oversized Hoodie", brand:"CozyFit", price:1099, mrp:1999, rating:4.1, category:"Men", sizes:["S","M","L","XL"], color:"Grey", image:U("photo-1520975752092-5cded2dc4d0a"), tags:["hoodie","winter"] },
  { id:"m-sweater-01", title:"Cable Knit Sweater", brand:"Nord", price:1299, mrp:2399, rating:4.2, category:"Men", sizes:["S","M","L","XL"], color:"Beige", image:U("photo-1548445929-2f4b9b7a8dfd"), tags:["sweater","winter"] },
  { id:"m-chino-01", title:"Slim Chinos", brand:"Formo", price:1199, mrp:2099, rating:4.0, category:"Men", sizes:["30","32","34","36"], color:"Khaki", image:U("photo-1548883354-94bcfe321b7f"), tags:["chinos","casual"] },
  { id:"m-blazer-01", title:"Casual Blazer", brand:"SuitUp", price:2499, mrp:4499, rating:4.2, category:"Men", sizes:["M","L","XL"], color:"Charcoal", image:U("photo-1520975698519-59c38f02e3f6"), tags:["blazer","party"] },
  { id:"m-shorts-01", title:"Cotton Shorts", brand:"Sunset", price:799, mrp:1499, rating:4.1, category:"Men", sizes:["M","L","XL"], color:"Sand", image:U("photo-1530639836706-7d0f04b9a1f1"), tags:["shorts","summer"] },
  { id:"m-trouser-01", title:"Formal Trousers", brand:"WorkWear", price:1499, mrp:2799, rating:4.3, category:"Men", sizes:["30","32","34","36"], color:"Black", image:U("photo-1520975732078-3b1c8c68a5ce"), tags:["formal","trousers"] },
  { id:"m-coord-01", title:"Co-ord Set", brand:"Mono", price:1999, mrp:3499, rating:4.1, category:"Men", sizes:["M","L","XL"], color:"Charcoal", image:U("photo-1542060748-10c28b62716f"), tags:["coord","casual"], trending:true },

  // ===== WOMEN (16) =====
  { id:"w-dress-01", title:"Flared Dress", brand:"Aurelia", price:1399, mrp:2699, rating:4.4, category:"Women", sizes:["XS","S","M","L"], color:"Red", image:U("photo-1519741497674-611481863552"), tags:["dress","party"], trending:true },
  { id:"w-dress-02", title:"Bodycon Dress", brand:"Muse", price:1599, mrp:2999, rating:4.3, category:"Women", sizes:["S","M","L"], color:"Black", image:U("photo-1519741497674-611481863552"), tags:["dress","evening"] },
  { id:"w-kurta-01", title:"Printed Kurta", brand:"Naya", price:1099, mrp:2199, rating:4.2, category:"Women", sizes:["S","M","L","XL"], color:"Blue", image:U("photo-1561948955-570b270e7c36"), tags:["kurta","ethnic"] },
  { id:"w-kurta-02", title:"Anarkali Kurta", brand:"Riwaaz", price:1499, mrp:2899, rating:4.1, category:"Women", sizes:["S","M","L","XL"], color:"Green", image:U("photo-1561948955-570b270e7c36"), tags:["kurta","ethnic"] },
  { id:"w-saree-01", title:"Silk Blend Saree", brand:"Sanskriti", price:1899, mrp:3499, rating:4.1, category:"Women", sizes:["Std"], color:"Pink", image:U("photo-1600728619307-cf68f9d88d1a"), tags:["saree","ethnic"] },
  { id:"w-saree-02", title:"Georgette Saree", brand:"Ada", price:1699, mrp:3199, rating:4.0, category:"Women", sizes:["Std"], color:"Maroon", image:U("photo-1600728619307-cf68f9d88d1a"), tags:["saree"] },
  { id:"w-skirt-01", title:"A-line Skirt", brand:"UrbanMuse", price:899, mrp:1699, rating:4.0, category:"Women", sizes:["S","M","L"], color:"Brown", image:U("photo-1541099649105-f69ad21f3246"), tags:["skirt","casual"] },
  { id:"w-top-01", title:"Ribbed Top", brand:"Fable", price:699, mrp:1299, rating:4.2, category:"Women", sizes:["XS","S","M","L"], color:"Beige", image:U("photo-1581655353564-df123a1eb820"), tags:["top","casual"], trending:true },
  { id:"w-jeans-01", title:"Mom Fit Jeans", brand:"DenimCo", price:1499, mrp:2799, rating:4.5, category:"Women", sizes:["26","28","30","32"], color:"Light Blue", image:U("photo-1512436991641-6745cdb1723f"), tags:["jeans","denim"] },
  { id:"w-jeans-02", title:"High-Rise Jeans", brand:"IndiDenim", price:1399, mrp:2599, rating:4.3, category:"Women", sizes:["26","28","30","32"], color:"Blue", image:U("photo-1542060748-10c28b62716f"), tags:["jeans"] },
  { id:"w-sweat-01", title:"Women Sweatshirt", brand:"Snug", price:999, mrp:1899, rating:4.3, category:"Women", sizes:["S","M","L","XL"], color:"Beige", image:U("photo-1520975698519-59c38f02e3f6"), tags:["sweatshirt","winter"] },
  { id:"w-cardigan-01", title:"Knit Cardigan", brand:"Cozy", price:1199, mrp:2199, rating:4.2, category:"Women", sizes:["S","M","L"], color:"Cream", image:U("photo-1548445929-2f4b9b7a8dfd"), tags:["winter","cardigan"] },
  { id:"w-blazer-01", title:"Tailored Blazer", brand:"Formelle", price:2299, mrp:3999, rating:4.2, category:"Women", sizes:["S","M","L"], color:"Black", image:U("photo-1544717305-2782549b5136"), tags:["blazer","work"] },
  { id:"w-coord-01", title:"Co-ord Lounge Set", brand:"SoftWear", price:1699, mrp:2999, rating:4.1, category:"Women", sizes:["S","M","L"], color:"Grey", image:U("photo-1542060748-10c28b62716f"), tags:["coord","casual"], trending:true },
  { id:"w-leggings-01", title:"Stretch Leggings", brand:"Athle", price:699, mrp:1199, rating:4.0, category:"Women", sizes:["S","M","L","XL"], color:"Black", image:U("photo-1581655353564-df123a1eb820"), tags:["leggings","athleisure"] },
  { id:"w-jacket-01", title:"Cropped Jacket", brand:"Edge", price:1999, mrp:3499, rating:4.2, category:"Women", sizes:["S","M","L"], color:"Tan", image:U("photo-1519744792095-2f2205e87b6f"), tags:["jacket","winter"] },
];
