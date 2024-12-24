import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Complete = () => {
  const { orders } = useContext(ShopContext);
  const cartOrders = orders?.cartorders || [];



  return (
    <>
      <Navbar />
      <div className="p-5 flex justify-center">
        <Link
          to="/cart"
          className="px-5 py-2 bg-[#444] text-white font-semibold rounded-md hover:bg-[#333] transition"
        >
          Go To Cart
        </Link>
      </div>

      <div className="h-full px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Thank you for your order, {orders?.fullname || "Customer"}!
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            We appreciate your purchase. Here's a summary of your order:
          </p>

          {/* Delivery Details Section */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                <strong>Name:</strong> {orders?.fullname || "Not Provided"}
              </p>
              <p className="text-xl">
                <strong>Email:</strong> {orders?.email || "Not Provided"}
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> {orders?.phone || "Not Provided"}
              </p>
              <p className="text-xl">
                <strong>Address:</strong> {orders?.address || "Not Provided"}
              </p>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <p className="text-xl">
              <strong>Total Bill to Pay:</strong>{" "}
              {orders?.totalPrice ? `${orders.totalPrice} ₹` : "N/A"}
            </p>

            <br />

            {cartOrders.length > 0 ? (
              <div className="space-y-6">
                {cartOrders.map((order, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-semibold text-xl mb-3">Order #{index + 1}</h3>
                    <h3>{order?.name}</h3>
                    <ul className="divide-y divide-gray-200">
                      <li className="flex items-center gap-4 py-4">
                        <img
                          src={order.image}
                          alt={order.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{order.name}</h3>
                          <p className="text-sm text-gray-500">
                            Quantity: {order.qty}
                          </p>
                          <p className="text-sm text-gray-500">
                            Price: ₹{order.new_price}
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No items found in the cart.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Complete;
