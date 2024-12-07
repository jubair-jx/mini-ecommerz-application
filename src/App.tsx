import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Shared/Header";
// import CartPage from "./pages/CartPage";
import Footer from "./components/Shared/Footer";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";

const App: React.FC = () => (
  <Router>
    <Header />
    <div className="p-4 min-h-screen">
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
