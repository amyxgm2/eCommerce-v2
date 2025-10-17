import React, { useEffect, useState } from "react";
import './Products.css';

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
            <h1>Our Products Page</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;