"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ReactPixel from "react-facebook-pixel";
import { useRouter, useSearchParams } from "next/navigation";

import AllProductSlider from "../Home/AllProductSlider";
import Navbar from "../Navbar";

import orderConfrimImage from "../../../public/order-confirm.gif";

import getCategoryProducts from "../../_lib/home/getCategoryProducts";

// ✅ GTM PURCHASE TRACKER
import { trackPurchase } from "../../_lib/gtm";

function OrderConfirm() {
  const router = useRouter();
  const searchParams = useSearchParams(); // ✅ Read URL params

  const [products, setProducts] = useState(null);

  // ✅ prevent duplicate firing in React Strict Mode
  const firedRef = useRef(false);

  useEffect(() => {
    // ✅ prevent duplicate purchase event
    if (firedRef.current) return;
    firedRef.current = true;

    const orderData = JSON.parse(sessionStorage.getItem("pixelOrderData"));
    const slug = JSON.parse(sessionStorage.getItem("categorySlug"));

    // ✅ Read user data directly from URL params
    const name = searchParams.get("name") || undefined;   // ✅ Add this

    const email = searchParams.get("email") || undefined;
    const phone = searchParams.get("phone") || undefined;

    /* =========================
       PURCHASE TRACKING
    ========================= */
    if (orderData) {
      // ✅ FACEBOOK PIXEL PURCHASE
      ReactPixel.track("Purchase", orderData);

      // ✅ GTM / GA4 PURCHASE EVENT with user_data
      trackPurchase(
        {
          id: orderData.transaction_id || Date.now(),
          total: orderData.value || 0,
          currency: orderData.currency || "BDT",
          items:
            orderData.contents?.map((item) => ({
              id: item.id,
              name: item.name,
              category: item.category || "Uncategorized",
              price: Number(item.price || item.item_price || 0),
              quantity: item.quantity || 1,
            })) || [],
        },
        {
            name: name,    // ✅ Add this

          email: email, // ✅ from URL
          phone: phone, // ✅ from URL
        }
      );

      console.log("✅ Purchase event fired");

      // ✅ Cleanup localStorage
      sessionStorage.removeItem("pixelOrderData");
      sessionStorage.removeItem("categorySlug");
    }

    // ✅ suggested products
    if (slug) {
      getSuggestProduct(slug);
    }
  }, [searchParams]);

  /* =========================
     RELATED PRODUCTS
  ========================= */
  async function getSuggestProduct(slug) {
    try {
      const response = await getCategoryProducts(slug);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching suggested products:", error);
    }
  }

  return (
    <>
      {/* <Navbar /> */}

      <div className="bg-white lg:py-6 flex justify-center">
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-full max-w-xl text-center">

          {/* SUCCESS IMAGE */}
          <Image
            src={orderConfrimImage}
            alt="Order Confirmation"
            className="w-[400px] mx-auto"
          />

          {/* SUCCESS TEXT */}
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-4">
            Thank you! Your order has been placed.
          </h1>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-y-3 lg:gap-y-0 lg:gap-x-4">
            <Link href="/">
              <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg">
                Continue Shopping...
              </button>
            </Link>

            <Link href="/profile">
              <button className="px-4 py-2 border border-black text-black font-semibold rounded-lg">
                View My Orders
              </button>
            </Link>
          </div>

          {/* WHATSAPP SUPPORT */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-sm text-gray-600">
              If you have any further query, contact us
            </p>

            <a
              href="https://wa.me/8801788070149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="py-10">
        {products && (
          <AllProductSlider
            title="You may also like"
            products={products}
            url="/"
          />
        )}
      </div>
    </>
  );
}

export default OrderConfirm;
