import FetchPrivate from "../FetchPrivate"

export default async function isVarifiedEmail(){
    const {fetchPrivate} = FetchPrivate();
    const response = await fetchPrivate('/user/is-verified-email');
    return response;
}