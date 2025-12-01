import FetchPrivate from "../FetchPrivate"

export default async function varifyEmail(){
    const {fetchPrivate} = FetchPrivate();
    const response = await fetchPrivate('/user/send-varification-email');
    return response;
}