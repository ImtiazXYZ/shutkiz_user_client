"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import addToCart from "../../_lib/cart/addToCart"
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';
import {useCartStore} from "../../store/cartStore";
import { useRouter } from "next/navigation";
import ReactPixel from "react-facebook-pixel";
export default function ProductVariationTab({ stocks,productId }) {
  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const { triggerCartUpdate } = useCartStore();
  const {push} = useRouter();

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleTabChange = (index) => {
    setSelected(index);
    setSelectedStock(stocks[index]);
  };

  const handleAddToBag = async () => {
    let isTempId = false;
    const temp_user_id = Cookies.get("temp_user_id");
    if(temp_user_id){
      isTempId = true;
    }else{
      isTempId = false;
    }
    const result = await addToCart(productId, selectedStock.id, quantity, isTempId);
    if(result.success){
      triggerCartUpdate();
      toast.success('Product add to cart');
      const product = result.data.product;
      const stock = product.stocks[0];
      ReactPixel.track("AddToCart", {
        content_ids: product.id,
        content_name: product.name,
        content_type : 'product',
        content_category : product.category.name,
        subcategory_name : product.subcategory?.name,
        value: stock.is_discount?stock.discount_price:stock.regular_price,
        currency: "BDT",
        num_items : quantity,
        custom_data: {
          seller: "Shutkiz",
          stock_status: stock.stock>0 ? "In Stock" : "Out of Stock",
        },
      });
      console.log(result);
    }else{
      console.log(result.message);
    }
  };

  const handleBuyNow=async()=>{
    let isTempId = false;
    const temp_user_id = Cookies.get("temp_user_id");
    if(temp_user_id){
      isTempId = true;
    }else{
      isTempId = false;
    }
    const resule = await addToCart(productId, selectedStock.id, quantity, isTempId);
    if(resule.success){
      triggerCartUpdate();
      push('/checkout');
    }else{
      console.log(resule.message);
    }
  }






  return (
    <div className="flex w-full flex-col">
      
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange}
      >
        {stocks.map((stock, index) => (
          <Tab key={index} title={stock.weight}>
            <Card className="mb-4">
              <CardBody>
                <div className="flex items-center gap-x-5">
                  {stock.is_discount ? (
                    <>
                      <h2 className="text-xl font-semibold pb-3">৳ {stock.discount_price}</h2>
                      <strike>
                        <h2 className="text-base font-semibold pb-3">৳ {stock.regular_price}</h2>
                      </strike>
                    </>
                  ) : (
                    <div>
                      <h2 className="text-xl font-semibold pb-3">৳ {stock.regular_price}</h2>
                      
                    </div>
                  )}
                </div>
                  <div className="item flex items-center gap-x-2 text-[13px]">
                          {
                            stock.stock >0 ?
                            <p className="text-green-500">In Stock ({stock.stock})</p>
                            :
                            <p className="text-red-500">Out Of Stock</p>
                          }
                      </div>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
      <div className="">
        <div className="flex">
          <div
            onClick={decrement}
            className="bg-black w-[30px] h-[30px] rounded-full text-white flex justify-center items-center cursor-pointer select-none"
          >
            <button>-</button>
          </div>
          <div className="w-[50px] flex justify-center items-center border mx-2 rounded-lg">
            <div>{quantity}</div>
          </div>
          <div
            onClick={increment}
            className="bg-black w-[30px] h-[30px] rounded-full text-white flex justify-center items-center cursor-pointer select-none"
          >
            <button>+</button>
          </div>
        </div>
        <div className="flex pt-5 items-center gap-x-5">
        <button 
          disabled={selectedStock.stock <= 0}
          className={`text-white ${selectedStock.stock>0?'bg-[#19A8E1] hover:bg-[#1ebfff] duration-200':'bg-gray-500'} w-[150px] p-2.5 rounded-lg`}
          onClick={handleAddToBag}
        >
          {selectedStock.stock > 0 ? "Add To Cart" : "Out of Stock"}
        </button>
        <button 
          disabled={selectedStock.stock <= 0}
          className={`text-white ${selectedStock.stock>0?'bg-[#F08734] hover:bg-[#ff984a] duration-200':'bg-gray-500'} w-[150px] p-2.5 rounded-lg`}
          onClick={handleBuyNow}
        >
          {selectedStock.stock > 0 ? "Buy Now" : "Out of Stock"}
        </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
