import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const { cart, addToCart, removeItem, descreasQty } = useContext(ShopContext);

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

  return (
    <>
      <Navbar />
      <div className="p-5 flex justify-center">
        <Link
          to="/placed"
          className="px-5 py-2 bg-[#444] text-white font-semibold rounded-md hover:bg-[#333] transition"
        >
          Placed Orders
        </Link>
      </div>
      {cart?.items?.length > 0 && (
        <div className="min-h-[100vh] w-[100vw] pt-[2vh] pb-5 px-10 flex gap-10">
          <div className="border w-[70vw] h-fit px-2">
            {cart?.items?.map((item) => {
              return (
                <div
                  key={item._id}
                  className="my-5 border h-28 flex items-center pl-3 pr-10 justify-between"
                >
                  <img
                    className="h-24 w-24 object-cover"
                    src={item?.image}
                    alt=""
                  />

                  <div className="text-wrap w-[200px]">
                    <h3 className="font-bold">{item?.name}</h3>
                  </div>

                  <div className="flex items-center w-[120px] justify-between">
                    <button
                      className="border px-2 font-bold text-xl"
                      onClick={() =>
                        addToCart(
                          item?.productId,
                          item?.name,
                          1,
                          item?.new_price / item?.qty,
                          item?.image
                        )
                      }
                    >
                      +
                    </button>
                    <p className="text-xl font-semibold">{item?.qty}</p>
                    <button
                      className="border px-2 font-bold text-xl"
                      onClick={() => descreasQty(item?.productId, 1)}
                    >
                      -
                    </button>
                  </div>

                  <div className="w-[100px]">
                    <h3 className="font-bold text-xl">₹{item?.new_price}</h3>
                  </div>

                  <div className="w-[80px]">
                    <Link
                      onClick={() => {
                        if (confirm("Are You Sure To Remove Item")) {
                          removeItem(item?.productId);
                        }
                      }}
                      className="bg-red-500 px-4 py-2 text-white font-bold"
                    >
                      Remove
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[30vw] border px-2 py-3 h-fit">
            <p className="font-bold text-[#3d3c3c] text-center text-xl">
              Cart Summery
            </p>

            <div className="flex flex-col justify-between gap-5 pl-2 pr-10 w-full mt-8">
              <p className="text-lg font-semibold text-[#3d3c3c] w-full flex justify-between">
                <p>Total Items (with qty) :</p> <b>{qty}</b>
              </p>

              <p className="text-lg font-semibold text-[#3d3c3c] flex justify-between">
                Items Bill (round figured) : &nbsp; <b> ₹{price}</b>
              </p>

              <p className="text-lg font-semibold text-[#3d3c3c] flex justify-between">
                GST (+18%) : &nbsp; <b> ₹{gst}</b>
              </p>

              <p className="text-lg font-semibold text-[#3d3c3c] flex justify-between">
                Delivery Price : &nbsp; <b> ₹{dele}</b>
              </p>
            </div>
            <hr className="mt-8" />

            <p className="text-lg font-semibold text-[#3d3c3c] pl-2 pr-10 flex justify-between mt-3">
              <p>Total Bill to Pay : </p>
              <b>₹{total}</b>
            </p>

            <form className="mt-10 flex gap-2 px-2 justify-between">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                className="outline-none border h-8 px-2 w-[70%] flex justify-center items-center"
                placeholder="Enter Promo Code Here"
              />
              <Link className="bg-[#3d3c3c] text-white w-[30%] flex justify-center items-center font-bold">
                APPLY
              </Link>
            </form>

            <div className="flex mt-10">
              <Link
                to="/address"
                className="py-2 bg-green-600 text-white w-[100%] text-center font-bold"
              >
                CONTINUE TO PAY
              </Link>
            </div>
          </div>
        </div>
      )}

      {cart?.items?.length == 0 && (
        <div className=" h-[90vh] flex my-28 flex-col items-center">
          <h1 className="text-5xl font-bold text-[#3d3c3c]">Cart Is Empty !</h1>

          <Link
            to="/"
            className="mt-10 bg-red-500 text-white px-20 font-bold py-3"
          >
            Shop Now
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
