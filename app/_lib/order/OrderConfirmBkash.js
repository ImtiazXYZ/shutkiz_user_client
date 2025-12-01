import Cookies from 'js-cookie';
export default async function OrderWithBkash(formData) {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/bkash-create";

    const body = {formData};
    const temp_user_id = Cookies.get("temp_user_id");
    if (temp_user_id) {
        body.temp_user_id = temp_user_id;
    }


    const response = await fetch(APIURL, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message };
    }

    const data = await response.json();

    if (data) {
        return { success: true, message: 'Order successful', data: data };
    } else {
        return { success: false, message: 'Invalid response from server' };
    }
}