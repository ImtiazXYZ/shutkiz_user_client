import { useState } from "react";

const PaymentMethod = ({setPaymentType}) => {
  const [selectedMethod, setSelectedMethod] = useState("cod");

  const handleSelection = (method) => {
    setSelectedMethod(method);
    setPaymentType(method);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Select Payment Method</h2>
      <div className="space-y-4">
        {/* Cash on Delivery */}
        <label
          className={`flex items-center p-4 rounded-md border cursor-pointer ${
            selectedMethod === "cod"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedMethod === "cod"}
            onChange={() => handleSelection("cod")}
            className="hidden"
          />
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-blue-500">
              {selectedMethod === "cod" && (
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              )}
            </div>
            <span className="text-gray-800 font-medium">Cash on Delivery</span>
          </div>
        </label>

        {/* bKash */}
        <label
          className={`flex items-center p-4 rounded-md border cursor-pointer ${
            selectedMethod === "bkash"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="bkash"
            checked={selectedMethod === "bkash"}
            onChange={() => handleSelection("bkash")}
            className="hidden"
          />
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-blue-500">
              {selectedMethod === "bkash" && (
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              )}
            </div>
            <span className="text-gray-800 font-medium">bKash</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
