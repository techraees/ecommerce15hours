import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/section/Footer.jsx";
import Header from "./components/Layout/Header/section/Header.jsx";
import AllProducts from "./components/Home/Products/AllProducts.jsx";
import SingleProduct from "./components/Home/SingleProducts/SingleProduct";

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
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
