import { create } from 'zustand';
import getCartProductNumber from "../_lib/cart/getCartProductNumber";

export const useCartStore = create((set) => ({
  cartItems: 0,
  cartUpdateTrigger: false,

  // Fetch cart items and update state
  fetchCartItems: async () => {
    try {
      const result = await getCartProductNumber();
      if (result.success) {
        set({ cartItems: result.data.totalItems });
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  },

  // Trigger a cart update
  triggerCartUpdate: () => set((state) => ({ cartUpdateTrigger: !state.cartUpdateTrigger })),
}));
