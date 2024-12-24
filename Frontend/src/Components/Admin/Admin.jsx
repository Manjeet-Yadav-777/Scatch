import React, { useContext, useState } from "react";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const { addProduct } = useContext(ShopContext);
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [new_price, setNewPrice] = useState("");
  const [old_price, setOldPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addProduct(
      name,
      description,
      category,
      url,
      parseFloat(new_price), // Convert new_price to a number
      parseFloat(old_price) // Convert old_price to a number
    );
    // Handle success or error
    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setUrl("");
      setCategory("");
      setDescription("");
      setNewPrice("");
      setOldPrice("");
      setName("");
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
      <AdminNav />
      <div className="min-h-[100vh] w-[100vw] px-20 flex gap-10">
        <div className="left flex flex-col py-5 w-[15vw] gap-5">
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link>Create Product</Link>
          </div>
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/allproducts">All Products</Link>
          </div>{" "}
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/allorders">All Orders</Link>
          </div>
        </div>
        <hr />
        <div className="right py-5">
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-full border h-[80vh] p-5 flex flex-col gap-5"
          >
            <div className="url flex flex-col gap-2">
              <label htmlFor="" className="font-semibold ml-2 text-xl">
                Product Url :
              </label>
              <input
                type="text"
                name="image"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Product Url"
                className="border w-full px-5 py-2 outline-none rounded-md"
              />
            </div>

            <div className="flex gap-10">
              <div className="name flex flex-col gap-2">
                <label htmlFor="" className="font-semibold ml-2 text-xl">
                  Product Name :
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Product Name"
                  className="border w-[30vw] px-5 py-2 outline-none rounded-md"
                />
              </div>

              <div className="category flex flex-col gap-2">
                <label htmlFor="" className="font-semibold ml-2 text-xl">
                  Product Category :
                </label>
                <input
                  name="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter Product Category"
                  className="border w-[30vw] px-5 py-2 outline-none rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="Price flex flex-col gap-2">
                <label htmlFor="" className="font-semibold ml-2 text-xl">
                  Product Price :
                </label>
                <input
                  name="new_price"
                  type="Number"
                  value={new_price}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="Enter Product Price"
                  className="border w-[30vw] px-5 py-2 outline-none rounded-md"
                />
              </div>

              <div className="old price flex flex-col gap-2">
                <label htmlFor="" className="font-semibold ml-2 text-xl">
                  Product Old Price :
                </label>
                <input
                  name="old_price"
                  value={old_price}
                  onChange={(e) => setOldPrice(e.target.value)}
                  type="Number"
                  placeholder="Enter Product Old Price"
                  className="border w-[30vw] px-5 py-2 outline-none rounded-md"
                />
              </div>
            </div>

            <div className="url flex flex-col gap-2">
              <label htmlFor="" className="font-semibold ml-2 text-xl">
                Product Description :
              </label>
              <textarea
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Product Description"
                className="border w-full px-5 py-2 outline-none rounded-md resize-none"
              />
            </div>

            <button className="bg-[#222] font-bold px-10 py-3 rounded-md text-white w-fit">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
