import Cookies from 'js-cookie';

export default async function handleLogin({ email, password,type }) {
  const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/user/login";

  try {

    const body = {
      email,
      password,
      type,
    };

    const temp_user_id = Cookies.get("temp_user_id");
    if (temp_user_id) {
      body.temp_user_id = temp_user_id;
    }
    
    const response = await fetch(APIURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    
    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.message || 'Login failed' };
    }

    const data = await response.json();

    if (data.access_token) {

      Cookies.set('access_token', data.access_token, { expires: 7 }); 
      return { success: true, message: 'Login successful' };

    } else {

      return { success: false, message: 'Invalid response from server' };

    }

  } catch (error) {
    return { success: false, message: error.message || 'An error occurred' };
  }
}
