"use client"
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import getCategoryProducts from "../../_lib/home/getCategoryProducts"
import AllProductSlider from '../Home/AllProductSlider';
import orderConfrimImage from '../../../public/order-confirm.gif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
function OrderConfirm() {

  const router = useRouter();
  

  const [products,setProducts] = useState(null);

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("pixelOrderData"));
    const slug = JSON.parse(localStorage.getItem('categorySlug'));
    if (orderData) {
      ReactPixel.track("Purchase", orderData);
      localStorage.removeItem("pixelOrderData");
      localStorage.removeItem("categorySlug");
    }
    if(slug){
      getSuggestProduct(slug);
    }
  }, []);

  async function getSuggestProduct(slug){
    const response = await getCategoryProducts(slug);
    setProducts(response);
  }
  return (
    <>
      <div className=" bg-white lg:py-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-full max-w-xl text-center">
        {/* <AiOutlineCheckCircle className="text-green-500 text-7xl mx-auto" /> */}
        <Image src={orderConfrimImage} alt='Order Confirmation' className='w-[400px] mx-auto'/>
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-4">
          Thank you! Your order has been placed.
          
        </h1>
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-y-3 lg:gap-y-0 lg:gap-x-4">
          <Link href="/">
          <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg">
            Continue Shopping...
          </button>
          </Link>
          <Link href='/profile'>
          <button className="px-4 py-2 border border-black text-black font-semibold rounded-lg">
            View My Orders
          </button>
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm text-gray-600">
            If you have any further query, contact us
          </p>
          <a 
            href="https://wa.me/8801788070149" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
      <div className='py-10'>
        {
          products&&
          <AllProductSlider title="You may also like" products={products} url='/' />
        }
      </div>
    </>
  );
}

export default OrderConfirm;
