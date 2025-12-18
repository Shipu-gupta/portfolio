import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
export default function ProductExplorer() {
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [search, setSearch] = useState(""); // ✅ FIX


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data.products); // store API data
        setLoading(false);          // stop loading
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  // Conditional rendering
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h2>Product Explorer</h2>
<input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ marginBottom: "16px", padding: "8px", width: "100%" }}
/>
      <div className="projects-grid">
        {products
  .filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  .map(product => (
    <div key={product.id} className="glass">
      <h4>{product.title}</h4>
      <p className="muted">{product.description}</p>
    </div>
  ))}
      </div>
    </section>
  );
}
