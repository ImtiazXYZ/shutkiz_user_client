import FetchPrivateData from '../FetchPrivateData';

export default async function getAddresses() {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/address/get-address');
}
