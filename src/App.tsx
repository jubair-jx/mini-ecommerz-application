import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
// import CartPage from "./pages/CartPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";

const App: React.FC = () => (
  <Router>
    <Header />
    <div className="p-4">
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
