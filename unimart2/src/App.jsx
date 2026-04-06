import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage    from "./pages/HomePage.jsx";
import BestSeller  from "./pages/bestSeller.jsx";
import Category from "./pages/category.jsx";
import Offers      from "./pages/offers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}     />
        <Route path="/category" element={<Category />} />
        <Route path="/bestsellers" element={<BestSeller />}   />
        <Route path="/offers" element={<Offers />}       />
      </Routes>
    </BrowserRouter>
  );
}

export default App;