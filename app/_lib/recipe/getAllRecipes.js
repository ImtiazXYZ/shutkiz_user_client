import FetchPublic from "../FetchPublic"

export default async function getAllRecipes(page = 1){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/recipes?page=${page}`);
    return response;
}