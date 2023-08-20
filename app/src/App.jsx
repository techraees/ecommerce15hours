import { Routes, Route, useLocation } from "react-router-dom";
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
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";
import UserAuth from "./components/User/UserAuth";
import HandleLogin from "./components/User/sub/HandleLogin";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import store from "./store";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";
import ForgetWithTwilio from "./components/User/ForgetWithTwilio";

function App() {
  const location = useLocation();
  const isDashboardPath = location.pathname.startsWith("/dashboard");

  // Handling Signup ture/false value
  const [showSignup, setShowSignup] = useState(false);
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
      {!isDashboardPath && <Header handleToggleSignup={handleToggleSignup} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<UserAuth stateValue={showSignup} />} />
        <Route path="/forgetwithsms" element={<ForgetWithTwilio />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} exact />
        </Route>
      </Routes>

      {!isDashboardPath && <Footer />}
      <ToastContainer />
      {!isDashboardPath && <ScrollButton />}
    </div>
  );
}

export default App;
