const STORE_CONFIG = {
  storeName: "VastraLane",
  currency: "₹",
  freeDeliveryOn: 799,
  whatsappNumber: "",
  categories: ["All", "Men", "Women", "Kids", "Beauty"],
  products: [
    { id: 1, brand: "Roadster", title: "Men Slim Fit Shirt", price: 799, mrp: 1499, discount: 46, rating: 4.2, reviews: 2340, category: "Men", sizes: ["S", "M", "L", "XL"], images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"], colors: ["Blue", "White"], stock: 2 },
    { id: 2, brand: "SASSAFRAS", title: "Women Floral Dress", price: 649, mrp: 1999, discount: 67, rating: 4.3, reviews: 1800, category: "Women", sizes: ["S", "M", "L"], images: ["https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500"] },
    { id: 3, brand: "H&M", title: "Kids T-shirt Pack", price: 499, mrp: 999, discount: 50, rating: 4.5, reviews: 900, category: "Kids", sizes: ["2-3Y", "4-5Y", "6-7Y"], images: ["https://image.hm.com/assets/hm/8b/3d/8b3de29836d15bf4c7c0818e4ba174c45d213120.jpg?imwidth=2160"], colors: ["Blue", "White"],stock: 2  },
    { id: 4, brand: "Nike", title: "Men Sports Shoes", price: 2999, mrp: 4999, discount: 40, rating: 4.4, reviews: 3200, category: "Men", sizes: ["7", "8", "9", "10"], images:[" https://tse4.mm.bing.net/th/id/OIP.ZgNGE8Xo30N3GXZTD2mCBgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"] },
    { id: 5, brand: "Lakme", title: "ṣunscrime", price: 799, mrp: 1499, discount: 46, rating: 4.2, reviews: 2340, category: "Beauty", sizes: ["30ml"], images: ["https://cdn.shopify.com/s/files/1/0609/6096/4855/files/DEWYSUNSCREEN_1.jpg?v=1785234012&width=1080&quality=60"]},
    { id: 6, brand: "Levis", title: "Men Slim Jeans", price: 1499, mrp: 2999, discount: 50, rating: 4.3, reviews: 2100, category: "Men", sizes: ["30", "32", "34", "36"], images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"] },
    { id: 7, brand: "Anouk", title: "Women Printed Cotton Kurta", price: 899, mrp: 1799, discount: 50, rating: 4.2, reviews: 840, category: "Women", sizes: ["S", "M", "L", "XL"], images: ["https://th.bing.com/th?id=OPAC.i%2bZB7SZ2WghDbA474C474&w=658&h=658&qlt=100&o=5&dpr=1.5&pid=21.1"], colors: ["Blue", "White"] ,stock: 2 },
    { id: 8, brand: "Puma", title: "Unisex Running Sneakers", price: 2499, mrp: 4999, discount: 50, rating: 4.5, reviews: 1680, category: "Men", sizes: ["6", "7", "8", "9", "10"], images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"] },
    { id: 9, brand: "DressBerry", title: "Women Casual Top", price: 549, mrp: 1099, discount: 50, rating: 4.0, reviews: 620, category: "Women", sizes: ["XS", "S", "M", "L"], images: ["https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500"] },
    { id: 10, brand: "U.S. Polo Assn.", title: "Men Classic Polo T-shirt", price: 999, mrp: 1999, discount: 50, rating: 4.4, reviews: 1450, category: "Men", sizes: ["S", "M", "L", "XL"], images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"] ,stock: 0},
    { id: 11, brand: "MINI KLUB", title: "Kids Printed Cotton Dress", price: 699, mrp: 1399, discount: 50, rating: 4.3, reviews: 510, category: "Kids", sizes: ["2-3Y", "4-5Y", "6-7Y"], images: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500"] },
    { id: 12, brand: "Maybelline", title: "Fit Me Matte + Poreless Foundation", price: 499, mrp: 599, discount: 17, rating: 4.2, reviews: 2750, category: "Beauty", sizes: ["30ml"], images: ["https://a.cdnsbn.com/images/products/l/33630280902-1.jpg"] }
  ]
};
