"use client";
import { useState, useEffect } from 'react';
import { RiShoppingCartLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import CartNotFound from "../../public/cart-not-found.jpg";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import getCart from "../_lib/cart/getCart";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Cart");
  const [carts, setCarts] = useState([]);
  
  // Function to toggle and fetch cart data
  const viewCart = async () => {
    setIsOpen(!isOpen);
    try {
      const result = await getCart();
      console.log("Full Cart Data:", result); // Log the complete response
      console.log("Products in Cart:", result.data.products); // Log the products array
      setCarts(result.data.products || []); // Set the products or an empty array
    } catch (error) {
      console.error("Error fetching cart:", error);
      setCarts([]); // Clear carts in case of error
    }
  };

  // Debugging: Log carts state to ensure it has data
  useEffect(() => {
    console.log("Carts state updated: ", carts);
  }, [carts]);

  return (
    <div className="md:relative">
      {/* Cart Icon */}
      <RiShoppingCartLine onClick={() => viewCart()} className='text-[24px] cursor-pointer' />

      {/* Debugging: Border and background color to ensure the cart is visible */}
      <div
        className={`fixed md:absolute -top-2 left-0 md:left-auto md:top-auto md:right-0 mt-2 w-full md:w-[400px] h-screen md:h-[400px] z-[1000] bg-white rounded-xl border-2 border-red-500 shadow-lg overflow-y-auto transition-all duration-500 ease-in-out transform ${
          isOpen ? 'max-h-screen md:max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        {/* Header */}
        <div className="heading flex justify-between p-4">
          <p className='flex-1 text-center text-[17px] font-semibold text-black'>{t("title")} ({carts.length})</p>
          <RxCross2 className='text-2xl cursor-pointer font-semibold text-black' onClick={() => setIsOpen(false)} />
        </div>
        
        <hr className='border border-gray-200 p-0'/>
        
        {/* Cart Body */}
        <div className="body px-4 overflow-y-auto h-[calc(100vh-180px)] md:h-auto text-black">
            <h2>hi</h2>
          {
            carts.length > 0 ? (
              <div>
                {carts.map((cart, index) => (
                  <div key={index} className="mb-3">
                    <h2 className="text-lg font-semibold">{cart.name}</h2>
                    {/* Add more cart details here */}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <Image src={CartNotFound} alt='Cart Not Found' className='w-[300px] md:w-[250px] mx-auto' />
              </div>
            )
          }
        </div>
        
        {/* Footer */}
        <div className="footer absolute bottom-5 w-full text-black">
          <hr className='border border-gray-200 p-0' />
          <div className='pt-4 px-4'>
            <div className='flex justify-between items-center pb-3'>
              <p className='text-[15px]'>{t("total")} :</p>
              <p>৳</p>
            </div>
            <button className='w-full bg-black text-white h-[40px] rounded-md'>{t("button")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
