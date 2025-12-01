import FetchPrivateData from '../FetchPrivateData';

export default async function getAllDivisions() {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/address/get-all-divisions');
}
