import React from 'react'
import { IoPricetagsOutline } from "react-icons/io5";
import { LiaStoreSolid } from "react-icons/lia";
import { FiBox } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import ProductVariationTab from "../../_components/Product/ProductVariationTab"

function ProductCart({name,subcategory,stocks,productId}) {

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-GB', options).replace(/(\d+)(th|st|nd|rd)/, '$1');
    };

    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 4);

    const startDate = formatDate(currentDate);
    const formattedEndDate = formatDate(endDate);

  return (
    <main>
      <div>
        <div className="name pt-7 md:pt-0">
            <h2 className='text-[13px] font-semibold underline pb-2'>{subcategory}</h2>
            <h2 className='font-semibold text-[22px] py-1'>{name}</h2>
        </div>
        {/* <div className="product-count bg-[#F9F9F9] p-3 flex justify-evenly text-xs my-3 rounded-lg">
            <div className="item flex items-center gap-x-2">
                <IoPricetagsOutline className='text-base'/>
                <p>423 Sold</p>
            </div>
            <div className="item flex items-center gap-x-2">
                <LiaStoreSolid className='text-base'/>
                <p>In Stock</p>
            </div>
            <div className="item flex items-center gap-x-2">
                <FiBox className='text-base'/>
                <p>24 Patches</p>
            </div>
        </div> */}
        <div className="add-to-cart py-5">
            <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-6 rounded-xl'>
                <ProductVariationTab stocks={stocks} productId={productId}/>
            </div>
        </div>
        <div className="add-to-cart py-5">
            <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-5 py-6 rounded-xl space-y-4'>
                <div className='flex items-center gap-x-3'>
                    <IoTimeOutline className='text-2xl'/>
                    <h2 className='text-[15px]'>Delivery from {startDate} - {formattedEndDate}</h2>
                </div>
                <div className='flex items-center gap-x-3'>
                    <RiShoppingCartLine className='text-2xl'/>
                    <h2 className='text-[15px]'>363 people have this in their cart</h2>
                </div>
                <div className='flex items-center gap-x-3'>
                    <IoMdHeartEmpty className='text-2xl'/>
                    <h2 className='text-[15px]'>355 people have favourite this item</h2>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default ProductCart
