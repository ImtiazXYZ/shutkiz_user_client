import Cookies from "js-cookie";

export default async function checkFreeDelivery() {
  const APIURL =
    process.env.NEXT_PUBLIC_BASE_URL + "/api/public/check-free-delivery";

  try {
    const accessToken = Cookies.get("access_token");
    const headers = {
      "Content-Type": "application/json",
    };

    // if (!accessToken) {
    //     return;
    // }

    //headers['Authorization'] = `Bearer ${accessToken}`;
    let body = {};
    const temp_user_id = Cookies.get("temp_user_id");
    if (temp_user_id) {
      body.temp_user_id = temp_user_id;
    }

    const response = await fetch(APIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Free delivery check failed.",
      };
    }

    const data = await response.json();

    if (data) {
      return {
        success: true,
        message: "Free delivery check successful.",
        data: data,
      };
    } else {
      return { success: false, message: "Invalid response from server" };
    }
  } catch (error) {
    return { success: false, message: error.message || "An error occurred" };
  }
}
