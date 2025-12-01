import React from 'react'
import AllProductSlider from "../Home/AllProductSlider"
import getCategoryProducts from "../../_lib/home/getCategoryProducts"
async function BestSellingProduct({title,url}) {
    const products = await getCategoryProducts('premium-dry-fish');
  return (
    <div>
      <AllProductSlider title={title} products={products} url={url}/>
    </div>
  )
}

export default BestSellingProduct
