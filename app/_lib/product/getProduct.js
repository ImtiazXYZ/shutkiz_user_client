import FetchPublic from "../FetchPublic"

export default async function getProduct(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/product/${slug}`);
    return response;
}