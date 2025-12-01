import FetchPublic from "../FetchPublic"

export default async function getRecipe(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/recipe/${slug}`);
    return response;
}