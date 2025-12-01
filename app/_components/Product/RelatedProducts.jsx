"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import getProductJoinPrice from "../../_lib/helpers/getProductJoinPrice";
import SingleRelatedProduct from "../Product/SingleRelatedProduct";
function RelatedProducts({ relatedProducts }) {
  return (
    <main>
      {relatedProducts && relatedProducts.length > 0 ? (
        <div className="pt-14">
          <h2 className="text-xl font-semibold pb-7">Related Products</h2>
          <div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                340: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Array.isArray(relatedProducts) && relatedProducts.length > 0 ? (
                relatedProducts.map((product, index) => {
                  const stocks = product.stocks;
                  const priceDisplay = getProductJoinPrice(stocks);
                  return (
                    <SwiperSlide key={index}>
                      <SingleRelatedProduct
                        img={product.thumbnail}
                        name={product.name}
                        category={product.subcategory?.name}
                        price={priceDisplay}
                        url={`/product/${product?.slug}`}
                      />
                    </SwiperSlide>
                  );
                })
              ) : (
                <p>No related products found</p>
              )}
            </Swiper>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default RelatedProducts;
