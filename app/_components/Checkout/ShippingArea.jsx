import React from 'react'
import { FaCheck } from "react-icons/fa";
function ShippingArea({selectedArea,handleSelection}) {
  return (
    <main>
      <p className="font-semibold pb-4 text-[14px]">Shipping Charge</p>
          <div className="flex flex-col gap-y-4">
            {/* All Bangladesh */}
            <div
              className={`flex items-center justify-between border w-full py-3 px-5 rounded-lg cursor-pointer ${
                selectedArea === "all_bangladesh" ? "border-black text-black" : "text-gray-500"
              }`}
              onClick={() => handleSelection("all_bangladesh")}
            >
              <div className="flex items-center">
                {/* Round Checkbox */}
                <div
                  className={`h-5 w-5 flex items-center justify-center rounded-full border-2 mr-3 ${
                    selectedArea === "all_bangladesh" ? "bg-black border-black" : "bg-white border-black"
                  }`}
                >
                  {selectedArea === "all_bangladesh" && <FaCheck className="text-white text-xs" />}
                </div>
                <p className={`text-[14px] ${selectedArea=="all_bangladesh"?'font-semibold':'font-medium'}`}>All Bangladesh</p>
              </div>
              <p className="text-[14px] font-semibold">৳ 100</p>
            </div>

            {/* Dhaka & Chittagong */}
            <div
              className={`flex items-center justify-between border w-full py-3 px-5 rounded-lg cursor-pointer ${
                selectedArea === "dhaka_chittagong" ? "border-black text-black" : "text-gray-500"
              }`}
              onClick={() => handleSelection("dhaka_chittagong")}
            >
              <div className="flex items-center">
                {/* Round Checkbox */}
                <div
                  className={`h-5 w-5 flex items-center justify-center rounded-full border-2 mr-3 ${
                    selectedArea === "dhaka_chittagong" ? "bg-black border-black" : "bg-white border-black"
                  }`}
                >
                  {selectedArea === "dhaka_chittagong" && <FaCheck className="text-white text-xs" />}
                </div>
                <p className={`text-[14px] ${selectedArea=="dhaka_chittagong"?'font-semibold':'font-medium'}`}>Dhaka & Chittagong</p>
              </div>
              <p className="text-[14px] font-semibold">৳ 60</p>
            </div>
          </div>
    </main>
  )
}

export default ShippingArea
