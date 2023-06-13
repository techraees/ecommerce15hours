import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import ScrollButton from "./components/Home/ScrollButton";

import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Poppins", "Ubantu", "Montserrat", "Gill Sans"] },
    });
  });
  const a = 3423;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <ScrollButton />
    </div>
  );
}

export default App;
