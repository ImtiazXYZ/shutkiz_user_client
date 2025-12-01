import FetchPrivateData from '../FetchPrivateData';

export default async function getCartAddress() {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/address/get-address-cart');
}
