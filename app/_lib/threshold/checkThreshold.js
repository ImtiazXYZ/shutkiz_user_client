import FetchPrivateData from '../FetchPrivateData';

export default async function checkThreshold() {
    const { fetchPrivate } = FetchPrivateData();
    return await fetchPrivate('/user/threshold/check');
}
