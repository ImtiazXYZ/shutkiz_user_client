export const pushToDataLayer = (data) => {
  if (typeof window === "undefined") {
    console.log("GTM: Window is undefined (server-side)");
    return;
  }

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Push the data
  window.dataLayer.push(data);

  // Enhanced logging
  if (process.env.NODE_ENV === "development") {
    console.log("✅ GTM Event Pushed:", data);
    console.log("📊 Current dataLayer:", window.dataLayer);
    
    // Also add a visual indicator in the console
    console.group(`🎯 GTM Event: ${data.event || 'unknown'}`);
    console.log('Event data:', data);
    console.groupEnd();
  }
};

export const trackPageView = (url) => {
  pushToDataLayer({
    event: "page_view",
    page_path: url,
    page_title: document.title,
  });
};

const normalizeItem = (product) => ({
  item_id: product.id,
  item_name: product.name,
  item_category: product.category,
  price: Number(product.price),
  quantity: product.quantity || 1,
});

export const trackViewItem = (product) => {
  pushToDataLayer({
    event: "view_item",
    ecommerce: {
      currency: product.currency || "BDT",
      value: Number(product.price),
      items: [normalizeItem(product)],
    },
  });
};

export const trackAddToCart = (product) => {
  pushToDataLayer({
    event: "add_to_cart",
    ecommerce: {
      currency: product.currency || "BDT",
      value: Number(product.price),
      items: [normalizeItem(product)],
    },
  });
};

export const trackBeginCheckout = (cart) => {
  pushToDataLayer({
    event: "begin_checkout",
    ecommerce: {
      currency: cart.currency || "BDT",
      value: Number(cart.total),
      items: cart.items.map(normalizeItem),
    },
  });
};

export const trackPurchase = (order, user = {}) => {
  pushToDataLayer({
    event: "purchase",
    ecommerce: {
      transaction_id: order.id,
      currency: order.currency || "BDT",
      value: Number(order.total),
      items: order.items.map(normalizeItem),
    },
    user_data: {
      user_id: user.id || undefined,
      email: user.email || undefined,
      phone: user.phone || undefined,
    },
  });
};

export const trackSelectItem = (product) => {
  pushToDataLayer({
    event: "view_item",
    ecommerce: {
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
        },
      ],
    },
  });
};