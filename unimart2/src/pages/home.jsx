import { useState } from "react";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import FilterModal from "../components/FilterModal.jsx";

function Home({ activeLink = "HOME", onNavigate }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <div>
      <Header initialActive="HOME" activeLink={activeLink} onNavigate={onNavigate} />

      <main style={{ padding: "24px", minHeight: "60vh" }}>
        <h1 style={{ marginBottom: "16px" }}>UI Preview</h1>

        <section style={{ maxWidth: "320px", marginBottom: "20px" }}>
          <ProductCard
            image="https://via.placeholder.com/600x600?text=Product+Image"
            name="Organic Oat Milk"
            brand="UniMart"
            price={4.99}
            oldPrice={6.49}
            rating={4}
            badge="New"
            inStock={true}
            onAddToCart={(item) => console.log("Added to cart:", item)}
          />
        </section>

        <button type="button" onClick={() => setIsFilterOpen(true)}>
          Open Filter Modal
        </button>

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onConfirm={(filters) => {
            setSelectedFilters(filters);
            setIsFilterOpen(false);
          }}
        />

        <pre style={{ marginTop: "16px", whiteSpace: "pre-wrap" }}>
          {JSON.stringify(selectedFilters, null, 2)}
        </pre>
      </main>

      <Footer />
    </div>
  );
}

export default Home;