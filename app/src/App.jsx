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
import UserOptions from "./components/Layout/Header/UserOptions";

import "./App.css";
import UserAuth from "./components/User/UserAuth";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import store from "./store";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";

function App() {
  // Handling Signup ture/false value
  const [showSignup, setShowSignup] = useState(false);
  console.log(showSignup);
  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  useEffect(() => {
    WebFont.load({
      google: { families: ["Poppins", "Ubantu", "Montserrat", "Gill Sans"] },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Header handleToggleSignup={handleToggleSignup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />
        <Route path="/login" element={<UserAuth stateValue={showSignup} />} />
        <Route path="/account" element={<Profile />} />
      </Routes>

      <Footer />
      <ToastContainer />
      <ScrollButton />
    </div>
  );
}

export default App;
