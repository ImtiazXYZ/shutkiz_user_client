import React from 'react'
import { LuTrash } from "react-icons/lu";
import Image from 'next/image';
import { Skeleton } from 'antd';
function CartProducts({carts,handleUpdateCart,isLoading}) {
const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div>
      {
         isLoading?(<Skeleton paragraph={{ rows: 3 }}/>):(
            carts.length > 0 ? (
                <div className='mt-3'>
                  {carts.map((cart, index) => (
                    <div key={index} className='flex justify-between items-start mb-4  p-3 shadow'>
                      <div className="flex gap-x-3">
                        <div className=' p-2 rounded-lg'>
                          <Image src={`${BASEURL}/${cart.thumbnail}`} width={50} height={50} alt={cart.name} />
                        </div>
                        <div>
                          <p className='text-[14px] text-gray-700'>{cart.name}</p>
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
                  
                </div>
              )
         )   
        }
    </div>
  )
}

export default CartProducts
