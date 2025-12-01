import FetchPublic from "../FetchPublic"

export default async function getHomeSlider(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/home-sliders');
    return response;
}