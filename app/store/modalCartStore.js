import { create } from 'zustand';

const useModalCartStore = create((set) => ({
  cartUpdated: false, // Flag to check if the cart was updated
  triggerModalCartUpdate: () => set({ cartUpdated: true }), // Trigger cart update
  
  resetCartUpdate: () => set({ cartUpdated: false }), // Reset cart update flag
}));
export default useModalCartStore;
