import Cookies from 'js-cookie';

export default async function getCart() {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/public/cart/get";
    
    try {
        // Check if access_token is available in cookies
        const accessToken = Cookies.get('access_token');

        // Build headers object conditionally
        const headers = {
            'Content-Type': 'application/json',
        };

        if (accessToken) {
            // If access_token is available, add it to Authorization header
            headers['Authorization'] = `Bearer ${accessToken}`;
        }

        // Build the request body, conditionally including temp_user_id
        const body = {};

        // If isTempId is true, add temp_user_id to the body
            const temp_user_id = Cookies.get("temp_user_id");
            if (temp_user_id) {
                body.temp_user_id = temp_user_id;
            }

        const response = await fetch(APIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Get from cart failed' };
        }

        const data = await response.json();

        if (data) {
            return { success: true, message: 'Get cart successful', data: data };
        } else {
            return { success: false, message: 'Invalid response from server' };
        }
    } catch (error) {
        return { success: false, message: error.message || 'An error occurred' };
    }
}
