import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <div className="bg-blue-100 overflow-x-hidden">
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />
      </div>
    </Routes>
  </Router>
);

export default App;
