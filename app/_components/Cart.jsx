"use client";
import { useState, useEffect, useRef } from 'react';
import { RiShoppingCartLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import CartNotFound from "../../public/cart-not-found.jpg";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import getCart from "../_lib/cart/getCart";
import updateCartAPI from "../_lib/cart/updateCart";
import { LuTrash } from "react-icons/lu";
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useCartStore} from "../store/cartStore"
import useModalCartStore from "../store/modalCartStore"
export default function Cart() {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Cart");
  const [carts, setCarts] = useState([]);
  const modalRef = useRef(null);
  const {push} = useRouter();

  const { cartItems, fetchCartItems, cartUpdateTrigger,triggerCartUpdate } = useCartStore();
  const { triggerModalCartUpdate } = useModalCartStore();

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Refetch cart items whenever the trigger updates
  useEffect(() => {
    fetchCartItems();
  }, [cartUpdateTrigger])

  const fetchCartData = async () => {
    try {
      const result = await getCart();
      setCarts(result.data.products || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setCarts([]);
    }
  };

  const calculateTotal = () => {
    return carts.reduce((total, cart) => {
      const price = cart.additional_stock_data.is_discount 
        ? cart.additional_stock_data.discount_price 
        : cart.additional_stock_data.regular_price;
      return total + (price * cart.pivot.quantity);
    }, 0);
  };

  useEffect(() => {
    if (isOpen) {
      fetchCartData();
    }
  }, [isOpen]);

  const handleUpdateCart = async (operation, productId, stockId) => {
    try {
      const result = await updateCartAPI(operation, productId, stockId);
      triggerModalCartUpdate();
      fetchCartData();
      triggerCartUpdate();
      if(result.data.opcode == 1){
        toast.success('Product Removed');
      }
      if(result.data.opcode == 2){
        toast.success('Product Updated');
      }
      if(result.data.opcode == 3){
        toast.success('Product Updated');
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleCheckout = () => {
    setIsOpen(false); 
    push('/checkout');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:relative">
      {/* Cart Icon */}
      <RiShoppingCartLine onClick={() => setIsOpen(!isOpen)} className='text-[24px] cursor-pointer' />
      <div className='absolute -top-3 -right-3 bg-red-500 rounded-full h-[22px] w-[22px] text-white  flex items-center justify-center text-sm'>{cartItems}</div>

      {/* Cart Modal */}
      <div
        ref={modalRef} // Attach the ref here
        className={`fixed md:absolute -top-2 left-0 md:left-auto md:top-auto md:right-0 mt-2 w-full md:w-[400px] h-screen md:h-[400px] z-[1000] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? 'max-h-screen md:max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        {/* Header */}
        <div className="heading flex justify-between p-4">
          <p className='flex-1 text-center text-[17px] font-semibold text-black'>{t("title")} ({carts.length})</p>
          <RxCross2 className='text-2xl cursor-pointer font-semibold text-black' onClick={() => setIsOpen(false)} />
        </div>
        
        <hr className='border border-gray-200 p-0 text-black' />

        {/* Cart Body - scrollable area */}
        <div className="px-4 h-[calc(100vh-180px)] md:h-[calc(400px-150px)] overflow-y-auto text-black">
          {
            carts.length > 0 ? (
              <div className='mt-3'>
                {carts.map((cart, index) => (
                  <div key={index} className='flex justify-between items-start mb-4'>
                    <div className="flex gap-x-3">
                      <div className='border p-2 rounded-lg'>
                        <Image src={`${BASEURL}/${cart.thumbnail}`} width={50} height={50} alt={cart.name} />
                      </div>
                      <div>
                        <div className='flex gap-x-3'>
                        <p className='text-[14px] text-gray-700'>{cart.name}</p>
                        <p className='text-[12px] text-gray-700'>{cart.additional_stock_data.weight}</p>
                        </div>
                        <p className='pt-1 text-black'>৳{cart.additional_stock_data.is_discount ? cart.additional_stock_data.discount_price : cart.additional_stock_data.regular_price}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                      <div className='flex items-center px-4 py-0.5 select-none'>
                        <div className='text-lg bg-gray-100 cursor-pointer h-7 w-7 flex justify-center rounded-l-xl' onClick={() => handleUpdateCart("decrement", cart.id, cart.additional_stock_data.id)}>-</div>
                        <div className='text-sm bg-gray-100 h-7 flex justify-center items-center'>{cart.pivot.quantity}</div>
                        <div className='text-lg bg-gray-100 cursor-pointer h-7 w-7 flex justify-center rounded-r-xl' onClick={() => handleUpdateCart("increment", cart.id, cart.additional_stock_data.id)}>+</div>
                      </div>
                      <div>
                        <LuTrash className='cursor-pointer text-red-500' onClick={() => handleUpdateCart("delete", cart.id, cart.additional_stock_data.id)} />
                      </div>
                    </div>
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

        {/* Footer - fixed at the bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-white p-4">
          <div className='flex justify-between items-center pb-3'>
            <p className='text-[15px]'>{t("total")} :</p>
            <p>৳ {calculateTotal()}</p>
          </div>
          <div>
          <button onClick={handleCheckout} className='w-full bg-black text-white h-[40px] rounded-md'>{t("button")}</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
