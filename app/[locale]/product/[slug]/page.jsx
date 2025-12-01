import React from 'react'
import ImageSlider from "../../../_components/Product/ImageSlider";
import Description from "../../../_components/Product/Description";
import ReviewRating from "../../../_components/Product/ReviewRating";
import RelatedProducts from "../../../_components/Product/RelatedProducts";
import RelatedRecipes from "../../../_components/Product/RelatedRecipes";
import ProductCart from "../../../_components/Product/ProductCart";
import getProduct from "../../../_lib/product/getProduct"

async function SingleProduct({params}) {
    const {slug} = params;
    let mainProduct = await getProduct(slug);
    const product = mainProduct.product;
    const relatedProducts = mainProduct.related_products;
    const relatedRecipes = mainProduct.product.recipes;
    const thumbnail = product.thumbnail;
    const galleryImages = typeof product.gallery_images === 'string'
        ? JSON.parse(product.gallery_images)
        : product.gallery_images;
    
  return (
    <main>
      <div className='grid grid-cols-12 md:gap-x-10 pt-3'>
        <div id='section-1' className='col-span-12 md:col-span-7 order-2 md:order-1'>
        <div className='hidden md:block'><ImageSlider thumbnail={thumbnail} galleryImages={galleryImages}/></div>
        <Description description={product.description}/>
        {/* <ReviewRating/> */}
        <RelatedProducts relatedProducts={relatedProducts}/>
        <RelatedRecipes relatedRecipes={relatedRecipes}/>
        </div>
        <div className='col-span-12 md:col-span-5 order-1 md:order-2'>
        <div className='block md:hidden'><ImageSlider thumbnail={thumbnail} galleryImages={galleryImages}/></div>
            <ProductCart productId={product.id} name={product.name} subcategory={product.subcategory?product.subcategory.name:product.category.name} stocks={product.stocks}/>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
