import React, { useContext, useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";

const AllOrders = () => {
  const { adminOrders } = useContext(ShopContext);
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling
  const { token } = useContext(ShopContext); // Assuming token is stored in AuthContext
  const [reload, setReload] = useState(false); // For triggering re-fetch after status update

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors

      const response = await axios.put(
        `${url}/orders/update-status/${orderId}`, // Correct URL with the order ID in the URL params
        { status: newStatus }, // Send status in the request body
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token, // Ensure token is passed
          },
          withCredentials: true,
        }
      );

      alert(response.data.message); // Display success message
      setReload((prev) => !prev); // Re-fetch orders
    } catch (error) {
      console.error("Failed to update order status:", error.response?.data?.message || error.message);
      setError("Failed to update order status. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-[100vh] w-[100vw] px-20 flex gap-20">
        {/* Left Navigation */}
        <div className="left flex flex-col py-5 w-[15vw] gap-5">
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/admin">Create Product</Link>
          </div>
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link to="/allproducts">All Products</Link>
          </div>
          <div className="button border-black font-semibold border-[2px] w-[180px] text-center py-1">
            <Link>Orders</Link>
          </div>
        </div>

        {/* Right Orders Section */}
        <div className="right py-5 flex w-full justify-between flex-wrap gap-10">
          {error && (
            <div className="w-full text-center text-red-500 font-semibold mb-4">{error}</div>
          )}
          {adminOrders?.map((order, i) => (
            <div key={i} className="border w-full px-5 py-4 shadow-md rounded">
              {/* Header Row */}
              <div className="flex justify-between items-center text-lg font-semibold border-b pb-2">
                <div className="w-[20%]">Name</div>
                <div className="w-[20%]">Phone</div>
                <div className="w-[20%]">Total Bill</div>
                <div className="w-[20%]">Status</div>
              </div>

              {/* Data Row */}
              <div className="flex justify-between items-center text-gray-700 mt-2">
                <div className="w-[20%]">{order.fullname}</div>
                <div className="w-[20%]">{order.phone}</div>
                <div className="w-[20%]">₹{order.totalPrice}</div>
                <div className="w-[20%]">
                  <select
                    value={order?.status} // Bind the select value to the order's current status
                    onChange={(e) => handleStatusChange(order._id, e.target.value)} // Update status
                    className="outline-none border px-2 py-1"
                    disabled={loading} // Disable select while loading
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex justify-center flex-col mt-4">
                <div className="flex justify-center text-lg font-semibold border-b pb-2">
                  Address For Delivery
                </div>
                <div className="flex justify-center text-gray-700 mt-2">
                  {order.address}
                </div>
              </div>

              {/* Cart Items */}
              <div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Order Items:</h3>
                <ul className="flex flex-col gap-4">
                  {order.cartorders?.map((item, idx) => (
                    <li key={idx} className="flex gap-5 items-center border-b pb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                        <p className="text-sm text-gray-500">Price: ₹{item.new_price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllOrders;
