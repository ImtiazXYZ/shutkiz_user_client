import FetchPublic from "../FetchPublic"

export default async function getAllBlogsCategories(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/blogs/categories');
    return response;
}