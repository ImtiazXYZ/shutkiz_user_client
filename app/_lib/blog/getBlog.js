import FetchPublic from "../FetchPublic"

export default async function getBlog(slug){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/blog/${slug}`);
    return response;
}