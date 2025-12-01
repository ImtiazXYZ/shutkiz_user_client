import FetchPublic from "../FetchPublic"

export default async function getProductsSubcategories(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/category/subcategories/${slug}`);
    return response;
}