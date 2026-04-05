
import { useState } from "react";
import Home from "./pages/home.jsx";
import Category from "./pages/category.jsx";
import BestSeller from "./pages/bestSeller.jsx";
import Offers from "./pages/offers.jsx";

const pageMap = {
  HOME: Home,
  CATEGORY: Category,
  "BEST SELLERS": BestSeller,
  "OFFERS & UPDATES": Offers,
};

function App() {
  const [activePage, setActivePage] = useState("OFFERS & UPDATES");
  const ActivePageComponent = pageMap[activePage] ?? Offers;

  return <ActivePageComponent activeLink={activePage} onNavigate={setActivePage} />;
}

export default App;