import "../styles/bestSeller.css";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";

const dailyBestSellers = getItemsBySection("dailyBestSellers");
const risingTrends = getItemsBySection("risingTrends");

function BestSeller({ activeLink = "BEST SELLERS", onNavigate }) {
  return (
    <div className="bs-page">
      <div className="bs-shell">
        <Header initialActive="BEST SELLERS" activeLink={activeLink} onNavigate={onNavigate} />

        <main className="bs-content">
          <section className="bs-hero">
            <article className="bs-promo bs-promo-main">
              <h2>
                <span>Hot Picks.</span>
                <span>Fast Moving.</span>
                <span>
                  Don&apos;t <strong>Miss Out.</strong>
                </span>
              </h2>
              <div className="bs-main-illustration" />
            </article>

            <article className="bs-promo bs-promo-side">
              <div className="bs-side-can" />
              <p>Shop what everyone&apos;s loving at UniMart.</p>
            </article>
          </section>

          <section className="bs-section">
            <h4>DAILY BEST SELLERS</h4>
            <div className="bs-products-row">
              {dailyBestSellers.map((item) => (
                <ProductCard
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                  badge={item.badge}
                  inStock={true}
                />
              ))}
            </div>
          </section>

          <section className="bs-section">
            <h4>RISING TRENDS</h4>
            <div className="bs-products-row">
              {risingTrends.map((item) => (
                <ProductCard
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                  badge={item.badge}
                  inStock={true}
                />
              ))}
            </div>
          </section>

          <section className="bs-section bs-categories">
            <h4>POPULAR CATEGORIES</h4>
            <div className="bs-category-grid">
              <div className="bs-cat-box bs-cat-a" />
              <div className="bs-cat-box bs-cat-b" />
              <div className="bs-cat-box bs-cat-c" />
              <div className="bs-cat-box bs-cat-d" />
              <div className="bs-cat-box bs-cat-e" />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default BestSeller;