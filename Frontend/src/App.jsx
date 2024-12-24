import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import Login from "./Pages/Login";
import Cart from "./Components/Cart/Cart";
import AdminNav from "./Components/Admin/AdminNav";
import Admin from "./Components/Admin/Admin";
import AdminProtect from "./Components/Admin/AdminProtect";
import AdminProducts from "./Components/Admin/AdminProducts";
import Shipping from "./Pages/Shipping";
import Complete from "./Pages/Complete";
import AllOrders from "./Components/Admin/AllOrders";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />

        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />

        <Route
          path="/kid"
          element={<ShopCategory banner={kids_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Shipping />} />
        <Route path="/placed" element={<Complete />} />

        <Route
          path="/admin"
          element={
            <AdminProtect>
              <Admin />
            </AdminProtect>
          }
        />

        <Route
          path="/allproducts"
          element={
            <AdminProtect>
              <AdminProducts />
            </AdminProtect>
          }
        />

        <Route path="/allorders" element={<AllOrders />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
