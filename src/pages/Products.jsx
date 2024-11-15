import React from "react";
import ProductList from "../components/ProductList";

import ProductForm from "../components/ProductForm";
import Footer from "../components/Footer";

const Products = () => (
  <div className="p-4 bg-blue-100">
    <ProductForm />
    <ProductList />
  </div>
);

export default Products;
