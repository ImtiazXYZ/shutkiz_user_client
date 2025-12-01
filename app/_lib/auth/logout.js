import Cookies from 'js-cookie';

export default async function handleLogout() {
  const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/user/logout";

  try {
    const accessToken = Cookies.get('access_token');

    if (!accessToken) {
      return { success: false, message: 'No access token found' };
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };

    const response = await fetch(APIURL, {
      method: 'POST',
      headers, // Pass headers here
      body: JSON.stringify({}), // Optional empty body for POST
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.message || 'Logout failed' };
    }

    // Clear the access token after successful logout
    Cookies.remove('access_token');

    return { success: true, message: 'Logout successful' };

  } catch (error) {
    return { success: false, message: error.message || 'An error occurred' };
  }
}
