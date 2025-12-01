import FetchPublic from "../FetchPublic"

export default async function getTopbarMessage(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/website-topbar');
    return response;
}