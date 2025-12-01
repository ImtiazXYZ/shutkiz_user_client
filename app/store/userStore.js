import { create } from "zustand";
import Cookies from "js-cookie";

// Zustand store to manage user login state
const useUserStore = create((set) => ({
  isLoggedIn: !!Cookies.get("access_token"), // Check access token on load
  checkLoginStatus: () => {
    const token = Cookies.get("access_token");
    set({ isLoggedIn: !!token });
  },
  logout: () => {
    Cookies.remove("access_token");
    Cookies.remove("temp_user_id");
    set({ isLoggedIn: false });
  },
}));

export default useUserStore;
