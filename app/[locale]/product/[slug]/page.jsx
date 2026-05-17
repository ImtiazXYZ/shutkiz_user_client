import React from "react";
import { notFound } from "next/navigation";

import ImageSlider from "../../../_components/Product/ImageSlider";
import Description from "../../../_components/Product/Description";
import RelatedProducts from "../../../_components/Product/RelatedProducts";
import RelatedRecipes from "../../../_components/Product/RelatedRecipes";
import ProductCart from "../../../_components/Product/ProductCart";
import getProduct from "../../../_lib/product/getProduct";

// ✅ IMPORT YOUR CLIENT GTM COMPONENT
import ViewItem from "../../../_components/GTM/ViewItemEvent";

/* =========================
   METADATA
========================= */
export async function generateMetadata({ params }) {
  const mainProduct = await getProduct(params.slug);

  if (!mainProduct?.product) notFound();

  return {
    alternates: {
      canonical: `https://www.shutkiz.com/product/${params.slug}`,
    },
  };
}

/* =========================
   PAGE (SERVER COMPONENT)
========================= */
async function SingleProduct({ params }) {
  const mainProduct = await getProduct(params.slug);

  if (!mainProduct?.product) notFound();

  const product = mainProduct.product;

  const galleryImages =
    typeof product.gallery_images === "string"
      ? JSON.parse(product.gallery_images)
      : product.gallery_images;

  return (
    <main>
      {/* ✅ GTM VIEW_ITEM FIRES HERE */}
      <ViewItem product={product} />

      <div className="grid grid-cols-12 md:gap-x-10 pt-3">
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <ImageSlider
            thumbnail={product.thumbnail}
            galleryImages={galleryImages}
          />

          <Description description={product.description} />

          <RelatedProducts relatedProducts={mainProduct.related_products} />

          <RelatedRecipes relatedRecipes={product.recipes} />
        </div>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2">
          <ProductCart
            productId={product.id}
            name={product.name}
            subcategory={
              product.subcategory
                ? product.subcategory.name
                : product.category.name
            }
            stocks={product.stocks}
          />
        </div>
      </div>
    </main>
  );
}

export default SingleProduct;