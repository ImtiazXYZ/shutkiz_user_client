import FetchPublic from "../FetchPublic"

export default async function getCategoryProducts(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/category/products/${slug}`);
    return response;
}