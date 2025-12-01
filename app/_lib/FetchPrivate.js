import Cookies from "js-cookie";

export default function FetchPrivate() {
  const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
  const accessToken = Cookies.get("access_token");

  const fetchPrivate = async (endpoint = "") => {
    if (!accessToken) {
      console.error("No access token found");
      throw new Error("No access token found");
    }

    try {
      const response = await fetch(`${APIURL}${endpoint}`, {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || 'Login failed' };
      }

      return await response.json();
      
    } catch (error) {
        return { success: false, message: error.message || 'An error occurred' };
    }
  };

  return {
    fetchPrivate,
  };
}
