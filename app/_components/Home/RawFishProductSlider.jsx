import React from 'react'
import AllProductSlider from "../Home/AllProductSlider"
import getCategoryProducts from "../../_lib/home/getCategoryProducts"
async function RawFishProductSlider({title,url}) {
    const products = await getCategoryProducts('raw-fish');
  return (
    <div>
      <AllProductSlider title={title} products={products} url={url}/>
    </div>
  )
}

export default RawFishProductSlider
