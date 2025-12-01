import Cookies from 'js-cookie';

export default async function addToCart(product_id, stock_id, quantity, isTempId) {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/public/cart/add";
    
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
        const body = {
            product_id,
            stock_id,
            quantity,
        };

        // If isTempId is true, add temp_user_id to the body
        if (isTempId) {
            const temp_user_id = Cookies.get("temp_user_id");
            if (temp_user_id) {
                body.temp_user_id = temp_user_id;
            }
        }

        const response = await fetch(APIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Add to cart failed' };
        }

        const data = await response.json();

        if (data) {
            if (data.temp_user_id) {
                Cookies.set('temp_user_id', data.temp_user_id);
            }

            return { success: true, message: 'Cart successful', data: data };
        } else {
            return { success: false, message: 'Invalid response from server' };
        }
    } catch (error) {
        return { success: false, message: error.message || 'An error occurred' };
    }
}
