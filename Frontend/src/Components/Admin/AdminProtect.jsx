import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const AdminProtect = ({ children }) => {
  const { isAuthenticated, userRole } = useContext(ShopContext);
  const navigate = useNavigate();

  if (userRole == "user") {
    return navigate("/login");
  }
  return children;
};

export default AdminProtect;
