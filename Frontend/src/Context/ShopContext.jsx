import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product";
import axios from "axios";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const url = "http://localhost:3000/api";

  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reload, setReload] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userRole, setUserRole] = useState("user");
  const [adminOrders, setAdminOrders] = useState([]);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchProdcts = async () => {
      const api = await axios.get(`${url}/products/all`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      setProducts(api.data.products);
    };
    fetchProdcts();
    userCart();
  }, [token, reload]);

  useEffect(() => {
    const lstoken = localStorage.getItem("token");

    if (lstoken) {
      setToken(lstoken);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fecthOrders = async () => {
      const api = await axios.get(`${url}/orders/user/orders`, {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      });


      setOrders(api.data.data);
    };
    fecthOrders();
  }, [token, reload]);

  useEffect(() => {
    const fecthAdminOrders = async () => {
      const api = await axios.get(`${url}/orders/all`, {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      });

      setAdminOrders(api.data.data);
    };
    fecthAdminOrders();
  }, [token, reload]);



  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/users/signup`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );

    return api.data;
  };

  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/users/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );

    if (api.data.success) {
      setToken(api.data.token);
      setIsAuthenticated(true);
      localStorage.setItem("token", api.data.token);
    }

    return api.data;
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("token");

    if (token === "") {
      toast.error("Already Logout", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success("Logout Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const userCart = async () => {
    const api = await axios.get(`${url}/cart/user`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });

    setCart(api.data.cart);
    setReload(!reload);
  };

  const addToCart = async (productId, name, qty, new_price, image) => {
    const api = await axios.post(
      `${url}/cart/add`,
      { productId, name, qty, new_price, image },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );

    setReload(!reload);

    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const removeItem = async (productId) => {
    const api = await axios.delete(`${url}/cart/delete/${productId}`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    setReload(!reload);

    toast.error("Item Removed", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const descreasQty = async (productId, qty) => {
    const api = await axios.post(
      `${url}/cart/descres`,
      { productId, qty },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    // setCart(api.data.cart);
    setReload(!reload);

    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const addProduct = async (
    name,
    description,
    category,
    image,
    new_price,
    old_price
  ) => {
    const api = await axios.post(
      `${url}/products/add`,
      { name, description, category, image, new_price, old_price },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );

    setReload(!reload);
    return api.data;
  };

  const deleteProduct = async (productId) => {
    const api = await axios.delete(`${url}/products/delete/${productId}`, {
      headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });
    setReload(!reload);
    return api.data;
  };

  const placeOrder = async (fullname, email, phone, address, totalPrice) => {
    const api = await axios.post(
      `${url}/orders/order`,
      { fullname, email, phone, address, totalPrice },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    return api.data;
  };

  const clearCart = async () => {
    const api = await axios.delete(`${url}/cart/clear`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
    });
    setReload(!reload);
  };

  const fetchAddress = async () => {
    try {
      const api = await axios.get("/api/get-address", {
        headers: {
          "Content-Type": "Application/json",
          Auth: token
        },
        withCredentials: true
      });

      if (api.data.success) {
        setAddress(api.data.data); // Store the address data
      } else {
        console.error(api.data.message);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const contextValue = {
    register,
    login,
    isAuthenticated,
    logout,
    products,
    cart,
    addToCart,
    removeItem,
    descreasQty,
    userRole,
    setUserRole,
    addProduct,
    deleteProduct,
    placeOrder,
    orders,
    clearCart,
    adminOrders,
    address,
    fetchAddress
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
