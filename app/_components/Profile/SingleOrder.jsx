"use client";
import { useEffect, useState } from "react";
import getSingleOrder from "../../_lib/profile/getSingleOrder";
import { Skeleton } from "antd";

function SingleOrder({ slug }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSingleOrder(slug);
    setOrder(result.data);
  };


  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {
        !order?<div className="p-5"><Skeleton paragraph={{rows:5}}/></div>:
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Order Info Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Information */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Order Information</h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Order ID:</span> {order.uuid}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Date:</span> October 5, 2024
              </p>
              <p className="text-sm font-medium text-green-600">Status: {order.status}</p>
            </div>

            {/* Shipping Information */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Shipping Information</h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Name:</span> {order.users?.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Email:</span> {order.users?.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Contact:</span> {order.users?.mobile}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Address:</span> {order.address?.address}, {order.address?.city.name}, {order.address?.division.name}
              </p>
            </div>
          </div>
        </div>

        {/* Order Items Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Quantity</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {order.products?.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 text-sm text-gray-900">{item.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{item.pivot.quantity}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{item.pivot.price}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{item.pivot.price * item.pivot.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <p>Subtotal</p>
              <p>{order.subtotal} TK</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Shipping</p>
              <p>{order.shipping_cost} TK</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Discount</p>
              <p>{order.is_coupon?order.coupon_amount:0} TK</p>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <p>Total</p>
              <p>{order.grandtotal} TK</p>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default SingleOrder;
