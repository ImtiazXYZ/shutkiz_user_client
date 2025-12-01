import FetchPublic from "../FetchPublic"

export default async function getSearchResult(keyword,page=1){
    console.log(keyword);
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic(`/search/products?keyword=${keyword}&page=${page}`);
    return response;
}