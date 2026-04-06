import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../assets/UnimartLogo.png";
import "../styles/Header.css";

const navLinks = [
  { label: "HOME",             path: "/"            },
  { label: "CATEGORY",         path: "/category"    },
  { label: "BEST SELLERS",     path: "/bestsellers" },
  { label: "OFFERS & UPDATES", path: "/offers"      },
];

export default function Header() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Unimart Logo" className="logoImg" />
        </Link>
      </div>
 
      <ul className="links">
        {navLinks.map(({ label, path }) => (
          <li key={label}>
            <Link
              to={path}
              className={`link ${location.pathname === path ? "active" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
 
      <div className="actions">
        <button className="iconBtn">
          <FiShoppingCart size={20} />
          <span className="badge">0</span>
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