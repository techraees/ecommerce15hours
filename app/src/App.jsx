import "./App.css";
import { Routes, Route } from "react-router-dom";

import Body from "./components/Body/Body";
import Footer from "./components/Footer/section/Footer.jsx";
import Header from "./components/Header/section/Header.jsx";
import AllProducts from "./components/Body/Products/AllProducts.jsx";
import SingleProduct from "./components/Body/SingleProducts/SingleProduct";

function App() {
  const a = 3423;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
