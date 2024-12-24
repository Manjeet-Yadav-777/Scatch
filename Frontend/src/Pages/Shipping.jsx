import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { ShopContext } from "../Context/ShopContext";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Shipping = () => {
  const { cart, placeOrder, clearCart } = useContext(ShopContext);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const [dele, setDele] = useState(1);
  const [code, setCode] = useState("");

  useEffect(() => {
    let qty = 0;
    let price = 0;
    let gst = 0;
    let total = 0;
    let dele = 40;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price = Math.round(price + cart.items[i].new_price);
        gst = Math.round(price * 0.18);
        if (price > 1000) {
          dele = 0;
        }
        total = price + gst + dele;
      }
      setPrice(price);
      setQty(qty);
      setGst(gst);
      setDele(dele);
      setTotal(total);
    }
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalPese = total;

    const result = await placeOrder(name, email, phone, address, totalPese);


    if (result.success) {
      navigate("/placed");
      clearCart();
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
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
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
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] px-20 py-20 flex gap-40">
        <div className="left">
          <form onSubmit={handleSubmit} className="flex w-full gap-40">
            <div className="mt-5 flex flex-col gap-5">
              <h1 className="text-xl font-medium">Delivery Information</h1>
              <div className="name flex gap-5">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full name"
                  className="border w-[560px] pl-2 py-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email address"
                  className="w-[560px] border pl-2 py-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="phone">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone"
                  className="w-[560px] border pl-2 py-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="address">
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Full address"
                  className="w-[560px] border pl-2 py-2 rounded-md outline-none resize-none"
                  required
                />
              </div>
            </div>
            <div className="right">
              <h1 className="text-xl font-medium">Cart Totals</h1>
              <div className="w-[30vw] px-2">
                <div className="flex flex-col justify-between gap-5 pl-2 pr-10 w-full mt-8">
                  <p className="text-lg font-light flex justify-between">
                    Items Bill (round figured): <b>₹{price}</b>
                  </p>
                  <p className="text-lg font-light flex justify-between">
                    GST (+18%): <b>₹{gst}</b>
                  </p>
                  <p className="text-lg font-light flex justify-between">
                    Delivery Price: <b>₹{dele}</b>
                  </p>
                </div>
                <hr className="mt-8" />
                <p className="text-lg font-medium flex justify-between mt-3">
                  <span>Total Bill to Pay:</span>
                  <b>₹{total}</b>
                </p>
                <div className="flex mt-10">
                  <button
                    type="submit"
                    className="py-2 bg-green-600 text-white w-full font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Placing Order..." : "PLACE THE ORDER"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Shipping;
