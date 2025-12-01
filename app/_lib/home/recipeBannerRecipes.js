import FetchPublic from "../FetchPublic"

export default async function recipeBannerRecipes(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/recipe-banner/recipes/homepage');
    return response;
}