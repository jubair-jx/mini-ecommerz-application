import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Shared/Header";
// import CartPage from "./pages/CartPage";
import Footer from "./components/Shared/Footer";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

const App: React.FC = () => (
  <Router>
    <Header />
    <div className=" min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
