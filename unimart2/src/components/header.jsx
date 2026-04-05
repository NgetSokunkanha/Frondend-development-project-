import { useState } from "react";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../assets/UnimartLogo.png";
import "../styles/Header.css";

const navLinks = ["HOME", "CATEGORY", "BEST SELLERS", "OFFERS & UPDATES"];

export default function Header({ initialActive = "HOME", activeLink, onNavigate }) {
  const [internalActive, setInternalActive] = useState(initialActive);
  const active = activeLink ?? internalActive;

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Unimart Logo" className="logoImg" />
      </div>

      <ul className="links">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`link ${active === link ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate(link);
                  return;
                }

                setInternalActive(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="actions">
        <button className="iconBtn">
          <FiShoppingCart size={20} />
          <span className="cart-badge">0</span>
        </button>

        <button className="iconBtn">
          <FiHeart size={20} />
        </button>

        <button className="iconBtn">
          <FiUser size={20} />
        </button>
      </div>
    </nav>
  );
}