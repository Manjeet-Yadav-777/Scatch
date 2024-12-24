import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import AdminNav from "./AdminNav";

const AdminProducts = () => {
  const { products, deleteProduct } = useContext(ShopContext);

  return (
    <div>
      <AdminNav />
      <div className="min-h-[100vh] w-[100vw] px-20 flex gap-20">
        <div className="left flex flex-col py-5 w-[15vw] gap-5">
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/admin">Create Product</Link>
          </div>
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/allproducts">All Products</Link>
          </div>{" "}
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/allorders">All Orders</Link>
          </div>
        </div>{" "}
        <div className="right py-5 flex w-full justify-between flex-wrap gap-10">
          {products?.map((item) => (
            <div
              key={item.productId}
              className="item w-[250px] transition-[0.6s]"
            >
              <img
                className="h-[350px] object-cover"
                src={item.image}
                alt=""
                onClick={() => {
                  scrollTo(0, 0, 0);
                }}
              />
              <p className="my-[6px] mx-0">{item.name}</p>
              <div className="item-prices flex gap-[20px]">
                <div className="item-price-new text-[#374151] text-[18px] font-semibold">
                  ₹{item.new_price}
                </div>

                <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
                  ₹{item.old_price}
                </div>
              </div>

              <div className="mt-5 w-[250px]">
                <button
                  onClick={() => {
                    if (confirm("Are You Sure To Delete Item")) {
                      deleteProduct(item?._id);
                    }
                  }}
                  className="bg-red-500 px-3 py-1 text-white mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
