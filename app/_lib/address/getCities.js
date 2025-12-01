import FetchPrivateData from '../FetchPrivateData';

export default async function getCities(id) {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate(`/user/address/get-division/${id}`);
}
