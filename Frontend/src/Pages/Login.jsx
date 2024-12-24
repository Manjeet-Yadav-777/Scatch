import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Login = () => {
  const { login, userRole, setUserRole } = useContext(ShopContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);


    if (result.success) {
      navigate("/");
      toast.success(result.message, {
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
      setEmail("");
      setPassword("");
    } else {
      toast.error(result.message, {
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
    }

    if (result.data.email === "manjeet@gmail.com") {
      navigate("/admin");
      setUserRole("admin");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login w-[100vw] bg-white py-[40px]">
        <form
          onSubmit={handleSubmit}
          className="login-container border rounded-lg w-[580px] h-fit bg-white m-auto py-[10px] pb-[50px] px-[60px]"
        >
          <h1 className="my-[30px] text-2xl font-semibold">Login</h1>
          <div className="login-fields flex flex-col gap-[35px] mt-[20px]">
            <input
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="h-[60px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="h-[60px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="w-[100%] h-[72px] text-white bg-[#3a3939] mt-[30px] border-none text-[24px] font-medium cursor-pointer">
            Continue
          </button>
          <p className="mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-900 underline font-semibold">
              signup here
            </Link>
          </p>


        </form>
      </div>
    </>
  );
};

export default Login;
