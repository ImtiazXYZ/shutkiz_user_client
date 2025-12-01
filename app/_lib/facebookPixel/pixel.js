import ReactPixel from "react-facebook-pixel";
export function initiateCheckout(products){
    const categoryNames = products
      .map(
        (product) =>
          `${product.category?.name}`
      )
      .join(", ");

      const subcategoryNames = products
      .map(
        (product) =>
          `${product.subcategory?.name || "Unknown"}`
      )
      .join(", ");

      const contentIds = products.map((product) => product.id);

      const contentNames = products
      .map((product) => product.name)
      .join(", ");

      const contents = products.map((product) => {
        const matchingStock = product.stocks.find(stock => stock.id === product.pivot.stock_id);
        const stockToUse = matchingStock || product.stocks[0];
    
        return {
            id: product.id,
            quantity: product.pivot.quantity || 1,
            price: stockToUse.is_discount ? stockToUse.discount_price : stockToUse.regular_price
        };
      });

      const totalAmount = contents.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
    

      // Track the InitiateCheckout event
      ReactPixel.track("InitiateCheckout", {
        content_ids: contentIds,
        content_name: contentNames,
        content_category: categoryNames,
        content_subcategory : subcategoryNames,
        content_type: "product",
        contents: contents,
        value: totalAmount,
        subtotal: totalAmount,
        num_items : contentIds.length,
        currency: "BDT",
        page_title : "Checkout",
        event_url : "shutkiz.com/en/checkout",
      });
}

export function orderData(result){
    const products = result.data.products;
    const categoryNames = products
        .map(
          (product) =>
            `${product.category?.name}`
        )
        .join(", ");

        const subcategoryNames = products
        .map(
          (product) =>
            `${product.subcategory?.name || "Unknown"}`
        )
        .join(", ");

        const contentIds = products.map((product) => product.id);

        const contentNames = products
        .map((product) => product.name)
        .join(", ");

        const contents = products.map((product) => {
          const matchingStock = product.stocks.find(stock => stock.id === product.pivot.stock_id);
          const stockToUse = matchingStock || product.stocks[0];
      
          return {
              id: product.id,
              quantity: product.pivot.quantity || 1,
              price: stockToUse.is_discount ? stockToUse.discount_price : stockToUse.regular_price
          };
        });
        localStorage.setItem("pixelOrderData", JSON.stringify({
          content_ids: contentIds,
          content_name: contentNames,
          content_category: categoryNames,
          content_subcategory : subcategoryNames,
          content_type: "product",
          contents: contents,
          subtotal: result.data.subtotal,
          value: result.data.grandtotal,
          num_items : contentIds.length,
          currency: "BDT",
          page_title : "Purchase",
          event_url : "shutkiz.com/en/checkout/order-confirm",
        }));
}