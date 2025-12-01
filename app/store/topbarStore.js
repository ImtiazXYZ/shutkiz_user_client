import { create } from 'zustand';

const topbarStore = create((set) => ({
  isTopbarVisible: true, // Default state is that the topbar is visible
  hideTopbar: () => set({ isTopbarVisible: false }), // Function to hide the topbar
  showTopbar: () => set({ isTopbarVisible: true }), // Function to show the topbar
}));

export default topbarStore;
