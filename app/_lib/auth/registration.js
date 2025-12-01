import Cookies from 'js-cookie';

export default async function handleRegistration({ name,mobile,email,password,type }) {
  const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/user/register";

  try {

    const body = {
      name,
      mobile,
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
      return { success: false, message: errorData.message || 'Registration failed' };
    }

    const data = await response.json();

    if (data.access_token) {

      Cookies.set('access_token', data.access_token, { expires: 7 }); 
      return { success: true, message: 'Registration successful' };

    } else {

      return { success: false, message: 'Invalid response from server' };

    }

  } catch (error) {
    return { success: false, message: error.message || 'An error occurred' };
  }
}
