
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProductCard from "./ProductCard"; 
import "../styles/ProductRow.css";

export default function ProductRow({ products = [], onAddToCart, onToggleFavorite, favoriteItemKeys = [] }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <div className="product-row">
      <div className="product-row-track" ref={trackRef}>
        {products.map((product, i) => (
          <div key={i} className="product-row-item">
            <ProductCard
              {...product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favoriteItemKeys.includes(product.name)}
            />
          </div>
        ))}
      </div>

      <button className="product-row-arrow product-row-arrow-left"  onClick={() => scroll(-1)} aria-label="Scroll left">
        <FiArrowLeft />
      </button>
      <button className="product-row-arrow product-row-arrow-right" onClick={() => scroll(1)}  aria-label="Scroll right">
        <FiArrowRight />
      </button>
    </div>
  );
}