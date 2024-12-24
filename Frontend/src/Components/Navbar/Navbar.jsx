import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cartLogo from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("shop");
  const { isAuthenticated, logout, cart } = useContext(ShopContext);

  return (
    <div className="navbar flex justify-around p-[10px] border-b-[1px] shadow-3xl">
      <Link
        onClick={() => setMenu("shop")}
        to="/"
        className="nav-logo flex items-center gap-[10px]"
      >
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SCATCH</p>
      </Link>

      <ul className="nav-menu flex items-center list-none gap-[50px] text-[#626262] font-semibold">
        <li
          onClick={() => setMenu("shop")}
          className="flex flex-col items-center gap-[3px] cursor-pointer"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-[80%] h-[3px] border-[3px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("men")}
          className="flex flex-col items-center gap-[3px] cursor-pointer"
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? (
            <hr className="border-none w-[80%] h-[3px] border-[3px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("women")}
          className="flex flex-col items-center gap-[3px] cursor-pointer"
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? (
            <hr className="border-none w-[80%] h-[3px] border-[3px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("kid")}
          className="flex flex-col items-center gap-[3px] cursor-pointer"
        >
          <Link to="/kid">Kids</Link>
          {menu === "kid" ? (
            <hr className="border-none w-[80%] h-[3px] border-[3px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <div className="nav-login-cart flex items-center gap-[45px]">
        <Link to="/cart">
          <img src={cartLogo} alt="" />
        </Link>

        {cart?.items?.length > 0 ? (
          <div className="nav-cart-count w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-500 text-white">
            {cart?.items?.length}
          </div>
        ) : null}

        {isAuthenticated ? (
          <button
            onClick={() => navigate("/login")}
            className="w-[157px] h-[58px] outline-none border-[#7a7a7a] border-[1px] border-solid rounded-[75px] text-[#515151] text-[20px font-medium] bg-white cursor-pointer active:bg-[#f3f3f3]"
          >
            <Link onClick={() => logout()} to="/login">
              Logout
            </Link>
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="w-[157px] h-[58px] outline-none border-[#7a7a7a] border-[1px] border-solid rounded-[75px] text-[#515151] text-[20px font-medium] bg-white cursor-pointer active:bg-[#f3f3f3]"
          >
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
