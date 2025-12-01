import FetchPrivateData from '../FetchPrivateData';

export default async function addAddressToCart(data) {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/address/add-address-cart','POST',data);
}
