import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const AdminNav = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("shop");
  const { isAuthenticated, logout } = useContext(ShopContext);

  return (
    <div className="navbar flex justify-between px-20 p-[10px] shadow-3xl">
      <Link
        onClick={() => setMenu("shop")}
        to="/admin"
        className="nav-logo flex items-center gap-[10px]"
      >
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SCATCH</p>
      </Link>

      <div className="nav-login-cart flex items-center gap-[45px]">
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

export default AdminNav;
