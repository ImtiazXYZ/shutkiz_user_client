import FetchPublic from "../FetchPublic"

export default async function getCategoryBanner(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/category/get-banner/${slug}`);
    return response;
}