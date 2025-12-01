import FetchPublic from "../FetchPublic"

export default async function getHomepageRecipes(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/recipes/homepage');
    return response;
}