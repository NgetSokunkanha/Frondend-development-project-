
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones, FiArrowRight } from "react-icons/fi";
import Header        from "../components/header.jsx";
import Footer        from "../components/footer.jsx";
import Hero          from "../components/Hero.jsx";
import ProductRow    from "../components/ProductRow.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useNavigate } from "react-router-dom";
import { newProducts, bestSellers } from "../data/Products";
import { categories }               from "../data/Categories";
import { offers }                   from "../data/Offers";

import "../styles/HomePage.css";

const features = [
  { icon: <FiTruck size={22} />,      iconColor: "#3a7d1e", iconBg: "#edf7e5", label: "Free Delivery",  sub: "On orders above $30"      },
  { icon: <FiShield size={22} />,     iconColor: "#f47c20", iconBg: "#fef3e8", label: "Secure Payment", sub: "100% protected checkout"   },
  { icon: <FiRefreshCw size={22} />,  iconColor: "#0077cc", iconBg: "#e3f0fb", label: "Easy Returns",   sub: "Can return back within 7 days" },
  { icon: <FiHeadphones size={22} />, iconColor: "#9b59b6", iconBg: "#f3e8fb", label: "24/7 Support",   sub: "We're always here for you" },
];


export default function HomePage() {
  const navigate = useNavigate();
  const handleCategoryClick = (label) => {
    navigate(`/category?cat=${encodeURIComponent(label)}`);
  };
  return (
    <>
      <Header />
         <main className="home-page">
  
      <Hero />

      <section className="home-section">
        <SectionHeader tag ="" title="Shop by Category" cta="All Categories" />
        <div className="category-grid">
          {categories.map(({ emoji, label, count, iconColor, bg }) => (
            <button key={label} className="category-card" style={{ background: bg }}
                onClick={() => handleCategoryClick(label)} 
            >
              <span className="category-emoji" style={{ color: iconColor }}>{emoji}</span>
              <span className="category-label">{label}</span>
              <span className="category-count">{count}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader
          tag=""
          title="New Products"
          subtitle=""
          cta="See All"
        />
        <ProductRow products={newProducts} />
      </section>

      <section className="home-section">
        <SectionHeader
          tag=""
          tagColor=""
          title="Special Offers & Promotions"
          cta="View All Deals"
        />
        <div className="offers-grid">
          {offers.map(({ label, discount, bgClass, image }) => (
            <div key={label} className={`offer-card ${bgClass}`}>
              <div className="offer-label">{label}</div>
              <span className="offer-discount">{discount}</span>
              <button className="offer-btn" onClick={() => navigate("/offers")}>
                Shop Now <FiArrowRight size={12} />
              </button>
              {image && <img className="offer-card-image" src={image} alt={label} />}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader
          tag=""
          tagColor=""
          title="Best Sellers"
          subtitle=""
          cta="See All"
        />
        <ProductRow products={bestSellers} />
      </section>

        <section className="home-section">
          <SectionHeader
            tag=""
            tagColor=""
            title="Why Buy From Us?"
            subtitle="Here's what makes UniMart the smart choice for your daily shopping"
          />
          <div className="why-us-grid">
            {features.map(({ icon, iconColor, iconBg, label, sub }) => (
              <div key={label} className="why-us-card">
                <div
                  className="why-us-icon"
                  style={{ background: iconBg, color: iconColor }}
                >
                  {icon}
                </div>
                <div>
                  <div className="why-us-title">{label}</div>
                  <div className="why-us-desc">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>

  );
    
}