
import { useState, useMemo, useEffect } from "react";
import { useSearchParams }   from "react-router-dom";
import { FiSearch, FiFilter, FiArrowRight } from "react-icons/fi";
import Header      from "../components/header.jsx";
import Footer      from "../components/footer.jsx";
import ProductCard from "../components/ProductCard.jsx";

import { allProducts }               from "../data/Products.js";
import { categories, categoryNames } from "../data/Categories.js";
import "../styles/Category.css";

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat                          = searchParams.get("cat") || "All";

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [search, setSearch]                 = useState("");
  const [showAll, setShowAll]               = useState(false);

  useEffect(() => {
    setSearchParams({ cat: activeCategory });
  }, [activeCategory]);

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat    = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                          p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const visible = showAll ? filtered : filtered.slice(0, 12);

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
    setShowAll(false);
  };

  return (
    <>
      <Header />

      <div className="cat-hero">
        <div className="cat-hero-overlay" />
        <div className="cat-hero-content">
          <h1 className="cat-hero-title">
            Pick a category,<br />
            <span className="cat-hero-accent">discover the best.</span>
          </h1>
        </div>
      </div>

      <main className="cat-page">

        <div className="cat-tabs">
          {categoryNames.map((name) => (
            <button
              key={name}
              className={`cat-tab ${activeCategory === name ? "cat-tab-active" : ""}`}
              onClick={() => handleCategoryClick(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="cat-grid">
            {visible.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        ) : (
          <div className="cat-empty">
            <p>No products found for "<strong>{search || activeCategory}</strong>"</p>
          </div>
        )}

        {!showAll && filtered.length > 12 && (
          <div className="cat-view-all">
            <button className="cat-view-all-btn" onClick={() => setShowAll(true)}>
              VIEW ALL ({filtered.length}) <FiArrowRight size={14} />
            </button>
          </div>
        )}

        <div className="cat-cta">
          <div className="cat-cta-overlay" />
          <div className="cat-cta-content">
            <h2 className="cat-cta-title">
              Discover products for every part of your day<br />
              <span>choose your category</span>
            </h2>
            <p className="cat-cta-body">
              Our categories help you quickly discover what you're looking for.
              Find your daily essentials across fresh and convenient options right at your doorstep.
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}