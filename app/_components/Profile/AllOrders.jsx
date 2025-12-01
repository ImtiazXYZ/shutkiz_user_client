"use client"
import React from 'react'
import Link from "next/link";
import getUserOrders from "../../_lib/profile/getUserOrders";
import getFormattedDate from "../../_lib/helpers/getFormattedDate"
async function AllOrders() {
    const result = await getUserOrders();
    const orders = result.data.orders;
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Order ID</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Total</th>
                  <th className="py-2 px-4 text-right text-sm font-medium text-gray-700 demo">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-3 px-4 text-sm text-gray-900">{order.uuid}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{getFormattedDate(order.created_at)}</td>
                    <td className={`py-3 px-4 text-sm font-medium ${
                        order.status === "Delivered" ? "text-green-600" :
                        order.status === "Shipped" ? "text-blue-600" : 
                        "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{order.grandtotal} Taka</td>
                    <td className="py-3 px-4 text-right">
                      <Link href={`/profile/orders/${order.uuid}`}>
                        <p className="text-sm text-black font-semibold">View Details</p>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllOrders
