import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import "../styles/offers.css";

const featuredOffers = getItemsBySection("featuredOffers");

const promoItems = [
  ...featuredOffers,
  ...featuredOffers.slice(0, 2),
];

function Offers({ activeLink = "OFFERS & UPDATES", onNavigate }) {
  return (
    <div className="offers-page">
      <div className="offers-shell">
        <Header initialActive="OFFERS & UPDATES" activeLink={activeLink} onNavigate={onNavigate} />

        <main className="offers-content">
          <section className="offers-section">
            <h3 className="offers-title">NEW ARRIVALS</h3>

            <div className="offers-arrival-grid">
              <div className="offers-highlight-block" />

              <div>
                <div className="offers-cards-grid offers-cards-grid-sm">
                  {featuredOffers.map((item, index) => (
                    <ProductCard
                      key={`${item.name}-${index}`}
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
                <button className="offers-view-more" type="button">VIEW MORE</button>
              </div>
            </div>
          </section>

          <section className="offers-section">
            <h3 className="offers-title">DEALS OF THE DAY</h3>
            <div className="offers-deals-row">
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
            </div>
          </section>

          <section className="offers-section offers-promo-section">
            <h3 className="offers-title">PROMOTIONS</h3>
            <div className="offers-banner-strip" />

            <div className="offers-cards-grid offers-cards-grid-lg">
              {promoItems.map((item, index) => (
                <ProductCard
                  key={`promo-${item.name}-${index}`}
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

            <div className="offers-banner-strip offers-banner-strip-bottom" />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Offers;