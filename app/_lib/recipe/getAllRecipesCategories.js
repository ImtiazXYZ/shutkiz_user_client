import FetchPublic from "../FetchPublic"

export default async function getAllRecipeCategories(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/recipes/categories');
    return response;
}