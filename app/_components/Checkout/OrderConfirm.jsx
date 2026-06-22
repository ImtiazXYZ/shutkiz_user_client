"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import AllProductSlider from "../Home/AllProductSlider";
import orderConfrimImage from "../../../public/order-confirm.gif";

import getCategoryProducts from "../../_lib/home/getCategoryProducts";
import { trackPurchase } from "../../_lib/gtm";

function OrderConfirm() {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState(null);

  // ✅ prevent duplicate firing (Strict Mode safe)
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    /* =========================
       SAFE DATA READ
    ========================= */

    const orderInfoRaw = sessionStorage.getItem("orderInfo");
    const orderItemsRaw = sessionStorage.getItem("orderItems");
    const slug = sessionStorage.getItem("categorySlug");

    let orderInfo = null;
    let items = [];

    try {
      orderInfo = orderInfoRaw ? JSON.parse(orderInfoRaw) : null;
    } catch (e) {
      orderInfo = null;
    }

    // ✅ FIX: Parse items with proper error handling
    try {
      items = orderItemsRaw ? JSON.parse(orderItemsRaw) : [];
    } catch (e) {
      items = [];
    }

    const name = searchParams.get("name") || undefined;
    const email = searchParams.get("email") || undefined;
    const phone = searchParams.get("phone") || undefined;

    /* =========================
       DEBUG LOG (remove in production)
    ========================= */
    console.log("📦 orderInfo:", orderInfo);
    console.log("🛒 orderItems:", items);

    /* =========================
       GUARD CLAUSE
    ========================= */

    if (!orderInfo?.order_id) return;

    /* =========================
       PURCHASE TRACK EVENT
    ========================= */

    trackPurchase(
      {
        id: orderInfo.order_id,
        total: orderInfo.total || 0,
        currency: orderInfo.currency || "BDT",
        items: items, // ✅ FIX: pass the parsed items array (was hardcoded [])
      },
      {
        name,
        email,
        phone,
      }
    );

    console.log("✅ Purchase event fired (GTM) with", items.length, "items");

    /* =========================
       CLEANUP (PREVENT RE-FIRE)
    ========================= */

    sessionStorage.removeItem("orderInfo");
    sessionStorage.removeItem("orderItems"); // ✅ FIX: also clean up orderItems
    sessionStorage.removeItem("categorySlug");

    /* =========================
       RELATED PRODUCTS
    ========================= */

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
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-3">
            <Link href="/">
              <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg">
                Continue Shopping
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
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
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