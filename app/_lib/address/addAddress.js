import FetchPrivateData from '../FetchPrivateData';

export default async function addAddress(data) {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/address/add-address','POST',data);
}
