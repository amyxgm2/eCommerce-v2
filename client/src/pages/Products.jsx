import React, { useEffect, useState } from "react";
import "./Products.css";

// 🖼️ Import all product images
import Product1_MujiPen from "../assets/Product1_MujiPen.webp";
import Product2_MujiPen from "../assets/Product2_MujiPen.webp";
import Product3_BallpointPen from "../assets/Product3_BallpointPen.webp";
import Product4_WoodenBallpoint from "../assets/Product4_WoodenBallpoint.webp";
import Product5_Notebook from "../assets/Product5_Notebook.webp";
import Product6_RecycledNotebook from "../assets/Product6_RecycledNotebook.webp";
import Product7_MonthlyPlannerA6 from "../assets/Product7_MonthlyPlannerA6.webp";
import Product8_RecycledMonthlyPlanner from "../assets/Product8_RecycledMonthlyPlanner.webp";
import Product9_StickyNotes from "../assets/Product9_StickyNotes.webp";
import Product10_CatStickyNotes from "../assets/Product10_CatStickyNotes.webp";
import Product11_PenCase from "../assets/Product11_PenCase.webp";
import Product12_MeshPenCase from "../assets/Product12_MeshPenCase.webp";

// 🗂️ Map database filenames to imported images
const imageMap = {
  "Product1_MujiPen.webp": Product1_MujiPen,
  "Product2_MujiPen.webp": Product2_MujiPen,
  "Product3_BallpointPen.webp": Product3_BallpointPen,
  "Product4_WoodenBallpoint.webp": Product4_WoodenBallpoint,
  "Product5_Notebook.webp": Product5_Notebook,
  "Product6_RecycledNotebook.webp": Product6_RecycledNotebook,
  "Product7_MonthlyPlannerA6.webp": Product7_MonthlyPlannerA6,
  "Product8_RecycledMonthlyPlanner.webp": Product8_RecycledMonthlyPlanner,
  "Product9_StickyNotes.webp": Product9_StickyNotes,
  "Product10_CatStickyNotes.webp": Product10_CatStickyNotes,
  "Product11_PenCase.webp": Product11_PenCase,
  "Product12_MeshPenCase.webp": Product12_MeshPenCase,
};

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => {
          // Extract just the filename from DB path (e.g., "../assets/Product1_MujiPen.webp" → "Product1_MujiPen.webp")
          const filename = product.image_url.split("/").pop();
          const imageSrc = imageMap[filename];

          return (
            <div key={product.id} className="product-card">
              {imageSrc ? (
                <img src={imageSrc} alt={product.name} />
              ) : (
                <div className="image-placeholder">Image not found</div>
              )}
              <h2>{product.name}</h2>
              <p className="price">${Number(product.price).toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <p className="category">Category: {product.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
