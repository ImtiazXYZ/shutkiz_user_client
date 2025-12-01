import React from 'react'
import AllProductSlider from "../Home/AllProductSlider"
import getCategoryProducts from "../../_lib/home/getCategoryProducts"
async function ComboPackageProduct({title,url}) {
    const products = await getCategoryProducts('combo-package');
  return (
    <div>
      <AllProductSlider title={title} products={products} url={url}/>
    </div>
  )
}

export default ComboPackageProduct
