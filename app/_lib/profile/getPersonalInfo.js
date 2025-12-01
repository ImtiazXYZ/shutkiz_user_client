import Cookies from 'js-cookie';

export default async function profileUpdate() {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/user/profile/personal-info";
    
    try {
        const accessToken = Cookies.get('access_token');
        const headers = {
            'Content-Type': 'application/json',
        };

        if (accessToken) {
            headers['Authorization'] = `Bearer ${accessToken}`;
        }

        const response = await fetch(APIURL, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Profile fetch failed' };
        }

        const data = await response.json();

        if (data) {
            return { success: true, message: 'Profile fetch successful', data: data };
        } else {
            return { success: false, message: 'Invalid response from server' };
        }

    } catch (error) {
        return { success: false, message: error.message || 'An error occurred' };
    }
}
