"use client";

import { useEffect, useRef } from "react";
import { trackViewItem } from "../../_lib/gtm";

export default function ViewItemEvent({ product }) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!product) return;

    // ✅ prevent duplicate firing
    if (firedRef.current) return;
    firedRef.current = true;

    const stock = product.stocks?.[0];

    const price = stock?.is_discount
      ? stock?.discount_price
      : stock?.regular_price;

    trackViewItem({
      id: product.id,
      name: product.name,
      category: product.category?.name || "Uncategorized",
      price: Number(price),
      currency: "BDT",
    });
  }, [product]);

  return null;
}