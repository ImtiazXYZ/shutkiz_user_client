import Cookies from 'js-cookie';

export default function FetchPrivateData() {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
    const accessToken = Cookies.get('access_token');

    const fetchPrivate = async (endpoint = '', method = 'GET', body = null) => {
        if (!accessToken) {
            return { success: false, message: 'No access token found, unauthorized request.' };
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        };

        const options = {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        };

        try {
            const response = await fetch(`${APIURL}${endpoint}`, options);

            if (!response.ok) {
                const errorData = await response.json();
                return { success: false, message: errorData.message || 'Request failed' };
            }

            const data = await response.json();
            return { success: true, data };

        } catch (error) {
            return { success: false, message: error.message || 'An error occurred' };
        }
    };

    return { fetchPrivate };
}
